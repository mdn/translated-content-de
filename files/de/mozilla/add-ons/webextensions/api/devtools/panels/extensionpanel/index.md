---
title: devtools.panels.ExtensionPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `ExtensionPanel` repräsentiert ein Panel, das zu den Entwicklertools hinzugefügt wurde. Es ist die Auflösung des [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das von [`browser.devtools.panels.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create) zurückgegeben wird.

## Typ

Werte dieses Typs sind Objekte. Sie definieren zwei Ereignisse, `onShown` und `onHidden`.

- `onShown` wird ausgelöst, wenn das Panel in den Entwicklertools angezeigt wird (zum Beispiel, weil der Benutzer auf die Registerkarte des Panels im Fenster der Entwicklertools geklickt hat).
- `onHidden` wird ausgelöst, wenn das Panel ausgeblendet wird (zum Beispiel, weil der Benutzer zu einer anderen Registerkarte im Fenster der Entwicklertools gewechselt hat).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code erstellt ein neues Panel und fügt dann Handler für seine `onShown`- und `onHidden`-Ereignisse hinzu.

```js
function handleShown(e) {
  console.log(e);
  console.log("panel is being shown");
}

function handleHidden(e) {
  console.log(e);
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) von Chromium.

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