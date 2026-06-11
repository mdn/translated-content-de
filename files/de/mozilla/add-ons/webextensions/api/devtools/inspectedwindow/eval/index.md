---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: c4bcbe7056da00277112f21b94966e0443c39805
---

Führt JavaScript in dem Fenster aus, an das die Devtools angehängt sind.

Dies ist etwas ähnlich wie die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhaltsskript anzuhängen, aber mit zwei Hauptunterschieden:

Erstens kann das JavaScript eine Reihe von [Spezialbefehlen verwenden, die Browser typischerweise in ihrer Devtools-Konsolenumgebung bereitstellen](#helfer): Zum Beispiel durch die Verwendung von "$0", um auf das Element zu verweisen, das derzeit im Inspektor ausgewählt ist.

Zweitens kann das von Ihnen ausgeführte JavaScript alle Änderungen sehen, die durch Skripte vorgenommen wurden, die die Seite geladen hat. Dies steht im Gegensatz zu Inhaltsskripten, die die Seite [sehen würden, wie sie existieren würde, wenn keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die von Inhaltsskripten bereitgestellte Isolierung eine bewusste Sicherheitsfunktion ist, die es schwieriger machen soll, dass böswillige oder unkooperative Webseiten die WebExtensions-APIs verwirren oder unterwandern, indem sie DOM-Funktionen und -Eigenschaften neu definieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und dass Sie Inhaltsskripte verwenden sollten, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es beispielsweise nicht zu einer Funktion oder einem Objekt ausgewertet werden darf, das Funktionen enthält). Standardmäßig sieht das Skript keine Inhaltsskripte, die an die Seite angehängt sind.

Sie können `eval()` nicht in privilegierten Browserfenstern wie "about:addons" aufrufen.

In Firefox 153 und später erfordert der Aufruf von `eval()` auf einer `file://`-URL, dass der Erweiterung vom Benutzer der Zugriff auf das Dateischema gewährt wird. Ohne diese Berechtigung wird das Versprechen mit einem Fehler abgelehnt. Verwenden Sie {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}, um zu überprüfen, ob der Benutzer der Erweiterung diese Berechtigung erteilt hat.

Sie können optional einen `options`-Parameter angeben, der Optionen zum Auswerten des Skripts in einem anderen Frame oder im Kontext von angehängten Inhaltsskripten enthält. Beachten Sie, dass Firefox den `options`-Parameter noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich auf das ausgewertete Ergebnis des Skripts oder einen Fehler auflöst.

## Helfer

Das Skript hat Zugriff auf eine Reihe von Objekten, die dem eingeschleusten Skript helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das Element, das derzeit im Devtools-Inspektor ausgewählt ist.
- `inspect()`
  - : Wenn ein Objekt übergeben wird und es sich um ein DOM-Element auf der Seite handelt, wird es im Devtools-Inspektor ausgewählt, andernfalls wird eine Vorschau des Objekts in der Konsole erstellt.

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
  - : `string`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Der String muss zu einem Objekt ausgewertet werden, das als JSON dargestellt werden kann, andernfalls wird eine Ausnahme ausgelöst. Beispielsweise darf `expression` nicht zu einer Funktion ausgewertet werden.
- `options` {{optional_inline}}
  - : `object`. Optionen für die Funktion (Hinweis: Firefox unterstützt diese Optionen noch nicht), wie folgt:
    - `frameURL` {{optional_inline}}
      - : `string`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dies weggelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `boolean`. Wenn `true`, führen Sie den Ausdruck im Kontext von etwaigen Inhaltsskripten aus, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen Sie tatsächlich einige Inhaltsskripte an die Seite angehängt haben, sonst wird ein DevTools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Wertet den Ausdruck im Kontext eines Inhaltsskripts aus, das von einer anderen Erweiterung angehängt wurde, deren Ursprung mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, enthält Element 0 das Ergebnis der Auswertung des Ausdrucks und Element 1 wird `undefined` sein.

Wenn ein Fehler aufgetreten ist, wird Element 0 `undefined` sein und Element 1 wird ein Objekt enthalten, das Details über den Fehler gibt. Es werden zwei verschiedene Arten von Fehlern unterschieden:

- Fehler, die bei der Auswertung des JavaScripts aufgetreten sind (zum Beispiel Syntaxfehler im Ausdruck). In diesem Fall wird Element 1 enthalten:
  - eine boolesche Eigenschaft `isException`, auf `true` gesetzt
  - eine string-Eigenschaft `value`, die weitere Details angibt.

- andere Fehler (zum Beispiel ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall wird Element 1 enthalten:
  - eine boolesche Eigenschaft `isError`, auf `true` gesetzt
  - eine string-Eigenschaft `code`, die einen Fehlercode enthält.

## Beispiele

Dies testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhaltsskript nicht funktionieren würde, da das Inhaltsskript jQuery selbst bei dessen Definition nicht sehen würde.

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
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.
