---
title: windows.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getAll
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhält Informationen über alle geöffneten Fenster und übergibt diese an einen Callback.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingAll = browser.windows.getAll(
  getInfo                // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}

  - : `object`. Dieses steuert, welche {{WebExtAPIRef('windows.Window')}} Objekte abgerufen werden.

    - `populate` {{optional_inline}}
      - : `boolean`. Standardmäßig `false`. Wenn auf `true` gesetzt, wird jedes {{WebExtAPIRef('windows.Window')}} Objekt eine `tabs` Eigenschaft haben, die eine Liste von {{WebExtAPIRef('tabs.Tab')}} Objekten enthält, die die Tabs in diesem Fenster darstellen. Die `Tab` Objekte werden die Eigenschaften `url`, `title` und `favIconUrl` nur dann enthalten, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die zur URL des Tabs passen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}} Objekten. Wenn gesetzt, werden die zurückgegebenen {{WebExtAPIRef('windows.Window')}} Objekte basierend auf ihrem Typ gefiltert. Wenn nicht gesetzt, wird der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'` Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef('windows.Window')}} Objekten erfüllt wird, das alle Fenster darstellt, die den angegebenen Kriterien entsprechen. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URLs für die Tabs in allen "normalen" Browserfenstern. Beachten Sie, dass Sie die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

```js
function logTabsForWindows(windowInfoArray) {
  for (const windowInfo of windowInfoArray) {
    console.log(`Window: ${windowInfo.id}`);
    console.log(windowInfo.tabs.map((tab) => tab.url));
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows
    .getAll({
      populate: true,
      windowTypes: ["normal"],
    })
    .then(logTabsForWindows, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getAll) API. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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
