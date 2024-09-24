---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt einer Seite JavaScript-Code hinzu.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher, benutzen Sie {{WebExtAPIRef("scripting.executeScript()")}}, um Skripte auszuführen.

Sie können Code in Seiten injizieren, deren URL mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann. Dazu muss ihr Schema eines der folgenden sein: `http`, `https` oder `file`.

Sie müssen die Berechtigung für die URL der Seite besitzen — entweder explizit, als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) — oder über die [activeTab Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Beachten Sie, dass einige spezielle Seiten diese Berechtigung nicht zulassen, einschließlich Lesemodus, view-source und PDF-Viewer-Seiten.

Sie können auch Code in Seiten injizieren, die mit Ihrer eigenen Erweiterung gebündelt sind:

```js
browser.tabs.create({ url: "/my-page.html" }).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`,
  });
});
```

Hierfür benötigen Sie keine speziellen Berechtigungen.

Sie _können_ keinen Code in eine der integrierten Browser-Seiten injizieren, wie z.B.: `about:debugging`, `about:addons` oder die Seite, die sich öffnet, wenn Sie einen neuen leeren Tab öffnen.

Die von Ihnen injizierten Skripte werden [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) genannt.

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

    Standardmäßig ist dies der aktive Tab des aktuellen Fensters.

- `details`

  - : Ein Objekt, das das auszuführende Skript beschreibt.

    Es enthält die folgenden Eigenschaften:

    - `allFrames` {{optional_inline}}

      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite injiziert.

        Wenn `true` und `frameId` gesetzt ist, führt dies zu einem Fehler. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Ist es `false`, wird der Code nur in den obersten Frame injiziert.

        Standardwert ist `false`.

    - `code` {{optional_inline}}

      - : `string`. Code, der als Textstring injiziert werden soll.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript zu interpolieren, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}

      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält.

        - In Firefox werden relative URLs, die nicht am Erweiterungs-Stamm beginnen, relativ zur aktuellen Seite aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Um browserübergreifend zu arbeiten, können Sie den Pfad als relative URL angeben, beginnend am Stamm der Erweiterung, wie folgt: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}

      - : `integer`. Der Frame, in den der Code injiziert werden soll.

        Standardwert ist `0` (der oberste Frame).

    - `matchAboutBlank` {{optional_inline}}

      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank` und `about:srcdoc` Frames injiziert, wenn Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in oberste `about:` Frames eingefügt werden.

        Standardwert ist `false`.

    - `runAt` {{optional_inline}}

      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab injiziert wird.

        Standardwert ist `"document_idle"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der sich zu einem Array von Objekten auflöst. Die Werte des Arrays repräsentieren das Ergebnis des Skripts in jedem injizierten Frame.

Das Ergebnis des Skripts ist die zuletzt ausgewertete Anweisung, die ähnlich zu dem ist, was ausgegeben würde (die Ergebnisse, nicht die `console.log()` Ausgabe), wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen würden. Zum Beispiel, ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray die Zeichenkette "`my result`" als Element.

Die Ergebniswerte müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein (siehe [Datenklonierungsalgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Die letzte Anweisung kann auch ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, aber diese Funktion wird von der [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) Bibliothek nicht unterstützt.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel führt ein einzeiliges Code-Snippet im derzeit aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (mit der Erweiterung gebündelt), die `"content-script.js"` genannt wird. Das Skript wird im derzeit aktiven Tab ausgeführt. Das Skript wird sowohl in Unterframes als auch im Hauptdokument ausgeführt:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (mit der Erweiterung gebündelt), die `"content-script.js"` genannt wird. Das Skript wird im Tab mit der ID `2` ausgeführt:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
