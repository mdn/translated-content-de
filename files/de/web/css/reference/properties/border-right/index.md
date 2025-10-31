---
title: border-right
slug: Web/CSS/Reference/Properties/border-right
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-right`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des rechten [Rahmens](/de/docs/Web/CSS/Reference/Properties/border) eines Elements.

{{InteractiveExample("CSS Demo: border-right")}}

```css interactive-example-choice
border-right: solid;
```

```css interactive-example-choice
border-right: dashed red;
```

```css interactive-example-choice
border-right: 1rem solid;
```

```css interactive-example-choice
border-right: thick double #32a1ce;
```

```css interactive-example-choice
border-right: 4mm ridge rgb(211 220 50 / 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Wie bei allen Kurzschreibweisen setzt `border-right` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht spezifiziert sind. Es setzt diejenigen, die nicht spezifiziert sind, auf ihre Standardwerte. Betrachten Sie den folgenden Code:

```css
border-right-style: dotted;
border-right: thick green;
```

Er ist tatsächlich derselbe wie dieser:

```css
border-right-style: dotted;
border-right: none thick green;
```

Der Wert von {{cssxref("border-right-style")}}, der vor `border-right` angegeben wurde, wird ignoriert. Da der Standardwert von {{cssxref("border-right-style")}} `none` ist, führt das Nicht-Spezifizieren des `border-style`-Teils zu keinem Rahmen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die drei Werte der Kurzschreibweise können in beliebiger Reihenfolge angegeben werden, wobei einer oder zwei von ihnen weggelassen werden können.

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
