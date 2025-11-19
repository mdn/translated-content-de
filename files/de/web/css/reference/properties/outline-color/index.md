---
title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`outline-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe der Umrandung eines Elements fest.

{{InteractiveExample("CSS Demo: outline-color")}}

```css interactive-example-choice
outline-color: red;
```

```css interactive-example-choice
outline-color: #32a1ce;
```

```css interactive-example-choice
outline-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
outline-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
outline-color: currentColor;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <color> values */
outline-color: #f92525;
outline-color: rgb(30 222 121);
outline-color: blue;

/* Global values */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

Die `outline-color`-Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Umrandung, angegeben als ein `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert `auto`, der derzeit in keinem Browser unterstützt wird. Wenn `auto` implementiert wird, wird es zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) berechnet, sofern [`outline-style`](/de/docs/Web/CSS/Reference/Properties/outline-style) nicht auf `auto` gesetzt ist. In diesem Fall wird es zur [Akzentfarbe](/de/docs/Web/CSS/Reference/Properties/accent-color) berechnet.

## Beschreibung

Eine Umrandung ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}. Anders als der Rahmen eines Elements wird die Umrandung außerhalb des Rahmens des Elements gezeichnet und kann sich mit anderen Inhalten überlappen. Der Rahmen verändert hingegen das Layout der Seite tatsächlich, um sicherzustellen, dass er ohne Überlappung mit anderen Elementen passt, es sei denn, Sie stellen es ausdrücklich so ein, dass er überlappt.

Es ist oft bequemer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Umrandung definiert wird.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/Reference/Selectors/:focus) beinhalten häufig Anpassungen der {{cssxref("outline")}}-Eigenschaft. Wenn die Farbe der Umrandung angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen ihr und dem Hintergrund, über dem die Umrandung platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen sie wahrnehmen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Text- und Hintergrundfarbwerte bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18.66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Erläuterungen zu Leitfaden 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer soliden blauen Umrandung

#### HTML

```html
<p>My outline is blue, as you can see.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Set the outline width and style */
  outline-color: blue; /* Set the outline color */
  margin: 5px;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_a_solid_blue_outline') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
