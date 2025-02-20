---
title: padding
slug: Web/CSS/padding
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`padding`**-[CSS](/de/docs/Web/CSS)-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt den [Abstandsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf allen vier Seiten eines Elements gleichzeitig fest.

{{EmbedInteractiveExample("pages/css/padding.html")}}

Der Abstandsbereich (`padding area`) eines Elements ist der Raum zwischen seinem Inhalt und seiner Umrandung (`border`).

> [!NOTE] > **Padding** erzeugt zusätzlichen Platz innerhalb eines Elements. Im Gegensatz dazu erzeugt {{cssxref("margin")}} zusätzlichen Platz _um_ ein Element herum.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## Syntax

```css
/* Apply to all four sides */
padding: 1em;

/* top and bottom | left and right */
padding: 5% 10%;

/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;

/* Global values */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

Die `padding`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist entweder ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt das gleiche Padding für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt das erste Padding für **oben und unten**, das zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt das erste Padding für **oben**, das zweite für **rechts und links**, das dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Paddings in der Reihenfolge **oben**, **rechts**, **unten** und **links** (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als ein fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Padding mit Pixeln festlegen

#### HTML

```html
<h4>This element has moderate padding.</h4>
<h3>The padding is huge in this element!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_padding_with_pixels', '100%', 300)}}

### Padding mit Pixeln und Prozentsätzen festlegen

```css
padding: 5%; /* All sides: 5% padding */

padding: 10px; /* All sides: 10px padding */

padding: 10px 20px; /* top and bottom: 10px padding */
/* left and right: 20px padding */

padding: 10px 3% 20px; /* top:            10px padding */
/* left and right: 3% padding   */
/* bottom:         20px padding */

padding: 1em 3px 30px 5px; /* top:    1em padding  */
/* right:  3px padding  */
/* bottom: 30px padding */
/* left:   5px padding  */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
