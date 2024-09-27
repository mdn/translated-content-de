---
title: "Selection: getComposedRanges() Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Die Methode **`Selection.getComposedRanges()`** gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die die aktuellen Auswahlbereiche darstellen und kann Bereiche zurückgeben, die potenziell Schatten-Grenzen überschreiten.

Da die Endpunkte des Auswahlbereichs innerhalb eines Schattenbaums oder sogar verschiedener Schattenbäume liegen können und diese möglicherweise geschlossen sind, kann die Methode standardmäßig keine Knoten aus einem Schattenbaum zurückgeben.
Wenn die Methode eine Auswahl zurückgeben muss, die Knoten innerhalb von Schattenbäumen umfasst, müssen die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte für diese Bäume als Argumente an die Methode übergeben werden.
Wenn keine entsprechenden Wurzeln bereitgestellt werden und der Start- oder Endpunkt der Auswahl innerhalb eines Schattenbaums liegen, wird der zurückgegebene Bereich so neu abgesteckt, dass er den Host der Schattenwurzel anstelle eines Knotens innerhalb der Wurzel umfasst.

Die zurückgegebenen Bereiche repräsentieren den Bereich zu dem Zeitpunkt, zu dem `getComposedRanges()` aufgerufen wurde.
Wenn das DOM oder ein Schatten-DOM mutiert wird, ist der ausgewählte Bereich wahrscheinlich nicht korrekt.
Anwendungscode könnte einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) verwenden, um DOM-Mutationen zu überwachen und dann [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet werden, wenn Bereiche ausgewählt werden, die potenziell Schatten-Wurzelgrenzen überschreiten können.
> [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kennt keine Schatten-Wurzeln.
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
  - : Null oder mehr [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Argumente.
    Wenn ein Auswahl-Endpunkt innerhalb einer der bereitgestellten Schattenwurzeln liegt, kann der Bereich Knoten innerhalb seines entsprechenden Schatten-DOM-Baums zurückgeben.
    Andernfalls, wenn die Auswahl eine Schattengrenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich so angepasst, dass er das gesamte Hostelement für die Schattenwurzel umfasst.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten, die die ausgewählten Bereiche innerhalb des zusammengesetzten (abgeflachten) Baums des Dokuments repräsentieren.
Zum Zeitpunkt der Erstellung wird erwartet, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über Einbettende Schattenwurzeln

Dieses Beispiel zeigt, wie sich `getComposedRanges()` verhält, sowohl wenn Schattenwurzeln übergeben werden als auch wenn nicht, und wird mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kontrastiert.

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM definiert ist, sowie in offenen und geschlossenen Schattenwurzeln, den Bereich der Auswahl mit verschiedenen Methoden zu kopieren und dann den Bereich neu anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit einigen `<span>`-Elementen, an die wir im JavaScript eine Schattenwurzel anhängen werden.
Wir fügen auch einige Schaltflächen hinzu, um die Auswahl mit verschiedenen Methoden zu kopieren und anzuwenden.

```html
<p>
  DOM Text One<span id="openHost"></span>DOM Text Two<span
    id="closedHost"></span
  >DOM Text Three
</p>
```

```html
<button id="copySelection">Copy range not passing shadow roots</button>
<button id="copySelectionWithShadowRoots">
  Copy range passing shadow roots
</button>
<button id="applySelection">Apply selection</button>
<hr />
<button id="copySelectionRangeAt">Copy range with getRangeAt()</button>
<button id="applySelectionGetRangeAt">Apply selection</button>
```

#### CSS

Das CSS tut nichts Interessantes.
Wir ordnen lediglich die Schaltflächen vertikal an, damit sie leichter lesbar sind.

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
Zuerst protokollieren wir, wenn `getComposedRanges()` nicht unterstützt wird, obwohl wir nicht tatsächlich verhindern, dass der Rest des Beispiels versucht, es zu verwenden.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() method not supported in this browser");
}
```

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die beiden `<span>`-Elemente an, die wir im HTML erstellt haben.
Diese enthalten einfachen Text in Fettschrift, damit wir die Schattenknoten beim Rendern des HTML leicht identifizieren können.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Als Nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` zu erhalten, wenn die ersten beiden Schaltflächen geklickt werden.
Die erste Schaltfläche ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während die zweite beide Schattenwurzeln übergibt.
In beiden Fällen wird der zusammengesetzte Bereich einer Variablen zugewiesen.

```js
const copySelectionButton = document.querySelector("#copySelection");
let composedRangeSelection = null;
copySelectionButton.addEventListener("click", () => {
  composedRangeSelection = window.getSelection().getComposedRanges()[0];
  log(`Selection copied (no shadow roots passed)`);
});

const copySelectionWithShadowRootsButton = document.querySelector(
  "#copySelectionWithShadowRoots",
);
copySelectionWithShadowRootsButton.addEventListener("click", () => {
  composedRangeSelection = window
    .getSelection()
    .getComposedRanges(openRoot, closedRoot)[0];
  log(`Selection has been copied (shadow roots passed)`);
});
```

Der Handler für die Schaltfläche "Auswahl anwenden" wird unten gezeigt.
Dieser ruft [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) auf, um die aktuelle Auswahl festzulegen und die Knoten und Versätze des gespeicherten Bereichs zu übergeben.

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
    log(`Selection applied`);
  } else {
    log(`No selection to apply`);
  }
});
```

Der letzte Teil des Codes definiert Schaltflächen, um den aktuellen Auswahlbereich mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu kopieren und dann die Auswahl erneut anzuwenden.

```js
const copySelectionRangeAtButton = document.querySelector(
  "#copySelectionRangeAt",
);
let rangeSelection = null;
copySelectionRangeAtButton.addEventListener("click", () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    log(`Selection copied using getRangeAt()`);
    rangeSelection = selection.getRangeAt(0);
  } else {
    log(`No range selected`);
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
    log(`Selection applied`);
  } else {
    log(`No selection to apply`);
  }
});
```

```html hidden
<pre id="log"></pre>
```

#### Ergebnisse

Das laufende Beispiel wird unten gezeigt.
Wählen Sie Text in der obersten Zeile, beginnend mit einem normalen Text und endend in einem fett gedruckten Abschnitt aus, sodass Sie Knoten vom DOM in eine Schattenwurzel ausgewählt haben.
Wenn Sie "Bereich kopieren und Schattenwurzeln übergeben" und dann die Schaltfläche "Auswahl anwenden" auswählen, werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gewährt hat, selbst wenn sie geschlossen ist.
Wenn Sie dann die Schaltfläche "Bereich kopieren ohne Schattenwurzeln zu übergeben" auswählen und dann anwenden, wird sich die Auswahl bis zum Ende des Textes in der Schattenwurzel erstrecken.
Dies liegt daran, dass die Auswahl neu abgesteckt wird, um das Ende des Hostknotens einzuschließen, da die Methode `getComposedRanges()` keine Sichtbarkeit innerhalb des Schattenbaums hatte.

Testen Sie auch, was passiert, wenn Sie die Schaltflächen "Bereich mit getRangeAt() kopieren" und "Auswahl anwenden" verwenden.
Sie sollten feststellen, dass der ausgewählte Bereich relativ zufällig ist, wenn Sie in die Schattenwurzel übergehen, und sich je nach dem von Ihnen verwendeten Browser unterscheidet.

{{EmbedLiveSample('Selecting across inline shadow roots', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
