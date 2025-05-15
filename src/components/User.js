export default function (item) {
    const tr = document.createElement("tr")
    const fullName = document.createElement("td")
    const actions = document.createElement("td")

    const btnEdit = document.createElement("button")
    const btnDelete = document.createElement("button")

    fullName.textContent = item.fullName
    btnEdit.textContent = "edit"
    btnDelete.textContent = "delete"

    tr.append(fullName, actions)
    actions.append(btnEdit, btnDelete)

    return tr
}