---
title: "Range: getBoundingClientRect() Methode"
short-title: getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.getBoundingClientRect()`** Methode gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt zurück, das den Inhalt des Bereichs umfasst; dies ist ein Rechteck, das die Vereinigung der Begrenzungsrechtecke aller Elemente im Bereich umschließt.

Diese Methode ist nützlich, um die Ansichtskoordinaten des Cursors oder der Auswahl innerhalb eines Textfelds zu bestimmen. Siehe [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect) für Details zum zurückgegebenen Wert.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das die Vereinigung der Begrenzungsrechtecke aller Elemente im Bereich umschließt.

## Beispiele

### HTML

```html
<div id="highlight"></div>
<p>
  This example positions a "highlight" rectangle behind the contents of a range.
  The range's content <em>starts here</em> and continues on until it
  <em>ends here</em>. The bounding client rectangle contains everything selected
  in the range.
</p>
```

### CSS

```css
#highlight {
  background: yellow;
  position: absolute;
  z-index: -1;
}

p {
  width: 200px;
}
```

### JavaScript

```js
const range = document.createRange();
range.setStartBefore(document.getElementsByTagName("em").item(0));
range.setEndAfter(document.getElementsByTagName("em").item(1));

const clientRect = range.getBoundingClientRect();
const highlight = document.getElementById("highlight");
highlight.style.left = `${clientRect.x}px`;
highlight.style.top = `${clientRect.y}px`;
highlight.style.width = `${clientRect.width}px`;
highlight.style.height = `${clientRect.height}px`;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Range.getClientRects()`](/de/docs/Web/API/Range/getClientRects) - detailliertere Ergebnisse für nicht-rechteckige Bereiche (z. B. wenn die Auswahl in die nächste Zeile umbricht);
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) - um die (Node, Offset) von Ansichtskoordinaten zu erhalten.
