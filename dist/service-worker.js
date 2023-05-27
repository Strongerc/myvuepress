/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b8e6889d85b2b6219e2d7c663d973d07"
  },
  {
    "url": "assets/css/0.styles.35c4c317.css",
    "revision": "225de1463c5416b31f2be0ac2432a266"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1460000022283834.927ce342.png",
    "revision": "927ce342b12c26cfa2553de13a3dc9ba"
  },
  {
    "url": "assets/img/1460000022283835.5b695f55.png",
    "revision": "5b695f5583ac8f941caf3d3761dc2e05"
  },
  {
    "url": "assets/img/70.76d3eb83.jpeg",
    "revision": "76d3eb83c770bc4c507c27205889983f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/image-20230527172336150.276b78ee.png",
    "revision": "276b78eed290d1e92f444f568fa63cc5"
  },
  {
    "url": "assets/js/1.f62c7e8c.js",
    "revision": "1e865fe86e8bc07171ac07500baebe18"
  },
  {
    "url": "assets/js/10.26480258.js",
    "revision": "a40e648d22c2c6003f9cde4b8e11c435"
  },
  {
    "url": "assets/js/11.1eb176aa.js",
    "revision": "7f4e64092bc3334f47711b078d1fd315"
  },
  {
    "url": "assets/js/12.af210892.js",
    "revision": "b93637151c9cbc336c497e647f40a87c"
  },
  {
    "url": "assets/js/13.a01c4da4.js",
    "revision": "8949b901fd82a62315b7f35c6c0998a4"
  },
  {
    "url": "assets/js/14.c4060be0.js",
    "revision": "284e8770dc983edadc35d90bc0218c46"
  },
  {
    "url": "assets/js/15.2cee8aba.js",
    "revision": "112a74aecacf51870c2935f45146f9e9"
  },
  {
    "url": "assets/js/16.96104fb1.js",
    "revision": "e16f12767b4f8b8cbfc841275512b5c1"
  },
  {
    "url": "assets/js/17.c16ea827.js",
    "revision": "8ea8ac4162cbd0dd218b898c27a5ed1b"
  },
  {
    "url": "assets/js/4.f627ef72.js",
    "revision": "ee85049bebae7ac9441c3d18f644177d"
  },
  {
    "url": "assets/js/5.a3884709.js",
    "revision": "a77f1bc48e14e92c033ba2248a063710"
  },
  {
    "url": "assets/js/6.858645fa.js",
    "revision": "0c3bca9b1eff53d6e8f89f386805a058"
  },
  {
    "url": "assets/js/7.7d2c20ea.js",
    "revision": "2dc870df21ad26e433f40cb89160b8cf"
  },
  {
    "url": "assets/js/8.bf884f10.js",
    "revision": "b22a4e78f0cbba4cb4c6caae32b4750d"
  },
  {
    "url": "assets/js/9.bc1d5239.js",
    "revision": "c4c910edfa317107af90016b6bcd3bf3"
  },
  {
    "url": "assets/js/app.1f801f89.js",
    "revision": "bb435d9d2f2a4226cb1d1f1cf19558d0"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "ff1f96e2c799ee89df7427fcc8bb012b"
  },
  {
    "url": "assets/js/vendors~flowchart.947fafa8.js",
    "revision": "37c9e3ab35eb2fdded09eccd9afa80bf"
  },
  {
    "url": "categories/index.html",
    "revision": "ff39dbeada38a05877231521cd42a6ec"
  },
  {
    "url": "categories/typora/index.html",
    "revision": "cd8d4661697a48d7cf2b4fa5accb0cee"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "1c27cc42506673122c2e748397241841"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/avatar.png",
    "revision": "5e0e90952c33cc9dec62d22a0274d06a"
  },
  {
    "url": "img/bike.png",
    "revision": "d4f9b190966332a4e7c43dcd4c43718a"
  },
  {
    "url": "img/shan.png",
    "revision": "d5fae16a37cb3a0c2f169ba7794cb0b7"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "640a82b445c64af4e9cf9fb8513d1266"
  },
  {
    "url": "js/custom.js",
    "revision": "0295f75f8486ca02e7268a9129f63978"
  },
  {
    "url": "tag/index.html",
    "revision": "8b518260c87043d114932fc5cc48e20a"
  },
  {
    "url": "tag/typora/index.html",
    "revision": "0dc307da749a991460e888f7a595a540"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c730274e435e5c3bf2e41373ce32a8ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "d739cd7e8148fd18cd2400e6ff5bbc71"
  },
  {
    "url": "我的文章/typora/安装pandoc.html",
    "revision": "d8ea5b33283abfe7f297a2e8b2223a0a"
  },
  {
    "url": "我的文章/vuepress/侧边栏.html",
    "revision": "ce9252ae202be4755f0ff70bfe4e2440"
  },
  {
    "url": "我的文章/vuepress/图片显示.html",
    "revision": "02df3ec1bd5591202d51a4230e5c120e"
  },
  {
    "url": "我的文章/vuepress/官方插件使用.html",
    "revision": "9cd6189fca3f54c3131f717ffaeaeac0"
  },
  {
    "url": "我的文章/vuepress/插件看板娘.html",
    "revision": "c3b7053aef8e2f52c58d43918c703180"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
