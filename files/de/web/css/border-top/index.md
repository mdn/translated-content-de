---
title: border-top
slug: Web/CSS/border-top
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border-top`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des oberen [Rands](/de/docs/Web/CSS/border) eines Elements.

{{EmbedInteractiveExample("pages/css/border-top.html")}}

Wie bei allen Kurzschreibweisen setzt `border-top` immer die Werte aller Eigenschaften, die sie setzen kann, auch wenn sie nicht angegeben sind. Diejenigen, die nicht angegeben sind, werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-top-style: dotted;
border-top: thick green;
```

Dieser ist tatsächlich derselbe wie dieser hier:

```css
border-top-style: dotted;
border-top: none thick green;
```

Der Wert von {{cssxref("border-top-style")}}, der vor `border-top` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-top-style")}} `none` ist, führt das Nicht-Angeben des `border-style`-Teils zu keinem Rand.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-top-color`](/de/docs/Web/CSS/border-top-color)
- [`border-top-style`](/de/docs/Web/CSS/border-top-style)
- [`border-top-width`](/de/docs/Web/CSS/border-top-width)

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Global values */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

Die drei Werte der Kurzschreibweise können in beliebiger Reihenfolge angegeben werden, und einer oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-top-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-top-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-top-color")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines oberen Rands

#### HTML

```html
<div>This box has a border on the top side.</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_top_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`border`](/de/docs/Web/CSS/border)
- [`border-block`](/de/docs/Web/CSS/border-block)
- [`outline`](/de/docs/Web/CSS/outline)
