<template>
  <div class="container">
    <div>
      {{ config.color }} 
    </div>
    <div>
      {{ config.width }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TSInterface extends Vue {
  config: SquareConfig;

  onLoad(options) {
    this.config = this.createSquare({ color: "black", width: 1000 });
  }

  createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
}
interface SquareConfig {
  color?: string;
  width?: number;
}
</script>

<style lang="scss" scope>
.container {
  text-align: center;
}
</style>
