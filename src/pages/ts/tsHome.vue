<config>
{
  //"navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "TsHome",
  "backgroundColor": "#eeeeee",
  //"backgroundTextStyle": "light"
}
</config>

<template>
  <div class="ts_home">
    <div
      class="item flex"
      v-for="item in items"
      v-bind:key="item"
      @click="onClickItem(item)"
    >
      <div class="item_bg flex">
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { type } from "os";
import { Vue, Component } from "vue-property-decorator";
import request from "../../utils/request";

@Component({
  components: {},
})
export default class TSHome extends Vue {
  //boolean
  isDone: boolean = false;

  //number
  num: number = 101;

  //string
  name: string = "bili";

  //array
  list: Array<number> = [1, 2, 3];

  items = [
    { id: 0, name: "TS-接口-interface " },
    { id: 1, name: "list1" },
    { id: 2, name: "list2" },
    { id: 3, name: "list3" },
    { id: 4, name: "list4" },
    { id: 5, name: "list5" },
    { id: 5, name: "list5" },
    { id: 5, name: "list5" },
  ];

  /**
   *生命周期方法
   */
  onLoad(options) {
    this.normalMethod();
    //this.goBaidu();
  }

  /**
   * 普通方法
   */
  normalMethod() {
    console.log("Page [TsHome] isDone = ", this.isDone);
    console.log("Page [TsHome] num = ", this.num);
    console.log("Page [TsHome] name = ", this.name);
    console.log("Page [TsHome] list = ", this.list);
  }

  onClickItem(item: { id: number; name: string }) {
    console.log("Megalo -> ", Megalo);

    if (item.id == 0) {
      Megalo.navigateTo({ url: "/pages/ts/learn/tsInterface" });
    } else if (item.id == 1) {
      this.goWxarticleChapters();
    } else {
      this.goBaidu();
    }
  }

  async goBaidu() {
    // await request({
    //   url: "https://m.baidu.com/",
    // });
  }

  goWxarticleChapters() {
    request<Array<DA>>({
      url: "https://wanandroid.com/wxarticle/chapters/json",
    }).then((res) => {
        console.log("goWxarticleChapters res = " + res);
      console.log("goWxarticleChapters res1 = " + res[0].id);
      console.log("goWxarticleChapters res1 = " + res[0].name);
      console.log(
        "goWxarticleChapters res = " + typeof JSON.stringify(res)
      );
    });
  }
}

class DA {
  id: string;
  name: string;
}
</script>

<style lang="scss" scope>
.ts_home {
  background-color: #eeeeee;
  .flex {
    display: flex;
  }

  .item {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    padding-top: 25px;
    padding-bottom: 25px;
    //margin-bottom: 10px;
    background-color: #ffffff;
    border: 15px, solid #32db95;
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    .item_bg {
      //background-color: #ffffff;
      //border: 15px, solid #32db95;
      //border-radius: 10px;
      //   flex-direction: row;
      //   flex-wrap: nowrap;
      //   justify-content: center;
    }
    &:hover {
      background-color: #f7f7f7;
    }
  }
}
</style>
