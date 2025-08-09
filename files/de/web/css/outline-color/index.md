---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`outline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe eines Umrisses eines Elements fest.

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

Die `outline-color` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Umrisses, angegeben als `<color>`.

Die Spezifikation listet außerdem einen zusätzlichen Wert `auto` auf, der derzeit in keinem Browser unterstützt wird. Wenn dieser implementiert wird, wird `auto` zu [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) berechnet, es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt, dann wird es auf die [Akzentfarbe](/de/docs/Web/CSS/accent-color) berechnet.

## Beschreibung

Ein Umriss ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}. Im Gegensatz zum Rahmen des Elements wird der Umriss außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlagern. Der Rahmen wird hingegen tatsächlich das Layout der Seite ändern, um sicherzustellen, dass er passt, ohne etwas anderes zu überlappen (es sei denn, Sie stellen ihn explizit auf Überlappung ein).

Es ist oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, um das Aussehen eines Umrisses zu definieren.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/:focus) beinhalten häufig Anpassungen der {{cssxref("outline")}} Eigenschaft. Wenn die Farbe des Umrisses angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen diesem und dem Hintergrund, über dem der Umriss platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen es wahrnehmen können.

Das Kontrastverhältnis wird ermittelt, indem die Leuchtkraft der Text- und Hintergrundfarbwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66 px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24 px oder größer.

- [WebAIM: Farbkontrast-Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines soliden blauen Umrisses

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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
