---
title: "`background-color` CSS property"
short-title: background-color
slug: Web/CSS/Reference/Properties/background-color
l10n:
  sourceCommit: 21fddb9643fae34dce16aec8eb5dd86cc29e0b7c
---

Die **`background-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Hintergrundfarbe eines Elements fest.

{{InteractiveExample("CSS Demo: background-color")}}

```css interactive-example-choice
background-color: brown;
```

```css interactive-example-choice
background-color: #74992e;
```

```css interactive-example-choice
background-color: rgb(255 255 128);
```

```css interactive-example-choice
background-color: rgb(255 255 128 / 0.5);
```

```css interactive-example-choice
background-color: hsl(50 33% 25%);
```

```css interactive-example-choice
background-color: hsl(50 33% 25% / 0.75);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

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
background-color: currentColor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

Die `background-color`-Eigenschaft wird als ein einzelner `<color>`-Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die einheitliche Farbe des Hintergrunds. Sie wird hinter jedem angegebenen {{cssxref("background-image")}} gerendert, obwohl die Farbe durch alle Transparenzen im Bild sichtbar bleibt.

## Beschreibung

Die `background-color`-Eigenschaft setzt die Hintergrundfarbe eines Element-Kastens. Die Farbe wird hinter allen Hintergrundbildern gezeichnet. Standardmäßig wird die Hintergrundfarbe innerhalb des [border-box](/de/docs/Web/CSS/Guides/Box_model/Introduction#border_area) gemalt, was bedeutet, dass sie hinter dem Rahmen gezeichnet wird und an der Außenseite des border-box endet.

Das Zuschneiden des `background-color`-Farbbereichs wird durch die {{cssxref("background-clip")}}-Eigenschaft gesteuert. Wenn mehrere Hintergrundbilder festgelegt sind, wird das Zuschneiden der Hintergrundfarbe durch den `background-clip`-Wert des untersten Hintergrundbildes bestimmt.

## Barrierefreiheit

Es ist wichtig, sicherzustellen, dass der Kontrast zwischen der Hintergrundfarbe und der Farbe des darauf platzierten Textes hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können. Ein hoher Kontrast verbessert auch die Barrierefreiheit für Benutzer mit glänzenden Bildschirmen unter hellen Bedingungen, wie z.B. Sonnenlicht.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtdichte der Text- und Hintergrundfarbenwerte bestimmt. Um den aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu entsprechen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fettschrift](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [Verstehen von WCAG: Wahrnehmbarkeitsrichtlinie 1.4.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen von Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Verstehen von Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [Verstehen von Erfolgskriterium 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die Anwendung von `background-color` auf HTML-{{HTMLelement("p")}}-Elemente unter Verwendung verschiedener CSS-{{cssxref("color_value", "&lt;color&gt;")}}-Werte.

#### HTML

```html
<p class="example-one">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="example-two">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="example-three">Lorem ipsum dolor sit amet, consectetuer</p>
```

#### CSS

Jeder Absatz wird auf eine andere Hintergrundfarbe gesetzt, einschließlich der expliziten Einstellung von [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent), einer {{cssxref("rgb()")}}-Farb-Funktion, und einer {{cssxref("hex-color")}}. Wir setzen auch die {{cssxref("color")}}-Eigenschaft, um einen ausreichenden Kontrast zwischen dem Text und seinem Hintergrund sicherzustellen.

```css
.example-one {
  background-color: transparent;
}

.example-two {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.example-three {
  background-color: #777799;
  color: white;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic example", 200, 150)}}

### Farbige Tabellen

Dieses Beispiel zeigt die Verwendung von `background-color` auf HTML-{{HTMLelement("table")}}-Elementen, einschließlich {{HTMLelement("tr")}}-Zeilen und {{HTMLelement("td")}}-Zellen. Es zeigt auch, wie Hintergrundfarben hinter allen Rahmen gemalt werden.

#### HTML

```html
<table>
  <tbody>
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
  </tbody>
</table>
```

#### CSS

Wir verwenden CSS, um verschiedene {{cssxref("named-color")}}-Werte festzulegen. Wir setzen auch einen großen gestrichelten Rahmen auf die Tabelle und jede Zelle, um zu zeigen, wie die `background-color` bis zum äußeren Rand der border-box gemalt wird.

```css
table {
  border-collapse: collapse;
  border: dashed black 5px;
  width: 250px;
  height: 150px;
}
td {
  border: dashed 5px black;
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

{{EmbedLiveSample('Colorized tables', "100%", "100%")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("background-clip")}}
- [Mehrere Hintergründe](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
