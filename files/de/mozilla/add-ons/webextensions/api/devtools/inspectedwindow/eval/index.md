---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Führt JavaScript im Fenster aus, an das die Entwicklerwerkzeuge angehängt sind.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Skript anzuhängen, jedoch mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser normalerweise in ihrer Entwicklerwerkzeug-Konsole bereitstellen](#helfer): zum Beispiel die Verwendung von "$0", um sich auf das Element zu beziehen, das derzeit im Inspektor ausgewählt ist.

Zweitens kann das von Ihnen ausgeführte JavaScript alle Änderungen sehen, die auf der Seite von Skripten vorgenommen werden, die auf der Seite geladen werden. Dies steht im Gegensatz zu Inhalts-Skripten, die die Seite [sehen, wie sie existieren würde, wenn keine Seiten-Skripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolation, die durch Inhalts-Skripte geboten wird, eine geplante Sicherheitsfunktion ist, die es schwieriger machen soll, dass bösartige oder unkooperative Webseiten die WebExtensions-APIs durch Umdefinieren von DOM-Funktionen und -Eigenschaften verwirren oder unterlaufen. Dies bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und Sie sollten Inhalts-Skripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es beispielsweise nicht zu einer Funktion oder einem Objekt ausgewertet werden darf, das Funktionen enthält). Standardmäßig sieht das Skript keine Inhalts-Skripte, die der Seite angehängt sind.

Sie können `eval()` nicht auf privilegierten Browserfenstern wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter bereitstellen, der Optionen zum Auswerten des Skripts in einem anderen Frame oder im Kontext angehängter Inhalts-Skripte umfasst. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf das ausgewertete Ergebnis des Skripts oder auf einen Fehler aufgelöst wird.

## Helfer

Das Skript erhält Zugriff auf eine Anzahl von Objekten, die dem injizierten Skript helfen, mit den Entwicklerwerkzeugen zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das im Entwicklerwerkzeug-Inspektor derzeit ausgewählt ist.
- `inspect()`
  - : Wenn ein Objekt übergeben wird, das ein DOM-Element auf der Seite ist, wird es im Entwicklerwerkzeug-Inspektor ausgewählt, andernfalls wird eine Objektvorschau in der Konsole erstellt.

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
  - : `string`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Der String muss zu einem Objekt ausgewertet werden, das als JSON dargestellt werden kann, sonst wird eine Ausnahme ausgelöst. Zum Beispiel darf `expression` nicht zu einer Funktion ausgewertet werden.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion (Beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:
    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext aller Inhalts-Skripte ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhalts-Skripte an die Seite angehängt haben, sonst wird ein DevTools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Bewertet den Ausdruck im Kontext eines Inhalts-Skripts, das von einer anderen Erweiterung angehängt wurde, deren Herkunft mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array`, das zwei Elemente enthält, erfüllt wird.

Wenn kein Fehler auftritt, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 wird `undefined` sein.

Wenn ein Fehler auftritt, wird Element 0 `undefined` sein und Element 1 enthält ein Objekt mit Details zum Fehler. Zwei verschiedene Arten von Fehlern werden unterschieden:

- Fehler bei der Auswertung des JavaScripts (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine string-Eigenschaft `value`, die weitere Details liefert.

- andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine string-Eigenschaft `code`, die einen Fehlercode enthält.

## Beispiele

Dies testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhalts-Skript nicht funktionieren würde, da selbst wenn jQuery definiert wäre, das Inhalts-Skript es nicht sehen würde.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`DevTools error: ${error.code}`);
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

const checkJQuery = "typeof jQuery !== 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkJQuery).then(handleResult);
});
```

### Helfer-Beispiele

Dies verwendet den `$0`-Helfer, um die Hintergrundfarbe des Elements festzulegen, das derzeit im Inspektor ausgewählt ist:

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`DevTools error: ${error.code}`);
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
    console.log(`DevTools error: ${error.code}`);
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

## Browser-Kompatibilität

{{Compat}}

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
