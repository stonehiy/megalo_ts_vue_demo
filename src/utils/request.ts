// 增加拦截器
initInterceptors();

function showLoading(msg: string = "加载中...") {
  Megalo.showLoading({
    title: msg,
  });
}

function hideLoading() {
  Megalo.hideLoading();
}

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
      return response.data;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
}

function request<T>(
  params: RequestParams,
  isLoading: boolean = true
): Promise<Result<T>> {
  if (isLoading) {
    showLoading();
  }
  return new Promise<Result<T>>((reslove, reject) => {
    Megalo.request({
      url: params.url,
      method: params.method,
      data: params.data,
      header: params.header,
      cancelToken: params.cancelToken,
    })
      .then((res) => {
        console.log("Megalo.request res = ", res.data);
        if (isLoading) {
          hideLoading();
        }
        reslove(res.data);
      })
      .catch((err) => {
        if (isLoading) {
          hideLoading();
        }
        reject(err);
      });
  });
}

class RequestParams {
  url: string;
  method?: string = "get";
  data?: any = {};
  header?: any = {};
  cancelToken?: any;
}

class Result<T> {
  data: T;
  errorCode: number = 0;
  errorMsg: string = "";
}

//const source = Megalo.CancelToken.source();
export default request;
// export initInterceptors
