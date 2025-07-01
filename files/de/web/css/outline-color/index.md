---
title: outline-color
slug: Web/CSS/outline-color
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`outline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Kontur eines Elements fest.

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

Die Eigenschaft `outline-color` wird als einer der nachfolgend aufgeführten Werte angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Kontur, angegeben als `<color>`.

Die Spezifikation listet auch einen zusätzlichen Wert, `auto`, der derzeit in keinem Browser unterstützt wird. Wenn er implementiert wird, berechnet sich `auto` zu [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword), es sei denn, [`outline-style`](/de/docs/Web/CSS/outline-style) ist auf `auto` gesetzt, dann wird er zur [Accentfarbe](/de/docs/Web/CSS/accent-color) berechnet.

## Beschreibung

Eine Kontur ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des {{cssxref("border")}}. Im Gegensatz zum Rand des Elements wird die Kontur außerhalb des Rahmens des Elements gezeichnet und kann andere Inhalte überlappen. Der Rand hingegen wird das Layout der Seite tatsächlich so ändern, dass es passt, ohne andere Inhalte zu überlappen (es sei denn, Sie setzen ihn explizit auf Überlappung).

Es ist oft praktischer, die Kurzschreibweiseigenschaft {{cssxref("outline")}} zu verwenden, wenn das Erscheinungsbild einer Kontur definiert wird.

## Barrierefreiheit

Benutzerdefinierte [Fokus-Stile](/de/docs/Web/CSS/:focus) erfordern häufig Anpassungen der {{cssxref("outline")}}-Eigenschaft. Wenn die Farbe der Kontur angepasst wird, ist es wichtig sicherzustellen, dass das Kontrastverhältnis zwischen ihr und dem Hintergrund, über dem die Kontur platziert ist, hoch genug ist, damit Menschen mit Sehbehinderungen sie wahrnehmen können.

Das Kontrastverhältnis der Farben wird durch den Vergleich der Leuchtdichten der Text- und Hintergrundfarbwerte bestimmt. Um die aktuellen [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) zu erfüllen, ist ein Verhältnis von 4.5:1 für Textinhalte und 3:1 für größeren Text, wie z.B. Überschriften, erforderlich. Großer Text ist definiert als 18,66px und [fett](/de/docs/Web/CSS/font-weight) oder größer, oder 24px oder größer.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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
