// 增加拦截器

class MegaloNet {
  constructor() {
    this.initInterceptors();
  }

  initInterceptors(): void {
    Megalo.request.interceptors.before.use(
      (options) => {
        options.token = "aaa";
        return options;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    Megalo.request.interceptors.after.use(
      (response) => {
        if (response.status !== 200) {
            Megalo.showToast({
                title: '出错啦！请稍后再试试哦～',
                icon: 'none',
                duration: 2000
            })
        }
        return response;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }
}
export default MegaloNet;
