---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`outline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Kontur eines Elements fest.

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

Die `outline-color` Eigenschaft wird als einer der unten aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Kontur, angegeben als `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert, `auto`, auf, der derzeit in keinem Browser unterstützt wird. Wenn er implementiert wird, rechnet `auto` sich auf [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt; dann wird es auf die [Akzentfarbe](/de/docs/Web/CSS/accent-color) berechnet.

## Beschreibung

Eine Kontur ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}. Anders als der Rahmen eines Elements wird die Kontur außerhalb des Rahmens des Elements gezeichnet und kann sich mit anderem Inhalt überschneiden. Der Rahmen hingegen ändert tatsächlich das Layout der Seite, um sicherzustellen, dass er passt, ohne sich mit etwas anderem zu überlappen (es sei denn, Sie setzen ihn explizit so, dass er sich überlappt).

Es ist oft bequemer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Kontur definiert wird.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/:focus) beinhalten häufig Anpassungen an der {{cssxref("outline")}} Eigenschaft. Wenn die Farbe der Kontur angepasst wird, ist es wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen ihr und dem Hintergrund, über dem die Kontur platziert ist, hoch genug ist, damit Personen mit Sehbehinderungen sie wahrnehmen können.

Das Farbkontrastverhältnis wird bestimmt, indem die Helligkeit der Text- und Hintergrundfarbenwerte verglichen wird. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis der WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen einer durchgehenden blauen Kontur

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
