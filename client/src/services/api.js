import axios from 'axios'
import qs from 'qs'

const getAuthToken = () => localStorage.getItem('token')

const getApiRootUrl = () => 'http://localhost:5000'

export const callApi = {
    setDefaults() {
        axios.defaults.headers.common = {
            Accept: 'application/json',
        }

        if (getAuthToken()) {
            axios.defaults.headers.common.Authorization = `Bearer ${getAuthToken()}`
        }

        //   axios.defaults.withCredentials = true
    },
    endpoint(request = '', hasUrlFromApi = false) {
        return hasUrlFromApi ? request : getApiRootUrl() + request
    },
    client() {
        this.setDefaults()

        return axios
    },
    get(request, data = null, hasUrlFromApi) {
        const url = this.endpoint(request, hasUrlFromApi)

        this.setDefaults()

        if (data == null) {
            return axios.get(url)
        }
        // `${url}?${qs.stringify(data)}`
        return axios.get(`${url}?${qs.stringify(data)}`)
    },
    post(request, data = null) {
        const url = this.endpoint(request)

        this.setDefaults()

        if (data == null) {
            return axios.post(url)
        }

        return axios.post(url, data)
    },
    delete(request, data = null) {
        const url = this.endpoint(request)

        this.setDefaults()

        if (data == null) {
            return axios.delete(url)
        }

        return axios.delete(url, { data })
    },
    put(request, data = null) {
        const url = this.endpoint(request)

        this.setDefaults()

        if (data == null) {
            return axios.put(url)
        }

        return axios.put(url, data)
    },
    postFile(request = '', data = null, config = null) {
        const url = this.endpoint(request)

        this.setDefaults()

        return axios.post(url, data, config)
    },
}
