---
title: "Selection: getComposedRanges() Methode"
short-title: getComposedRanges()
slug: Web/API/Selection/getComposedRanges
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{ ApiRef("DOM") }}

Die **`Selection.getComposedRanges()`** Methode gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten zurück, die die aktuellen Auswahlbereiche darstellen und Bereiche zurückgeben können, die potenziell Schattenbaum-Grenzen überschreiten.

Da die Endpunkte des Auswahlbereichs möglicherweise innerhalb eines Schattenbaums oder sogar in verschiedenen Schattenbäumen liegen und diese geschlossen sein können, kann die Methode standardmäßig keine Knoten aus einem Schattenbaum zurückgeben.
Wenn die Methode eine Auswahl zurückgeben muss, die Knoten innerhalb von Schattenbäumen umfasst, müssen die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekte für diese Bäume als Argumente an die Methode übergeben werden.
Wenn entsprechende Wurzeln nicht bereitgestellt werden und der Beginn oder das Ende der Auswahl innerhalb eines Schattenbaums liegt, wird der zurückgegebene Bereich neu konfiguriert, um den Host des Schattenwurzels anstelle eines Knotens innerhalb des Wurzels einzuschließen.

Die zurückgegebenen Bereiche repräsentieren den Bereich zu dem Zeitpunkt, als `getComposedRanges()` aufgerufen wurde.
Wenn das DOM oder ein Schatten-DOM verändert wird, ist der ausgewählte Bereich wahrscheinlich nicht korrekt.
Anwendungscode könnte einen [`MutationObserver`](/de/docs/Web/API/MutationObserver) verwenden, um DOM-Änderungen zu überwachen und dann [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) aufzurufen, um die Auswahl zu aktualisieren.

> [!NOTE]
> Diese Methode sollte anstelle von [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) verwendet werden, wenn Bereiche ausgewählt werden, die potenziell Schattenwurzel-Grenzen überschreiten können.
> [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) kennt Schattenwurzeln nicht.
> Der zurückgegebene Bereich ist nicht spezifiziert und variiert zwischen Browsern.

## Syntax

```js-nolint
getComposedRanges()
getComposedRanges(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften, alle optional:

    - `shadowRoots` {{optional_inline}}
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten.
        Wenn ein Auswahl-Endpunkt innerhalb einer der angegebenen Schattenwurzeln liegt, kann der Bereich Knoten innerhalb seines entsprechenden Shadow DOM-Baums zurückgeben.
        Andernfalls, wenn die Auswahl eine Schattengrenze überschreitet und die entsprechende `ShadowRoot` nicht bereitgestellt wird, wird der zurückgegebene Bereich angepasst, um das gesamte Host-Element für die Schattenwurzel einzuschließen.

> [!NOTE]
> In der ursprünglichen Spezifikation wurden Schattenwurzeln als Satz von [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) angegeben. Einige Browser unterstützen möglicherweise noch diese veraltete Syntax.

### Rückgabewert

Ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten, die die ausgewählten Bereiche innerhalb des zusammengesetzten (abgeflachten) Baums des Dokuments darstellen.
Zum Zeitpunkt des Schreibens erwartet die Spezifikation, dass dieses Array nur ein Objekt enthält.

## Beispiele

### Auswahl über Inline-Schattenwurzeln hinweg

Dieses Beispiel demonstriert, wie `getComposedRanges()` sich verhält, sowohl wenn Schattenwurzeln übergeben werden als auch nicht, und kontrastiert mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt).

Es ermöglicht Ihnen, Text auszuwählen, der in verschiedenen Knoten im DOM und in offenen und geschlossenen Schattenwurzeln definiert ist, den Bereich der Auswahl mit den verschiedenen Ansätzen zu kopieren und dann den Bereich erneut anzuwenden, um zu sehen, wie gut die ursprüngliche Auswahl funktioniert hat.

#### HTML

Das HTML definiert einige Textknoten mit einigen `<span>` Elementen, an die wir mit JavaScript eine Schattenwurzel anhängen werden.
Wir fügen auch einige Tasten hinzu, um die Auswahl mit einer Reihe von unterschiedlichen Methoden zu kopieren und anzuwenden.

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
Wir legen die Tasten nur vertikal an, damit sie leichter zu lesen sind.

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

Dann erstellen wir eine offene und eine geschlossene Schattenwurzel und hängen sie an die zwei `<span>` Elemente an, die wir im HTML erstellt haben.
Diese enthalten etwas einfachen Text in Fettschrift, damit wir die Schattenknoten leichter erkennen können, wenn das HTML angezeigt wird.

```js
let openRoot = openHost.attachShadow({ mode: "open" });
openRoot.innerHTML = `<b>Open Shadow DOM Text</b>`;

let closedRoot = closedHost.attachShadow({ mode: "closed" });
closedRoot.innerHTML = `<b>Closed Shadow DOM Text</b>`;
```

Als Nächstes erstellen wir Code, um die ausgewählten Bereiche mit `getComposedRanges()` zu erhalten, wenn die ersten beiden Tasten angeklickt werden.
Die erste Taste ruft `getComposedRanges()` auf, ohne Schattenwurzeln zu übergeben, während die zweite beide Schattenwurzeln übergibt.
In beiden Fällen wird der zusammengesetzte Bereich in einer Variablen gespeichert.

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

Der Handler für die "Auswahl anwenden"-Taste wird unten gezeigt.
Dieser ruft [`setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent) auf, um die aktuelle Auswahl festzulegen, wobei die Knoten und Offsets aus dem gespeicherten Bereich übergeben werden.

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

Der letzte Teil des Codes definiert Tasten, um den aktuellen Auswahlbereich mit [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) zu kopieren und dann die Auswahl erneut anzuwenden.

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

Das laufende Beispiel ist unten dargestellt.
Wählen Sie Text in der oberen Linie aus, beginnend mit normalem Text und endend in einem fettgedruckten Abschnitt, sodass Sie Knoten vom DOM in eine Schattenwurzel ausgewählt haben.
Wenn Sie "Bereich kopieren mit Schattenwurzeln übergeben" und dann die "Auswahl anwenden"-Taste auswählen, werden Sie feststellen, dass sich die Auswahl nicht ändert, da der Code Zugriff auf alle Knoten in der Schattenwurzel gewährt hat, auch wenn sie geschlossen ist.
Wenn Sie dann die Taste "Bereich kopieren ohne Schattenwurzeln zu übergeben" auswählen und dann anwenden, wird die Auswahl bis zum Ende des Textes in der Schattenwurzel erweitert.
Dies liegt daran, dass die Auswahl auf das Ende des Hostknotens neu konfiguriert wird, da die `getComposedRanges()`-Methode keine Sichtbarkeit innerhalb des Schattenbaums hatte.

Testen Sie auch, was passiert, wenn Sie die "Bereich mit getRangeAt() kopieren" und "Auswahl anwenden"-Tasten verwenden.
Sie sollten feststellen, dass der ausgewählte Bereich ziemlich willkürlich ist, wenn Sie in die Schattenwurzel übergehen, und sich je nach dem verwendeten Browser unterscheidet.

{{EmbedLiveSample('Auswahl über Inline-Schattenwurzeln hinweg', '100%', '240px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
