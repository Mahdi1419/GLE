

// script for login into upwork

window.onload = async () => {

    // Account info
    const username = "bm434813@yahoo.com"
    const password = "m05041377"

    // Finding username input and send username and go next step
    const username_input = await getData("#login_username")
    const username_send_btn = await getData("#login_password_continue")
    let type_username = await type(username, 'username')
    await sleep(1000)
    username_send_btn.click()


    // Finding password input and login 
    const password_input = await getData("#login_password")
    const login_btn = await getData("#login_control_continue")
    let type_password = await type(password, 'password')
    await sleep(1000)
    login_btn.click()

}
