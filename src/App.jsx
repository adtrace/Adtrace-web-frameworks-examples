import { useEffect } from 'react';
import { _adtraceEvent, _adtraceGetAttribution, _adtraceGetUUID, _initAdtraceChannel } from './utils/adtrace'


export default function Home() {
    useEffect(() => {
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