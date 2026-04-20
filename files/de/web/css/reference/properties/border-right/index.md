---
title: "`border-right` CSS-Eigenschaft"
short-title: border-right
slug: Web/CSS/Reference/Properties/border-right
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`border-right`** [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) der [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des rechten [Randes](/de/docs/Web/CSS/Reference/Properties/border) eines Elements.

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

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und einer oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-right-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-right-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-right-color")}}.

## Beschreibung

Wie bei allen Kurzform-Eigenschaften setzt `border-right` immer die Werte aller Eigenschaften, die es setzen kann, selbst wenn sie nicht angegeben sind. Es setzt diejenigen, die nicht angegeben sind, auf ihre Standardwerte. Betrachten Sie folgenden Code:

```css
border-right-style: dotted;
border-right: thick green;
```

Er ist tatsächlich derselbe wie dieser:

```css
border-right-style: dotted;
border-right: none thick green;
```

Der Wert von {{cssxref("border-right-style")}}, der vor `border-right` angegeben wird, wird ignoriert. Da der Standardwert von {{cssxref("border-right-style")}} `none` ist, führt das Fehlen der `border-style` Angabe zu keinem Rand.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines rechten Randes

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
