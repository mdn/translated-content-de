---
title: "Range: Methode getBoundingClientRect()"
short-title: getBoundingClientRect()
slug: Web/API/Range/getBoundingClientRect
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

Die **`Range.getBoundingClientRect()`**-Methode gibt ein {{domxref("DOMRect")}}-Objekt zurück, das den Inhalt des Bereichs umschließt; dies ist ein Rechteck, das die Vereinigung der Begrenzungsrechtecke aller Elemente im Bereich einschließt.

Diese Methode ist nützlich, um die Viewport-Koordinaten des Cursors oder der Auswahl in einem Textfeld zu bestimmen. Siehe {{domxref("Element.getBoundingClientRect()")}} für Details zum zurückgegebenen Wert.

## Syntax

```js-nolint
getBoundingClientRect()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("DOMRect")}}-Objekt, das die Vereinigung der Begrenzungsrechtecke aller Elemente im Bereich umschließt.

## Beispiele

### HTML

```html
<div id="highlight"></div>
<p>
  Dieses Beispiel positioniert ein "Hervorhebungs"-Rechteck hinter dem Inhalt eines Bereichs.
  Der Inhalt des Bereichs <em>beginnt hier</em> und setzt sich fort, bis er
  <em>hier endet</em>. Das umschreibende Begrenzungsrechteck enthält alles, was im Bereich ausgewählt ist.
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

- {{domxref("Range.getClientRects()")}} - feiner aufgelöstes Ergebnis für nicht-rechteckige Bereiche (z. B. wenn die Auswahl auf die nächste Zeile umbricht);
- {{domxref("Element.getBoundingClientRect()")}}
- {{domxref("Document.caretPositionFromPoint()")}} - um die (Knoten, Offset) aus den Viewport-Koordinaten zu erhalten.
