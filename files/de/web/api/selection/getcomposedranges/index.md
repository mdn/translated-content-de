---
title: "Selection: getComposedRanges() Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ ApiRef("DOM") }}

Die **`Selection.getComposedRanges()`** Methode gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die die aktuellen Auswahlbereiche repräsentieren, und kann Bereiche zurückgeben, die potenziell Schatten-Grenzen überschreiten.

Da die Endpunkte des Auswahlbereichs innerhalb eines Schattenbaums oder sogar verschiedener Schattenbäume liegen können und diese möglicherweise geschlossen sind, kann die Methode standardmäßig keine Knoten aus einem Schattenbaum zurückgeben. Wenn die Methode eine Auswahl zurückgeben muss, die Knoten innerhalb von Schattenbäumen umfasst, müssen die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte für diese Bäume als Argumente an die Methode übergeben werden. Wenn keine entsprechenden Wurzeln bereitgestellt werden und der Start- oder Endpunkt der Auswahl sich innerhalb eines Schattenbaums befindet, wird der zurückgegebene Bereich neu abgerenzt, um den Host des Schattenwurzel einzuschließen, anstatt einen Knoten innerhalb der Wurzel.

Die zurückgegebenen Bereiche repräsentieren den Bereich zum Zeitpunkt des Aufrufs von `getComposedRanges()`. Wenn das DOM oder ein Schatten-DOM geändert wird, ist der ausgewählte Bereich wahrscheinlich fehlerhaft. Anwendungscode könnte einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) verwenden, um auf DOM-Änderungen zu überwachen und dann [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet werden, wenn Bereiche ausgewählt werden, die potenziell Schattenwurzel-Grenzen überschreiten können. [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) ist sich der Schattenwurzeln nicht bewusst. Der zurückgegebene Bereich ist nicht spezifiziert und variiert zwischen Browsern.

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden optionalen Eigenschaften:
    - `shadowRoots` {{optional_inline}}
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten. Wenn ein Auswahlendpunkt innerhalb einer der bereitgestellten Schattenwurzeln liegt, kann der Bereich Knoten innerhalb des entsprechenden Schatten-DOM-Baums zurückgeben. Andernfalls, wenn die Auswahl eine Schattengrenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich angepasst, um das gesamte Host-Element für die Schattenwurzel einzuschließen.

> [!NOTE]
> In der ursprünglichen Spezifikation wurden Schattenwurzeln als ein Satz von [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) spezifiziert. Einige Browser unterstützen möglicherweise noch diese ältere Syntax.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten, die die ausgewählten Bereiche innerhalb des komponierten (abgeflachten) Baums des Dokuments darstellen. Zum Zeitpunkt des Schreibens der Spezifikation wird erwartet, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über inline Schattenwurzeln

Dieses Beispiel zeigt, wie sich `getComposedRanges()` verhält, sowohl wenn Schattenwurzeln übergeben werden als auch wenn nicht, und vergleicht dies mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt).

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM und in offenen und geschlossenen Schattenwurzeln definiert ist, den Bereich für die Auswahl mit den verschiedenen Ansätzen zu kopieren und dann den Bereich erneut anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit `<span>`-Elementen, an die wir eine Schattenwurzel mit JavaScript anhängen werden. Wir fügen auch einige Buttons hinzu, um die Auswahl mit verschiedenen Methoden zu kopieren und anzuwenden.

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

Das CSS macht nichts Interessantes. Wir legen die Buttons einfach vertikal an, damit sie leichter zu lesen sind.

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

Der Großteil der Arbeit wird im JavaScript erledigt. Zuerst protokollieren wir, ob `getComposedRanges()` nicht unterstützt wird, obwohl wir das restliche Beispiel nicht daran hindern, es zu verwenden.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() method not supported in this browser");
}
```

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die zwei `<span>`-Elemente an, die wir im HTML erstellt haben. Diese enthalten einfachen fettgedruckten Text, sodass wir die Schattenknoten leicht identifizieren können, wenn das HTML gerendert wird.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Als nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` abzurufen, wenn die ersten beiden Buttons geklickt werden. Der erste Button ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während der zweite beide Schattenwurzeln übergibt. In beiden Fällen wird der komponierte Bereich in einer Variablen gespeichert.

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

Der Handler für den "Auswahl anwenden"-Button ist unten gezeigt. Dieser ruft [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) auf, um die aktuelle Auswahl festzulegen, indem die Knoten und Offsets aus dem gespeicherten Bereich übergeben werden.

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

Der letzte Teil des Codes definiert Buttons, um den aktuellen Auswahlbereich mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu kopieren und dann die Auswahl erneut anzuwenden.

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

Das laufende Beispiel wird unten gezeigt. Wählen Sie Text in der oberen Zeile aus, beginnend mit normalem Text und endend in einem fettgedruckten Abschnitt, sodass Sie Knoten vom DOM in eine Schattenwurzel ausgewählt haben. Wenn Sie "Bereich kopieren, Schattenwurzeln übergeben" und dann den "Auswahl anwenden"-Button auswählen, werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gegeben hat, selbst wenn sie geschlossen ist. Wenn Sie dann den Button "Bereich kopieren, Schattenwurzeln nicht übergeben" auswählen und dann anwenden, wird die Auswahl bis zum Ende des Texts in der Schattenwurzel erweitert. Dies liegt daran, dass die Auswahl neu abgegrenzt wird, um das Ende des Host-Knotens einzuschließen, da die `getComposedRanges()`-Methode keine Sichtbarkeit innerhalb des Schattenbaums hatte.

Testen Sie auch, was passiert, wenn Sie die "Bereich kopieren mit getRangeAt()" und "Auswahl anwenden"-Buttons verwenden. Sie sollten feststellen, dass der ausgewählte Bereich ziemlich willkürlich ist, wenn Sie in die Schattenwurzel übergehen, und es hängt davon ab, welchen Browser Sie verwenden.

{{EmbedLiveSample('Selecting across inline shadow roots', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
