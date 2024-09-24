---
title: border-top
slug: Web/CSS/border-top
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

Die **`border-top`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des oberen [Rahmens](/de/docs/Web/CSS/border) eines Elements.

{{EmbedInteractiveExample("pages/css/border-top.html")}}

Wie bei allen Kurzform-Eigenschaften legt `border-top` immer die Werte aller Eigenschaften fest, die es setzen kann, auch wenn sie nicht spezifiziert sind. Es setzt diejenigen, die nicht spezifiziert sind, auf ihre Standardwerte. Betrachten Sie den folgenden Code:

```css
border-top-style: dotted;
border-top: thick green;
```

Dies entspricht tatsächlich diesem Beispiel:

```css
border-top-style: dotted;
border-top: none thick green;
```

Der Wert von {{cssxref("border-top-style")}}, der vor `border-top` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-top-style")}} `none` ist, führt das Nicht-Angaben des `border-style`-Teils zu keinem Rahmen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-top-color`](/de/docs/Web/CSS/border-top-color)
- [`border-top-style`](/de/docs/Web/CSS/border-top-style)
- [`border-top-width`](/de/docs/Web/CSS/border-top-width)

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* Globale Werte */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und einer oder zwei von ihnen können weggelassen werden.

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
<div>Dieses Feld hat einen Rahmen auf der oberen Seite.</div>
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
