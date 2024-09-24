---
title: "Selection: getComposedRanges() Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Die **`Selection.getComposedRanges()`**-Methode gibt ein Array von {{domxref("StaticRange")}}-Objekten zurück, die die aktuellen Auswahlbereiche darstellen, und kann Bereiche zurückgeben, die potenziell Schatten-Grenzen überschreiten.

Da die Endpunkte des Auswahlbereichs innerhalb eines Schattenbaums oder sogar verschiedener Schattenbäume liegen können und diese möglicherweise geschlossen sind, kann die Methode standardmäßig keine Knoten innerhalb eines Schattenbaums zurückgeben.
Wenn die Methode eine Auswahl zurückgeben soll, die Knoten innerhalb von Schattenbäumen enthält, müssen die {{domxref("ShadowRoot")}}-Objekte für diese Bäume als Argumente an die Methode übergeben werden.
Wenn keine entsprechenden Wurzeln bereitgestellt werden und der Anfang oder das Ende der Auswahl innerhalb eines Schattenbaums sind, wird der zurückgegebene Bereich neu festgelegt, um den Host der Schattenwurzel anstelle eines Knotens innerhalb der Wurzel einzuschließen.

Die zurückgegebenen Bereiche stellen den Bereich zum Zeitpunkt des Aufrufs von `getComposedRanges()` dar.
Wenn das DOM oder ein Schatten-DOM verändert wird, ist der ausgewählte Bereich wahrscheinlich falsch.
Anwendungscode kann einen {{domxref("MutationObserver")}} verwenden, um DOM-Veränderungen zu überwachen und dann {{domxref("Selection.setBaseAndExtent()")}} aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von {{domxref("Selection.getRangeAt()")}} verwendet werden, wenn Auswahlbereiche gewählt werden müssen, die potenziell Schattenwurzelgrenzen überschreiten können.
> {{domxref("Selection.getRangeAt()")}} ist sich Schattenwurzeln nicht bewusst.
> Der zurückgegebene Bereich ist nicht spezifiziert und variiert zwischen den Browsern.

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(shadowRoot1)
getComposedRanges(shadowRoot1, shadowRoot2)
getComposedRanges(shadowRoot1, shadowRoot2, /* …, */ shadowRootN)
```

### Parameter

- `shadowRoot1`, …, `shadowRootN`
  - : Null oder mehr {{domxref("ShadowRoot")}}-Argumente.
    Wenn ein Endpunkt einer Auswahl innerhalb einer der bereitgestellten Schattenwurzeln liegt, kann der Bereich Knoten innerhalb seines entsprechenden Schatten-DOM-Baums zurückgeben.
    Andernfalls, wenn die Auswahl eine Schatten-Grenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich angepasst, um das gesamte Hostelement für die Schattenwurzel einzuschließen.

### Rückgabewert

Ein Array von {{domxref("StaticRange")}}-Objekten, die die ausgewählten Bereiche innerhalb des zusammengesetzten (abgeflachten) Baums des Dokuments darstellen.
Zum Zeitpunkt des Schreibens erwartet die Spezifikation, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über Inline-Schattenwurzeln hinweg

Dieses Beispiel demonstriert, wie sich `getComposedRanges()` verhält, sowohl wenn Schattenwurzeln übergeben werden als auch wenn nicht, und kontrastiert mit {{domxref("Selection.getRangeAt()")}}.

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM und in offenen und geschlossenen Schattenwurzeln definiert ist, den Bereich für die Auswahl mit den verschiedenen Ansätzen zu kopieren und dann den Bereich erneut anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit einigen `<span>`-Elementen, an die wir mithilfe von JavaScript eine Schattenwurzel anhängen werden.
Wir fügen auch einige Schaltflächen zum Kopieren und Anwenden der Auswahl mit einer Reihe von verschiedenen Methoden hinzu.

```html
<p>
  DOM Text Eins<span id="openHost"></span>DOM Text Zwei<span
    id="closedHost"></span
  >DOM Text Drei
</p>
```

```html
<button id="copySelection">Bereich kopieren, ohne Schattenwurzeln zu übergeben</button>
<button id="copySelectionWithShadowRoots">
  Bereich kopieren, Schattenwurzeln übergeben
