---
title: "`outline-color` CSS property"
short-title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`outline-color`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Farbe der Kontur eines Elements fest.

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
  - : Die Farbe der Kontur, angegeben als `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert `auto` auf, der derzeit in keinem Browser unterstützt wird. Wenn implementiert, wird `auto` zu [`currentColor`](/de/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) berechnet, es sei denn, {{cssxref("outline-style")}} ist auf `auto` eingestellt, dann wird es zur [Akzentfarbe](/de/docs/Web/CSS/Reference/Properties/accent-color) berechnet.

## Beschreibung

Eine Kontur ist eine Linie, die um ein Element gezeichnet wird, außerhalb des {{cssxref("border")}}. Im Gegensatz zum Rand des Elements wird die Kontur außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlappen. Der Rand hingegen wird das Layout der Seite tatsächlich so ändern, dass es passt, ohne etwas anderes zu überlappen (es sei denn, Sie stellen es ausdrücklich so ein, dass es überlappt).

Es ist oft praktischer, die Kurzform-Eigenschaft {{cssxref("outline")}} zu verwenden, wenn das Aussehen einer Kontur definiert wird.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/Reference/Selectors/:focus) beinhalten normalerweise Anpassungen der {{cssxref("outline")}}-Eigenschaft. Wenn die Farbe der Kontur angepasst wird, ist es wichtig sicherzustellen, dass der Kontrast zwischen ihr und dem Hintergrund, über dem die Kontur gelegt ist, hoch genug ist, damit Personen mit Sehbehinderungen sie wahrnehmen können.

Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraft von Text- und Hintergrundfarbwerten bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4,5:1 für Textinhalte und 3:1 für größeren Text wie Überschriften erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/Reference/Properties/font-weight) oder größer oder 24px oder größer.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer soliden blauen Kontur

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
