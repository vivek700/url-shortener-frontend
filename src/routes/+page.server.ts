import type { Actions } from "./$types"

export const actions = {
    default: async (event) => {
        const data = event.request.formData()
        const url = (await data).get('url')
        console.log(url)


    }
} satisfies Actions