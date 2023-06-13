let notification_id = false
let response : { [p: string]: any } = {}
const getUpdatedNotification = (notification:string) => {
    console.log({notification:'updated'})
    setTimeout(() => {
        chrome.notifications.getAll(permission => {
            const notifications = Object.keys(permission)
            let n = notifications.find((notify) => notify === notification )
            if (n) {
                updateNotification()
            }
        })

    },30000)
};
const cancelNotification = () => {
    chrome.notifications.getAll(permission => {
        const notifications = Object.keys(permission)
        notifications.map(notification => {
            chrome.notifications.clear(notification)
        })
    })
}
const updateNotification = () => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'assets/stay_hydrated.png',
        title: 'Time up please',
        message: "Time up please",
        buttons: [{ title: 'Am seated' }],
        requireInteraction:true,
        silent:false,
        priority: 0
    },getUpdatedNotification)
}

const recallNotification = () => {
    chrome.notifications.create(
        {
            type: 'basic',
            iconUrl: 'assets/stay_hydrated.png',
            title: 'Please take a walk for 5min',
            message: "Please take a walk for 5min",
            buttons: [{ title: 'I have started stretching' }],
            requireInteraction:true,
            silent:false,
            priority: 0
        },getCurrentNotification)
}
const getCurrentNotification = (notification:string) => {
    console.log({notification:'add'})
    setTimeout(() => {
        chrome.notifications.getAll(permission => {
            const notifications = Object.keys(permission)
            let n = notifications.find((notify) => notify === notification )
            if (n) {
                recallNotification()
            }
        })
    },60000)
};
//Start Notification
chrome.runtime.onStartup.addListener(async () => {
    chrome.alarms.getAll(alarms => {
        console.log(alarms)
        if(!alarms.length) {
            chrome.alarms.create({delayInMinutes: 60})
         }
    })
})

//On Alarm
chrome.alarms.onAlarm.addListener(async () => {
    response = await chrome.storage.sync.get(['type'])
    if(response.type === 'add') {
        chrome.notifications.create('add',{
            type: 'basic',
            iconUrl: 'assets/stay_hydrated.png',
            title: 'Kindly stretch your body or take a walk',
            message: "Kindly stretch your body or take a walk",
            buttons: [{ title: 'I have started stretching' }],
            requireInteraction:true,
            silent:false,
            priority: 0
        },getCurrentNotification)
    }
    if (response.type === 'update') {
            chrome.notifications.create('update',{
                type: 'basic',
                iconUrl: 'assets/stay_hydrated.png',
                title: 'Time up please',
                message: "Time up please",
                buttons: [{ title: 'Am seated' }],
                requireInteraction:true,
                silent:false,
                priority: 0
            },getUpdatedNotification)
    }

});

chrome.notifications.onButtonClicked.addListener(async () => {
    cancelNotification()
    if (response.type === 'add') {
        await chrome.storage.sync.set({type:'update'})
        await chrome.alarms.create({ delayInMinutes: 10 })

    }

    if (response.type === 'update') {
        await chrome.storage.sync.set({type:'add'})
        await chrome.alarms.create({ delayInMinutes: 60 })
    }
});
chrome.idle.onStateChanged.addListener(async (listener) => {
    console.log(listener)
    if(listener === 'locked') {
     await chrome.alarms.clearAll()
        chrome.notifications.getAll(permission => {
            const notifications = Object.keys(permission)
            notifications.map(notification => {
                chrome.notifications.clear(notification)
            })
        })
    }
    if(listener === 'active') {
        chrome.alarms.getAll(alarms => {
            console.log(alarms)
            if(!alarms.length) {
                chrome.alarms.create({ delayInMinutes: 60 })
            }
        })

    }


    // await chrome.storage.sync.set({type:'add'})
    // response = await chrome.storage.sync.get(['type'])
    // console.log(await response.type)
    // if(response.type == 'add') {
    //     console.log('Hey')
    //    await  chrome.storage.sync.set({type:'update'})
    //     response = await chrome.storage.sync.get(['type'])
    // }
    // console.log(response)
})

chrome.storage.onChanged.addListener(async (changes) => {
    console.log(changes)
})

