<script lang="ts">
	import { Check, Copy } from "lucide-svelte";
    import type {ActionData} from "./$types"
    let { form}:{form: ActionData} = $props()

    function copyText(text: string) {
        navigator.clipboard.writeText(text)
    }



</script>

<svelte:head>
    <title>URL shortener</title>
    <meta name="description" content="Transform long web addresses into concise, shareable links with a single click.">
</svelte:head>



<main>
    <section class="xl:w-3/6 w-11/12 mx-auto py-20">
        <h1 class="text-center text-[#ebc8a4] text-2xl pb-10">URL Shortener</h1>
        <section class="pb-8">
            <form method="POST" class="w-full flex flex-col gap-y-5">
                <label>
                    <input required class="py-3 px-2 text-lg rounded bg-[#343434] w-full outline-none" placeholder="Enter the link..." name="url" type="url" />
                </label>
                <button class="block text-lg self-center py-2 w-3/6 rounded text-black bg-[#CEB08F]">Shorten</button>
            </form>
        </section>
        {#if form?.success}
            <section class="bg-[#343434] rounded w-full p-4 text-lg text-[#ddbe9d] flex flex-col gap-y-2">
                <p>Short url: <a target="_blank" href={form.data?.short_url} class="text-blue-300 hover:underline">
                    {form.data?.short_url}
                </a>
                    
                    <button class="px-2 group relative "  onmousedown={() => copyText(form?.data.short_url)
          
                }>
                    <abbr class= "group-active:opacity-0" title="copy to clipboard transition-opacity">
                        <Copy class="w-5 h-5" />
                    </abbr>
                    <Check class="absolute top-0 group-active:opacity-100 opacity-0" size={20} />
                </button>
            </p>
               
                <p>Original url: <a target="_blank" href={form.data?.original_url} class="text-blue-300 hover:underline">
                    {form.data?.original_url}
                </a><button class="px-2 group relative" onmousedown={() => copyText(form?.data.original_url)}>
                    <abbr class= "group-active:opacity-0"  title="copy to clipboard">
                        <Copy class="w-5 h-5" />
                    </abbr>
                    <Check class="group-active:opacity-100 opacity-0 absolute top-0" size={20} />

                </button></p>
                <p>Short code: {form.data?.short_code}<button class="px-2 group relative" onmousedown={() => copyText(form?.data.short_code)}>
                    <abbr class= "group-active:opacity-0"  title="copy to clipboard">
                        <Copy class="w-5 h-5" />
                    </abbr>
                    <Check class="group-active:opacity-100 opacity-0 absolute top-0" size={20} />

                </button></p>
            
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