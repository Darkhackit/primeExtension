let notification_id = false
const getUpdatedNotification = (notification:string) => {
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
    // if(notification_id) {
    //     notification_id = false
    //     chrome.alarms.create({ delayInMinutes: 5 })
    // }else {
    //     notification_id = true
    // }
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
chrome.runtime.onStartup.addListener(() => {
    chrome.alarms.getAll(alarms => {
        console.log(alarms)
        if(!alarms.length) {
            notification_id = false
            chrome.alarms.create({ delayInMinutes: 1 })
        }
    })
})

//On Alarm
chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create("start_notification",{
        type: 'basic',
        iconUrl: 'assets/stay_hydrated.png',
        title: 'Kindly stretch your body or take a walk',
        message: "Kindly stretch your body or take a walk",
        buttons: [{ title: 'I have started stretching' }],
        requireInteraction:true,
        silent:false,
        priority: 0
    },getCurrentNotification)

});

chrome.notifications.onButtonClicked.addListener(async () => {
    cancelNotification()
    chrome.alarms.create({ delayInMinutes: 1 })
    // setTimeout(() => {
    //     if (notification_id) {
    //         updateNotification()
    //     }
    //
    // },60000)
});
chrome.idle.onStateChanged.addListener(listener => {
    console.log(listener)
    if(listener === 'locked') {
        chrome.alarms.clearAll();
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
            if(!alarms.length && !notification_id) {
                chrome.alarms.create({ delayInMinutes: 1 })
            }
        })

    }
})

