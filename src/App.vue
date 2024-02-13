<template>
  <div class="py-20 flex flex-col gap-8 items-center justify-center">
    <h1>Adtrace Web SDK Demo (Nuxt.js)</h1>
    <button @click="handleTriggerEvent">Event tracking</button>
    <button @click="handleGetAttribution">GetAttribution (console)</button>
    <button @click="handleGetUUID">GetWebUUID (console)</button>
  </div>
</template>

<script setup>
    import {_initAdtraceChannel, _adtraceEvent, _adtraceGetAttribution, _adtraceGetUUID } from './composables/useAdtrace'

    _initAdtraceChannel();

    const handleTriggerEvent = () => {
      _adtraceEvent({
          eventToken: 'qmrt2w',
          revenue: 10,
          currency: 'IRR',
          eventValueParams: [
              {key: 'key', value: 'value'},
              {key: 'foo', value: 'bar'}
          ],
      })
    }

    const handleGetAttribution = () => {
      const attribution = _adtraceGetAttribution();
      console.log(attribution);
    }

    const handleGetUUID = () => {
      const uuid = _adtraceGetUUID();
      console.log(uuid);
    }
</script>
