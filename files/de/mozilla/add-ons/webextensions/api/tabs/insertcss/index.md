---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher, verwenden Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, um CSS einzufügen und zu entfernen.

Um diese API zu verwenden, müssen Sie die Erlaubnis für die URL der Seite haben, entweder explizit als [Host-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), oder durch die Verwendung der [activeTab-Erlaubnis](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten injizieren, deren URL mithilfe eines [Match-Musters](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, das Schema muss "http", "https" oder "file" sein. Das bedeutet, dass Sie CSS nicht in eine der eingebauten Browser-Seiten injizieren können, wie etwa about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zu der CSS-Datei selbst auf, anstatt zu der Seite, in die sie injiziert werden.

Das eingefügte CSS kann wieder entfernt werden, indem {{WebExtAPIRef("tabs.removeCSS()")}} aufgerufen wird.

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
  - : `integer`. Die ID des Tabs, in den das CSS eingefügt werden soll. Standardmäßig ist dies der aktive Tab des aktuellen Fensters.
- `details`

  - : Ein Objekt, das das einzufügende CSS beschreibt. Es enthält die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite injiziert. Bei `false` wird das CSS nur in den obersten Frame injiziert. Standardmäßig `false`.
    - `code` {{optional_inline}}
      - : `string`. Zu injizierender Code als Textstring.
    - `cssOrigin` {{optional_inline}}

      - : `string`. Dies kann einen von zwei Werten annehmen: "user", um das CSS als Benutzer-Stylesheet hinzuzufügen, oder "author", um es als Autor-Stylesheet hinzuzufügen. Wird diese Option weggelassen, wird das CSS als Autor-Stylesheet hinzugefügt.
        - "user" ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Cascading Order](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - "author"-Stylesheets verhalten sich so, als ob sie nach allen von der Webseite angegebenen Autorenregeln erscheinen. Dieses Verhalten schließt alle von den Skripten der Seite dynamisch hinzugefügten Autoren-Stylesheets ein, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält. In Firefox werden relative URLs relativ zur aktuellen Seiten-URL aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Um browserübergreifend zu arbeiten, können Sie den Pfad als absolute URL angeben, beginnend am Wurzelverzeichnis der Erweiterung, wie folgt: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS injiziert werden soll. Standardmäßig `0` (der oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete "about:blank"- und "about:srcdoc"-Frames injiziert, sofern Ihre Erweiterung Zugriff auf deren Elterndokument hat. Der Code kann nicht in oberste about: Frames eingefügt werden. Standardmäßig `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der frühestmögliche Zeitpunkt, zu dem der Code in den Tab injiziert wird. Standardmäßig "document_idle".

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt wurde. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt in den aktuell aktiven Tab CSS ein, das aus einem String entnommen wird.

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

Dieses Beispiel fügt CSS ein, das aus einer mit der Erweiterung gepackten Datei geladen wird. Das CSS wird in den Tab mit der ID 2 eingefügt:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API. Diese Dokumentation wird aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
