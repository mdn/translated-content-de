---
title: border
slug: Web/CSS/Reference/Properties/border
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

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
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-width`](/de/docs/Web/CSS/Reference/Properties/border-width)
- [`border-style`](/de/docs/Web/CSS/Reference/Properties/border-style)
- [`border-color`](/de/docs/Web/CSS/Reference/Properties/border-color)

## Syntax

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #ff3333;

/* width | style | color */
border: medium dashed green;

/* Global values */
border: inherit;
border: initial;
border: revert;
border: revert-layer;
border: unset;
```

Die `border`-Eigenschaft kann unter Verwendung eines, zweier oder dreier der unten aufgeführten Werte spezifiziert werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rahmen bleibt unsichtbar, wenn sein Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist.

### Werte

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Voreinstellung ist `medium`, wenn nicht angegeben. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Voreinstellung ist `none`, wenn nicht angegeben. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Voreinstellung ist `currentColor`, wenn nicht angegeben. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Kurzform-Eigenschaften werden weggelassene Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen. Stattdessen wird es auf seinen Anfangswert gesetzt, d.h. `none`.

Die `border`-Kurzform ist besonders nützlich, wenn Sie möchten, dass alle vier Ränder gleich sind. Um jedoch unterschiedliche Werte für jeden Rand zu definieren, können Sie die Langform-Eigenschaften {{Cssxref("border-width")}}, {{Cssxref("border-style")}}, und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie einen Rand nach dem anderen mit den physischen (z.B. {{Cssxref("border-top")}}) und logischen (z.B. {{Cssxref("border-block-start")}}) Rahmeneigenschaften ansprechen.

### Borders vs. Outlines

Borders und [Outlines](/de/docs/Web/CSS/Reference/Properties/outline) sind sehr ähnlich. Allerdings unterscheiden sich Outlines von Borders in folgenden Punkten:

- Outlines nehmen nie Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Outlines nicht rechteckig sein, obwohl sie es normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines pinkfarbenen outset border

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
