---
title: "`color` CSS property"
short-title: color
slug: Web/CSS/Reference/Properties/color
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`color`** legt den Vordergrund-[Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) des Texts eines Elements und seiner [Textdekorationen](/de/docs/Web/CSS/Reference/Properties/text-decoration) fest und setzt den Wert [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword). `currentColor` kann als indirekter Wert für _andere_ Eigenschaften verwendet werden und ist der Standardwert für andere Farbeigenschaften wie {{cssxref("border-color")}}.

Eine Übersicht über die Verwendung von Farbe in HTML finden Sie unter [Farbe mithilfe von CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color).

{{InteractiveExample("CSS Demo: color")}}

```css interactive-example-choice
color: rebeccapurple;
```

```css interactive-example-choice
color: #00a400;
```

```css interactive-example-choice
color: rgb(214 122 127);
```

```css interactive-example-choice
color: hsl(30deg 82% 43%);
```

```css interactive-example-choice
color: hsl(237deg 74% 33% / 61%);
```

```css interactive-example-choice
color: hwb(152deg 0% 58% / 70%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <p id="example-element">
      London. Michaelmas term lately over, and the Lord Chancellor sitting in
      Lincoln's Inn Hall. Implacable November weather.
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5em;
}

.example-container {
  background-color: white;
  padding: 10px;
}
```

## Syntax

```css
/* Keyword value */
color: currentColor;

/* <named-color> values */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> values */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> values and legacy <rgba()> values*/
color: rgb(34, 12, 64);
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.6);
color: rgb(34.6 12 64 / 60%);
color: rgba(34.6 12 64 / 60%);

/* <hsl()> values and legacy <hsla()> values */
color: hsl(30, 100%, 50%);
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.2 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* <hwb()> values */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* Global values */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

### Werte

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben:

- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe der textuellen und dekorativen Teile des Elements fest.
- [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword)
  - : Legt die Farbe auf den Wert der `color`-Eigenschaft des Elements fest. Wenn `currentColor` jedoch als Wert von `color` festgelegt ist, wird es als `inherit` behandelt.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Texts und dem Hintergrund, auf dem der Text platziert ist, hoch genug ist, damit Menschen mit Sehbeeinträchtigungen den Inhalt der Seite lesen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Farbwerte von Text und Hintergrund bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist für Textinhalte ein Verhältnis von 4,5:1 und für größeren Text wie Überschriften ein Verhältnis von 3:1 erforderlich. Großer Text ist als 18,66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer beziehungsweise als 24px oder größer definiert.

- [WebAIM: Farbkontrastprüfung](https://webaim.org/resources/contrastchecker/)
- [MDN: Erläuterungen zu WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgsbedingung 1.4.3 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text rot färben

Im Folgenden werden verschiedene Möglichkeiten gezeigt, den Text eines Absatzes rot zu färben:

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255 0 0);
}
p {
  color: rgb(100% 0% 0%);
}
p {
  color: hsl(0 100% 50%);
}

/* 50% translucent */
p {
  color: #ff000080;
}
p {
  color: rgb(255 0 0 / 50%);
}
p {
  color: hsl(0 100% 50% / 50%);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der Datentyp {{cssxref("&lt;color&gt;")}}
- Weitere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}} und {{cssxref("print-color-adjust")}}
- SVG-Attribut {{SVGAttr("color")}}
- Funktion {{CSSXref("color_value/color")}}
- [Farbe mithilfe von CSS auf HTML-Elemente anwenden](/de/docs/Web/CSS/Guides/Colors/Applying_color)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
