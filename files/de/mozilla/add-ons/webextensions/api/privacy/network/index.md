---
title: privacy.network
slug: Mozilla/Add-ons/WebExtensions/API/privacy/network
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Die Eigenschaft `privacy.network` enthält netzwerkbezogene Datenschutzeinstellungen. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Standardwerte für diese Eigenschaften können je nach Browser variieren.

## Eigenschaften

- `networkPredictionEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `true`, versucht der Browser, das Web-Browsing zu beschleunigen, indem er DNS-Einträge voreingelöst, Seiten prerendert (z.B. mit `<link rel='prefetch' …>`) und TCP- sowie TLS-Verbindungen zu Servern vorzeitig öffnet.
- `peerConnectionEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist. Wenn `false`, wird das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interface deaktiviert. Beachten Sie, dass [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) von dieser Einstellung _nicht_ betroffen ist.
- `webRTCIPHandlingPolicy`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein String ist. Diese Einstellung ermöglicht es Nutzern, die Medienleistungs-/Datenschutz-Abwägungen zu spezifizieren, die beeinflussen, wie WebRTC-Verkehr geroutet wird und wie viele lokale Adressinformationen offengelegt werden. Es kann einen der folgenden Werte annehmen, von am wenigsten privat bis am meisten privat:
    - `default`
    - `default_public_and_private_interfaces`
    - `default_public_interface_only`
    - `disable_non_proxied_udp`
    - `proxy_only` (es sind nur Verbindungen erlaubt, die TURN über eine TCP-Verbindung durch einen Proxy verwenden)

- `httpsOnlyMode`

  - : Diese Einstellung ermöglicht es Ihrer Erweiterung zu bestimmen, ob ein Nutzer den
    [HTTPS-Only-Modus](https://support.mozilla.org/en-US/kb/https-only-prefs) aktiviert hat. Diese Eigenschaft ist auf allen Plattformen schreibgeschützt. Ihr zugrunde liegender Wert ist ein String, der einen der drei Werte annehmen kann:
    - `"always"`: HTTPS-Only-Modus ist an.
    - `"never"`: HTTPS-Only-Modus ist aus.
    - `"private_browsing"`: HTTPS-Only-Modus ist nur in privaten Browsing-Fenstern an.

- `globalPrivacyControl`
  - : Diese Einstellung ermöglicht es Ihrer Erweiterung festzustellen, ob ein Nutzer die
    [Global Privacy Control](/de/docs/Web/API/Navigator/globalPrivacyControl) aktiviert hat. Diese Eigenschaft ist auf allen Plattformen schreibgeschützt. Ihr zugrunde liegender Wert ist ein Boolean, wobei `true` anzeigt, dass der Browser Global Privacy Control-Signale sendet, und `false`, dass der Browser die Signale nicht sendet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Eigenschaft `webRTCIPHandlingPolicy`:

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.network.webRTCIPHandlingPolicy.set({
        value: "default_public_interface_only",
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set webRTCIPHandlingPolicy");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium. Diese Dokumentation ist abgeleitet von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
