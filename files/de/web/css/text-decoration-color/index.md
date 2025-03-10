---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe von Verzierungen fest, die durch {{ cssxref("text-decoration-line") }} zum Text hinzugefügt werden.

Die Farbe gilt für Verzierungen wie Unterstreichungen, Überstreichungen, Durchstreichungen und gewellte Linien, wie sie zum Markieren von Rechtschreibfehlern verwendet werden, im Bereich des Werts der Eigenschaft.

{{InteractiveExample("CSS Demo: text-decoration-color")}}

```css interactive-example-choice
text-decoration-color: red;
```

```css interactive-example-choice
text-decoration-color: #21ff21;
```

```css interactive-example-choice
text-decoration-color: rgb(255, 90, 255);
```

```css interactive-example-choice
text-decoration-color: hsl(70, 100%, 40%);
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

CSS bietet keinen direkten Mechanismus zum Festlegen einer einzigartigen Farbe für jeden Linientyp. Dieser Effekt kann dennoch durch Verschachteln von Elementen erreicht werden, indem ein unterschiedlicher Linientyp auf jedes Element angewendet wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft) und die Linienfarbe (mit `text-decoration-color`) für jedes Element individuell festgelegt wird.

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
  - : Die Farbe der Linienverzierung.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Textfarbe, dem Hintergrund, über den der Text gelegt ist, und der Textverzierungslinie hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können. Das Kontrastverhältnis der Farben wird durch den Vergleich der Leuchtkraft der Text- und Hintergrundfarbenwerte bestimmt.

Farbe allein sollte nicht verwendet werden, um Bedeutung zu vermitteln. Zum Beispiel reicht die Änderung von Text- und Textverzierungsfarbe allein nicht aus, um anzuzeigen, dass ein Link den Fokus hat.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis der Erfolgskriterien 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- Wenn mehrere Linienzierungseigenschaften gleichzeitig festgelegt werden sollen, kann es praktischer sein, die {{cssxref("text-decoration")}} Kurzschreibweise zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Weitere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
