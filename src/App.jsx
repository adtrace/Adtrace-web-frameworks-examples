import {useEffect} from 'react';
import {
    _adtraceEvent,
    _adtraceGetAttribution,
    _adtraceGetUUID,
    _initAdtraceChannel,
     setupMockIndexedDB
} from './utils/adtrace'


export default function Home() {

    // IMPORTANT: run this only once before Adtrace init!
    function mockDB(unique_id_from_older_versions) {
        setupMockIndexedDB(unique_id_from_older_versions)
            .then(() => {
                console.log('IndexedDB setup successful');
            })
            .catch((error) => {
                console.error('Error setting up IndexedDB:', error);
            });
    }


    useEffect(() => {
        // handle running this only once before initialization of Adtrace!
        // mockDB("8d9395ba-fa55-4748-b273-e3e3c9313e1d")
        _initAdtraceChannel();
    }, [])


    return (
        <main>
            <h3>Adtrace Web SDK Demo (React.js) with power of vite</h3>

            <button

                onClick={() => _adtraceEvent({
                    eventToken: 'qpw44u',
                    revenue: 10,
                    currency: 'IRR',
                    callbackParams: [
                        {key: 'key', value: 'value'},
                        {key: 'foo', value: 'bar'}
                    ]
                })}
            >
                Event tracking
            </button>

            <button

                onClick={() => {
                    console.log(_adtraceGetAttribution())
                }}
            >
                GetAttribution (console)
            </button>

            <button

                onClick={() => {
                    console.log(_adtraceGetUUID())
                }}
            >
                GetWebUUID (console)
            </button>
        </main>
    )
}