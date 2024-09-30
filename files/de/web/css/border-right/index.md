---
title: border-right
slug: Web/CSS/border-right
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`border-right`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des rechten [Rahmens](/de/docs/Web/CSS/border) eines Elements.

{{EmbedInteractiveExample("pages/css/border-right.html")}}

Wie bei allen Shorthand-Eigenschaften setzt `border-right` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht spezifiziert sind. Diejenigen, die nicht spezifiziert sind, werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-right-style: dotted;
border-right: thick green;
```

Es ist tatsächlich dasselbe wie dieser:

```css
border-right-style: dotted;
border-right: none thick green;
```

Der vor `border-right` angegebene Wert von {{cssxref("border-right-style")}} wird ignoriert. Da der Standardwert von {{cssxref("border-right-style")}} `none` ist, führt das Nichtspezifizieren des `border-style`-Teils zu keinem Rahmen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}

## Syntax

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* Global values */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: revert-layer;
border-right: unset;
```

Die drei Werte der Shorthand-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und einer oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-right-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-right-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-right-color")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines rechten Rahmens

#### HTML

```html
<div>This box has a border on the right side.</div>
```

#### CSS

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_right_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
