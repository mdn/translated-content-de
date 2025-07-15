---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Rahmen eines Elements. Sie legt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, und {{Cssxref("border-color")}} fest.

{{InteractiveExample("CSS Demo: border")}}

```css interactive-example-choice
border: solid;
```

```css interactive-example-choice
border: dashed red;
```

```css interactive-example-choice
border: 1rem solid;
```

```css interactive-example-choice
border: thick double #32a1ce;
```

```css interactive-example-choice
border: 4mm ridge rgb(211 220 50 / 0.6);
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

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-width`](/de/docs/Web/CSS/border-width)
- [`border-style`](/de/docs/Web/CSS/border-style)
- [`border-color`](/de/docs/Web/CSS/border-color)

## Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

Die `border`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte festgelegt werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rahmen wird unsichtbar sein, wenn sein Stil nicht definiert ist, da der Standardstil `none` ist.

### Werte

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Standardmäßig `medium`, wenn nicht angegeben. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Standardmäßig `none`, wenn nicht angegeben. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Standardmäßig `currentcolor`, wenn nicht angegeben. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Kurzformeigenschaften werden ausgelassene Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen, sondern ihn stattdessen auf seinen Anfangswert, also `none`, setzt.

Die `border`-Kurzform ist besonders nützlich, wenn alle vier Rahmen gleich sein sollen. Sollten sie jedoch unterschiedlich sein, können Sie die Langformen {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie auch einen Rahmen nach dem anderen mit den physischen (z. B. {{Cssxref("border-top")}}) und logischen (z. B. {{Cssxref("border-block-start")}}) Rahmeneigenschaften ansprechen.

### Rahmen vs. Umrandungen

Rahmen und [Umrandungen](/de/docs/Web/CSS/outline) sind sehr ähnlich. Umrandungen unterscheiden sich jedoch von Rahmen in folgenden Punkten:

- Umrandungen nehmen niemals Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrandungen nicht rechteckig sein, obwohl sie das üblicherweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen rosa outset-Rahmen setzen

#### HTML

```html
<div>I have a border, an outline, and a box shadow! Amazing, isn't it?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_a_pink_outset_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- {{Cssxref("outline")}}
- [Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
