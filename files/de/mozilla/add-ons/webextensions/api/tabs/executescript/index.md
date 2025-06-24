---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt JavaScript-Code in eine Seite ein.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher, verwenden Sie {{WebExtAPIRef("scripting.executeScript()")}}, um Skripts auszuführen.

Sie können Code in Seiten injizieren, deren URL mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann. Dafür muss das Schema eines der folgenden sein: `http`, `https` oder `file`.

Sie müssen die Berechtigung für die URL der Seite haben - entweder explizit, als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) - oder über die [activeTab Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Leseransicht, Quellenansicht und PDF-Viewer-Seiten.

Sie können auch Code in Seiten, die mit Ihrer eigenen Erweiterung verpackt sind, injizieren:

```js
browser.tabs.create({ url: "/my-page.html" }).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`,
  });
});
```

Dafür benötigen Sie keine speziellen Berechtigungen.

Sie _können keinen_ Code in eine der eingebauten Seiten des Browsers injizieren, wie z.B.: `about:debugging`, `about:addons` oder die Seite, die sich öffnet, wenn Sie einen neuen leeren Tab öffnen.

Die von Ihnen injizierten Skripte werden als [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) bezeichnet.

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

    Es enthält folgende Eigenschaften:

    - `allFrames` {{optional_inline}}

      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite injiziert.

        Wenn `true` und `frameId` gesetzt ist, wird ein Fehler ausgelöst. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Wenn es `false` ist, wird der Code nur in den Hauptframe injiziert.

        Standardmäßig ist es `false`.

    - `code` {{optional_inline}}

      - : `string`. Der zu injizierende Code als Textstring.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript zu interpolieren, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}

      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält.

        - In Firefox werden relative URLs, die nicht am Erweiterungs-Root beginnen, relativ zur aktuellen Seiten-URL aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Um plattformübergreifend zu arbeiten, können Sie den Pfad als relative URL angeben, beginnend am Root der Erweiterung, etwa so: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}

      - : `integer`. Der Frame, in den der Code injiziert werden soll.

        Standardmäßig `0` (der Hauptframe).

    - `matchAboutBlank` {{optional_inline}}

      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank` und `about:srcdoc` Frames injiziert, wenn Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in übergeordnete `about:` Frames eingefügt werden.

        Standardmäßig ist es `false`.

    - `runAt` {{optional_inline}}

      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der frühestmögliche Zeitpunkt, zu dem der Code in den Tab injiziert wird.

        Standardmäßig `"document_idle"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das auf ein Array von Objekten auflöst. Die Werte des Arrays repräsentieren das Ergebnis des Skripts in jedem injizierten Frame.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, die ähnlich dem wäre, was als Ergebnis (nicht die `console.log()`-Ausgabe) ausgegeben würde, wenn Sie das Skript in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen. Zum Beispiel, betrachten Sie ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier wird das Ergebnis-Array den String `"my result"` als Element enthalten.

Die Ergebniswerte müssen [strukturierter clonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Die letzte Anweisung kann auch ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, aber diese Funktion wird von der [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) Bibliothek nicht unterstützt.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel führt ein einzeiliges Codeschnipsel im derzeit aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei (die mit der Erweiterung gebündelt ist) namens `"content-script.js"` aus. Das Skript wird im derzeit aktiven Tab ausgeführt. Das Skript wird sowohl in Subframes als auch im Hauptdokument ausgeführt:

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

Dieses Beispiel führt ein Skript aus einer Datei (die mit der Erweiterung gebündelt ist) namens `"content-script.js"` aus. Das Skript wird im Tab mit einer ID von `2` ausgeführt:

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
> Diese API basiert auf dem [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
