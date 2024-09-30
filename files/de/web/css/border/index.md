---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border`** [Kurzschrift](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft legt den Rand eines Elements fest. Sie legt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} fest.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Zusammengesetzte Eigenschaften

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

Die `border` Eigenschaft kann unter Verwendung eines, zweier oder dreier der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rand wird unsichtbar sein, wenn sein Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf `none` gesetzt ist.

### Werte

- `<line-width>`
  - : Legt die Dicke des Randes fest. Standardwert ist `medium`, falls nicht angegeben. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Randes fest. Standardwert ist `none`, falls nicht angegeben. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Randes fest. Standardwert ist `currentcolor`, falls nicht angegeben. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Kurzschriften werden alle ausgelassenen Unterwerte auf ihren [Anfangswert](/de/docs/Web/CSS/initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen, sondern stattdessen auf seinen Anfangswert gesetzt wird, d.h. `none`.

Die `border`-Kurzschrift ist besonders nützlich, wenn alle vier Ränder gleich sein sollen. Um sie jedoch unterschiedlich zu gestalten, können Sie die Langschrift-Eigenschaften {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie einen Rand nach dem anderen mit den physikalischen (z.B. {{Cssxref("border-top")}}) und logischen (z.B. {{Cssxref("border-block-start")}}) Rand-Eigenschaften ansprechen.

### Ränder vs. Umrisse

Ränder und [Umrisse](/de/docs/Web/CSS/outline) sind sehr ähnlich. Allerdings unterscheiden sich Umrisse von Rändern in folgenden Punkten:

- Umrisse nehmen nie Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie dies normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen rosa hervorstehenden Rand setzen

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
- [Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [CSS lernen: Hintergründe und Ränder](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
