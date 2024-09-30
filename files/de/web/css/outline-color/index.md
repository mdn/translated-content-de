---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-color`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Farbe des Rands eines Elements fest.

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

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

Die Eigenschaft `outline-color` wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des Rands, angegeben als `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert `auto`, der derzeit in keinem Browser unterstützt wird. Wenn implementiert, wird `auto` zu [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword) berechnet, es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt, dann wird es zur [Akzentfarbe](/de/docs/Web/CSS/accent-color) berechnet.

## Beschreibung

Ein Rand ist eine Linie, die um ein Element außerhalb des {{cssxref("border")}} gezeichnet wird. Anders als der Rand des Elements wird der Rand außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlappen. Der Rand hingegen wird das Layout der Seite tatsächlich so verändern, dass er passt, ohne etwas anderes zu überlappen (es sei denn, Sie setzen es explizit so, dass es überlappt).

Es ist oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn man das Erscheinungsbild eines Rands definiert.

## Barrierefreiheit

Angepasste [Fokus-Stile](/de/docs/Web/CSS/:focus) beinhalten häufig Anpassungen der {{cssxref("outline")}}-Eigenschaft. Wenn die Farbe des Rands angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen ihm und dem Hintergrund, über dem der Rand platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen es wahrnehmen können.

Das Farbkontrastverhältnis wird ermittelt, indem die Leuchtkraft der Text- und Hintergrundfarben verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größere Texte wie Überschriften erforderlich. Großer Text wird definiert als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN-Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines festen blauen Rands

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
- Andere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
