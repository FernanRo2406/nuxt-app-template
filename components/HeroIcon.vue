<script setup>
import * as OutlineIcon from "@heroicons/vue/24/outline/";
import * as SolidIcon from "@heroicons/vue/24/solid";
import * as MiniIcon from "@heroicons/vue/20/solid";
const props = defineProps({
  className: { type: String, default: "" },
  type: { type: String, default: "outline" },
  icon: { type: String, default: "BeakerIcon" },
});
</script>

<template>
  <div>
    <component
      :is="
        type === 'solid'
          ? SolidIcon[icon]
          : type === 'mini'
          ? MiniIcon[icon]
          : OutlineIcon[icon]
      "
      :class="className"
    />
  </div>
</template>
