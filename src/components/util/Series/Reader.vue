<template>
	<div class="pages">
		<img
			v-for="imgSrc in images"
			class="page"
			:key="imgSrc"
			:src="imgSrc.toString()"
			@load="imageLoaded"
		/>
	</div>
</template>

<style lang="scss" scoped>
.page {
	max-width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ReaderState from "../../../refs/reader";

export default defineComponent({
	props: {
		images: {
			type: Array as PropType<Array<string>>,
			required: true,
		},
	},
	setup() {
		return {
			ReaderState,
		};
	},
	methods: {
		imageLoaded() {
			ReaderState.value.imagesLoaded++;
		},
	},
});
</script>
