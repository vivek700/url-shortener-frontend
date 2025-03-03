import type { Actions } from "./$types"
import { BASEURL } from '$env/static/private'

export const actions = {
    default: async (event) => {
        const data = event.request.formData()
        const url = (await data).get('url')
        return { success: true, data: await getShortUrl(url) }


    }
} satisfies Actions


const getShortUrl = async (url: FormDataEntryValue | null) => {

    const res = await fetch(`${BASEURL}/api/shorten`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    const data = await res.json()
    return data



}
