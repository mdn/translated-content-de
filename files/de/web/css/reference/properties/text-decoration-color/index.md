---
title: text-decoration-color
slug: Web/CSS/Reference/Properties/text-decoration-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Farbe der Dekorationen, die dem Text durch {{ cssxref("text-decoration-line") }} hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstreichungen, Durchstreichungen und wellenförmige Linien wie die zur Markierung von Rechtschreibfehlern im Rahmen des Werts der Eigenschaft.

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

CSS bietet keinen direkten Mechanismus zur Angabe einer einzigartigen Farbe für jeden Linientyp. Dieser Effekt kann dennoch durch das Verschachteln von Elementen erzielt werden, indem jedem Element ein anderer Linientyp (mit der Eigenschaft {{cssxref("text-decoration-line")}}) angewendet und die Linienfarbe (mit `text-decoration-color`) pro Element angegeben wird.

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
  - : Die Farbe der Linienelemente.

## Barrierefreiheit

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Textfarbe, dem Hintergrund, auf dem der Text platziert ist, und der Textdekoration hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können. Das Farbkontrastverhältnis wird durch den Vergleich der Leuchtkraftwerte von Text- und Hintergrundfarben bestimmt.

Farbe allein sollte nicht verwendet werden, um Bedeutung zu vermitteln. Zum Beispiel reicht die alleinige Änderung von Text- und Textdekorationsfarbe nicht aus, um anzuzeigen, dass ein Link im Fokus steht.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

- Wenn mehrere Linendekorationseigenschaften auf einmal gesetzt werden sollen, kann es praktischer sein, die Abkürzungseigenschaft {{cssxref("text-decoration")}} zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
