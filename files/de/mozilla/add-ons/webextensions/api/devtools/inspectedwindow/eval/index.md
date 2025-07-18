---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Führt JavaScript in dem Fenster aus, an das die Devtools angehängt sind.

Dies ist ein wenig wie die Nutzung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhaltsskript einzufügen, aber mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser typischerweise in ihrer Devtools-Konsole bereitstellen](#helfer): Zum Beispiel könne Sie "$0" benutzen, um auf das aktuell im Inspector ausgewählte Element zu verweisen.

Zweitens kann das auszuführende JavaScript alle Änderungen sehen, die von Skripten vorgenommen wurden, die die Seite geladen hat. Dies steht im Gegensatz zu Inhaltsskripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seiten-Skripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolation, die von Inhaltsskripten bereitgestellt wird, ein bewusstes Sicherheitsmerkmal ist, das es erschweren soll, bösartigen oder nicht kooperativen Webseiten die Verwirrung oder Unterwanderung von WebExtensions-APIs durch Neudefinition von DOM-Funktionen und -Eigenschaften zu ermöglichen. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Nutzung von `eval()` aufheben, und sollten Inhaltsskripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Standardmäßig wird das Skript im Haupt-Frame der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (das bedeutet zum Beispiel, dass es nicht zu einer Funktion oder einem Objekt, das Funktionen enthält, ausgewertet werden darf). Standardmäßig sieht das Skript keine an die Seite angehängten Inhaltsskripte.

Sie können `eval()` nicht in privilegierten Browserfenstern wie "about:addons" aufrufen.

Es ist optional, einen `options` Parameter bereitzustellen, der Optionen enthält, um das Skript in einem anderen Frame oder im Kontext von angehängten Inhaltsskripten auszuwerten. Beachten Sie, dass Firefox den `options` Parameter noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich zu dem ausgewerteten Ergebnis des Skriptes oder zu einem Fehler auflöst.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem eingefügten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Beinhaltet eine Referenz zu dem Element, das aktuell im Devtools Inspector ausgewählt ist.
- `inspect()`
  - : Wenn ein Objekt übergeben wird und es sich um ein DOM-Element auf der Seite handelt, wird es im Devtools Inspector ausgewählt, andernfalls wird eine Objektvorschau in der Konsole erstellt.

[Sehen Sie einige Beispiele.](#beispiele)

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
  - : `object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:
    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dieses weggelassen wird, wird der Ausdruck im Haupt-Frame des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext von allen Inhaltsskripten ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhaltsskripte an die Seite angehängt haben, sonst wird ein DevTools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines Inhaltsskripts aus, das von einer anderen Erweiterung angehängt wurde, deren Ursprung mit dem hier gegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array`, das zwei Elemente enthält, erfüllt wird.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks, und Element 1 ist `undefined`.

Wenn ein Fehler aufgetreten ist, ist Element 0 `undefined`, und Element 1 enthält ein Objekt, das Details über den Fehler gibt. Zwei verschiedene Arten von Fehlern werden unterschieden:

- Fehler, die beim Auswerten des JavaScripts aufgetreten sind (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `value`, die weitere Details gibt.

- andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

## Beispiele

Dies testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhaltsskript nicht funktionieren würde, da das Inhaltsskript es selbst dann nicht sehen würde, wenn jQuery definiert wäre.

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

Dies nutzt den `$0` Helfer, um die Hintergrundfarbe des Elements festzulegen, das aktuell im Inspector ausgewählt ist:

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

Dies nutzt den `inspect()` Helfer, um das erste \<h1> Element auf der Seite auszuwählen:

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
