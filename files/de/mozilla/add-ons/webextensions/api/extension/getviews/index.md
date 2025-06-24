---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Gibt ein Array der [Window](/de/docs/Web/API/Window)-Objekte für jede der Seiten zurück, die innerhalb der aktuellen Erweiterung ausgeführt werden. Dies umfasst beispielsweise:

- die Hintergrundseite, falls eine definiert ist
- alle Pop-up-Seiten, falls definiert und geladen
- alle Optionsseiten, falls definiert und geladen
- alle Browser-Tabs, die mit der Erweiterung verpackten Inhalt hosten

In Firefox, wenn diese Methode von einer Seite aufgerufen wird, die Teil eines privaten Browsing-Fensters ist, wie ein Sidebar in einem privaten Fenster oder ein Pop-up, das von einem privaten Fenster aus geöffnet wurde, dann wird der Rückgabewert nicht die Hintergrundseite der Erweiterung enthalten.

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
      - : `string`. Ein {{WebExtAPIRef('extension.ViewType')}}, der den Typ der Ansicht angibt, die abgerufen werden soll. Falls weggelassen, gibt diese Funktion alle Ansichten zurück.
    - `windowId` {{optional_inline}}
      - : `integer`. Das Fenster, in dem die Suche eingeschränkt werden soll. Bei Weglassen gibt diese Funktion alle Ansichten zurück. In Firefox-Version 92 und früher werden Sidebar-Ansichten nicht abgeglichen und daher nicht zurückgegeben.

### Rückgabewert

`array` von `object`. Array von [Window](/de/docs/Web/API/Window)-Objekten.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Holen Sie sich alle Fenster, die zu dieser Erweiterung gehören, und protokollieren Sie deren URLs:

```js
const windows = browser.extension.getViews();

for (const extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

Holen Sie sich nur Fenster in Browser-Tabs, die Inhalte hosten, die mit der Erweiterung verpackt sind:

```js
const windows = browser.extension.getViews({ type: "tab" });
```

Holen Sie sich nur Fenster in Pop-ups:

```js
const windows = browser.extension.getViews({ type: "popup" });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getViews)-API von Chromium. Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
