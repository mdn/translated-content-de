---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Fügt CSS in eine Seite ein.

> [!NOTE]
> Verwenden Sie bei Manifest V3 oder höher {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, um CSS einzufügen und zu entfernen.

Um diese Methode zu verwenden, benötigen Sie eine Berechtigung für die URL der Seite – entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

Sie können CSS nur in Seiten einfügen, deren URL sich durch ein [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausdrücken lässt. Das bedeutet, dass ihr URL-Schema „http“, „https“ oder „file“ sein muss. Daher können Sie kein CSS in integrierte Browserseiten wie about:debugging, about:addons oder die Seite einfügen, die beim Öffnen eines neuen leeren Tabs angezeigt wird.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei selbst auf, nicht relativ zu der Seite, in die sie eingefügt wird.

Das eingefügte CSS kann durch Aufrufen von {{WebExtAPIRef("tabs.removeCSS()")}} wieder entfernt werden.

Dies ist eine asynchrone Funktion, die eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt (nur in Firefox).

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
      - : `boolean`. Wenn `true`, wird das CSS in alle Frames der aktuellen Seite eingefügt. Wenn `false`, wird das CSS nur in den obersten Frame eingefügt. Der Standardwert ist `false`.
    - `code` {{optional_inline}}
      - : `string`. Der einzufügende Code als Textzeichenfolge.
    - `cssOrigin` {{optional_inline}}
      - : `string`. Diese Eigenschaft kann einen von zwei Werten annehmen: „user“, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder „author“, um es als Autor-Stylesheet hinzuzufügen. Wird diese Option weggelassen, wird das CSS als Autor-Stylesheet hinzugefügt.
        - „user“ ermöglicht es Ihnen, zu verhindern, dass Websites das eingefügte CSS überschreiben: siehe [Kaskadierungsreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).
        - „author“-Stylesheets verhalten sich so, als stünden sie nach allen von der Webseite festgelegten Autor-Regeln. Dies gilt auch für Autor-Stylesheets, die durch Skripte der Seite dynamisch hinzugefügt werden – selbst wenn dies erst nach Abschluss des `insertCSS`-Aufrufs geschieht.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei mit dem einzufügenden Code. In Firefox werden relative URLs relativ zur URL der aktuellen Seite aufgelöst. In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst. Damit dies browserübergreifend funktioniert, können Sie den Pfad als absolute URL angeben, die beim Stammverzeichnis der Erweiterung beginnt, zum Beispiel: `"/path/to/stylesheet.css"`.
    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den das CSS eingefügt werden soll. Der Standardwert ist `0` (der oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete „about:blank“- und „about:srcdoc“-Frames eingefügt, sofern Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. In about:-Frames auf oberster Ebene kann der Code nicht eingefügt werden. Der Standardwert ist `false`.
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab eingefügt wird. Der Standardwert ist „document_idle“.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die ohne Argumente erfüllt wird, sobald das gesamte CSS eingefügt wurde. Tritt ein Fehler auf, wird die Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieses Beispiel fügt CSS aus einer Zeichenfolge in den aktuell aktiven Tab ein.

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

Dieses Beispiel fügt CSS aus einer Datei ein, die mit der Erweiterung ausgeliefert wird. Das CSS wird in den Tab mit der ID 2 eingefügt:

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
> Diese API basiert auf der [`chrome.tabs`-API](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) von Chromium. Diese Dokumentation wurde aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
