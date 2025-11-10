---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Führt JavaScript im Fenster aus, an das die Entwicklertools angehängt sind.

Dies ist in gewisser Weise vergleichbar mit der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Skript anzuhängen, jedoch mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser typischerweise in ihrer Entwicklertools-Konsole bereitstellen](#helfer): zum Beispiel die Verwendung von "$0", um auf das derzeit im Inspektor ausgewählte Element zu verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen sehen, die von Skripten vorgenommen wurden, die die Seite geladen hat. Dies steht im Gegensatz zu Inhalts-Skripten, die die Seite [so sehen, wie sie existieren würde, wenn keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolierung, die Inhalts-Skripte bieten, ein bewusstes Sicherheitsmerkmal ist, das es erschwert, dass bösartige oder unkooperative Webseiten die WebExtensions-APIs verwirren oder untergraben, indem sie DOM-Funktionen und -Eigenschaften neu definieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz aufheben, indem Sie `eval()` verwenden, und Sie sollten Inhalts-Skripte verwenden, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Haupt-Frame der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (zum Beispiel darf es nicht zu einer Funktion oder einem Objekt ausgewertet werden, das Funktionen enthält). Standardmäßig sieht das Skript keine an die Seite angehängten Inhalts-Skripte.

Sie können `eval()` nicht auf privilegierte Browserfenster wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter angeben, der Optionen enthält, um das Skript in einem anderen Frame oder im Kontext angehängter Inhalts-Skripte auszuwerten. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die `eval()`-Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das das ausgewertete Ergebnis des Skripts oder einen Fehler auflöst.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem eingesetzten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im Entwicklertools-Inspektor ausgewählt ist.
- `inspect()`
  - : Gibt ein Objekt, wenn es sich um ein DOM-Element auf der Seite handelt, wird es im Entwicklertools-Inspektor ausgewählt, andernfalls wird eine Objektvorschau in der Konsole erstellt.

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
  - : `object`. Optionen für die Funktion (Beachtem Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:
    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Haupt-Frame des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Ausdruck im Kontext von Inhalts-Skripten ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhalts-Skripte an die Seite angehängt haben, oder ein Fehler in den Entwicklertools wird ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Den Ausdruck im Kontext eines Inhalts-Skripts auswerten, das von einer anderen Erweiterung angehängt wurde, deren Herkunft mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `Array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks, und Element 1 wird `undefined` sein.

Wenn ein Fehler aufgetreten ist, wird Element 0 `undefined` sein, und Element 1 wird ein Objekt enthalten, das Details zum Fehler gibt. Zwei verschiedene Arten von Fehlern werden unterschieden:

- Fehler bei der Auswertung des JavaScripts (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `value`, die mehr Details gibt.

- andere Fehler (zum Beispiel ein Ausdruck, der sich zu einem Objekt auswertet, das nicht als JSON dargestellt werden kann). In diesem Fall enthält Element 1:
  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

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

Dies verwendet den `$0`-Helfer, um die Hintergrundfarbe des Elements zu setzen, das derzeit im Inspektor ausgewählt ist:

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
