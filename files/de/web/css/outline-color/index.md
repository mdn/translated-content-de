---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`outline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des Umrisses eines Elements fest.

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
outline-color: currentcolor;
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

Die `outline-color` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Umrisses, angegeben als `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert, `auto`, der derzeit in keinem Browser unterstützt wird. Wenn implementiert, wird `auto` zu [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) berechnet, es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt, dann wird es zur [Akzentfarbe](/de/docs/Web/CSS/accent-color) berechnet.

## Beschreibung

Ein Umriss ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}. Im Gegensatz zum Rahmen des Elements wird der Umriss außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlappen. Der Rahmen hingegen wird das Layout der Seite tatsächlich ändern, um sicherzustellen, dass er passt, ohne etwas anderes zu überlappen (es sei denn, Sie setzen ihn explizit so, dass er überlappt).

Es ist oft bequemer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild eines Umrisses definiert wird.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/:focus) beinhalten häufig Anpassungen der {{cssxref("outline")}} Eigenschaft. Wenn die Farbe des Umrisses angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen ihm und dem Hintergrund, über dem der Umriss platziert wird, hoch genug ist, damit Menschen mit Sehbeeinträchtigungen ihn wahrnehmen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Text- und Hintergrundfarben verglichen wird. Um die aktuellen [Richtlinien für barrierefreie Webinhalte (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Große Texte sind definiert als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen eines soliden blauen Umrisses

#### HTML

```html
<p>My outline is blue, as you can see.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Set the outline width and style */
  outline-color: #0000ff; /* Make the outline blue */
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
- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
