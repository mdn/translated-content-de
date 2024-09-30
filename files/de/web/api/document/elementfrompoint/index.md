---
title: "Document: elementFromPoint() Methode"
short-title: elementFromPoint()
slug: Web/API/Document/elementFromPoint
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`elementFromPoint()`**-Methode, verfügbar auf dem [`Document`](/de/docs/Web/API/Document)-Objekt, gibt das oberste [`Element`](/de/docs/Web/API/Element) an den angegebenen Koordinaten (relativ zum Ansichtsfenster) zurück.

Wenn das Element an dem angegebenen Punkt zu einem anderen Dokument gehört (zum Beispiel das Dokument eines {{HTMLElement("iframe")}}), wird das übergeordnete Element dieses Dokuments zurückgegeben (das `<iframe>` selbst). Wenn das Element am gegebenen Punkt anonym ist oder XBL-generierte Inhalte enthält, wie zum Beispiel die Bildlaufleisten eines Textfeldes, wird das erste nicht-anonyme Vorfahrenelement (zum Beispiel das Textfeld) zurückgegeben.

Elemente mit {{cssxref("pointer-events")}} auf `none` werden ignoriert, und das darunterliegende Element wird zurückgegeben.

Wenn die Methode auf einem anderen Dokument ausgeführt wird (wie in einem `<iframe>`-Unterdokument), sind die Koordinaten relativ zu dem Dokument, in dem die Methode aufgerufen wird.

Wenn der angegebene Punkt außerhalb der sichtbaren Grenzen des Dokuments liegt oder eine der Koordinaten negativ ist, ist das Ergebnis `null`.

Wenn Sie die spezifische Position innerhalb des Elements finden müssen, verwenden Sie [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint).

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punkts, relativ zum linken Rand des aktuellen [Ansichtsfensters](/de/docs/Glossary/viewport).
- `y`
  - : Die vertikale Koordinate eines Punkts, relativ zum oberen Rand des aktuellen Ansichtsfensters.

### Rückgabewert

Das oberste [`Element`](/de/docs/Web/API/Element)-Objekt, das an den angegebenen Koordinaten gefunden wird.

## Beispiele

Dieses Beispiel erstellt zwei Schaltflächen, die es Ihnen ermöglichen, die aktuelle Farbe des Absatz-Elements zu setzen, das sich an den Koordinaten `(2, 2)` befindet.

### JavaScript

```js
function changeColor(newColor) {
  elem = document.elementFromPoint(2, 2);
  elem.style.color = newColor;
}
```

Die `changeColor()`-Methode ermittelt das Element an dem angegebenen Punkt und setzt dann die aktuelle Vordergrundfarbe des Elements auf die durch den `newColor`-Parameter angegebene Farbe.

### HTML

```html
<p id="para1">Some text here</p>
<button onclick="changeColor('blue');">Blue</button>
<button onclick="changeColor('red');">Red</button>
```

Das HTML enthält den Absatz, dessen Farbe geändert wird, sowie zwei Schaltflächen: eine, um die Farbe auf Blau zu ändern, und eine andere, um die Farbe auf Rot zu ändern.

### Ergebnis

{{EmbedLiveSample('Examples', 400, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
