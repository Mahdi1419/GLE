

window.onload = async () => {
    
    let type_password = await type(null,'login')


    getData('#fwh-sidebar-profile').then(async profile => {
        const result = await sendDomToServer(profile)
        console.log(result);
    })
    

    getData("div[data-test='job-tile-list'] section", true, 30).then(async jobs => {
        const jobs_parent = await getData("div[data-test='job-tile-list']")
        result = await sendJobs(jobs_parent)
        console.log(result);
    })

}