<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	let { form }: { form: ActionData } = $props();

	function copyText(text: string) {
		navigator.clipboard.writeText(text);
	}
</script>

<svelte:head>
	<title>URL shortener</title>
	<meta
		name="description"
		content="Transform long web addresses into concise, shareable links with a single click."
	/>
</svelte:head>

<main>
	<section class="mx-auto w-11/12 py-20 xl:w-3/6">
		<h1 class="pb-10 text-center text-2xl text-[#ebc8a4]">URL Shortener</h1>
		<section class="pb-8">
			<form method="POST" use:enhance class="flex w-full flex-col gap-y-5">
				<label>
					<input
						required
						class="w-full rounded bg-[#343434] px-2 py-3 text-lg outline-none"
						placeholder="Enter the link..."
						name="url"
						type="url"
					/>
				</label>
				<button
					type="submit"
					class="block w-3/6 self-center rounded bg-[#CEB08F] py-2 text-lg text-black"
					>Shorten</button
				>
			</form>
		</section>
		{#if form?.success}
			<section class="flex w-full flex-col gap-y-2 rounded bg-[#343434] p-4 text-lg text-[#ddbe9d]">
				<p>
					Short url: <a
						target="_blank"
						href={form.data?.short_url}
						class="text-blue-300 hover:underline"
					>
						{form.data?.short_url}
					</a>

					<button class="group relative px-2" onmousedown={() => copyText(form?.data.short_url)}>
						<abbr class="group-active:opacity-0" title="copy to clipboard transition-opacity">
							<Copy class="h-5 w-5" />
						</abbr>
						<Check class="absolute top-0 opacity-0 group-active:opacity-100" size={20} />
					</button>
				</p>

				<p>
					Original url: <a
						target="_blank"
						href={form.data?.original_url}
						class="text-blue-300 hover:underline"
					>
						{form.data?.original_url}
					</a><button
						class="group relative px-2"
						onmousedown={() => copyText(form?.data.original_url)}
					>
						<abbr class="group-active:opacity-0" title="copy to clipboard">
							<Copy class="h-5 w-5" />
						</abbr>
						<Check class="absolute top-0 opacity-0 group-active:opacity-100" size={20} />
					</button>
				</p>
				<p>
					Short code: {form.data?.short_code}<button
						class="group relative px-2"
						onmousedown={() => copyText(form?.data.short_code)}
					>
						<abbr class="group-active:opacity-0" title="copy to clipboard">
							<Copy class="h-5 w-5" />
						</abbr>
						<Check class="absolute top-0 opacity-0 group-active:opacity-100" size={20} />
					</button>
				</p>
			</section>
		{/if}
	</section>
</main>

<style>
	:global(body) {
		background-color: #1c1e22;
		color: white;
	}
</style>
