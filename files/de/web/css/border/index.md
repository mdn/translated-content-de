---
title: border
slug: Web/CSS/border
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`border`** [Shorthand](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Rand eines Elements fest. Sie setzt die Werte von {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/border.html")}}

## Zugehörige Eigenschaften

Diese Eigenschaft ist ein Shorthand für die folgenden CSS-Eigenschaften:

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

Die `border`-Eigenschaft kann unter Verwendung von einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt keine Rolle.

> [!NOTE]
> Der Rand wird unsichtbar sein, wenn sein Stil nicht definiert ist. Der Standardstil ist `none`.

### Werte

- `<line-width>`
  - : Legt die Dicke des Randes fest. Standardmäßig auf `medium`, wenn nicht vorhanden. Siehe {{Cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Legt den Stil des Randes fest. Standardmäßig auf `none`, wenn nicht vorhanden. Siehe {{Cssxref("border-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe des Randes fest. Standardmäßig auf `currentcolor`, wenn nicht vorhanden. Siehe {{Cssxref("border-color")}}.

## Beschreibung

Wie bei allen Shorthand-Eigenschaften werden ausgelassene Teilwerte auf ihren [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) gesetzt. Wichtig ist, dass `border` nicht verwendet werden kann, um einen benutzerdefinierten Wert für {{cssxref("border-image")}} festzulegen, sondern stattdessen auf seinen Initialwert gesetzt wird, d.h. `none`.

Der `border`-Shorthand ist besonders nützlich, wenn alle vier Ränder gleich sein sollen. Um sie jedoch unterschiedlich zu gestalten, können Sie die Langform-Eigenschaften {{Cssxref("border-width")}}, {{Cssxref("border-style")}} und {{Cssxref("border-color")}} verwenden, die unterschiedliche Werte für jede Seite akzeptieren. Alternativ können Sie einen Rand nach dem anderen mit den physischen (z. B. {{Cssxref("border-top")}}) und logischen (z. B. {{Cssxref("border-block-start")}}) Randeigenschaften ansprechen.

### Grenzen vs. Umrisse

Grenzen und [Umrisse](/de/docs/Web/CSS/outline) sind sehr ähnlich. Allerdings unterscheiden sich Umrisse von Grenzen in folgenden Punkten:

- Umrisse beanspruchen nie Platz, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Laut Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es normalerweise sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen pinkfarbenen Rand im Stil "outset" setzen

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
- [Hintergründe und Grenzen](/de/docs/Web/CSS/CSS_backgrounds_and_borders)
- [Lernen Sie CSS: Hintergründe und Grenzen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
