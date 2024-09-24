---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Umrandung eines Elements fest.

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

## Syntax

```css
/* <color> Werte */
outline-color: #f92525;
outline-color: rgb(30 222 121);
outline-color: blue;

/* Globale Werte */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

Die `outline-color` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Umrandung, angegeben als ein `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert, `auto`, der derzeit in keinem Browser unterstützt wird. Wenn implementiert, wird `auto` zu [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) ausgewertet, es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt, dann wird es auf die [Akzentfarbe](/de/docs/Web/CSS/accent-color) ausgewertet.

## Beschreibung

Eine Umrandung ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}. Im Gegensatz zur Rahmenlinie wird die Umrandung außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlappen. Der Rahmen hingegen ändert das Layout der Seite tatsächlich so, dass er ohne Überlappung passt (sofern nicht explizit anders festgelegt).

Es ist oft bequemer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn Sie das Erscheinungsbild einer Umrandung definieren.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/:focus) beinhalten häufig Anpassungen der {{cssxref("outline")}} Eigenschaft. Wenn die Farbe der Umrandung angepasst wird, ist es wichtig sicherzustellen, dass der Kontrastunterschied zwischen ihr und dem Hintergrund, über dem die Umrandung liegt, hoch genug ist, damit Menschen mit Sehbehinderungen sie wahrnehmen können.

Der Farbkontrast wird ermittelt, indem die Leuchtkraft der Text- und Hintergrundfarbwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalt und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer festen blauen Umrandung

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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
