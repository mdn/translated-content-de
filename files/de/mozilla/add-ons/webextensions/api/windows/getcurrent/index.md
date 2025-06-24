---
title: windows.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft das aktuelle Browserfenster ab und übergibt dessen Details an einen Rückruf.

Das "aktuelle" Fenster ist nicht unbedingt dasselbe wie das derzeit fokussierte Fenster. Wenn diese Funktion von einem Hintergrundskript aufgerufen wird, gibt sie das derzeit fokussierte Fenster zurück. Wenn sie jedoch von einem Skript aufgerufen wird, dessen Dokument mit einem bestimmten Browserfenster verknüpft ist, gibt sie dieses Browserfenster zurück. Zum Beispiel hat jeder Browser, der eine Seitenleiste anzeigt, seine eigene Instanz des Seitenleisten-Dokuments. Wenn ein Skript im Seitenleisten-Dokument `getCurrent()` aufruft, gibt es das Fenster dieses Seitenleisten-Dokuments zurück.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingCurrent = browser.windows.getCurrent(
  getInfo               // optional object
)
```

### Parameter

- `getInfo` {{optional_inline}}
  - : `object`.
    - `populate` {{optional_inline}}
      - : `boolean`. Wenn true, hat das {{WebExtAPIRef('windows.Window')}}-Objekt eine `tabs`-Eigenschaft, die eine Liste von {{WebExtAPIRef('tabs.Tab')}}-Objekten enthält, die die Tabs im Fenster darstellen. Die `Tab`-Objekte enthalten nur die Eigenschaften `url`, `title` und `favIconUrl`, wenn die Manifestdatei der Erweiterung die Berechtigung `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) enthält, die zur URL des Tabs passen.
    - `windowTypes` {{deprecated_inline}} {{optional_inline}}
      - : Ein `array` von {{WebExtAPIRef('windows.WindowType')}}-Objekten. Wenn gesetzt, wird das zurückgegebene {{WebExtAPIRef('windows.Window')}} basierend auf seinem Typ gefiltert. Wenn nicht gesetzt, wird der Standardfilter auf `['normal', 'panel', 'popup']` gesetzt, wobei `'panel'`-Fenstertypen auf die eigenen Fenster der Erweiterung beschränkt sind.

> [!NOTE]
> Wenn angegeben, wird die `windowTypes` Komponente von `getInfo` ignoriert. Die Verwendung von `windowTypes` wurde ab Firefox 62 veraltet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`windows.Window`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window)-Objekt erfüllt wird, das die Details des Fensters enthält. Falls ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Symbol einer Browseraktion klickt, holt dieses Beispiel das aktuelle Fenster und protokolliert die URLs der darin enthaltenen Tabs. Beachten Sie, dass Sie die Berechtigung "tabs" [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder entsprechende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) benötigen, um auf Tab-URLs zuzugreifen.

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
  browser.windows.getCurrent({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-getCurrent) API von Chromium. Diese Dokumentation leitet sich von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code ab.

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
