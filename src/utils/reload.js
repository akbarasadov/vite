export default function reload (data, components, place) {
    place.innerHTML = ""

    for (const item of data) {
        let elem = components(item)

        place.append(elem)
    }
}