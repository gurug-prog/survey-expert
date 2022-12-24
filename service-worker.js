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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b97be47d3c4f15d5af8a175aa6acfe4e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.edc1f23b.css",
    "revision": "7f9cbb3cbf73f815b82b6f5bd4032cab"
  },
  {
    "url": "assets/img/big-picture.1944f905.svg",
    "revision": "1944f905f141b3856927a5cbbe18a445"
  },
  {
    "url": "assets/img/components.04a24262.svg",
    "revision": "04a2426221a6c46518f8ac3c97ed5e7d"
  },
  {
    "url": "assets/img/deployment.1d2e9a3f.svg",
    "revision": "1d2e9a3fc61e7c780433eced2c916a87"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.966b98a4.js",
    "revision": "a23b1ec81ebdd26fa2993d29bb50f48f"
  },
  {
    "url": "assets/js/11.b488ceb7.js",
    "revision": "48ddab246f56c5497b45b194f85e9959"
  },
  {
    "url": "assets/js/12.4e418d1c.js",
    "revision": "557e99551f340c49c55ce84a3577dec1"
  },
  {
    "url": "assets/js/13.d0bb693e.js",
    "revision": "6b672a2175e5b73335928443252f6132"
  },
  {
    "url": "assets/js/14.de700392.js",
    "revision": "43d1ef5f7d67316b46e2b3a69fc9e23d"
  },
  {
    "url": "assets/js/15.c726e0a6.js",
    "revision": "7e212e286d760ec0758d471f6a91ba5f"
  },
  {
    "url": "assets/js/16.89d8ab1a.js",
    "revision": "02fc9a777fb82aa900e648aedac7093d"
  },
  {
    "url": "assets/js/17.01dd4576.js",
    "revision": "10b65d38b6c39220b5e4148fdfa4ecb2"
  },
  {
    "url": "assets/js/18.2bf687b9.js",
    "revision": "24540fbad260c22932017b14415affa3"
  },
  {
    "url": "assets/js/19.c0e2fb46.js",
    "revision": "f98701a606deb8b58329b452f67a15fd"
  },
  {
    "url": "assets/js/2.17d8a53d.js",
    "revision": "f4ed3e92d2a34308273b84165d6ad7d4"
  },
  {
    "url": "assets/js/20.da36b609.js",
    "revision": "03c9711755f62be38e03df3bfb317b97"
  },
  {
    "url": "assets/js/21.2c282039.js",
    "revision": "e0304c97a9164d29845bfacfb0b062c7"
  },
  {
    "url": "assets/js/22.50ec4197.js",
    "revision": "022ca225332f8dce81b4de5214e964e4"
  },
  {
    "url": "assets/js/23.913ae7c1.js",
    "revision": "d9d834610ce20ea0fedd22f9e5aef819"
  },
  {
    "url": "assets/js/24.8c67cf65.js",
    "revision": "b6be7153667f6c8e4c555479b010a865"
  },
  {
    "url": "assets/js/26.189ec659.js",
    "revision": "0816a5fe129ef6bae1d5c700b5eea9e9"
  },
  {
    "url": "assets/js/3.286b86a9.js",
    "revision": "5c066d12b2e27d92bd711fdb6707bdb8"
  },
  {
    "url": "assets/js/4.e6143520.js",
    "revision": "803a138624bb9bc4db1b68b8a77a9826"
  },
  {
    "url": "assets/js/5.5b54c6b2.js",
    "revision": "e65ad7fc4d1c9b37a8e6f8cbdaec836a"
  },
  {
    "url": "assets/js/6.f4121148.js",
    "revision": "af256713192a81b1a0b7dbaf1fc7cd26"
  },
  {
    "url": "assets/js/7.e1729276.js",
    "revision": "ae4c881f99f49b6e0945eef16d911bd5"
  },
  {
    "url": "assets/js/8.9bb87d2c.js",
    "revision": "37602a6fa1c3ff40299f460257685d2d"
  },
  {
    "url": "assets/js/9.824aed43.js",
    "revision": "c2c6268a20c6cd59961248a53f650d42"
  },
  {
    "url": "assets/js/app.40c33d13.js",
    "revision": "08e7490006abe73c197ddaa055178fcc"
  },
  {
    "url": "conclusions/index.html",
    "revision": "2bd8f945a198876b4d71ac417c23278a"
  },
  {
    "url": "design/index.html",
    "revision": "7ef5b6799115387787cb7179bc3d0868"
  },
  {
    "url": "index.html",
    "revision": "f8f0f13732df8783aa077e6c5e1efdfb"
  },
  {
    "url": "intro/index.html",
    "revision": "be6fef52fc70e5b7886b66921869c6a8"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a8a561c7b26102303e3a8df32433326b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d86c1101a3ca798ad371999e899aa519"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "df05ac1b46a8e4c8a5b6a8afe681652c"
  },
  {
    "url": "team/index.html",
    "revision": "daf16c2cdbfbcb154ea6f6691769ac05"
  },
  {
    "url": "tech-stack/index.html",
    "revision": "ea6eece0f73bf1cd89ea6ab2d1ec282a"
  },
  {
    "url": "use-cases/index.html",
    "revision": "f38075420d1ea38d39490f01a850a8f3"
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
