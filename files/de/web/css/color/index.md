---
title: color
slug: Web/CSS/color
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`color`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt den Vordergrund-[Farbwert](/de/docs/Web/CSS/color_value) des Textes eines Elements und dessen [Textdekorationen](/de/docs/Web/CSS/text-decoration) fest und bestimmt den Wert von [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword). `currentcolor` kann als indirekter Wert für _andere_ Eigenschaften verwendet werden und ist der Standard für andere Farbeigenschaften, wie zum Beispiel {{cssxref("border-color")}}.

{{EmbedInteractiveExample("pages/css/color.html")}}

Für einen Überblick zur Verwendung von Farben in HTML sehen Sie [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

## Syntax

```css
/* Keyword values */
color: currentcolor;

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

Die `color`-Eigenschaft wird als einzelner {{cssxref("&lt;color&gt;")}}-Wert angegeben.

Achten Sie darauf, dass der Wert eine einheitliche Farbe sein muss. Es kann nicht ein {{cssxref("&lt;gradient&gt;")}} sein, welches tatsächlich eine Art von {{cssxref("&lt;image&gt;")}} ist.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Legt die Farbe der textlichen und dekorativen Teile des Elements fest.
- [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword)
  - : Setzt die Farbe auf den `color`-Eigenschaftswert des Elements. Wenn `currentcolor` jedoch als Wert von `color` gesetzt wird, wird es als `inherit` behandelt.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes und dem Hintergrund, auf dem der Text steht, hoch genug ist, damit Menschen mit Sehschwächen den Inhalt der Seite lesen können.

Das Kontrastverhältnis von Farben wird bestimmt, indem man die Helligkeit der Text- und Hintergrundfarbwerte vergleicht. Um die aktuellen [Richtlinien zur barrierefreien Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text, wie Überschriften, erforderlich. Als großer Text gelten 18.66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text rot machen

Dies sind alles Möglichkeiten, den Text eines Absatzes rot zu machen:

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

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}, und {{cssxref("print-color-adjust")}}
- SVG {{SVGAttr("color")}} Attribut
- [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
