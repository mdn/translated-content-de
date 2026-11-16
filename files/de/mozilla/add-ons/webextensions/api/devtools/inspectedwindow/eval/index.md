---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: 7036af62231b680d0ef5229bb034ce84440ba690
---

Führt JavaScript in dem Fenster aus, mit dem die Entwicklertools verbunden sind.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content Script einzubinden, unterscheidet sich jedoch in zwei wesentlichen Punkten:

Erstens kann das JavaScript [spezielle Befehle verwenden, die Browser üblicherweise in der Konsole ihrer Entwicklertools bereitstellen](#hilfsfunktionen): Beispielsweise können Sie mit „$0“ auf das im Inspector ausgewählte Element verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen sehen, die von Skripten vorgenommen wurden, die die Seite geladen hat. Content Scripts sehen die Seite dagegen [so, wie sie ohne geladene Seitenskripte aussehen würde](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolation von Content Scripts eine bewusste Sicherheitsmaßnahme ist. Sie soll verhindern, dass bösartige oder nicht kooperierende Webseiten WebExtensions-APIs durch das Neudefinieren von DOM-Funktionen und -Eigenschaften beeinflussen oder unterlaufen. Seien Sie daher besonders vorsichtig, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und verwenden Sie Content Scripts, sofern Sie `eval()` nicht benötigen.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Es muss einen Wert ergeben, der als JSON dargestellt werden kann. Beispielsweise darf das Ergebnis weder eine Funktion noch ein Objekt sein, das Funktionen enthält. Standardmäßig hat das Skript keinen Zugriff auf Content Scripts, die in die Seite eingebunden sind.

Sie können `eval()` nicht in privilegierten Browserfenstern wie „about:addons“ aufrufen.

In Firefox 153 und höher muss der Benutzer der Erweiterung Zugriff auf das Dateischema gewährt haben, damit `eval()` für eine `file://`-URL aufgerufen werden kann. Ohne diese Berechtigung wird das Promise mit einem Fehler zurückgewiesen. Mit {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} können Sie prüfen, ob der Benutzer der Erweiterung diese Berechtigung erteilt hat.

Optional können Sie einen `options`-Parameter übergeben, um das Skript in einem anderen Frame oder im Kontext eingebundener Content Scripts auszuwerten. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit dem Ergebnis der Skriptauswertung oder mit einem Fehler erfüllt wird.

## Hilfsfunktionen

Das Skript erhält Zugriff auf mehrere Objekte, die dem eingebundenen Skript die Interaktion mit den Entwicklertools ermöglichen. Die folgenden Hilfsfunktionen werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im Inspector der Entwicklertools ausgewählt ist.
- `inspect()`
  - : Wenn das übergebene Objekt ein DOM-Element auf der Seite ist, wird es im Inspector der Entwicklertools ausgewählt. Andernfalls wird eine Vorschau des Objekts in der Konsole erstellt.

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
  - : `string`. Der auszuwertende JavaScript-Ausdruck. Der Ausdruck muss ein Objekt ergeben, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Beispielsweise darf `expression` keine Funktion ergeben.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion:

    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines Content Scripts aus, das von einer anderen Erweiterung eingebunden wurde und dessen Herkunft mit dem hier angegebenen Wert übereinstimmt. Dies hat Vorrang vor `useContentScriptContext`.
    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn Sie diesen Wert weglassen, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `scriptExecutionContext` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines Content Scripts einer Erweiterung aus, das mit der angegebenen Herkunft übereinstimmt. Wenn dieser Wert angegeben ist, hat `scriptExecutionContext` Vorrang vor der Einstellung `true` für `useContentScriptContext`.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext eines beliebigen Content Scripts ausgewertet, das diese Erweiterung in die Seite eingebunden hat. Wenn Sie diese Option setzen, muss die Erweiterung tatsächlich Content Scripts in die Seite eingebunden haben. Andernfalls wird ein Devtools-Fehler ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` aus zwei Elementen erfüllt wird.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 den Wert `undefined`.

Wenn ein Fehler aufgetreten ist, enthält Element 0 den Wert `undefined` und Element 1 ein Objekt mit Einzelheiten zum Fehler. Dabei werden zwei Arten von Fehlern unterschieden:

- Fehler bei der Auswertung des JavaScripts (beispielsweise Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isException` mit dem Wert `true`
  - eine String-Eigenschaft `value` mit weiteren Einzelheiten.

- andere Fehler (beispielsweise ein Ausdruck, der ein Objekt ergibt, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isError` mit dem Wert `true`
  - eine String-Eigenschaft `code` mit einem Fehlercode.

## Beispiele

Dieses Beispiel prüft, ob jQuery im untersuchten Fenster definiert ist, und protokolliert das Ergebnis. In einem Content Script würde dies nicht funktionieren, da das Content Script jQuery nicht sehen könnte, selbst wenn es definiert wäre.

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

### Beispiele für Hilfsfunktionen

Dieses Beispiel verwendet die Hilfsfunktion `$0`, um die Hintergrundfarbe des Elements festzulegen, das derzeit im Inspector ausgewählt ist:

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

Dieses Beispiel verwendet die Hilfsfunktion `inspect()`, um das erste \<h1>-Element auf der Seite auszuwählen:

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
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools)-API von Chromium.

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
