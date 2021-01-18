// 增加拦截器
/*
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
*/

initInterceptors();

function initInterceptors(): void {
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
      console.log("Megalo.request.interceptors response = ", response);
      if (response.statusCode !== 200) {
  
        Megalo.showToast({
          title: "出错啦！请稍后再试试哦～",
          icon: "none",
          duration: 2000,
        });
      }
      return response;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
}

function request(params: RequestParams) {
  Megalo.request({
    url: params.url,
    method: params.method,
    data: params.data,
    header: params.header,
    cancelToken: params.cancelToken,
  })
    .then((res) => {
      console.log("request res = ", res);
    })
    .catch((err) => {
      console.log("request err = ", err);
    });
}

class RequestParams {
  url: string;
  method?: string = "get";
  data?: any = {};
  header?: any = {};
  cancelToken?: any;
}

//const source = Megalo.CancelToken.source();
export default request;
