const sleep = (milisecond) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok')
    }, milisecond)
})


const getData = (selector, every=500, timeout=3000, many = false, count = 1) => new Promise((resolve, reject) => {
    let max = every
    const check_el = setInterval(async function () {
        if (!many) {
            let el = document.querySelector(selector)
            if (el) {
                clearInterval(check_el)
                resolve(el)
            }
        } else {
            let el = document.querySelectorAll(selector)
            if (el.length == count) {
                clearInterval(check_el)
                resolve(el)
            }
        }

    }, every)
})


const sendDomToServer = async (dom) => {
    let formdata = new FormData()
    formdata.append("page", dom.innerHTML)
    try {
        let response = await axios.post("http://127.0.0.1:5000/page", formdata)
        return response
    } catch (error) {
        return false
    }

}

const get_from_storage = async (key) => {
    data = await chrome.storage.local.get(key)
    return data[key]
}

const set_on_storage = (key, value) => {
    chrome.runtime.sendMessage({ mode: 'set', data: { key, value } }, response => {
        console.log(response);
        return true
    });
}

const un_set_storage = (key) => {
    chrome.runtime.sendMessage({ mode: 'unset', data: { key } }, response => {
        console.log(response);
        return true
    });
}

const auth = async () => {
    response = await chrome.runtime.sendMessage({ mode: 'auth', data: null });
    return response.auth
}


const type = async (text, action) => {
    let formData = new FormData()
    formData.append("text", text)
    let response = await axios.post(`http://127.0.0.1:5000/type/${action}/`, formData)
    return true
}


const sendJobs = async (dom) => {
    let formData = new FormData()
    formData.append("page", dom.innerHTML)
    let response = await axios.post(`http://127.0.0.1:5000/jobs`, formData)
    return true
}