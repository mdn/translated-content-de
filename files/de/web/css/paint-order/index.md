---
title: paint-order
slug: Web/CSS/paint-order
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`paint-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, die Reihenfolge zu steuern, in der die Füllung und der Umriss (und Malmarker) von Textinhalten und Formen gezeichnet werden.

## Syntax

```css
/* Normal */
paint-order: normal;

/* Einzelwerte */
paint-order: stroke; /* zuerst den Umriss, dann Füllung und Marker zeichnen */
paint-order: markers; /* zuerst die Marker, dann Füllung und Umriss zeichnen */

/* Mehrere Werte */
paint-order: stroke fill; /* zuerst den Umriss, dann die Füllung, dann die Marker zeichnen */
paint-order: markers stroke fill; /* Marker, dann Umriss, dann Füllung zeichnen */

/* Globale Werte */
paint-order: inherit;
paint-order: initial;
paint-order: revert;
paint-order: revert-layer;
paint-order: unset;
```

Wenn kein Wert angegeben ist, lautet die Standard-Zeichenreihenfolge `fill`, `stroke`, `markers`.

Wenn ein Wert angegeben wird, wird dieser zuerst gemalt, gefolgt von den anderen beiden in ihrer relativen Standard-Reihenfolge zueinander. Wenn zwei Werte angegeben werden, werden sie in der angegebenen Reihenfolge gemalt, gefolgt von dem nicht spezifizierten.

> [!NOTE]
> Bei dieser Eigenschaft sind Marker nur geeignet, wenn SVG-Formen gezeichnet werden, die die Verwendung der `marker-*` Eigenschaften (z.B. [`marker-start`](/de/docs/Web/SVG/Attribute/marker-start)) und des [`<marker>`](/de/docs/Web/SVG/Element/marker) Elements beinhalten. Sie gelten nicht für HTML-Text, daher können Sie in diesem Fall nur die Reihenfolge von `stroke` und `fill` bestimmen.

### Werte

- `normal`
  - : Zeichnen Sie die verschiedenen Elemente in normaler Zeichenreihenfolge.
- `stroke`,
  `fill`,
  `markers`
  - : Geben Sie einige oder alle dieser Werte in der Reihenfolge an, in der sie gezeichnet werden sollen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehren der Reihenfolge von Umriss und Füllung

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">stroke in front</text>
  <text x="10" y="150" class="stroke-behind">stroke behind</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  stroke: red;
  stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### Ergebnis

{{EmbedLiveSample("Reversing_the_paint_order_of_stroke_and_fill", "100%", 165)}}

### Umkehren der Reihenfolge von Umriss und Füllung mit HTML

Um die Reihenfolge von Füllung und Umriss in HTML zu steuern, können Sie die CSS-Eigenschaften {{cssxref("-webkit-text-stroke-color")}} und {{cssxref("-webkit-text-stroke-width")}} verwenden.

#### HTML

```html
<div>stroke in front</div>
<div class="stroke-behind">stroke behind</div>
```

#### CSS

```css
div {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-text-stroke-color: red;
  -webkit-text-stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### Ergebnis

{{EmbedLiveSample("Reversing_the_paint_order_of_stroke_and_fill_using_HTML", "100%", 165)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS Tricks: paint-order](https://css-tricks.com/almanac/properties/p/paint-order/)
