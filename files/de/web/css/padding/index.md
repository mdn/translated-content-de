---
title: padding
slug: Web/CSS/padding
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`padding`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) setzt den [Padding-Bereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf allen vier Seiten eines Elements gleichzeitig.

{{EmbedInteractiveExample("pages/css/padding.html")}}

Der Padding-Bereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

> [!NOTE]
> Padding schafft zusätzlichen Raum innerhalb eines Elements. Im Gegensatz dazu schafft {{cssxref("margin")}} zusätzlichen Raum _um_ ein Element herum.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `padding`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt derselbe Padding für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Padding für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Padding für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gelten die Paddings für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Padding mit Pixeln setzen

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

### Padding mit Pixeln und Prozentwerten setzen

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
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschreibweisen
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)
