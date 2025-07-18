---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Gibt ein Array der [Window](/de/docs/Web/API/Window)-Objekte für jede der Seiten zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden. Dies umfasst beispielsweise:

- die Hintergrundseite, falls eine definiert ist
- alle Popup-Seiten, falls definiert und geladen
- alle Optionsseiten, falls definiert und geladen
- alle Browser-Tabs, die Inhalte hosten, die mit der Erweiterung verpackt sind

In Firefox wird der Rückgabewert, wenn diese Methode von einer Seite aufgerufen wird, die Teil eines privaten Fensters ist, wie z.B. eine Seitenleiste in einem privaten Fenster oder ein Popup, das aus einem privaten Fenster geöffnet wurde, nicht die Hintergrundseite der Erweiterung enthalten.

## Syntax

```js-nolint
let windows = browser.extension.getViews(
  fetchProperties // optional object
)
```

### Parameter

- `fetchProperties` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `type` {{optional_inline}}
      - : `string`. Ein {{WebExtAPIRef('extension.ViewType')}}-Wert, der den Typ der zu erhaltenden Ansicht angibt. Wenn weggelassen, gibt diese Funktion alle Ansichten zurück.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, auf das die Suche beschränkt werden soll. Wenn weggelassen, gibt diese Funktion alle Ansichten zurück. In Firefox-Version 92 und früher, werden Seitenleistenansichten nicht abgeglichen und daher nicht zurückgegeben.

### Rückgabewert

`array` von `object`. Array von [Window](/de/docs/Web/API/Window)-Objekten.

## Beispiele

Alle Fenster abrufen, die zu dieser Erweiterung gehören, und ihre URLs protokollieren:

```js
const windows = browser.extension.getViews();

for (const extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

Nur Fenster in Browser-Tabs abrufen, die Inhalte hosten, die mit der Erweiterung verpackt sind:

```js
const windows = browser.extension.getViews({ type: "tab" });
```

Nur Fenster in Popups abrufen:

```js
const windows = browser.extension.getViews({ type: "popup" });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getViews) API. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
