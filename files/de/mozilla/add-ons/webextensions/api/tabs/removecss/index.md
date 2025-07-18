---
title: tabs.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt von einer Seite CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher, verwenden Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} zum Einfügen und Entfernen von CSS.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.tabs.removeCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, von dem das CSS entfernt werden soll. Standardmäßig der aktive Tab des aktuellen Fensters.
- `details`
  - : Ein Objekt, das das zu entfernende CSS beschreibt. Es enthält die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code aus allen Frames der aktuellen Seite entfernt. Wenn `false`, wird der Code nur aus dem obersten Frame entfernt. Standardwert ist `false`.
    - `code` {{optional_inline}}
      - : `string`. Zu entfernendes CSS als Textzeichenkette. Dies muss genau mit einer zuvor mit {{WebExtAPIRef("tabs.insertCSS()")}} in die Seite eingefügten CSS-Zeichenkette übereinstimmen.
    - `cssOrigin` {{optional_inline}}
      - : `string`. Dies kann einen von zwei Werten annehmen: "user" für CSS, das als Benutzer-Stylesheet hinzugefügt wurde, oder "author" für CSS, das als Autoren-Stylesheet hinzugefügt wurde. Wenn diese Option zuvor durch {{WebExtAPIRef("tabs.insertCSS()")}} gesetzt wurde, muss sie genau übereinstimmen.
    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die das zu entfernende CSS enthält. Dies muss genau mit einer zuvor mit {{WebExtAPIRef("tabs.insertCSS()")}} in die Seite eingefügten CSS-Datei übereinstimmen.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, aus dem das CSS entfernt werden soll. Standardwert ist `0` (der oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS aus eingebetteten "about:blank" und "about:srcdoc"-Frames entfernt, wenn Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Standardwert ist `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS entfernt wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt mithilfe von {{WebExtAPIRef("tabs.insertCSS")}} etwas CSS hinzu und entfernt es wieder, wenn der Benutzer auf eine Browseraktion klickt:

```js
let css = "body { border: 20px dotted pink; }";

function onError(error) {
  console.log(`Error: ${error}`);
}

let insertingCSS = browser.tabs.insertCSS(2, { code: css });
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.tabs.removeCSS(2, { code: css });
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
