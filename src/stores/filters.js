import { writable } from 'svelte/store'

const createLocalFilters = () => {
	const { subscribe, update } = writable([])
	return {
		subscribe, update,
		add: (key, value) => update(store => {
			const filter = {key: key, value: value} 
			store = store.filter(item => { return item.key !== key && item.value.length > 0 })
			store.push(filter)
			return store
		}),
		remove: () => update(store => store = [])
	}
}
export const localFilters = createLocalFilters()

const createGlobalFilters = () => {
	const { subscribe, update } = writable(null)
	return {
		subscribe, 
		set: (value) => update(store => {
			store = (value.length > 0) ? value : null
			return store
		}),
		remove: () => update(store => store = null)
	}
}
export const globalFilters = createGlobalFilters()