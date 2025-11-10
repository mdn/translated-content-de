---
title: devtools.panels.ExtensionSidebarPane.setObject()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Stellt ein JSON-Objekt im Seitenbereich der Erweiterung dar.

Das Objekt wird als erweiterbarer Baum angezeigt, wie im [JSON-Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. Sie können optional eine `rootTitle`-Zeichenkette angeben: Diese wird als Titel der Wurzel des Baumes angezeigt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.devtools.panels.setObject(
  jsonObject,       // string, array, or JSON object
  rootTitle         // string
)
```

### Parameter

- `jsonObject`
  - : `String` oder `Array` oder `Object`. Das Objekt, das angezeigt werden soll. Wenn es sich um ein Objekt handelt, wird es JSON-serialisiert, sodass Eigenschaften wie Funktionen ausgelassen werden.
- `rootTitle` {{optional_inline}}
  - : `String`. Der Titel der Wurzel des Baumes, in dem das Objekt angezeigt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Objekt festgelegt wurde.

## Beispiele

Erstellen Sie ein neues Paneel und füllen Sie es mit einem JSON-Objekt. Sie könnten diesen Code in einem von der [Devtools-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladenen Skript ausführen.

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content",
    },
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.

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
