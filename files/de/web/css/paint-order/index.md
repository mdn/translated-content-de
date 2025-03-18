---
title: paint-order
slug: Web/CSS/paint-order
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **`paint-order`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, die Reihenfolge zu steuern, in der die Füllung und der Umriss (sowie Markierungen) von Textinhalten und Formen gezeichnet werden.

## Syntax

```css
/* Normal */
paint-order: normal;

/* Single values */
paint-order: stroke; /* draw the stroke first, then fill and markers */
paint-order: markers; /* draw the markers first, then fill and stroke */

/* Multiple values */
paint-order: stroke fill; /* draw the stroke first, then the fill, then the markers */
paint-order: markers stroke fill; /* draw markers, then stroke, then fill */

/* Global values */
paint-order: inherit;
paint-order: initial;
paint-order: revert;
paint-order: revert-layer;
paint-order: unset;
```

Wenn kein Wert angegeben ist, ist die standardmäßige Malreihenfolge `fill`, `stroke`, `markers`.

Wenn ein Wert angegeben ist, wird dieser zuerst gezeichnet, gefolgt von den anderen beiden in ihrer Standardreihenfolge zueinander. Wenn zwei Werte angegeben sind, werden sie in der angegebenen Reihenfolge gezeichnet, gefolgt von dem nicht angegebenen.

> [!NOTE]
> Im Fall dieser Eigenschaft sind Markierungen nur geeignet, wenn SVG-Formen gezeichnet werden, die die Verwendung der `marker-*` Eigenschaften (z.B. [`marker-start`](/de/docs/Web/SVG/Reference/Attribute/marker-start)) und des [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Elements beinhalten. Sie gelten nicht für HTML-Text, sodass Sie in diesem Fall nur die Reihenfolge von `stroke` und `fill` bestimmen können.

### Werte

- `normal`
  - : Zeichnet die verschiedenen Elemente in der normalen Malreihenfolge.
- `stroke`,
  `fill`,
  `markers`
  - : Geben Sie einige oder alle dieser Werte in der Reihenfolge an, in der Sie sie gezeichnet haben möchten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehrung der Malreihenfolge von Umriss und Füllung

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

### Umkehrung der Malreihenfolge von Umriss und Füllung mit HTML

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Tricks: paint-order](https://css-tricks.com/almanac/properties/p/paint-order/)
