---
title: "Document: elementFromPoint()-Methode"
short-title: elementFromPoint()
slug: Web/API/Document/elementFromPoint
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`elementFromPoint()`**-Methode, die im [`Document`](/de/docs/Web/API/Document)-Objekt verfügbar ist, gibt das oberste [`Element`](/de/docs/Web/API/Element) an den angegebenen Koordinaten (relativ zum viewport) zurück.

Wenn das Element an dem angegebenen Punkt zu einem anderen Dokument gehört (z. B. das Dokument eines {{HTMLElement("iframe")}}), wird das übergeordnete Element dieses Dokuments zurückgegeben (das `<iframe>` selbst). Wenn das Element an dem gegebenen Punkt anonymes oder XBL-generiertes Inhalt ist, wie z. B. die Scrollleisten eines Textfeldes, wird das erste nicht-anonyme übergeordnete Element (zum Beispiel das Textfeld) zurückgegeben.

Elemente mit {{cssxref("pointer-events")}} auf `none` gesetzt werden ignoriert, und das darunterliegende Element wird zurückgegeben.

Wenn die Methode in einem anderen Dokument (wie einem Subdokument eines `<iframe>`) ausgeführt wird, sind die Koordinaten relativ zu dem Dokument, in dem die Methode aufgerufen wird.

Wenn der angegebene Punkt außerhalb der sichtbaren Grenzen des Dokuments liegt oder eine der Koordinaten negativ ist, ist das Ergebnis `null`.

Wenn Sie die spezifische Position innerhalb des Elements ermitteln müssen, verwenden Sie [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint).

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes, relativ zum linken Rand der aktuellen [viewport](/de/docs/Glossary/viewport).
- `y`
  - : Die vertikale Koordinate eines Punktes, relativ zum oberen Rand des aktuellen viewports.

### Rückgabewert

Das oberste [`Element`](/de/docs/Web/API/Element)-Objekt, das sich an den angegebenen Koordinaten befindet.

## Beispiele

Dieses Beispiel erstellt zwei Schaltflächen, mit denen Sie die aktuelle Farbe des unter den Koordinaten `(2, 2)` befindlichen Absatz-Elements setzen können.

### JavaScript

```js
function changeColor(newColor) {
  elem = document.elementFromPoint(2, 2);
  elem.style.color = newColor;
}
```

Die `changeColor()`-Methode ermittelt das Element an dem angegebenen Punkt und setzt dann die aktuelle Vordergrund-{{cssxref("color")}}-Eigenschaft dieses Elements auf die durch den `newColor`-Parameter spezifizierte Farbe.

### HTML

```html
<p id="para1">Some text here</p>
<button onclick="changeColor('blue');">Blue</button>
<button onclick="changeColor('red');">Red</button>
```

Das HTML liefert den Absatz, dessen Farbe beeinflusst wird, sowie zwei Schaltflächen: eine, um die Farbe auf Blau zu ändern, und eine andere, um die Farbe auf Rot zu ändern.

### Ergebnis

{{EmbedLiveSample('Examples', 400, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
