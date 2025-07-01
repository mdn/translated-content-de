---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`border`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Rahmen eines Elements fest. Sie setzt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}}.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Die `border`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rahmen wird unsichtbar sein, wenn sein Stil nicht definiert ist. Das liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist.

### Werte

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Standardmäßig `medium`, falls nicht angegeben. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Standardmäßig `none`, falls nicht angegeben. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Standardmäßig `currentcolor`, falls nicht angegeben. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Shorthand-Eigenschaften werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} anzugeben, sondern stattdessen auf seinen Anfangswert, d.h. `none`, gesetzt wird.

Die Shorthand `border` ist besonders nützlich, wenn Sie möchten, dass alle vier Rahmen gleich sind. Um sie jedoch unterschiedlich zu gestalten, können Sie die Langform {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} Eigenschaften verwenden, die verschiedene Werte für jede Seite akzeptieren. Alternativ können Sie einen Rahmen nach dem anderen mit den physischen (z.B. {{Cssxref("border-top")}}) und logischen (z.B. {{Cssxref("border-block-start")}}) Rahmen-Eigenschaften ansprechen.

### Rahmen vs. Umrisse

Rahmen und [Umrisse](/de/docs/Web/CSS/outline) sind sehr ähnlich. Allerdings unterscheiden sich Umrisse in den folgenden Punkten von Rahmen:

- Umrisse beanspruchen nie Platz, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung eines rosa hervortretenden Rahmens

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
- [Lernen Sie CSS: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
