---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 286918035156c33cc4ed073304f4c51ab5cfacfe
---

Injiziert JavaScript-Code in eine Seite.

> [!NOTE]
> Wenn Manifest V3 oder höher verwendet wird, verwenden Sie {{WebExtAPIRef("scripting.executeScript()")}}, um Skripte auszuführen.

Sie können Code in Seiten injizieren, deren URL Sie mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausdrücken können. Dazu muss das Schema eines der folgenden sein: `http`, `https` oder `file`.

Sie müssen die Berechtigung für die URL der Seite entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) besitzen. Beachten Sie, dass einige spezielle Seiten diese Erlaubnis nicht zulassen, darunter Leseransicht, Quelltextansicht, PDF-Viewer und andere integrierte Browser-UI-Seiten.

Erweiterungen können keine Content-Skripte in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code in einer Erweiterungsseite dynamisch ausführen möchte, kann sie ein Skript im Dokument einfügen. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, der eine Möglichkeit zur Ausführung des Codes implementiert. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

> [!NOTE]
> Die Möglichkeit, Code in mit Ihrer Erweiterung verpackte Seiten zu injizieren, wurde in Firefox 149 veraltet und in Firefox 152 entfernt.

Die von Ihnen injizierten Skripte werden als [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) bezeichnet.

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

    Standardmäßig der aktive Tab des aktuellen Fensters.

- `details`
  - : Ein Objekt, das das auszuführende Skript beschreibt.

    Es enthält die folgenden Eigenschaften:
    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite injiziert.

        Wenn auf `true` gesetzt und `frameId` gesetzt ist, wird ein Fehler ausgegeben. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Wenn `false`, wird der Code nur in den Top-Frame injiziert.

        Standardmäßig `false`.

    - `code` {{optional_inline}}
      - : `string`. Code, der als Textzeichenfolge injiziert werden soll.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript einzubetten, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die den zu injizierenden Code enthält.
        - In Firefox werden relative URLs, die nicht am Erweiterungsstamm beginnen, relativ zur aktuellen Seiten-URL aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Um browserübergreifend zu arbeiten, können Sie den Pfad als relative URL angeben, die am Root der Erweiterung beginnt, wie folgt: `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den der Code injiziert werden soll.

        Standardmäßig `0` (der Top-Level-Frame).

    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank` und `about:srcdoc` Frames injiziert, wenn Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. Der Code kann nicht in oberste `about:` Frames eingefügt werden.

        Standardmäßig `false`.

    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab injiziert wird.

        Standardmäßig `"document_idle"`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem Array von Objekten aufgelöst wird. Die Werte des Arrays repräsentieren das Ergebnis des Skripts in jedem injizierten Frame.

Das Ergebnis des Skripts ist die letzte ausgewertete Anweisung, die dem Output ähnelt (die Ergebnisse, nicht die `console.log()`-Ausgabe), wenn Sie das Skript in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen würden. Zum Beispiel, bei einem Skript wie diesem:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray die Zeichenkette `"my result"` als Element.

Die Ergebniswerte müssen [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Die letzte Anweisung kann auch ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein, aber diese Funktion wird von der [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript)-Bibliothek nicht unterstützt.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel führt einzeiligen Code im aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (mit der Erweiterung verpackt) namens `"content-script.js"`. Das Skript wird im aktiven Tab ausgeführt. Das Skript wird sowohl in Unterframes als auch im Hauptdokument ausgeführt:

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

Dieses Beispiel führt ein Skript aus einer Datei aus (mit der Erweiterung verpackt) namens `"content-script.js"`. Das Skript wird im Tab mit der ID `2` ausgeführt:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript)-API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
