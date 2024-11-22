---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{AddonSidebar}}

Führt JavaScript im Fenster aus, an das die DevTools angehängt sind.

Dies ist etwas ähnlich zur Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Skript anzuhängen, jedoch mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser typischerweise in ihrer DevTools-Konsolenimplementierung bereitstellen](#helfer): Zum Beispiel wird "$0" verwendet, um auf das derzeit im Inspektor ausgewählte Element zu verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen wahrnehmen, die durch Skripte, die von der Seite geladen wurden, vorgenommen wurden. Dies steht im Gegensatz zu Inhalts-Skripten, die die Seite [so sehen würden, als ob keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolierung durch Inhalts-Skripte ein bewusstes Sicherheitsmerkmal ist, das es erschweren soll, dass bösartige oder unkooperative Webseiten die WebExtensions-APIs verwirren oder untergraben, indem sie DOM-Funktionen und -Eigenschaften neu definieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Verwendung von `eval()` außer Kraft setzen, und sollten Inhalts-Skripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es sich beispielsweise nicht zu einer Funktion oder einem Objekt auswerten darf, das Funktionen enthält). Standardmäßig sieht das Skript keine Inhalts-Skripte, die der Seite hinzugefügt wurden.

Sie können `eval()` nicht in privilegierten Browserfenstern wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter bereitstellen, der Optionen zum Auswerten des Skripts in einem anderen Frame oder im Kontext von angehängten Inhalts-Skripten umfasst. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die `eval()`-Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf das ausgewertete Ergebnis des Skripts oder auf einen Fehler aufgelöst wird.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem eingespritzten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im DevTools-Inspektor ausgewählt ist.
- `inspect()`
  - : Gibt ein Objekt, falls es sich um ein DOM-Element auf der Seite handelt, wählt es im DevTools-Inspektor aus, andernfalls wird eine Objektvorschau in der Konsole erstellt.

[Sehen Sie sich einige Beispiele an.](#beispiele)

## Syntax

```js-nolint
let evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
```

### Parameter

- `expression`
  - : `string`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Der String muss sich zu einem Objekt auswerten lassen, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Zum Beispiel darf `expression` sich nicht zu einer Funktion auswerten.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:

    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies ausgelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext der Inhalts-Skripte ausgewertet, die diese Erweiterung der Seite hinzugefügt hat. Wenn Sie diese Option festlegen, müssen tatsächlich einige Inhalts-Skripte der Seite hinzugefügt worden sein, sonst wird eine DevTools-Fehlermeldung ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines Inhalts-Skripts aus, das von einer anderen Erweiterung hinzugefügt wurde, deren Ursprung hier angegebenen Wert entspricht. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 ist `undefined`.

Wenn ein Fehler aufgetreten ist, ist Element 0 `undefined`, und Element 1 enthält ein Objekt mit Details über den Fehler. Es werden zwei verschiedene Arten von Fehlern unterschieden:

- Fehler bei der Auswertung des JavaScripts (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `value`, die weitere Details angibt.

- Andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

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

Dies verwendet den `$0`-Helfer, um die Hintergrundfarbe des im Inspektor ausgewählten Elements festzulegen:

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

Dies verwendet den `inspect()`-Helfer, um das erste `<h1>` Element auf der Seite auszuwählen:

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
