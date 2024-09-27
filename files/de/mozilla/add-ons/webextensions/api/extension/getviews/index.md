---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt ein Array der [Window](/de/docs/Web/API/Window)-Objekte für jede der Seiten zurück, die im aktuellen Add-on ausgeführt werden. Dies umfasst zum Beispiel:

- die Hintergrundseite, wenn eine definiert ist
- alle Popup-Seiten, wenn definiert und geladen
- alle Optionsseiten, wenn definiert und geladen
- alle Browser-Tabs, die Inhalte des Add-ons hosten

In Firefox wird der Rückgabewert dieser Methode, wenn sie von einer Seite aus aufgerufen wird, die Teil eines privaten Fensters ist, wie etwa einer Seitenleiste in einem privaten Fenster oder einem Popup, das aus einem privaten Fenster geöffnet wurde, die Hintergrundseite des Add-ons nicht einschließen.

## Syntax

```js-nolint
let windows = browser.extension.getViews(
  fetchProperties // optional object
)
```

### Parameter

- `fetchProperties` {{optional_inline}}

  - : Ein Objekt mit folgenden Eigenschaften:

    - `type` {{optional_inline}}
      - : `string`. Ein {{WebExtAPIRef('extension.ViewType')}} zur Angabe des Typs der anzufordernden Ansicht. Wird weggelassen, gibt diese Funktion alle Ansichten zurück.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, auf das sich die Suche beschränken soll. Wird weggelassen, gibt diese Funktion alle Ansichten zurück. In Firefox Version 92 und früher werden Seitenleistenansichten nicht abgeglichen und daher nicht zurückgegeben.

### Rückgabewert

`array` von `object`. Array von [Window](/de/docs/Web/API/Window)-Objekten.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Alle Fenster gehören zu diesem Add-on abrufen und ihre URLs protokollieren:

```js
const windows = browser.extension.getViews();

for (const extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

Nur Fenster in Browser-Tabs, die Inhalte des Add-ons hosten, abrufen:

```js
const windows = browser.extension.getViews({ type: "tab" });
```

Nur Fenster in Popups abrufen:

```js
const windows = browser.extension.getViews({ type: "popup" });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getViews). Diese Dokumentation stammt aus der Datei [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
