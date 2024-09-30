---
title: windows.getLastFocused()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erhält das Fenster, das zuletzt im Fokus war — typischerweise das Fenster 'obenauf'.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingWindow = browser.windows.getLastFocused(
  getInfo               // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}

  - : `object`.

    - `populate` {{optional_inline}}
      - : `boolean`. Wenn `true`, enthält das {{WebExtAPIRef('windows.Window')}} Objekt eine `tabs` Eigenschaft, die eine Liste von {{WebExtAPIRef('tabs.Tab')}} Objekten enthält, die die Tabs im Fenster repräsentieren. Die `Tab` Objekte enthalten nur die Eigenschaften `url`, `title` und `favIconUrl`, wenn die Manifestdatei der Erweiterung entweder die Berechtigung `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die mit der URL des Tabs übereinstimmen.
    - `windowTypes` {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}} Objekten. Wenn gesetzt, wird das zurückgegebene {{WebExtAPIRef('windows.Window')}} basierend auf seinem Typ gefiltert. Wenn nicht gesetzt, ist der Standardfilter auf `['normal', 'panel', 'popup']` eingestellt, wobei `'panel'` Fenstertypen auf die Fenster der Erweiterung beschränkt sind.

> [!NOTE]
> Wenn angegeben, wird die `windowTypes` Komponente von `getInfo` ignoriert. Die Verwendung von `windowTypes` wurde ab Firefox 62 als veraltet markiert.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('windows.Window')}} Objekt erfüllt wird, welches die Details des zuletzt fokussierten Fensters enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erhalten Sie das zuletzt fokussierte Fenster und loggen Sie die darin enthaltenen Tabs. Beachten Sie, dass Sie die "tabs" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.getLastFocused({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getLastFocused) API von Chromium. Diese Dokumentation stammt von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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
