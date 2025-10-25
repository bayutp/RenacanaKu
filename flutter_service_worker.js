'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "96ec25151e143461178ae6bdaa27b896",
".git/config": "985af1b391f3e9643a53ab926bc8671e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f2e95c3ac9ebab028b647cb7c9875a20",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1f3f3fecd379c5f2484517df5b56ee0b",
".git/logs/refs/heads/main": "1f3f3fecd379c5f2484517df5b56ee0b",
".git/logs/refs/remotes/origin/main": "4b0bd9b8f1b797b529e4aedf39ffc7f1",
".git/objects/01/06207ee1933d0d3ef38328cc520d2ad6ed010c": "2b0368ae57fa4770621dc3fd9f2ec01e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/526838f4b27d7b3d18522768a900784fcd1df9": "5138cbed0a448ac9b1fa4ed836dbfc56",
".git/objects/07/0201f7916c7cc96366ef1d044266e06c3f5fce": "74595feafd9dbfcd160c94c7cc452372",
".git/objects/10/1c326edd8975a3f4dc21bb95bbc10363b81a12": "bd3edb658d8c8357ec684d2ad972747c",
".git/objects/10/48b07a1419df243b60971b59cbf813bde6d768": "cae2cbcc6f919f7b1db8b88911255d9f",
".git/objects/15/317ff7777919be91baed3f0e1d1f3682ada6f6": "cdfbb8347e28a03e391bf1007327b186",
".git/objects/1a/2a6f252d75104b822141ee84d2d7f89edd0944": "53fcbe69764e65809b73f6af93e510fc",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/a459d1bb7a0554849ab19f7c10c8108cf14694": "c122358c2436fd7e842d4b87199e3015",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/0e79abbfd75a742489c61028faa2f8df694570": "4c597b0194d5201ee6a2f4ddd47d5802",
".git/objects/30/f8cba7dfc835aff20066b1b966cbfb7112f4aa": "bb26b774e765babfe79e7d965f1e46e6",
".git/objects/33/c19b7873b0f9c0037e5ffd9784f30c1ab01572": "8469f1631ece65130b5492369c3f0b5a",
".git/objects/35/05b357ea8baf30989cc85a47db6150610d08a0": "7a34fc6b7bc5d09d07c6e21cf8255339",
".git/objects/3a/bdf2fa2da92f5ae7eb1df7275f8f549d1c72ca": "d503628c228541a8a561e1d596570d29",
".git/objects/46/b3583c5fd4c82cdd3d5ee7a4403cb4896bc1a6": "8bd74ad23834222b8e4f5cef2f21cca1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/cf3277f0c4958fbcf9b97f457a42941b5101ad": "a461bf3ab7b0171a9d2ce46c812490f2",
".git/objects/4e/b38dc3e6b850a16eeeec4e58232bbb8b4423e6": "36ffae476e4505f1b57a46afccb7e340",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/fab89cb40c630549abc96c13077fc316406671": "95a8c9fcd7e95791b595a66edb225272",
".git/objects/56/ce569dcde94fb941afb236f5ca75bab9a0b69c": "5aa46154cff40daadb93d50834a53e24",
".git/objects/5b/8b7570d477cf298ef1cd9aacdec660476c5b7a": "abb2bb8ea80c949e5a17f17d6352d51b",
".git/objects/5c/88739bdf1b4aec798fb58c873483a08a538b2a": "56696b488f8365e771240915ac8ceb9e",
".git/objects/6b/088a71193dc27290d27f910bc5d73214f3bbc1": "f06a2b93ff042e59f73cfc0d222c097f",
".git/objects/70/b0fbd1a702df0fdf999d67de13b544a0f554c9": "86c641598cb26d11894d22e7b7b6b6cd",
".git/objects/76/c18c4597920584b23e8ad889e838175a17a528": "9cb3288f8fd66e7888e283020d799e00",
".git/objects/78/0d89449f164ad58ac6454de3a000838c4a3bde": "e6d7eb125de1b04d49714d6825662cb6",
".git/objects/78/d0921f10ff90ac5edc42e43a8ed8f030c15d35": "d2b869af5358e5ac483b48457eb08d77",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/6d1a98d31d25858ec050b59b778eb4f1cfba35": "ffbcf4975bd39b014bdb83d951606d6e",
".git/objects/82/45cfb3515fb626755a9a044f6fd6d79af4e924": "f94c038d0a3548b8da029adcfba7afee",
".git/objects/84/b3b007583725808a84b047f190f793a5ef48be": "8ba7d82a44f933a3b586db2592673397",
".git/objects/86/34ef46d555d0e45d962aab4297cdfd31fbf6d9": "f4addb95d4f8238c9c97321e1afcd3ba",
".git/objects/8b/d3010811a47393f3df8f2ce0f9e31b53a964a8": "cd2f6ba0e5cbc2ce675909860cdf7cdb",
".git/objects/94/2c403022d68e2625fa6c83daf9ef4552506c71": "5ad8e9a6f7b03cbccd551c342d5f2276",
".git/objects/97/b784c024f3b14ea62a466834ea8d8a52f2df5e": "a6b8ef2005ef0734de93ed7fdbbf3bc9",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/1abc0479311ee69e27629b3fef72ada3677bed": "2685ed4f5e7a6041556d35ef8bb8e4d0",
".git/objects/9a/b58481589e7a03b56a9990dc38ab7a07800d7f": "810b8f98dff4e76d2a842f76d62648a9",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a4/b6e0fe43d184d6ce31a30e513b626afc9c12ac": "3d453dda33dcf1b52198105e9e2457bf",
".git/objects/a9/791d584b5576d968d826198d0e62a6e5540c36": "19a0257b7d36a91640f963535262f998",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/0ecb9e099395982c1ed58c4a3f661c810a2ebd": "26233d7bba992d6d5ee12a13ba6c9d6d",
".git/objects/b7/15cb6a3f7c5bacfe22573e57fc450599d457ec": "d32db8ae41eaace9489e2ae83e807ff5",
".git/objects/b7/75c0843764a822ba59604272e6b1f60121723f": "c6f4073e002f78e3c5116548facd5297",
".git/objects/b8/7e0f579b7f6b5c07fafafff0a51647b2ed6afb": "b6ef23e11a867aebd204012f09daf285",
".git/objects/bb/21b92da1e250f13a26b4e135eca04207c9a5af": "4fc73f00c630301add2ac4a8c5ea024d",
".git/objects/c0/4a94453f1f8aa7500d5ebfabed065b034c0f8c": "b327547b675548b61f8e5bd7dd07405e",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/545bc6806ce0cc9c2438a63405ea01b12eeb1f": "ba6d46c2a6cc64d379b6cdc791846a8e",
".git/objects/c8/13941e700d9818682a21c81d3b60df37f716b3": "e5b12c67b2fccee597c02bec7b81f3b1",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ce/b8576abcbf1ef3270f6531f8f1daaf3f974f3b": "2d8e1645e4fd78080f89904666bae9bc",
".git/objects/d4/2b3f54dc292ee9e5204788ada23bdf24cdf3f4": "fb8b90033d1df3e5e0464f8c847021c8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/996541c3c85ecb9fb0dd0176d4c14074c9c24f": "f093edf8b302989241e85c90a0f4f6de",
".git/objects/d9/a96b001646986fb56d856df3772fe6960f281d": "0f587b46acedb9e2b291c693b9df7b3b",
".git/objects/df/dbfff2ea903a92e0b8140b77aa65d47e021986": "85fe113559f8ac6851996ed96408b51e",
".git/objects/df/dfe4e885ba8eabe22946a8a9465cc23074b7ce": "cdd1e12ad914e3265cd671d61216a338",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/eb/0c0d949f63bdb2e9e9af19a99c839fe71073dd": "d7793f979c327d78a4e1f8b7e25b12b9",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/f39a1242fc2a45b98bb04bea851a24ad8f7bbf": "36e954f659ecb827a06ee1518f0fe0b7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/c35a47dfcc969c03970abbd9abe65f98ed0edb": "f496be6f2a5cb730a81c1fd7c533b684",
".git/objects/fa/70f42a715666ca4d49d66d1875f15c758ac684": "8e304a6c52f7530e5e1bcd7645027d6f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "241a9e954c0fb2482861d5229ce09852",
".git/refs/remotes/origin/main": "241a9e954c0fb2482861d5229ce09852",
"assets/AssetManifest.bin": "f960d4727dc29a7af86adaeed1a6db23",
"assets/AssetManifest.bin.json": "3cfc519bfa46da34f9677d4e90f76796",
"assets/AssetManifest.json": "91186aa5c5b632a96f6b0a79d3526499",
"assets/assets/fonts/Inter-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/assets/fonts/Inter-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/assets/fonts/Inter-ExtraLight.ttf": "97f88391f7a4de7986e436bdeeb86d8c",
"assets/assets/fonts/Inter-Italic.ttf": "0b52c6d11ac407c2ef591475f2b4ed11",
"assets/assets/fonts/Inter-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Inter-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/assets/fonts/Inter-Thin.ttf": "1e9e30c74648950a240427636b6c1992",
"assets/assets/icon/app_icons.png": "2bb14b924140af4800adf262af462724",
"assets/assets/icon/app_logo.png": "2c85a4004e48895cb7a3cc1a9ff47652",
"assets/assets/img/avatar.png": "f07d66e00150e23a0d8b2e10b7b0f86b",
"assets/assets/img/ic_card.png": "ed4a516a4430cd87195b9b7df96733af",
"assets/assets/img/ic_check.png": "2d630ec9915ea7a3e67bc10748a16182",
"assets/assets/img/ic_empty.png": "f33fef2a1e53b390f9b37a0bc419d62f",
"assets/assets/img/ic_empty_white.png": "26a862be60795bcb5490159374f1e09d",
"assets/assets/img/ic_error.png": "af90d3f60dc30b38237b7479c68891e0",
"assets/assets/img/ic_in.png": "8614567dcd95b7a1f2eba0fba914f5bf",
"assets/assets/img/ic_omset.png": "117dbfbd121ea2e54bcf3cb90701dd46",
"assets/assets/img/ic_onboarding.png": "0bbbdd7399ae0ab14c8974daeab154f2",
"assets/assets/img/ic_out.png": "eb8ab9e3433a4ce4faef0656ffda06f0",
"assets/assets/img/ic_task.png": "1167c16790f1da245dd7d585acaac6f7",
"assets/FontManifest.json": "71c9f87d9e830dd4053ee3ca2874bae7",
"assets/fonts/MaterialIcons-Regular.otf": "0f5cf2b5df34cb394bc56c7c0f0a2561",
"assets/NOTICES": "fb92ba8983343116ecf7b508f6e52650",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "86f596ad2f563f7d1c084897a5220074",
"firebase-messaging-sw.js": "3b0f990caa9fcda34186130ed3d49929",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ec2cb745a5c80bd0991a476163a870f4",
"icons/Icon-192.png": "e4e1799950b9788829e42bdccd103461",
"icons/Icon-512.png": "59ad7a7199dd01930e06bbe937641775",
"icons/Icon-maskable-192.png": "e4e1799950b9788829e42bdccd103461",
"icons/Icon-maskable-512.png": "59ad7a7199dd01930e06bbe937641775",
"index.html": "f86f4fc538ad539ae26a7f1e3626e87e",
"/": "f86f4fc538ad539ae26a7f1e3626e87e",
"main.dart.js": "1058d6f6ec9d41d44d5b3ec44ea4972c",
"manifest.json": "badfcc2cf46e5387eeb913ab3affb0f2",
"version.json": "b8677373d88f38739fd1678779f01426"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
