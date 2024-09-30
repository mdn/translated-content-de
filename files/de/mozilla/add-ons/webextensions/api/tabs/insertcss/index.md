---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Injiziert CSS in eine Seite.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher nutzen Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} um CSS einzufügen und zu entfernen.

Um diese API zu verwenden, müssen Sie die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten injizieren, deren URL mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das heißt, ihr Schema muss eines von "http", "https" oder "file" sein. Dies bedeutet, dass Sie kein CSS in die integrierten Seiten des Browsers injizieren können, wie etwa about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei selbst auf, anstatt zur Seite, in die sie injiziert wird.

Das eingefügte CSS kann durch Aufrufen von {{WebExtAPIRef("tabs.removeCSS()")}} wieder entfernt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt (nur in Firefox).

## Syntax

```js-nolint
let inserting = browser.tabs.insertCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in den das CSS eingefügt werden soll. Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.
- `details`

  - : Ein Objekt, das das einzufügende CSS beschreibt. Es enthält die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite injiziert. Wenn es `false` ist, wird das CSS nur in den oberen Frame injiziert. Standardmäßig ist es `false`.
    - `code` {{optional_inline}}
      - : `string`. Der einzufügende Code als Textzeichenfolge.
    - `cssOrigin` {{optional_inline}}

      - : `string`. Dies kann einen von zwei Werten annehmen: "user", um das CSS als Nutzer-Stylesheet hinzuzufügen, oder "author", um es als Autoren-Stylesheet hinzuzufügen. Wenn diese Option ausgelassen wird, wird das CSS als Autoren-Stylesheet hinzugefügt.

        - "user" ermöglicht es Ihnen zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Kaskadierende Reihenfolge](/de/docs/Web/CSS/Cascade#cascading_order).
        - "author"-Stylesheets verhalten sich so, als würden sie nach allen von der Webseite angegebenen Autorenregeln erscheinen. Dieses Verhalten schließt alle dynamisch von den Skripten der Seite hinzugefügten Autoren-Stylesheets ein, selbst wenn diese Hinzufügung nach dem Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den einzufügenden Code enthält. In Firefox werden relative URLs relativ zur aktuellen Seiten-URL aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Um plattformübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Stamm der Erweiterung, wie folgt: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS injiziert werden soll. Standardmäßig `0` (der oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete "about:blank" und "about:srcdoc" Frames injiziert, wenn Ihre Erweiterung Zugriff auf ihr übergeordnetes Dokument hat. Der Code kann nicht in Top-Level about: Frames eingefügt werden. Standardmäßig `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab injiziert wird. Standardmäßig "document_idle".

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS in den aktuell aktiven Tab ein, das aus einer Zeichenkette übernommen wird.

```js
let css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

Dieses Beispiel fügt CSS ein, das aus einer mit der Erweiterung verpackten Datei geladen wird. Das CSS wird in den Tab eingefügt, dessen ID 2 ist:

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API von Chromium. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
