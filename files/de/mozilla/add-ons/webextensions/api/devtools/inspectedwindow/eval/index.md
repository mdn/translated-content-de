---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt JavaScript in dem Fenster aus, an das die Devtools angehängt sind.

Dies ist etwas ähnlich wie die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Skript anzuhängen, jedoch mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [Spezialbefehlen verwenden, die Browser typischerweise in ihrer Devtools-Konsole bereitstellen](#helfer): Zum Beispiel die Verwendung von "$0" um auf das aktuell im Inspector ausgewählte Element zu verweisen.

Zweitens kann das von Ihnen ausgeführte JavaScript alle Änderungen sehen, die durch Skripte vorgenommen wurden, die die Seite geladen hat. Dies steht im Gegensatz zu Inhalts-Skripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seiten-Skripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die durch Inhalts-Skripte bereitgestellte Isolierung ein bewusstes Sicherheitsmerkmal ist, das es böswilligen oder unkooperativen Webseiten erschweren soll, die WebExtensions-APIs durch Neudefinierung von DOM-Funktionen und -Eigenschaften zu verwirren oder zu manipulieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und Inhalts-Skripte verwenden sollten, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptrahmen der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es beispielsweise nicht zu einer Funktion oder einem Objekt ausgewertet werden darf, das Funktionen enthält). Standardmäßig sieht das Skript keine an die Seite angehängten Inhalts-Skripte.

Sie können `eval()` nicht für privilegierte Browserfenster wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter angeben, der Optionen zum Auswerten des Skripts in einem anderen Rahmen oder im Kontext angehängter Inhalts-Skripte enthält. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die `eval()`-Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf das ausgewertete Ergebnis des Skripts oder auf einen Fehler aufgelöst wird.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem eingefügten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Hilfsmittel werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz zu dem Element, das aktuell im Devtools-Inspector ausgewählt ist.
- `inspect()`
  - : Wenn ein Objekt angegeben wird, das ein DOM-Element auf der Seite ist, wird es im Devtools-Inspector ausgewählt, ansonsten wird eine Objektvorschau in der Webkonsole erstellt.

[Siehe einige Beispiele.](#beispiele)

## Syntax

```js-nolint
let evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
```

### Parameter

- `expression`
  - : `string`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Der String muss zu einem Objekt ausgewertet werden, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Zum Beispiel darf `expression` nicht zu einer Funktion ausgewertet werden.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion (Beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:

    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Rahmens, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Hauptrahmen des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext aller Inhalts-Skripte ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhalts-Skripte an die Seite angehängt haben, sonst wird ein Devtools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Bewerten Sie den Ausdruck im Kontext eines Inhalts-Skripts, das von einer anderen Erweiterung angehängt wurde und dessen Ursprung hier übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` mit zwei Elementen erfüllt wird.

Falls kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 wird `undefined` sein.

Wenn ein Fehler aufgetreten ist, wird Element 0 `undefined` sein und Element 1 enthält ein Objekt mit Details über den Fehler. Es werden zwei verschiedene Fehlerarten unterschieden:

- Fehler, die bei der Auswertung des JavaScript aufgetreten sind (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isException`, gesetzt auf `true`
  - eine String-Eigenschaft `value`, die weitere Details gibt.

- andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isError`, gesetzt auf `true`
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dies testet, ob jQuery im inspizierten Fenster definiert ist und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhalts-Skript nicht funktionieren würde, weil selbst wenn jQuery definiert wäre, das Inhalts-Skript es nicht sehen würde.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkjQuery = "typeof jQuery !== 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkjQuery).then(handleResult);
});
```

### Helferbeispiele

Dies verwendet den `$0`-Helfer, um die Hintergrundfarbe des aktuell im Inspector ausgewählten Elements festzulegen:

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(evalString).then(handleResult);
});
```

Dies verwendet den `inspect()`-Helfer, um das erste \<h1>-Element auf der Seite auszuwählen:

```js
const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(inspectString).then(handleResult);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.

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
