import axios from 'axios'
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

  // getメソッドにより、引数()urlを渡し、http通信を呼ぶ
  // thenの中コールバック関数で受け取るaxiosの使用
  // axios.get('/user?ID=12345') 公式デフォルト(変更前)
  // 変数urlを代入
  axios.get(url)
  .then(function (response) {
    // typescriptにとって得体の知れないデータはany型、不明型
    // let data: any = response.data;

    // any型への対策、新たなオブジェクトの独自の型を作成　Article
    interface Article {
      id: number;
      title: string;
      description: string;
    }

    // 正しいArticle型による制約
    let data: Article[];
    data = response.data;
    console.log(data);
  });


  // ※公式axiosから抜粋
  // 返ってくるresponse詳細

  // {
  //   `data` is the response that was provided by the server
  //   data: {},

  //   `status` is the HTTP status code from the server response
  //   status: 200,

  //   `statusText` is the HTTP status message from the server response
  //   statusText: 'OK',

  //   `headers` the HTTP headers that the server responded with
  //   All header names are lower cased and can be accessed using the bracket notation.
  //   Example: `response.headers['content-type']`
  //   headers: {},

  //   `config` is the config that was provided to `axios` for the request
  //   config: {},

  //   `request` is the request that generated this response
  //   It is the last ClientRequest instance in node.js (in redirects)
  //   and an XMLHttpRequest instance in the browser
  //   request: {}
  // }
