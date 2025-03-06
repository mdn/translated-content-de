---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe der Dekorationen fest, die durch {{ cssxref("text-decoration-line") }} dem Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstriche, Durchstreichungen und wellige Linien, wie sie zur Markierung von Rechtschreibfehlern verwendet werden, im Rahmen des Werts der Eigenschaft.

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

CSS bietet keine direkte Möglichkeit, eine einzigartige Farbe für jeden Linientyp festzulegen. Dieser Effekt kann jedoch erreicht werden, indem Elemente geschachtelt werden, jedem Element ein anderer Linientyp zugewiesen wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft) und die Linienfarbe (mit `text-decoration-color`) für jedes Element individuell spezifiziert wird.

## Syntax

```css
/* <color> values */
text-decoration-color: currentcolor;
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

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes, dem Hintergrund, auf dem der Text platziert ist, und der Dekorationslinie hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können. Das Farbkonstrastverhältnis wird durch den Vergleich der Helligkeit der Text- und Hintergrundfarbwerte bestimmt.

Farbe allein sollte nicht verwendet werden, um Bedeutung zu vermitteln. Zum Beispiel reicht die Änderung von Text und text-decoration-color allein nicht aus, um anzuzeigen, dass ein Link den Fokus hat.

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

- Wenn mehrere Linien-Dekorationseigenschaften gleichzeitig festgelegt werden, kann es bequemer sein, die {{cssxref("text-decoration")}} Kurzschreibweise zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
