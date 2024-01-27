let Adtrace = null

//Adtrace
export async function initAdtrace() {
	if (!Adtrace) {
		return new Promise((resolve, reject) => {
			import('web-adtrace').then((res) => {
				Adtrace = res.default
				resolve(Adtrace)
			})
		})
	} else {
		return new Promise((resolve, reject) => {
			resolve(Adtrace)
		})
	}
}

//init Adtrace
export async function _initAdtraceChannel() {
	await initAdtrace()
	Adtrace.initSdk({
		appToken: 'igtga9fy3nhe',
		environment: 'production', //sandbox production
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
