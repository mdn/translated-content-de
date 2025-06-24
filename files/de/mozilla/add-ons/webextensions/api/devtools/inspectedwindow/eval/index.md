---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Führt JavaScript in dem Fenster aus, an das die Devtools angehängt sind.

Das ist ähnlich wie die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhaltsskript anzuhängen, hat aber zwei Hauptunterschiede:

Erstens kann das JavaScript eine Reihe von [speziellen Befehlen verwenden, die Browser normalerweise in ihrer Devtools-Konsolenimplementierung bereitstellen](#helfer): Zum Beispiel die Verwendung von "$0", um auf das im Inspektor aktuell ausgewählte Element zu verweisen.

Zweitens kann das ausgeführte JavaScript alle Änderungen sehen, die durch Skripte, die die Seite geladen hat, vorgenommen wurden. Dies steht im Gegensatz zu Inhaltsskripten, die die Seite [sehen, wie sie existieren würde, wenn keine Seitenskripte geladen wären](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access). Beachten Sie jedoch, dass die Isolation, die durch Inhaltsskripte bereitgestellt wird, ein bewusstes Sicherheitsmerkmal ist, das dazu bestimmt ist, es böswilligen oder unkooperativen Webseiten zu erschweren, WebExtensions-APIs durch Neudefinition von DOM-Funktionen und -Eigenschaften zu verwirren oder zu untergraben. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie diesen Schutz durch die Verwendung von `eval()` aufheben, und dass Sie Inhaltsskripte verwenden sollten, es sei denn, Sie müssen `eval()` verwenden.

Das Skript wird standardmäßig im Hauptframe der Seite ausgewertet. Das Skript muss zu einem Wert ausgewertet werden, der als JSON dargestellt werden kann (was bedeutet, dass es z.B. nicht zu einer Funktion oder einem Objekt ausgewertet werden darf, das Funktionen enthält). Standardmäßig sieht das Skript keine Inhaltsskripte, die an die Seite angehängt sind.

Sie können `eval()` nicht auf privilegierten Browserfenstern wie "about:addons" aufrufen.

Sie können optional einen `options`-Parameter angeben, der Optionen beinhaltet, um das Skript in einem anderen Frame oder im Kontext von angehängten Inhaltsskripten auszuwerten. Beachten Sie, dass Firefox den `options`-Parameter derzeit noch nicht unterstützt.

Die Funktion `eval()` gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf das ausgewertete Ergebnis des Skripts oder auf einen Fehler aufgelöst wird.

## Helfer

Das Skript erhält Zugriff auf eine Reihe von Objekten, die dem eingespritzten Skript dabei helfen, mit den Entwicklertools zu interagieren. Die folgenden Helfer werden derzeit unterstützt:

- `$0`
  - : Enthält eine Referenz auf das momentan im DevTools-Inspektor ausgewählte Element.
- `inspect()`
  - : Gibt bei einem Objekt, wenn es sich um ein DOM-Element auf der Seite handelt, dieses im DevTools-Inspektor an, andernfalls wird eine Objektvorschau in der Konsole erstellt.

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
  - : `String`. Der JavaScript-Ausdruck, der ausgewertet werden soll. Die Zeichenkette muss sich zu einem Objekt auswerten, das als JSON dargestellt werden kann, sonst wird eine Ausnahme ausgelöst. Beispielsweise darf sich `expression` nicht zu einer Funktion auswerten.
- `options` {{optional_inline}}
  - : `Object`. Optionen für die Funktion (beachten Sie, dass Firefox diese Optionen noch nicht unterstützt), wie folgt:
    - `frameURL` {{optional_inline}}
      - : `String`. Die URL des Frames, in dem der Ausdruck ausgewertet werden soll. Wenn dieses weggelassen wird, wird der Ausdruck im Hauptframe des Fensters ausgewertet.
    - `useContentScriptContext` {{optional_inline}}
      - : `Boolean`. Wenn `true`, wird der Ausdruck im Kontext von Inhaltsskripten ausgewertet, die diese Erweiterung an die Seite angehängt hat. Wenn Sie diese Option setzen, müssen tatsächlich einige Inhaltsskripte an die Seite angehängt worden sein, sonst wird ein DevTools-Fehler ausgelöst.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `String`. Der Ausdruck wird im Kontext eines Inhaltsskripts ausgewertet, das von einer anderen Erweiterung angehängt wurde und dessen Ursprung mit dem hier angegebenen Wert übereinstimmt. Dies überschreibt `useContentScriptContext`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` erfüllt wird, das zwei Elemente enthält.

Wenn kein Fehler aufgetreten ist, wird Element 0 das Ergebnis der Auswertung des Ausdrucks enthalten und Element 1 wird `undefined` sein.

Wenn ein Fehler aufgetreten ist, wird Element 0 `undefined` sein, und Element 1 wird ein Objekt enthalten, das Details über den Fehler gibt. Zwei verschiedene Fehlerarten werden unterschieden:

- Fehler, die bei der Auswertung des JavaScripts aufgetreten sind (z.B. Syntaxfehler im Ausdruck). In diesem Fall wird Element 1 folgendes enthalten:

  - eine boolesche Eigenschaft `isException`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `value`, die weitere Details angibt.

- andere Fehler (z.B. ein Ausdruck, der zu einem Objekt ausgewertet wird, das nicht als JSON dargestellt werden kann). In diesem Fall wird Element 1 folgendes enthalten:
  - eine boolesche Eigenschaft `isError`, die auf `true` gesetzt ist
  - eine String-Eigenschaft `code`, die einen Fehlercode enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel testet, ob jQuery im inspizierten Fenster definiert ist, und protokolliert das Ergebnis. Beachten Sie, dass dies in einem Inhaltsskript nicht funktionieren würde, da das Inhaltsskript jQuery nicht sehen würde, selbst wenn es definiert wäre.

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

### Beispiele für Helfer

Dieses Beispiel verwendet den `$0`-Helfer, um die Hintergrundfarbe des Elements festzulegen, das momentan im Inspektor ausgewählt ist:

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

Dieses Beispiel verwendet den `inspect()`-Helfer, um das erste \<h1>-Element auf der Seite auszuwählen:

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
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen von Quellcode müssen das obige Urheberrecht
// Hinweismeldung, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen das obige
// Urheberrecht Hinweismeldung, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien enthalten,
// die mit der Verteilung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEDER AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GARANTIE, EINSCHLIESSLICH ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WIRD ABGELEHNT. IN KEINEM FALL SOLL DER RECHTSINHABER ODER DIE
// BEITRAGENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE
// ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG
// VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST
// ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNGEN) HAFTBAR GEMACHT WERDEN
// AUF JEDER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER
// HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF
// IRGENDEINE WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTANDEN SIND, SELBST
// WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
