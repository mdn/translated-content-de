---
title: background-color
slug: Web/CSS/background-color
l10n:
  sourceCommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{CSSRef}}

Die **`background-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Hintergrundfarbe eines Elements fest.

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Syntax

```css
/* Keyword values */
background-color: red;
background-color: indigo;

/* Hexadecimal value */
background-color: #bbff00; /* Fully opaque */
background-color: #bf0; /* Fully opaque shorthand */
background-color: #11ffee00; /* Fully transparent */
background-color: #1fe0; /* Fully transparent shorthand */
background-color: #11ffeeff; /* Fully opaque */
background-color: #1fef; /* Fully opaque shorthand */

/* RGB value */
background-color: rgb(255 255 128); /* Fully opaque */
background-color: rgb(117 190 218 / 50%); /* 50% transparent */

/* HSL value */
background-color: hsl(50 33% 25%); /* Fully opaque */
background-color: hsl(50 33% 25% / 75%); /* 75% opaque, i.e. 25% transparent */

/* Special keyword values */
background-color: currentcolor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

Die `background-color` Eigenschaft wird als einzelner `<color>` Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die einheitliche Farbe des Hintergrunds. Sie wird hinter jedem angegebenen {{cssxref("background-image")}} gerendert, obwohl die Farbe bei Transparenz im Bild weiterhin sichtbar sein wird.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Hintergrundfarbe und der darüber liegenden Textfarbe hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Leuchtdichte der Text- und Hintergrundfarbenwerte verglichen wird. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Boxen einfärben

Dieses Beispiel demonstriert die Anwendung von `background-color` auf HTML {{HTMLelement("div")}} Elemente mit verschiedenen CSS {{cssxref("color_value", "&lt;color&gt;")}} Werten.

#### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

#### CSS

```css
.exampleone {
  background-color: transparent;
}

.exampletwo {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

#### Ergebnis

{{EmbedLiveSample("Colorize boxes", 200, 150)}}

### Tabellen einfärben

Dieses Beispiel demonstriert die Verwendung von `background-color` auf HTML {{HTMLelement("table")}} Elemente, einschließlich {{HTMLelement("tr")}} Zeilen und {{HTMLelement("td")}} Zellen.

#### HTML

```html
<table>
  <tr id="r1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td id="c13">13</td>
  </tr>
  <tr id="r2">
    <td id="c21">21</td>
    <td id="c22">22</td>
    <td id="c23">23</td>
  </tr>
  <tr id="r3">
    <td id="c31">31</td>
    <td id="c32">32</td>
    <td id="c33">33</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}
td {
  border: solid 1px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### Ergebnis

{{EmbedLiveSample('Colorize tables', "100%", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mehrere Hintergründe](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
