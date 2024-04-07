let Adtrace = null

//Adtrace
export async function initAdtrace() {
    if (!Adtrace) {
        return new Promise((resolve) => {
            import('web-adtrace').then((res) => {
                Adtrace = res.default
                resolve(Adtrace)
            })
        })
    } else {
        return new Promise((resolve) => {
            resolve(Adtrace)
        })
    }
}

//init Adtrace
export async function _initAdtraceChannel() {
    await initAdtrace()
    if (!localStorage.getItem('token')) {

    }
    Adtrace.initSdk({
        appToken: 'cf0mz487gkdt',
        environment: 'sandbox', //sandbox production,
        logLevel: 'verbose'
    })


    setTimeout(() => {
        const webUUID = Adtrace.getWebUUID()
        console.log('adtrace webUUID:' + webUUID)
    }, 1000)
}


//Adtrace Event
export async function _adtraceEvent(data) {
    try {
        await initAdtrace()
        Adtrace.trackEvent(data)
    } catch (error) {
        console.error('adtraceEvent error', error)
    }
}

//Adtrace getAttribution
export async function _adtraceGetAttribution() {
    try {
        await initAdtrace()
        return Adtrace.getAttribution()
    } catch (error) {
        console.error('adtraceGetAttribution error', error)
    }
}

//Adtrace getUUID
export async function _adtraceGetUUID() {
    try {
        await initAdtrace()
        return Adtrace.getWebUUID()
    } catch (error) {
        console.error('adtraceGetUUID error', error)
    }
}

// run this only once before init
export function setupMockIndexedDB(unique_id) {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open("adtrace-sdk", 1);

        dbPromise.onupgradeneeded = function (event) {
            const db = event.target.result;

            // Create empty database
            if (!db.objectStoreNames.contains('data')) {
                db.createObjectStore('q', {keyPath: 't'});
                const store = db.createObjectStore('gp', {keyPath: 'kt'});
                db.createObjectStore('as', {keyPath: 'u'});
                db.createObjectStore('ed', {keyPath: 'ii', autoIncrement: true});
                store.createIndex('tIndex', 't')
            }
        };

        dbPromise.onsuccess = function (event) {

            const db = event.target.result;
            const transaction = db.transaction(['as'], 'readwrite');
            const store = transaction.objectStore('as');

            const request = store.put({"u": unique_id});


            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (error) => {
                reject(error);
            };
        };

        dbPromise.onerror = function (event) {
            reject(event.target.error);
        };
    });
}
