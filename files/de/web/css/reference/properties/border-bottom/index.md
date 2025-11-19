---
title: border-bottom
slug: Web/CSS/Reference/Properties/border-bottom
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

Die **`border-bottom`** [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt den unteren [Rand](/de/docs/Web/CSS/Reference/Properties/border) eines Elements fest. Sie setzt die Werte von {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-color")}}.

{{InteractiveExample("CSS Demo: border-bottom")}}

```css interactive-example-choice
border-bottom: solid;
```

```css interactive-example-choice
border-bottom: dashed red;
```

```css interactive-example-choice
border-bottom: 1rem solid;
```

```css interactive-example-choice
border-bottom: thick double #32a1ce;
```

```css interactive-example-choice
border-bottom: 4mm ridge rgb(211 220 50 / 0.6);
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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}

## Syntax

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* Global values */
border-bottom: inherit;
border-bottom: initial;
border-bottom: revert;
border-bottom: revert-layer;
border-bottom: unset;
```

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-bottom-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-bottom-color")}}.

## Beschreibung

Wie bei allen Kurzform-Eigenschaften setzt `border-bottom` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht spezifiziert sind. Es setzt diejenigen, die nicht angegeben sind, auf ihre Standardwerte. Betrachten Sie den folgenden Code:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Dies entspricht tatsächlich diesem:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

Der Wert von {{cssxref("border-bottom-style")}} vor `border-bottom` wird ignoriert. Da der Standardwert von {{cssxref("border-bottom-style")}} `none` ist, führt das Weglassen des `border-style`-Teils zu keinem Rand.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines unteren Rands

#### HTML

```html
<div>This box has a border on the bottom side.</div>
```

#### CSS

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_bottom_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
