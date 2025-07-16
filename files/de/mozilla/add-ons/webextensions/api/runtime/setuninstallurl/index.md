---
title: runtime.setUninstallURL()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/setUninstallURL
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Legt die URL fest, die beim Deinstallieren der Erweiterung besucht werden soll. Dies kann verwendet werden, um serverseitige Daten zu bereinigen, Analysen durchzuführen oder Umfragen zu implementieren. Die URL kann bis zu 1023 Zeichen lang sein. Diese Grenze betrug früher 255 Zeichen. Einzelheiten finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingUrl = browser.runtime.setUninstallURL(
  url             // string
)
```

### Parameter

- `url`
  - : `string`. URL, die geöffnet wird, nachdem die Erweiterung deinstalliert wurde. Diese URL muss ein `http`- oder `https`-Schema aufweisen. Kann bis zu 1023 Zeichen lang sein. Setzen Sie sie auf einen leeren String, um beim Deinstallieren der Erweiterung keinen neuen Tab zu öffnen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die URL gesetzt wird, oder mit einer Fehlermeldung abgelehnt wird, wenn der Vorgang fehlschlägt.

## Beispiele

```js
function onSetURL() {
  console.log("set uninstall URL");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let settingUrl = browser.runtime.setUninstallURL("https://example.org");
settingUrl.then(onSetURL, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-setUninstallURL) API. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
