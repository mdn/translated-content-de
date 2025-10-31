---
title: paint-order
slug: Web/CSS/Reference/Properties/paint-order
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

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

Wenn kein Wert angegeben ist, ist die Standard-Reihenfolge `fill`, `stroke`, `markers`.

Wenn ein Wert angegeben wird, wird dieser zuerst gezeichnet, gefolgt von den anderen beiden in ihrer Standard-Reihenfolge zueinander. Wenn zwei Werte angegeben sind, werden diese in der Reihenfolge gezeichnet, in der sie angegeben sind, gefolgt von dem nicht angegebenen.

> [!NOTE]
> Bei dieser Eigenschaft sind Markierungen nur dann relevant, wenn SVG-Formen gezeichnet werden, die den Gebrauch der `marker-*` Eigenschaften (z. B. [`marker-start`](/de/docs/Web/SVG/Reference/Attribute/marker-start)) und des [`<marker>`](/de/docs/Web/SVG/Reference/Element/marker) Elements beinhalten. Sie gelten nicht für HTML-Text. Daher können Sie in diesem Fall nur die Reihenfolge von `stroke` und `fill` bestimmen.

### Werte

- `normal`
  - : Male die verschiedenen Elemente in der normalen Reihenfolge.
- `stroke`,
  `fill`,
  `markers`
  - : Geben Sie einige oder alle dieser Werte in der Reihenfolge an, in der Sie bemalt werden sollen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Umkehr der Reihenfolge von stroke und fill

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

### Umkehr der Reihenfolge von stroke und fill mit HTML

Um die Füll- und Umrissreihenfolge in HTML zu steuern, können Sie die CSS-Eigenschaften {{cssxref("-webkit-text-stroke-color")}} und {{cssxref("-webkit-text-stroke-width")}} verwenden.

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
