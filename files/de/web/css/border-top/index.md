---
title: border-top
slug: Web/CSS/border-top
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`border-top`** [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des oberen [Rahmens](/de/docs/Web/CSS/border) eines Elements.

{{EmbedInteractiveExample("pages/css/border-top.html")}}

Wie bei allen Kurzschreibweisen setzt `border-top` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht angegeben sind. Nicht angegebene Werte werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-top-style: dotted;
border-top: thick green;
```

Es ist tatsächlich dasselbe wie dieser:

```css
border-top-style: dotted;
border-top: none thick green;
```

Der Wert von {{cssxref("border-top-style")}}, der vor `border-top` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-top-style")}} `none` ist, führt das Nichtangeben des Teils `border-style` zu keinem Rahmen.

## Konstituierende Eigenschaften

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

Die drei Werte der Kurzschreibweise können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

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

### Anwenden eines oberen Rahmens

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

#### Ergebnis

{{EmbedLiveSample('Applying_a_top_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`border`](/de/docs/Web/CSS/border)
- [`border-block`](/de/docs/Web/CSS/border-block)
- [`outline`](/de/docs/Web/CSS/outline)
