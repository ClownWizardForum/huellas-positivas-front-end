import axios from "axios"
import { decodeJwt } from "jose"

const host = "http://127.0.0.1:8000/api"

const localStorage =
    typeof window !== "undefined"
        ? window.localStorage
        : { getItem: () => {}, setItem: () => {}, removeItem: () => {} }

const api = axios.create({
    baseURL: host,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 30000,
})

api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("access_token")
    const refreshToken = localStorage.getItem("refresh_token")

    if (!token || !refreshToken) {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")

        return config
    }

    try {
        const decoded = decodeJwt(token)

        if (decoded.exp * 1000 < Date.now()) {
            const response = await axios.post(
                `${host}/auth/token/refresh`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                    },
                }
            )
            localStorage.setItem("access_token", response.data.access_token)

            config.headers.Authorization = `Bearer ${response.data.access_token}`
        } else {
            config.headers.Authorization = `Bearer ${token}`
        }
    } catch {}

    return config
})

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error.response) {
            if (error.response.status === 401) {
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")

                if (window.location.pathname !== "/accounts/login") {
                    window.location.href = "/accounts/login"
                }
            } else if (error.response.status === 421) {
                localStorage.removeItem("access_token")
                localStorage.removeItem("refresh_token")

                window.location.href = `/accounts/redirect?url=${encodeURIComponent(error.response.data.details.version)}`
            }

            return Promise.reject(error.response)
        } else if (error.request) {
            return Promise.reject("No response from server") // eslint-disable-line prefer-promise-reject-errors
        } else {
            return Promise.reject(error)
        }
    }
)

export default api
