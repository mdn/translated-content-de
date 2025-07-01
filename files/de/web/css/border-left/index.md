---
title: border-left
slug: Web/CSS/border-left
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`border-left`** [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt alle Eigenschaften des linken [Rahmens](/de/docs/Web/CSS/border) eines Elements.

{{InteractiveExample("CSS Demo: border-left")}}

```css interactive-example-choice
border-left: solid;
```

```css interactive-example-choice
border-left: dashed red;
```

```css interactive-example-choice
border-left: 1rem solid;
```

```css interactive-example-choice
border-left: thick double #32a1ce;
```

```css interactive-example-choice
border-left: 4mm ridge rgb(211 220 50 / 0.6);
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

Wie bei allen Kurzform-Eigenschaften setzt `border-left` immer die Werte aller Eigenschaften, die es setzen kann, auch wenn sie nicht spezifiziert sind. Es setzt die nicht spezifizierten auf ihre Standardwerte. Betrachten Sie den folgenden Code:

```css
border-left-style: dotted;
border-left: thick green;
```

Es ist tatsächlich dasselbe wie dieser:

```css
border-left-style: dotted;
border-left: none thick green;
```

Der Wert von {{cssxref("border-left-style")}}, der vor `border-left` angegeben ist, wird ignoriert. Da der Standardwert von {{cssxref("border-left-style")}} `none` ist, führt das Nicht-Spezifizieren des `border-style`-Teils zu keinem Rahmen.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}

## Syntax

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* Global values */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

Die drei Werte der Kurzform-Eigenschaft können in beliebiger Reihenfolge angegeben werden, und einer oder zwei davon können weggelassen werden.

### Werte

- `<br-width>`
  - : Siehe {{cssxref("border-left-width")}}.
- `<br-style>`
  - : Siehe {{cssxref("border-left-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Siehe {{cssxref("border-left-color")}}.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Anwenden eines linken Rahmens

#### HTML

```html
<div>This box has a border on the left side.</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Ergebnisse

{{EmbedLiveSample('Applying_a_left_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Lernen Sie CSS: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
