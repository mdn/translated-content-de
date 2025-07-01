---
title: border-bottom
slug: Web/CSS/border-bottom
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`border-bottom`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den unteren [Rand](/de/docs/Web/CSS/border) eines Elements fest. Sie setzt die Werte von {{cssxref("border-bottom-width")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-color")}}.

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
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Wie bei allen Kurzschreibweisen setzt `border-bottom` stets die Werte aller Eigenschaften, die es festlegen kann, selbst wenn sie nicht spezifiziert sind. Nicht spezifizierte Eigenschaften werden auf ihre Standardwerte gesetzt. Betrachten Sie den folgenden Code:

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

Dies entspricht tatsächlich diesem Code:

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

Der Wert von {{cssxref("border-bottom-style")}}, der vor `border-bottom` angegeben ist, wird ignoriert. Da der Standardwert von {{cssxref("border-bottom-style")}} `none` ist, führt das Weglassen des Teils `border-style` zu keinem Rand.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die drei Werte der Kurzschreibweise können in beliebiger Reihenfolge angegeben werden, und ein oder zwei von ihnen können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-bottom-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-bottom-color")}}.

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
