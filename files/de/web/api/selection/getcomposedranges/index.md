---
title: "Auswahl: getComposedRanges() Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: b7de17d478e35ef6b72fa1aa7231632e93710bcf
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Die **`Selection.getComposedRanges()`** Methode gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die die aktuellen Auswahlbereiche darstellen und Bereiche zurückgeben können, die möglicherweise Schattengrenzen überschreiten.

Da die Endpunkte des Auswahlbereichs innerhalb eines Schattendoms, oder sogar in verschiedenen Schattendoms liegen können und weil diese geschlossen sein könnten, kann die Methode standardmäßig keine Knoten aus einem Schattendom zurückgeben.
Wenn die Methode eine Auswahl zurückgeben muss, die Knoten innerhalb von Schattenbäumen einschließt, dann müssen die entsprechenden [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte für diese Bäume als Argumente an die Methode übergeben werden.
Falls keine entsprechenden Wurzeln bereitgestellt werden und der Start- oder Endpunkt der Auswahl sich innerhalb eines Schattenbaums befinden, wird der zurückgegebene Bereich neu abgegrenzt, um den Host des Schattenbäume anstelle eines bestimmten Knotens innerhalb der Wurzel einzuschließen.

Die zurückgegebenen Bereiche repräsentieren den Bereich zum Zeitpunkt, als `getComposedRanges()` aufgerufen wurde.
Wenn das DOM oder ein Schatten-DOM verändert wird, ist der ausgewählte Bereich wahrscheinlich inkorrekt.
Anwendungscode könnte einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) verwenden, um DOM-Veränderungen zu überwachen und dann [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet werden, wenn Bereiche ausgewählt werden, die möglicherweise Schattenwurzelgrenzen überschreiten.
> [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) ist sich Schattenwurzeln nicht bewusst.
> Der zurückgegebene Bereich ist nicht spezifiziert und variiert zwischen den Browsern.

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:

    - `shadowRoots` {{optional_inline}}
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten.
        Wenn ein Auswahlendpunkt innerhalb eines der bereitgestellten Schattenwurzeln liegt, kann der Bereich Knoten innerhalb des entsprechenden Schatten-DOM-Baumes zurückgeben.
        Andernfalls, wenn die Auswahl eine Schattengrenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich angepasst, um das gesamte Hostelement für die Schattenwurzel einzuschließen.

> [!NOTE]
> In der ursprünglichen Spezifikation wurden Schattenwurzeln als ein Satz von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) spezifiziert. Einige Browser unterstützen möglicherweise immer noch diese Legacy-Syntax.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten, die die ausgewählten Bereiche innerhalb des komponierten (abgeflachten) Baumes des Dokuments darstellen.
Zum Zeitpunkt der Erstellung der Spezifikation wird erwartet, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über inline Schattenwurzeln

Dieses Beispiel demonstriert, wie sich `getComposedRanges()` verhält, sowohl wenn Schattenwurzeln übergeben werden, als auch wenn nicht, und vergleicht dies mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt).

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM und in offenen und geschlossenen Schattendoms definiert ist, den Bereich der Auswahl mit den verschiedenen Methoden zu kopieren und dann den Bereich neu anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit einigen `<span>`-Elementen, an die wir einen Schattendoms mit JavaScript anhängen werden.
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

Das CSS macht nichts Interessantes.
Wir legen nur die Schaltflächen vertikal an, damit sie leichter zu lesen sind.

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
Zuerst protokollieren wir, ob `getComposedRanges()` nicht unterstützt wird, obwohl wir nicht tatsächlich verhindern, dass der Rest des Beispiels versucht, es zu verwenden.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() method not supported in this browser");
}
```

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die beiden `<span>`-Elemente, die wir im HTML erstellt haben.
Diese enthalten einfachen Fettdrucktext, damit wir die Schattenknoten leicht identifizieren können, wenn das HTML gerendert wird.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Als nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` zu erhalten, wenn die ersten beiden Schaltflächen geklickt werden.
Die erste Schaltfläche ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während die zweite beide Schattenwurzeln übergibt.
In beiden Fällen wird der komponierte Bereich in einer Variablen gespeichert.

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
    .getComposedRanges({ shadowRoots: [openRoot, closedRoot] })[0];
  log(`Selection has been copied (shadow roots passed)`);
});
```

Der Handler für die Schaltfläche "Auswahl anwenden" wird unten gezeigt.
Dieser ruft [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) auf, um die aktuelle Auswahl festzulegen, und übergibt dabei die Knoten und Versätze des gespeicherten Bereichs.

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
Wählen Sie Text in der oberen Zeile aus, beginnend mit normalem Text und endend in einem fetten Abschnitt, sodass Sie Knoten aus dem DOM in eine Schattenwurzel ausgewählt haben.
Wenn Sie "Bereich kopieren, Schattenwurzeln übergeben" auswählen und dann die Schaltfläche "Auswahl anwenden", werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gegeben hat, selbst wenn sie geschlossen ist.
Wenn Sie dann die Schaltfläche "Bereich kopieren, keine Schattenwurzeln übergeben" auswählen und dann anwenden, wird die Auswahl bis zum Ende des Textes in der Schattenwurzel erweitert.
Dies liegt daran, dass die Auswahl auf das Ende des Hostknotens neu abgegrenzt wird, da der `getComposedRanges()`-Methode keine Sichtbarkeit innerhalb des Schattenbaums gegeben wurde.

Testen Sie auch, was passiert, wenn Sie die Schaltflächen "Bereich mit getRangeAt() kopieren" und "Auswahl anwenden" verwenden.
Sie sollten feststellen, dass der ausgewählte Bereich ziemlich willkürlich ist, wenn Sie in die Schattenwurzel übergehen, und je nach verwendetem Browser variiert.

{{EmbedLiveSample('Auswahl über inline Schattenwurzeln', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
