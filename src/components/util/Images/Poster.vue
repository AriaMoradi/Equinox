<template>
	<div class="is-poster">
		<div class="poster" :style="backgroundStyle"></div>
	</div>
</template>

<style lang="scss" scoped>
.poster {
	border-radius: 4px;
	padding-bottom: 149%;
	border: 1px solid var(--border);
}
</style>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
	props: {
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: false,
			default: "",
		},
	},
	setup: (props) => {
		const backgroundStyle = computed(() => {
			return `background-image: url(${props.src}); background-size: cover; background-position: center; background-color: var(--border);`;
		});

		return {
			backgroundStyle,
		};
	},
});
</script>
