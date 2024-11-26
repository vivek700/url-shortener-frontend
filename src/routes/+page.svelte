<script lang="ts">
	import { Check, Copy, LoaderCircle } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	let { form }: { form: ActionData } = $props();

	function copyText(text: string) {
		navigator.clipboard.writeText(text);
	}

	let isLoading = $state(false);
</script>

<svelte:head>
	<title>URL shortener</title>
	<meta
		name="description"
		content="Transform long web addresses into concise, shareable links with a single click."
	/>
</svelte:head>

<main>
	<section class="mx-auto w-11/12 py-14 xl:w-3/6">
		<h1 class="pb-16 text-center text-2xl text-[#ebc8a4]">URL Shortener</h1>
		<section class="pb-8">
			<form
				method="POST"
				use:enhance={() => {
					isLoading = true;
					return async ({ update }) => {
						await update();
						isLoading = false;
					};
				}}
				class="flex w-full flex-col gap-y-7"
			>
				<label class="text-lg">
					Paste a long URL here:
					<input
						required
						class="mt-2 w-full rounded bg-[#2b2b2b] px-2 py-3 text-lg outline-none"
						placeholder="https://www.example.com/long-article-about-technology-and-innovation/detailed-research-report-2024"
						name="url"
						type="url"
					/>
				</label>
				<button
					type="submit"
					class=" flex w-3/6 items-center justify-center self-center rounded bg-[#CEB08F] py-2 text-lg text-black"
				>
					{#if !isLoading}
						<span> Shorten </span>
					{:else}
						<LoaderCircle class="h-7 w-5 animate-spin" />
					{/if}
				</button>
			</form>
		</section>
		{#if form?.success}
			<section class="flex w-full flex-col gap-y-2 rounded bg-[#252529] p-4 text-lg text-[#ddbe9d]">
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
