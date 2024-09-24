---
title: Randabstand
slug: Web/CSS/padding
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt den [Randabstandsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf allen vier Seiten eines Elements gleichzeitig fest.

{{EmbedInteractiveExample("pages/css/padding.html")}}

Der Randabstandsbereich eines Elements ist der Raum zwischen seinem Inhalt und seiner Umrandung.

> [!NOTE]
> Randabstand schafft zusätzlichen Raum innerhalb eines Elements. Im Gegensatz dazu schafft {{cssxref("margin")}} zusätzlichen Raum _um_ ein Element herum.

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-top")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}

## Syntax

```css
/* Auf alle vier Seiten anwenden */
padding: 1em;

/* oben und unten | links und rechts */
padding: 5% 10%;

/* oben | links und rechts | unten */
padding: 1em 2em 2em;

/* oben | rechts | unten | links */
padding: 5px 1em 0 2em;

/* Globale Werte */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

Die `padding`-Eigenschaft kann mit einem, zwei, drei oder vier Werten angegeben werden. Jeder Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}. Negative Werte sind ungültig.

- Wenn **ein** Wert angegeben wird, gilt derselbe Randabstand für **alle vier Seiten**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Randabstand für **oben und unten**, der zweite für **links und rechts**.
- Wenn **drei** Werte angegeben werden, gilt der erste Randabstand für **oben**, der zweite für **rechts und links**, der dritte für **unten**.
- Wenn **vier** Werte angegeben werden, gilt der Randabstand für **oben**, **rechts**, **unten** und **links** in dieser Reihenfolge (im Uhrzeigersinn).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randabstands als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randabstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Randabstands mit Pixeln

#### HTML

```html
<h4>Dieses Element hat einen moderaten Randabstand.</h4>
<h3>Der Randabstand ist riesig in diesem Element!</h3>
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

### Festlegen des Randabstands mit Pixeln und Prozentsätzen

```css
padding: 5%; /* Alle Seiten: 5% Randabstand */

padding: 10px; /* Alle Seiten: 10px Randabstand */

padding: 10px 20px; /* oben und unten: 10px Randabstand */
/* links und rechts: 20px Randabstand */

padding: 10px 3% 20px; /* oben:            10px Randabstand */
/* links und rechts: 3% Randabstand   */
/* unten:         20px Randabstand */

padding: 1em 3px 30px 5px; /* oben:    1em Randabstand  */
/* rechts:  3px Randabstand  */
/* unten: 30px Randabstand */
/* links:   5px Randabstand  */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}.
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} und die Kurzformen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}.
