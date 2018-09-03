const callbacks = []

window.addEventListener('scroll', e => {
	callbacks.map(callback => callback(e))
})

const onScroll = (callback) => {
	callbacks.push(callback)
}

const pub = { onScroll }
export default pub