const BASEURL = "http://localhost:8080"

export async function getData (resourse) {
    try {
        const res = await fetch(BASEURL + resourse)
        const users = await resAgain.json()

        if (!res.ok) {
            return null
        }

        return users
        
    } catch (error) {
        alert("Network error")
    }
}