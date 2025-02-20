---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`border`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Rahmen eines Elements fest. Sie setzt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand-Eigenschaft für die folgenden CSS-Eigenschaften:

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

Die `border`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt dabei keine Rolle.

> [!NOTE]
> Der Rahmen bleibt unsichtbar, wenn sein Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist.

### Werte

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Standardwert ist `medium`, falls kein Wert angegeben wurde. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Standardwert ist `none`, falls kein Wert angegeben wurde. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Standardwert ist `currentcolor`, falls kein Wert angegeben wurde. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Shorthand-Eigenschaften werden alle ausgelassenen Unterwerte auf ihren [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen, sondern stattdessen auf seinen Initialwert (`none`) gesetzt wird.

Das `border`-Shorthand ist besonders nützlich, wenn alle vier Rahmen gleich sein sollen. Sollten sie jedoch unterschiedlich sein, können die Langformen {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwendet werden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie jeden Rahmen einzeln mit den physischen (z. B. {{Cssxref("border-top")}}) und logischen (z. B. {{Cssxref("border-block-start")}}) Rahmen-Eigenschaften ansprechen.

### Rahmen vs. Umrisse

Rahmen und [Umrisse](/de/docs/Web/CSS/outline) sind sehr ähnlich. Jedoch unterscheiden sich Umrisse von Rahmen in folgenden Punkten:

- Umrisse nehmen keinen Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es in der Regel sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines pinkfarbenen äußeren Rahmens

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
