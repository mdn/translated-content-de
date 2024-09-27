---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border`** [Kurzform](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Rahmen eines Elements. Sie legt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} fest.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Bestandeigenschaften

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

Die `border`-Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rahmen wird unsichtbar sein, wenn sein Stil nicht definiert ist. Der Stil ist standardmäßig `none`.

### Werte

- `<line-width>`
  - : Legt die Dicke des Rahmens fest. Standard ist `medium`, wenn nicht angegeben. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Rahmens fest. Standard ist `none`, wenn nicht angegeben. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Rahmens fest. Standard ist `currentcolor`, wenn nicht angegeben. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Kurzform-Eigenschaften werden alle ausgelassenen Teilwerte auf ihren [Anfangswert](/de/docs/Web/CSS/initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen, sondern er auf seinen Anfangswert, d.h. `none`, gesetzt wird.

Die `border`-Kurzform ist besonders nützlich, wenn Sie alle vier Rahmen identisch haben möchten. Um sie jedoch voneinander zu unterscheiden, können Sie die Langform-Eigenschaften {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie einen Rahmen nach dem anderen mit den physikalischen (z.B. {{Cssxref("border-top")}}) und logischen (z.B. {{Cssxref("border-block-start")}}) Rahmeneigenschaften anvisieren.

### Rahmen vs. Umrisse

Rahmen und [Umrisse](/de/docs/Web/CSS/outline) sind sehr ähnlich. Jedoch unterscheiden sich Umrisse von Rahmen in den folgenden Punkten:

- Umrisse nehmen nie Platz ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen eines rosa eingerückten Rahmens

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
- [CSS lernen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
