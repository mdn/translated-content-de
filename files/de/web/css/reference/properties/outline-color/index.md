---
title: "`outline-color` CSS property"
short-title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
l10n:
  sourceCommit: 4371d98674430c6693a5111df85438e7f5aa8fb7
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`outline-color`** legt die Farbe der Umrandung eines Elements fest.

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

Für die Eigenschaft `outline-color` kann einer der folgenden Werte angegeben werden.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Umrandung, angegeben als `<color>`.

Die Spezifikation führt außerdem den Wert `auto` auf, der derzeit von keinem Browser unterstützt wird. Sobald er implementiert ist, wird `auto` zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) berechnet, es sei denn, {{cssxref("outline-style")}} ist auf `auto` gesetzt. In diesem Fall wird er zur [Akzentfarbe](/de/docs/Web/CSS/Reference/Properties/accent-color) berechnet.

## Beschreibung

Eine Umrandung ist eine Linie, die außerhalb des {{cssxref("border")}} um ein Element gezeichnet wird. Anders als der Rahmen eines Elements wird die Umrandung außerhalb des Elementbereichs gezeichnet und kann andere Inhalte überlagern. Der Rahmen hingegen verändert das Layout der Seite, damit er Platz findet, ohne andere Inhalte zu überlagern (sofern Sie nicht ausdrücklich eine Überlagerung festlegen).

Häufig ist es einfacher, das Erscheinungsbild einer Umrandung mit der Kurzschreibweise {{cssxref("outline")}} festzulegen.

## Barrierefreiheit

Benutzerdefinierte [Fokusstile](/de/docs/Web/CSS/Reference/Selectors/:focus) umfassen häufig Anpassungen der Eigenschaft {{cssxref("outline")}}. Wenn Sie die Farbe der Umrandung anpassen, sollten Sie darauf achten, dass das Kontrastverhältnis zwischen der Umrandung und dem Hintergrund, auf dem sie erscheint, hoch genug ist, damit Menschen mit eingeschränktem Sehvermögen sie erkennen können.

Eine Umrandung ist ein visueller Indikator. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, verlangt [Erfolgskriterium 1.4.11: Nicht-Text-Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) ein Kontrastverhältnis von mindestens 3:1 zwischen der Umrandung und den angrenzenden Farben. Beachten Sie: Wenn die Umrandung als Fokusindikator dient, gehören zu den angrenzenden Farben sowohl der Hintergrund außerhalb des Elements als auch der Hintergrund des Elements selbst, sofern die Umrandung an beide angrenzt.

- [WebAIM: Prüftool für Farbkontraste](https://webaim.org/resources/contrastchecker/)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.11 verstehen: Nicht-Text-Kontrast | W3C Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine durchgezogene blaue Umrandung festlegen

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
- Der Datentyp {{cssxref("&lt;color&gt;")}}
- Weitere farbbezogene Eigenschaften: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
