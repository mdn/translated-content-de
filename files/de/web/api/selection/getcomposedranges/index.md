---
title: "Selection: getComposedRanges()-Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

Die **`Selection.getComposedRanges()`**-Methode gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die die aktuellen Auswahlbereiche darstellen und kann Bereiche zurückgeben, die potenziell Schatten-Grenzen überschreiten.

Da die Endpunkte der Auswahlbereiche sich in einem Shadow-DOM befinden können, oder sogar in unterschiedlichen Shadow-DOMs, und weil diese möglicherweise geschlossen sind, kann die Methode standardmäßig keine Knoten aus einem Shadow-DOM zurückgeben. Wenn die Methode eine Auswahl zurückgeben soll, die Knoten innerhalb von Shadow-DOMs umfasst, müssen die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekte für diese DOMs als Argumente an die Methode übergeben werden. Werden keine entsprechenden Wurzeln bereitgestellt und liegen der Start- oder Endpunkt der Auswahl in einem Shadow-DOM, wird der zurückgegebene Bereich auf den Host der Shadow-Root umgeschrieben, anstatt auf einen Knoten innerhalb der Wurzel.

Die zurückgegebenen Bereiche repräsentieren den Bereich zu dem Zeitpunkt, an dem `getComposedRanges()` aufgerufen wurde. Wenn das DOM oder ein Shadow-DOM verändert wird, ist der ausgewählte Bereich wahrscheinlich nicht mehr korrekt. Anwendungs-Code könnte einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) verwenden, um DOM-Änderungen zu überwachen und dann [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet werden, wenn Bereiche ausgewählt werden, die potenziell Schatten-Wurzel-Grenzen überschreiten können.
> [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) ist sich der Schatten-Wurzeln nicht bewusst.
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
    Wenn ein Auswahl-Endpunkt innerhalb einer der bereitgestellten Schattenwurzeln liegt, kann der Bereich Knoten innerhalb seines entsprechenden Shadow-DOM-Baums zurückgeben.
    Andernfalls, wenn die Auswahl eine Schatten-Grenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich so angepasst, dass er das ganze Host-Element für die Schattenwurzel umfasst.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten, die die ausgewählten Bereiche innerhalb des zusammengefassten (abgeflachten) Baums des Dokuments darstellen. Zum Zeitpunkt der Veröffentlichung erwartet die Spezifikation, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über Inline-Schattenwurzeln hinweg

Dieses Beispiel demonstriert, wie `getComposedRanges()` funktioniert, sowohl wenn Schattenwurzeln übergeben werden, als auch wenn nicht, und vergleicht es mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt).

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM und in offenen und geschlossenen Schattenwurzeln definiert ist, den Bereich für die Auswahl mit den verschiedenen Ansätzen zu kopieren und dann den Bereich erneut anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit einigen `<span>` Elementen, an die wir mit JavaScript eine Schattenwurzel anhängen. Wir fügen auch einige Schaltflächen hinzu, um die Auswahl mit einer Reihe verschiedener Methoden zu kopieren und anzuwenden.

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

Das CSS macht nichts Interessantes. Wir legen die Schaltflächen nur vertikal an, damit sie leichter zu lesen sind.

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

Die meiste Arbeit erfolgt im JavaScript. Zuerst protokollieren wir, wenn `getComposedRanges()` nicht unterstützt wird, obwohl wir den Rest des Beispiels nicht daran hindern, es zu versuchen.

```js
if (!("getComposedRanges" in Selection.prototype)) {
  log("getComposedRanges() method not supported in this browser");
}
```

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die beiden im HTML erstellten `<span>` Elemente an. Diese enthalten etwas einfachen Text in Fettschrift, damit wir die Schattenknoten leicht erkennen können, wenn das HTML gerendert wird.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Als Nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` zu erhalten, wenn die ersten beiden Schaltflächen angeklickt werden. Die erste Schaltfläche ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während die zweite beide Schattenwurzeln übergibt. In beiden Fällen wird der zusammengestellte Bereich in einer Variablen gespeichert.

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

Der Handler für die Schaltfläche "Auswahl anwenden" wird unten gezeigt. Dieser ruft [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) auf, um die aktuelle Auswahl festzulegen, indem die Knoten und Offsets aus dem gespeicherten Bereich übergeben werden.

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

Der letzte Teil des Codes definiert Schaltflächen, um den aktuellen Auswahlbereich mithilfe von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu kopieren und dann die Auswahl erneut anzuwenden.

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

Das laufende Beispiel wird unten gezeigt. Wählen Sie Text in der oberen Zeile aus, beginnend mit normalem Text und endend in einem fettgedruckten Abschnitt, sodass Sie Knoten vom DOM in eine Schattenwurzel ausgewählt haben. Wenn Sie "Bereich kopieren, Schattenwurzeln übergeben" auswählen und dann die Schaltfläche "Auswahl anwenden" drücken, werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gewährt hat, auch wenn sie geschlossen ist. Wenn Sie dann die Schaltfläche "Bereich kopieren, Schattenwurzeln nicht übergeben" auswählen und dann anwenden, wird die Auswahl bis zum Ende des Textes in der Schattenwurzel erweitert. Dies liegt daran, dass die Auswahl auf das Ende des Hostknotens umgeschrieben wird, da die Methode `getComposedRanges()` keine Einsicht in den Schattenbaum gegeben wurde.

Testen Sie auch, was passiert, wenn Sie die Schaltflächen "Bereich mit getRangeAt() kopieren" und "Auswahl anwenden" verwenden. Sie sollten feststellen, dass der ausgewählte Bereich ziemlich willkürlich ist, wenn Sie in die Schattenwurzel übergehen, und je nachdem, welchen Browser Sie verwenden, sich unterscheidet.

{{EmbedLiveSample('Auswahl über Inline-Schattenwurzeln hinweg', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
