---
title: "`text-decoration-color` CSS property"
short-title: text-decoration-color
slug: Web/CSS/Reference/Properties/text-decoration-color
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-decoration-color`** legt die Farbe von Dekorationen fest, die mit {{ cssxref("text-decoration-line") }} zu Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstreichungen, Durchstreichungen und wellenförmige Linien, wie sie zur Kennzeichnung von Rechtschreibfehlern verwendet werden, innerhalb des Geltungsbereichs des Eigenschaftswerts.

CSS bietet keinen direkten Mechanismus, um für jeden Linientyp eine eindeutige Farbe festzulegen. Dieser Effekt kann dennoch durch Verschachteln von Elementen erreicht werden, indem auf jedes Element ein anderer Linientyp (mit der Eigenschaft {{cssxref("text-decoration-line")}}) angewendet und die Linienfarbe (mit `text-decoration-color`) pro Element festgelegt wird.

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

Diese Eigenschaft wird als ein `<color>`-Wert angegeben:

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe der Liniendekoration.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes, dem Hintergrund, auf dem der Text platziert ist, und der Textdekorationslinie hoch genug ist, damit Menschen mit Sehbeeinträchtigungen den Inhalt der Seite lesen können. Das Farbkontrastverhältnis wird durch den Vergleich der Helligkeit der Farbwerte von Text und Hintergrund bestimmt.

Farbe allein sollte nicht zur Vermittlung von Bedeutung verwendet werden. Beispielsweise reicht eine Änderung von Text und `text-decoration-color` allein nicht aus, um anzuzeigen, dass ein Link den Fokus hat.

- [WebAIM: Farbkontrast-Prüfer](https://webaim.org/resources/contrastchecker/)
- [MDN-Erklärungen zum Verständnis von WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

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

- Beim gleichzeitigen Festlegen mehrerer Liniendekorationseigenschaften kann es praktischer sein, stattdessen die Kurzform-Eigenschaft {{cssxref("text-decoration")}} zu verwenden.
- Der Datentyp {{cssxref("&lt;color&gt;")}}
- Weitere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} und {{cssxref("column-rule-color")}}
