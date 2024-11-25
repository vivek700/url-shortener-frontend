<script lang="ts">
    import type {ActionData} from "./$types"
    let { form}:{form: ActionData} = $props()
    console.log(form)

</script>

<main>
    <section class="xl:w-3/6 w-11/12 mx-auto py-28">
        <section class="pb-8">
            <form method="POST" class="w-full flex flex-col gap-y-5">
                <label>
                    <input class="py-3 px-2 text-lg rounded bg-[#343434] w-full outline-none" placeholder="Enter the link..." name="url" type="url" />
                </label>
                <button class="block text-lg self-center py-2 w-3/6 rounded text-black bg-[#CEB08F]">Shorten</button>
            </form>
        </section>
        {#if form?.success}
            <section class="bg-[#343434] rounded w-full p-4 text-lg text-[#ddbe9d] flex flex-col gap-y-2">
                <p>Short url: <a href={form.data?.short_url} class="hover:underline">
                    {form.data?.short_url}
                </a></p>
               
                <p>Original url: <a href={form.data?.original_url} class="hover:underline">
                    {form.data?.original_url}
                </a></p>
                <p>Short code: {form.data?.short_code}</p>
            
            </section>
        {/if}
       
    </section>
</main>

<style>
    :global(body) {
        background-color: #1C1E22;
        color: white;
    }
</style>