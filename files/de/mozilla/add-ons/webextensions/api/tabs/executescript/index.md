---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügt JavaScript-Code in eine Seite ein.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher verwenden Sie {{WebExtAPIRef("scripting.executeScript()")}}, um Skripte auszuführen.

Sie können Code in Seiten injizieren, deren URL sich durch ein [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) zum Abgleich ausdrücken lässt. Zu diesem Zweck muss das Schema eines der folgenden sein: `http`, `https` oder `file`.

Sie müssen die Berechtigung für die URL der Seite haben - entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) - oder über die [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich der Leseansicht, view-source und PDF-Viewer-Seiten.

Sie können auch Code in Seiten injizieren, die mit Ihrer eigenen Erweiterung gepackt sind:

```js
browser.tabs.create({ url: "/my-page.html" }).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`,
  });
});
```

Dazu benötigen Sie keine besonderen Berechtigungen.

Sie können _keinen_ Code in eine der eingebauten Seiten des Browsers injizieren, wie z.B.: `about:debugging`, `about:addons` oder die Seite, die beim Öffnen eines neuen leeren Tabs geöffnet wird.

Die von Ihnen injizierten Skripte werden [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let executing = browser.tabs.executeScript(
  tabId,                 // optional integer
  details                // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, in dem das Skript ausgeführt werden soll.

    Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.

- `details`
  - : Ein Objekt, das das auszuführende Skript beschreibt.

    Es enthält die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite injiziert.

        Ist `true` und `frameId` gesetzt, wird ein Fehler ausgelöst. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Ist es `false`, wird der Code nur in den obersten Frame injiziert.

        Der Standardwert ist `false`.

    - `code` {{optional_inline}}
      - : `string`. Der zu injizierende Code als Textzeichenfolge.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript zu interpolieren, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält.
        - In Firefox werden relative URLs, die nicht im Wurzelverzeichnis der Erweiterung beginnen, relativ zur aktuellen Seiten-URL aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Um in mehreren Browsern zu funktionieren, können Sie den Pfad als relative URL angeben, beginnend am Wurzelverzeichnis der Erweiterung, wie folgt: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den der Code injiziert werden soll.

        Der Standardwert ist `0` (der oberste Frame).

    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank` und `about:srcdoc` Frames injiziert, wenn Ihre Erweiterung Zugriff auf deren Elterndokument hat. Der Code kann nicht in oberste `about:` Frames eingefügt werden.

        Der Standardwert ist `false`.

    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab injiziert wird.

        Der Standardwert ist `"document_idle"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in ein Array von Objekten aufgelöst wird. Die Werte des Arrays stellen das Ergebnis des Skripts in jedem injizierten Frame dar.

Das Ergebnis des Skripts ist die letzte ausgewertete Anweisung, ähnlich wie das, was (die Ergebnisse, nicht der `console.log()`-Output) ausgegeben würde, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen. Betrachten Sie zum Beispiel ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier wird das Ergebnis-Array die Zeichenfolge `"my result"` als Element enthalten.

Die Ergebniswerte müssen [structured cloneable](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Die letzte Anweisung kann auch ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, aber diese Funktion wird von der [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript)-Bibliothek nicht unterstützt.

Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel führt ein einzeiliges Code-Snippet im aktuell aktiven Tab aus:

```js
function onExecuted(result) {
  console.log(`We made it green`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const makeItGreen = 'document.body.style.border = "5px solid green"';

const executing = browser.tabs.executeScript({
  code: makeItGreen,
});
executing.then(onExecuted, onError);
```

Dieses Beispiel führt ein Skript aus einer Datei aus (die mit der Erweiterung gepackt ist) namens `"content-script.js"`. Das Skript wird im aktuell aktiven Tab ausgeführt. Das Skript wird sowohl in Subframes als auch im Hauptdokument ausgeführt:

```js
function onExecuted(result) {
  console.log(`We executed in all subframes`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true,
});
executing.then(onExecuted, onError);
```

Dieses Beispiel führt ein Skript aus einer Datei aus (die mit der Erweiterung gepackt ist) namens `"content-script.js"`. Das Skript wird im Tab mit der ID `2` ausgeführt:

```js
function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = browser.tabs.executeScript(2, {
  file: "/content-script.js",
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
