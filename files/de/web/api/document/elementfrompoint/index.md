---
title: "Dokument: `elementFromPoint()`-Methode"
short-title: elementFromPoint()
slug: Web/API/Document/elementFromPoint
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`elementFromPoint()`**-Methode, verfügbar auf dem [`Document`](/de/docs/Web/API/Document)-Objekt, gibt das oberste [`Element`](/de/docs/Web/API/Element) an den angegebenen Koordinaten (relativ zum Viewport) zurück.

Wenn das Element an der angegebenen Stelle zu einem anderen Dokument gehört (zum Beispiel das Dokument eines {{HTMLElement("iframe")}}), wird das übergeordnete Element dieses Dokuments zurückgegeben (das `<iframe>` selbst). Wenn das Element an der angegebenen Stelle anonym oder von XBL generierter Inhalt ist, wie beispielsweise die Scrollleisten eines Textfelds, wird das erste nicht-anonyme Vorfahrenelement (zum Beispiel das Textfeld) zurückgegeben.

Elemente, bei denen {{cssxref("pointer-events")}} auf `none` gesetzt ist, werden ignoriert, und das darunter liegende Element wird zurückgegeben.

Wird die Methode auf einem anderen Dokument (wie einem `<iframe>`-Unterdokument) ausgeführt, sind die Koordinaten relativ zu dem Dokument, auf dem die Methode aufgerufen wird.

Liegt der angegebene Punkt außerhalb der sichtbaren Grenzen des Dokuments oder ist eine der Koordinaten negativ, ist das Ergebnis `null`.

Wenn Sie die spezifische Position innerhalb des Elements finden müssen, verwenden Sie [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint).

## Syntax

```js-nolint
elementFromPoint(x, y)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes relativ zum linken Rand des aktuellen {{Glossary("viewport", "Viewports")}}.
- `y`
  - : Die vertikale Koordinate eines Punktes relativ zum oberen Rand des aktuellen Viewports.

### Rückgabewert

Das oberste [`Element`](/de/docs/Web/API/Element)-Objekt, das sich an den angegebenen Koordinaten befindet.

## Beispiele

Dieses Beispiel erstellt zwei Buttons, die Ihnen ermöglichen, die aktuelle Farbe des Absatz-Elements zu ändern, das sich unter den Koordinaten `(2, 2)` befindet.

### HTML

```html
<p id="para1">Some text here</p>
<button>Blue</button>
<button>Red</button>
```

Das HTML stellt den Absatz bereit, dessen Farbe verändert wird, sowie zwei Buttons: einer, um die Farbe auf Blau zu ändern, und ein anderer, um die Farbe auf Rot zu ändern.

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.elementFromPoint(2, 2);
  elem.style.color = newColor;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    changeColor(event.target.textContent.toLowerCase());
  });
});
```

Die `changeColor()`-Methode ermittelt das Element an der angegebenen Stelle und setzt dann die aktuelle Vordergrund-{{cssxref("color")}}-Eigenschaft dieses Elements auf die durch den `newColor`-Parameter angegebene Farbe.

### Ergebnis

{{EmbedLiveSample('Examples', 400, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
