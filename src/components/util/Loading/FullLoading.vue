<template>
	<div class="full-loading">
		<loading />
	</div>
</template>

<style lang="scss" scoped>
.full-loading {
	width: 100%;
	min-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 1 / -1;

	&.full-height {
		min-height: calc(100vh - env(safe-area-inset-top));
	}
}
</style>

<script lang="ts">
// Import Vue
import { defineComponent } from "vue";

// Import components
import Loading from "./Loading.vue";

export default defineComponent({
	components: {
		Loading,
	},
});
</script>
