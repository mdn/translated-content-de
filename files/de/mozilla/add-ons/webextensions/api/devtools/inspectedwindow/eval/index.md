---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt JavaScript im Fenster aus, an das die DevTools angehängt sind.

Dies ist etwas ähnlich wie die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} zum Anhängen eines Inhaltsskripts, jedoch mit zwei wesentlichen Unterschieden:

Erstens kann das JavaScript eine Reihe von [Spezialbefehlen verwenden, die Browser typischerweise in ihrer DevTools-Konsolenumsetzung bereitstellen](#helfer): zum Beispiel die Verwendung von "$0", um auf das im Inspector aktuell ausgewählte Element zu verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen sehen, die an der Seite durch Skripte vorgenommen wurden, die von der Seite geladen wurden. Dies steht im Gegensatz zu Inhalts-Skripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die von Inhalts-Skripten bereitgestellte Isolation ein bewusstes Sicherheitsmerkmal ist, das es erschwert, dass bösartige oder kooperative Webseiten die WebExtensions-APIs verwirren oder untergraben, indem sie DOM-Funktionen und -Eigenschaften neu definieren. Das bedeutet, Sie müssen sehr vorsichtig sein, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und sollten Inhalts-Skripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es zum Beispiel sich nicht zu einer Funktion oder einem Objekt auswerten darf, das Funktionen enthält). Standardmäßig sieht das Skript keine an die Seite angehängten Inhalts-Skripte.

Sie können `eval()` nicht auf privilegierten Browserfenstern wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter bereitstellen, der Optionen umfasst, um das Skript in einem anderen Frame oder im Kontext von angehängten Inhalts-Skripten zu evaluieren. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich zu dem ausgewerteten Ergebnis des Skripts oder zu einem Fehler auflöst.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem injizierten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im DevTools Inspector ausgewählt ist.
- `inspect()`
  - : Wenn ein DOM-Element auf der Seite vorliegt, wird es im DevTools Inspector ausgewählt, andernfalls wird eine Objektvorschau in der Webkonsole erstellt.

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
  - : `string`. Der JavaScript-Ausdruck zur Auswertung. Der String muss sich zu einem Objekt auswerten lassen, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Zum Beispiel darf `expression` sich nicht zu einer Funktion auswerten.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:

    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext aller Inhalts-Skripte ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhalts-Skripte an die Seite anhängen, sonst wird ein DevTools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Evaluieren Sie den Ausdruck im Kontext eines durch eine andere Erweiterung angehängten Inhalts-Skripts, dessen Ursprung mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 wird `undefined` sein.

Wenn ein Fehler aufgetreten ist, wird Element 0 `undefined` sein, und Element 1 wird ein Objekt enthalten, das Einzelheiten zum Fehler gibt. Zwei verschiedene Arten von Fehlern werden unterschieden:

- Fehler, die bei der Auswertung des JavaScripts aufgetreten sind (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall wird Element 1 enthalten:

  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `value`, die weitere Details gibt.

- andere Fehler (zum Beispiel ein Ausdruck, der sich zu einem Objekt auswertet, das nicht als JSON darstellbar ist). In diesem Fall wird Element 1 enthalten:

  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dies prüft, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhalts-Skript nicht funktionieren würde, da selbst wenn jQuery definiert wäre, das Inhalts-Skript es nicht sehen würde.

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

### Helfer-Beispiele

Dies verwendet den `$0` Helfer, um die Hintergrundfarbe des Elements zu setzen, das derzeit im Inspector ausgewählt ist:

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

Dies verwendet den `inspect()` Helfer, um das erste `<h1>`-Element auf der Seite auszuwählen:

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
