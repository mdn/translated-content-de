---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe von Dekorationen fest, die durch {{ cssxref("text-decoration-line") }} zum Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstreichungen, Durchstreichungen und wellenförmige Linien, wie sie zur Markierung von Rechtschreibfehlern verwendet werden, im Rahmen des Werts der Eigenschaft.

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

CSS bietet keinen direkten Mechanismus, um eine einzigartige Farbe für jeden Linientyp anzugeben. Dieser Effekt kann jedoch erreicht werden, indem Elemente verschachtelt werden, jedem Element ein anderer Linientyp zugewiesen wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft), und die Linienfarbe (mit `text-decoration-color`) für jedes Element einzeln angegeben wird.

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
  - : Die Farbe der Linieneffekte.

## Barrierefreiheit

Es ist wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes, dem Hintergrund, auf dem der Text platziert ist, und der Dekorationslinie des Textes hoch genug ist, damit Menschen mit Sehbehinderungen den Inhalt der Seite lesen können. Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Text- und Hintergrundfarben bestimmt.

Allein die Farbe sollte nicht verwendet werden, um eine Bedeutung zu vermitteln. Zum Beispiel reicht die alleinige Änderung der Text- und `text-decoration-color` nicht aus, um anzuzeigen, dass ein Link fokussiert ist.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- Wenn mehrere Textdekorations-Eigenschaften gleichzeitig gesetzt werden sollen, kann es bequemer sein, die {{cssxref("text-decoration")}} Kurzform-Eigenschaft zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