</button>
<button id="applySelection">Auswahl anwenden</button>
<hr />
<button id="copySelectionRangeAt">Bereich mit getRangeAt() kopieren</button>
<button id="applySelectionGetRangeAt">Auswahl anwenden</button>
```

#### CSS

Das CSS macht nichts Interessantes. Wir ordnen lediglich die Schaltflächen vertikal an, damit sie leichter zu lesen sind.

```css
button {
  display: block;
}
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Der Großteil der Arbeit erfolgt im JavaScript.
Zunächst protokollieren wir, wenn `getComposedRanges()` nicht unterstützt wird, obwohl wir den Rest des Beispiels nicht daran hindern, es zu verwenden.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() Methode wird in diesem Browser nicht unterstützt");
}
```

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die beiden `<span>`-Elemente an, die wir im HTML erstellt haben.
Diese enthalten einfachen Text in fetter Schrift, sodass wir die Schattenknoten leicht identifizieren können, wenn das HTML gerendert wird.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Offener Schatten-DOM-Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Geschlossener Schatten-DOM-Text</b>`;
```

Als nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` zu erhalten, wenn die ersten beiden Schaltflächen geklickt werden.
Die erste Schaltfläche ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während die zweite sowohl die offenen als auch die geschlossenen Schattenwurzeln übergibt.
In beiden Fällen wird der zusammengesetzte Bereich zu einer Variablen gespeichert.

```js
const copySelectionButton = document.querySelector("#copySelection");
let composedRangeSelection = null;
copySelectionButton.addEventListener("click", () => {
  composedRangeSelection = window.getSelection().getComposedRanges()[0];
  log(`Auswahl kopiert (keine Schattenwurzeln übergeben)`);
});

const copySelectionWithShadowRootsButton = document.querySelector(
  "#copySelectionWithShadowRoots",
);
copySelectionWithShadowRootsButton.addEventListener("click", () => {
  composedRangeSelection = window
    .getSelection()
    .getComposedRanges(openRoot, closedRoot)[0];
  log(`Auswahl wurde kopiert (Schattenwurzeln übergeben)`);
});
```

Der Handler für die Schaltfläche "Auswahl anwenden" ist unten dargestellt.
Er ruft {{domxref("Selection.setBaseAndExtent()", "setBaseAndExtent()")}} auf, um die aktuelle Auswahl zu setzen, und übergibt die Knoten und Offsets aus dem gespeicherten Bereich.

```js
const applySelectionButton = document.querySelector("#applySelection");
applySelectionButton.addEventListener("click", () => {
  if (composedRangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        composedRangeSelection.startContainer,
        composedRangeSelection.startOffset,
        composedRangeSelection.endContainer,
        composedRangeSelection.endOffset,
      );
    log(`Auswahl angewendet`);
  } else {
    log(`Keine Auswahl zum Anwenden`);
  }
});
```

Der letzte Teil des Codes definiert Schaltflächen, um den aktuellen Auswahlsbereich mithilfe von {{domxref("Selection.getRangeAt()")}} zu kopieren und dann die Auswahl erneut anzuwenden.

```js
const copySelectionRangeAtButton = document.querySelector(
  "#copySelectionRangeAt",
);
let rangeSelection = null;
copySelectionRangeAtButton.addEventListener("click", () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    log(`Auswahl kopiert mit getRangeAt()`);
    rangeSelection = selection.getRangeAt(0);
  } else {
    log(`Kein Bereich ausgewählt`);
  }
});

const applySelectionGetRangeAtButton = document.querySelector(
  "#applySelectionGetRangeAt",
);
applySelectionGetRangeAtButton.addEventListener("click", () => {
  if (rangeSelection) {
    window
      .getSelection()
      .setBaseAndExtent(
        rangeSelection.startContainer,
        rangeSelection.startOffset,
        rangeSelection.endContainer,
        rangeSelection.endOffset,
      );
    log(`Auswahl angewendet`);
  } else {
    log(`Keine Auswahl zum Anwenden`);
  }
});
```

```html hidden
<pre id="log"></pre>
```

#### Ergebnisse

Das laufende Beispiel wird unten gezeigt. Wählen Sie Text in der oberen Zeile aus, beginnend mit normalem Text und endend in einem fetten Abschnitt, sodass Sie Knoten vom DOM in eine Schattenwurzel ausgewählt haben.
Wenn Sie "Bereich kopieren, Schattenwurzeln übergeben" auswählen und dann die Schaltfläche "Auswahl anwenden" benutzen, werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gewährt hat, auch wenn sie geschlossen ist.
Wenn Sie dann die Schaltfläche "Bereich kopieren, ohne Schattenwurzeln zu übergeben" wählen und dann anwenden, wird die Auswahl bis zum Ende des Textes in der Schattenwurzel erweitert.
Dies liegt daran, dass die Auswahl neu festgelegt wird, um das Ende des Hostknotens einzuschließen, da die `getComposedRanges()`-Methode keine Sichtbarkeit im Schattenbaum hatte.

Testen Sie auch, was passiert, wenn Sie die Schaltflächen "Bereich mit getRangeAt() kopieren" und "Auswahl anwenden" verwenden.
Sie sollten feststellen, dass der ausgewählte Bereich ziemlich willkürlich ist, wenn Sie in die Schattenwurzel eintreten, und es variiert je nach verwendetem Browser.

{{EmbedLiveSample('Auswahl über Inline-Schattenwurzeln hinweg', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, das Interface, zu dem es gehört.
