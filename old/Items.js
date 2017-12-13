export class Items {
	static total (items) {
		let totalItems = 0
    items.map((item) => {
        if (item.flagComercio) {
            totalItems++
        }
        if (item.flagTalan) {
            totalItems++
        }
    })
    return totalItems
	}
}