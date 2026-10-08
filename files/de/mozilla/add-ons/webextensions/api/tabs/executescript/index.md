---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Fügt JavaScript-Code in eine Seite ein.

> [!NOTE]
> Verwenden Sie bei Manifest V3 oder höher {{WebExtAPIRef("scripting.executeScript()")}}, um Skripte auszuführen.

Sie können Code in Seiten einfügen, deren URL sich mit einem [Match-Pattern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) beschreiben lässt. Das Schema muss dabei `http`, `https` oder `file` sein.

Sie benötigen eine Berechtigung für die URL der Seite: entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

Erweiterungen können keine Content-Skripte in [Erweiterungsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) ausführen. Wenn eine Erweiterung Code dynamisch in einer Erweiterungsseite ausführen möchte, kann sie ein Skript in das Dokument einbinden. Dieses Skript enthält den auszuführenden Code und registriert einen {{WebExtAPIRef("runtime.onMessage")}}-Listener, über den der Code ausgeführt werden kann. Die Erweiterung kann dann eine Nachricht an den Listener senden, um die Ausführung des Codes auszulösen.

> [!NOTE]
> Die Möglichkeit, Code in Seiten einzufügen, die mit Ihrer Erweiterung ausgeliefert werden, wurde in Firefox 149 als veraltet eingestuft und in Firefox 152 entfernt.

Die Skripte, die Sie einfügen, heißen [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

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
      - : `boolean`. Wenn `true`, wird der Code in alle Frames der aktuellen Seite eingefügt.

        Wenn der Wert `true` ist und `frameId` gesetzt wurde, tritt ein Fehler auf. (`frameId` und `allFrames` schließen sich gegenseitig aus.)

        Wenn der Wert `false` ist, wird der Code nur in den obersten Frame eingefügt.

        Der Standardwert ist `false`.

    - `code` {{optional_inline}}
      - : `string`. Der einzufügende Code als Zeichenfolge.

        > [!WARNING]
        > Verwenden Sie diese Eigenschaft nicht, um nicht vertrauenswürdige Daten in JavaScript einzufügen, da dies zu einem Sicherheitsproblem führen könnte.

    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei mit dem einzufügenden Code.
        - In Firefox werden relative URLs, die nicht am Stammverzeichnis der Erweiterung beginnen, relativ zur URL der aktuellen Seite aufgelöst.
        - In Chrome werden diese URLs relativ zur Basis-URL der Erweiterung aufgelöst.

        Damit dies browserübergreifend funktioniert, können Sie den Pfad als relative URL angeben, die am Stammverzeichnis der Erweiterung beginnt, zum Beispiel `"/path/to/script.js"`.

    - `frameId` {{optional_inline}}
      - : `integer`. Der Frame, in den der Code eingefügt werden soll.

        Der Standardwert ist `0` (der oberste Frame).

    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code in eingebettete `about:blank`- und `about:srcdoc`-Frames eingefügt, sofern Ihre Erweiterung Zugriff auf deren übergeordnetes Dokument hat. In oberste `about:`-Frames kann der Code nicht eingefügt werden.

        Der Standardwert ist `false`.

    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. Der früheste Zeitpunkt, zu dem der Code in den Tab eingefügt wird.

        Der Standardwert ist `"document_idle"`.

### Rückgabewert

Eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), die mit einem Array von Objekten erfüllt wird. Die Werte des Arrays repräsentieren das Ergebnis des Skripts in jedem Frame, in den es eingefügt wurde.

Das Ergebnis des Skripts ist der zuletzt ausgewertete Ausdruck. Dies entspricht ungefähr der Ausgabe (den Ergebnissen, nicht der Ausgabe von `console.log()`), die Sie erhalten würden, wenn Sie das Skript in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausführen. Betrachten Sie beispielsweise ein Skript wie dieses:

```js
let foo = "my result";
foo;
```

Hier enthält das Ergebnisarray die Zeichenfolge `"my result"` als Element.

Die Ergebniswerte müssen sich mit dem [Structured-Clone-Algorithmus kopieren lassen](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) (siehe [Algorithmus zum Kopieren von Daten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).

> [!NOTE]
> Der letzte Ausdruck kann auch eine [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) sein. Diese Funktion wird jedoch von der Bibliothek [webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) nicht unterstützt.

Wenn ein Fehler auftritt, wird die Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Dieses Beispiel führt einen einzeiligen Codeausschnitt im aktiven Tab aus:

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

Dieses Beispiel führt ein Skript aus einer Datei namens `"content-script.js"` aus, die mit der Erweiterung ausgeliefert wird. Das Skript wird im aktiven Tab ausgeführt, sowohl im Hauptdokument als auch in untergeordneten Frames:

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

Dieses Beispiel führt ein Skript aus einer Datei namens `"content-script.js"` aus, die mit der Erweiterung ausgeliefert wird. Das Skript wird im Tab mit der ID `2` ausgeführt:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-executeScript)-API. Diese Dokumentation wurde aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
