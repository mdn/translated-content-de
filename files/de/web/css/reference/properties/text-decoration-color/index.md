---
title: "`text-decoration-color` CSS property"
short-title: text-decoration-color
slug: Web/CSS/Reference/Properties/text-decoration-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe von Dekorationen fest, die durch {{ cssxref("text-decoration-line") }} dem Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstriche, Überstriche, Durchstreichungen und gewellte Linien, wie sie beispielsweise zur Markierung von Rechtschreibfehlern verwendet werden, im Rahmen des Werts der Eigenschaft.

{{InteractiveExample("CSS Demo: text-decoration-color")}}

```css interactive-example-choice
text-decoration-color: red;
```

```css interactive-example-choice
text-decoration-color: #21ff21;
```

```css interactive-example-choice
text-decoration-color: rgb(255 90 255);
```

```css interactive-example-choice
text-decoration-color: hsl(70 100% 40%);
```

```css interactive-example-choice
text-decoration-color: currentColor;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-decoration-line: underline;
}
```

CSS bietet keinen direkten Mechanismus, um eine eindeutige Farbe für jeden Linientyp festzulegen. Dieser Effekt kann dennoch erreicht werden, indem Elemente verschachtelt werden, jedem Element ein anderer Linientyp zugewiesen wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft) und die Linienfarbe (mit `text-decoration-color`) auf Elementebene festgelegt wird.

## Syntax

```css
/* <color> values */
text-decoration-color: currentColor;
text-decoration-color: red;
text-decoration-color: #00ff00;
text-decoration-color: rgb(255 128 128 / 50%);
text-decoration-color: transparent;

/* Global values */
text-decoration-color: inherit;
text-decoration-color: initial;
text-decoration-color: revert;
text-decoration-color: revert-layer;
text-decoration-color: unset;
```

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Liniendekoration.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass der Kontrast zwischen der Textfarbe, dem Hintergrund, auf dem der Text platziert ist, und der Liniendekoration hoch genug ist, damit Personen mit Sehbehinderungen den Seiteninhalt lesen können. Das Farbkontrastverhältnis wird durch Vergleich der Leuchtkraft von Text- und Hintergrundfarbwerten bestimmt.

Farbe alleine sollte nicht verwendet werden, um Bedeutung zu vermitteln. Zum Beispiel ist eine Änderung der Text- und Textdekorationsfarbe alleine nicht ausreichend, um anzuzeigen, dass ein Link den Fokus hat.

- [WebAIM: Kontrast Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```html
<p>
  This paragraph has <s>some erroneous text</s> inside it that I want to call
  attention to.
</p>
```

```css
p {
  text-decoration-line: underline;
  text-decoration-color: cyan;
}

s {
  text-decoration-line: line-through;
  text-decoration-color: red;
  text-decoration-style: wavy;
}
```

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Beim gleichzeitigen Festlegen mehrerer Liniendekorationseigenschaften kann es praktischer sein, stattdessen die Kurzformeigenschaft {{cssxref("text-decoration")}} zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
