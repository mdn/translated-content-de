---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Führt JavaScript im Fenster aus, mit dem die Entwicklertools verbunden sind.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} zum Anhängen eines Inhaltsskripts, jedoch mit zwei Hauptunterschieden:

Erstens kann das JavaScript einen Satz von [speziellen Befehlen verwenden, die Browser typischerweise in ihrer Entwicklertools-Konsole zur Verfügung stellen](#helfer): zum Beispiel die Verwendung von "$0", um sich auf das aktuell im Inspektor ausgewählte Element zu beziehen.

Zweitens kann das JavaScript, das Sie ausführen, alle Änderungen sehen, die durch Skripte, die die Seite geladen hat, vorgenommen wurden. Dies steht im Gegensatz zu Inhaltsskripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolierung, die Inhaltsskripte bieten, eine bewusste Sicherheitsmaßnahme ist, die es erschweren soll, dass böswillige oder unkooperative Webseiten die WebExtensions-APIs durch die Neudefinition von DOM-Funktionen und -Eigenschaften verwirren oder untergraben. Daher müssen Sie sehr vorsichtig sein, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und sollten Inhaltsskripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es z. B. nicht in eine Funktion oder ein Objekt ausgewertet werden darf, das Funktionen enthält). Standardmäßig sieht das Skript keine an die Seite angehängten Inhaltsskripte.

Sie können `eval()` nicht in privilegierten Browser-Fenstern wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter angeben, welcher Optionen zum Auswerten des Skripts in einem anderen Frame oder im Kontext der angehängten Inhaltsskripte enthält. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die `eval()`-Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich auf das ausgewertete Ergebnis des Skripts oder auf einen Fehler auflöst.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem injizierten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im Entwicklertools-Inspektor ausgewählt ist.
- `inspect()`
  - : Angenommen, ein Objekt ist ein DOM-Element auf der Seite, wird es im Entwicklertools-Inspektor ausgewählt, andernfalls wird eine Objektvorschau in der Webkonsole erstellt.

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
  - : `string`. Der auszuwertende JavaScript-Ausdruck. Der String muss sich zu einem Objekt auswerten lassen, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Zum Beispiel darf sich `expression` nicht zu einer Funktion auswerten lassen.
- `options` {{optional_inline}}

  - : `object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:

    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext von Inhaltsskripten ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhaltsskripte an die Seite angehängt haben, sonst wird ein Entwicklertools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines von einer anderen Erweiterung angehängten Inhaltsskripts aus, dessen Ursprung mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks, und Element 1 ist `undefined`.

Wenn ein Fehler aufgetreten ist, ist Element 0 `undefined`, und Element 1 enthält ein Objekt mit Details über den Fehler. Es werden zwei verschiedene Arten von Fehlern unterschieden:

- Fehler, die bei der Auswertung des JavaScripts aufgetreten sind (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isException`, gesetzt auf `true`
  - eine string-Eigenschaft `value`, die weitere Details gibt.

- andere Fehler (zum Beispiel ein Ausdruck, der sich zu einem Objekt auswertet, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:

  - eine boolesche Eigenschaft `isError`, gesetzt auf `true`
  - eine string-Eigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhaltsskript nicht funktionieren würde, da selbst wenn jQuery definiert wäre, das Inhaltsskript es nicht sehen würde.

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

Dieses Beispiel verwendet den `$0`-Helfer, um die Hintergrundfarbe des im Inspektor aktuell ausgewählten Elements zu setzen:

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

Dieses Beispiel verwendet den `inspect()`-Helfer, um das erste `<h1>`-Element auf der Seite auszuwählen:

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
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools)-API von Chromium.
