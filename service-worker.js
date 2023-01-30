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
    "revision": "405351ed3785ca3370bebf4a1f152c14"
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
    "url": "assets/img/aspnetcore_model.72fcd715.svg",
    "revision": "72fcd715568996257c2c2a54dc425847"
  },
  {
    "url": "assets/img/big-picture.a6da4164.svg",
    "revision": "a6da4164ca083939ed337ded54810ee9"
  },
  {
    "url": "assets/img/components.ddd9116b.svg",
    "revision": "ddd9116b3d338dca2923f66e754f646f"
  },
  {
    "url": "assets/img/deployment.43b62ab0.svg",
    "revision": "43b62ab0dff66b93f271aaed4df5ca7c"
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
    "url": "assets/js/11.fb6d5fc9.js",
    "revision": "4170dc3cea017c7b71ebd6ac501487df"
  },
  {
    "url": "assets/js/12.4e418d1c.js",
    "revision": "557e99551f340c49c55ce84a3577dec1"
  },
  {
    "url": "assets/js/13.843002e3.js",
    "revision": "71f21ee47217e60bb0b3ac9fda015208"
  },
  {
    "url": "assets/js/14.e4efac58.js",
    "revision": "d0138975a5949981ab66d5fb407d02ec"
  },
  {
    "url": "assets/js/15.9239d7c2.js",
    "revision": "bd3b25e134e1bc44a8ec56490e9e08d7"
  },
  {
    "url": "assets/js/16.a7ee9dec.js",
    "revision": "f8e3caabba7e3034188047f068511735"
  },
  {
    "url": "assets/js/17.b710303d.js",
    "revision": "514969b9fed2e9efae2485cac18f67d7"
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
    "url": "assets/js/2.17d0dcab.js",
    "revision": "6e5547bc90884d868a1a019dabdcad26"
  },
  {
    "url": "assets/js/20.d6c1f930.js",
    "revision": "fd81fda076e785a1a62bdd249c980599"
  },
  {
    "url": "assets/js/21.14c1c3b4.js",
    "revision": "fc398a392658617bf4caae06124ea4c3"
  },
  {
    "url": "assets/js/22.6a4108d5.js",
    "revision": "7bdd17917d7bd22ecb836e3c89b78797"
  },
  {
    "url": "assets/js/23.3d3dee27.js",
    "revision": "2e438efaeecd1407e32031a41bd42228"
  },
  {
    "url": "assets/js/25.60bd0584.js",
    "revision": "15994e6f2f6b62b4b2dec548a53e1945"
  },
  {
    "url": "assets/js/3.62cbeed0.js",
    "revision": "3d7c7c00bd1cb38c5bd447058abf2c63"
  },
  {
    "url": "assets/js/4.b53d6a3b.js",
    "revision": "05a9a79396118d60c256340d435cccb6"
  },
  {
    "url": "assets/js/5.17fd6866.js",
    "revision": "f8f5eb9d8f7d4a96828d9317723ff809"
  },
  {
    "url": "assets/js/6.5ca6cbb3.js",
    "revision": "6408cbc97597949a5823897b7e2cd876"
  },
  {
    "url": "assets/js/7.d0a4e5bb.js",
    "revision": "d2142bb1069b6517409961a235aeca4d"
  },
  {
    "url": "assets/js/8.cc9b2c51.js",
    "revision": "a32be139ebe5e6eddf109c36c79985ea"
  },
  {
    "url": "assets/js/9.edbe9c9b.js",
    "revision": "3ace5c1590ecb828fda5d65b00e4b471"
  },
  {
    "url": "assets/js/app.e11dbdaa.js",
    "revision": "2b3e8953f2145d22a45759d1f70d4fd7"
  },
  {
    "url": "design/index.html",
    "revision": "373dd8d2363d7f13953aaa402521ec32"
  },
  {
    "url": "index.html",
    "revision": "81da139b21180082568be123c57e6abe"
  },
  {
    "url": "intro/index.html",
    "revision": "f9e885a7b480cf72f3d8e2c4b371f07f"
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
    "revision": "67eca02c19b9a0113212f02deb0bd834"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "9504fab7446a8e9686f2a2bb9f316eb7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "68f10813a33954872910da5edb9536c9"
  },
  {
    "url": "team/index.html",
    "revision": "fd00fab7d655a157f4b41470560c9c71"
  },
  {
    "url": "tech-stack/index.html",
    "revision": "e823bd258fd29d6ba443417f3977002b"
  },
  {
    "url": "use-cases/index.html",
    "revision": "f8868594ec6dba71f2472d601686ecc0"
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
