---
title: "Dokument: elementFromPoint() Methode"
short-title: elementFromPoint()
slug: Web/API/Document/elementFromPoint
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`elementFromPoint()`** Methode, verfügbar auf dem {{domxref("Document")}}-Objekt, gibt das oberste {{domxref("Element")}} an den angegebenen Koordinaten (relativ zum Viewport) zurück.

Wenn das Element an der angegebenen Stelle zu einem anderen Dokument gehört (z. B. das Dokument eines {{HTMLElement("iframe")}}), wird das übergeordnete Element dieses Dokuments zurückgegeben (das `<iframe>` selbst). Wenn das Element an der angegebenen Stelle anonym oder durch XBL generierter Inhalt ist, wie beispielsweise die Scrollleisten eines Textfeldes, wird das erste nicht-anonyme Vorfahrenelement (zum Beispiel das Textfeld) zurückgegeben.

Elemente mit {{cssxref("pointer-events")}} auf `none` gesetzt, werden ignoriert, und das darunterliegende Element wird zurückgegeben.

Wenn die Methode auf ein anderes Dokument (wie das Unterdokument eines `<iframe>`) angewendet wird, sind die Koordinaten relativ zu dem Dokument, in dem die Methode aufgerufen wird.

Wenn der angegebene Punkt außerhalb der sichtbaren Grenzen des Dokuments liegt oder eine der Koordinaten negativ ist, ist das Ergebnis `null`.

Falls Sie die spezifische Position innerhalb des Elements finden müssen, verwenden Sie {{domxref("Document.caretPositionFromPoint()")}}.

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punkts, relativ zur linken Kante des aktuellen {{Glossary("viewport")}}.
- `y`
  - : Die vertikale Koordinate eines Punkts, relativ zur oberen Kante des aktuellen Viewports.

### Rückgabewert

Das oberste {{domxref("Element")}}-Objekt, das sich an den angegebenen Koordinaten befindet.

## Beispiele

Dieses Beispiel erstellt zwei Schaltflächen, mit denen Sie die aktuelle Farbe des Absatz-Elements ändern können, das sich unter den Koordinaten `(2, 2)` befindet.

### JavaScript

```js
function changeColor(newColor) {
  elem = document.elementFromPoint(2, 2);
  elem.style.color = newColor;
}
```

Die `changeColor()`-Methode erhält das Element, das sich an der angegebenen Stelle befindet, und setzt dann die aktuelle Vordergrund-{{cssxref("color")}}-Eigenschaft dieses Elements auf die vom `newColor`-Parameter angegebene Farbe.

### HTML

```html
<p id="para1">Einige Texte hier</p>
<button onclick="changeColor('blue');">Blau</button>
<button onclick="changeColor('red');">Rot</button>
```

Das HTML stellt den Absatz bereit, dessen Farbe betroffen sein wird, sowie zwei Schaltflächen: eine, um die Farbe in Blau zu ändern, und eine andere, um die Farbe in Rot zu ändern.

### Ergebnis

{{EmbedLiveSample('Examples', 400, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.elementsFromPoint()")}}
