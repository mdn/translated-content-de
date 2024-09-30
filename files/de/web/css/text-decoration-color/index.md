---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe von Dekorationen fest, die durch {{ cssxref("text-decoration-line") }} zum Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstriche, Durchstreichungen und wellige Linien, die zum Beispiel zum Markieren von Rechtschreibfehlern verwendet werden, im Rahmen des Wertes der Eigenschaft.

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

CSS bietet keinen direkten Mechanismus zur Angabe einer einzigartigen Farbe für jeden Linientyp. Dieser Effekt kann dennoch erreicht werden, indem Elemente verschachtelt werden, wobei jedem Element ein anderer Linientyp zugewiesen wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft), und die Linienfarbe (mit `text-decoration-color`) für jedes Element individuell festgelegt wird.

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

Es ist wichtig, sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes, dem Hintergrund, auf dem der Text platziert ist, und der Textdekoration hoch genug ist, damit Menschen mit Sehschwäche den Inhalt der Seite lesen können. Das Kontrastverhältnis der Farben wird ermittelt, indem die Helligkeit der Text- und Hintergrundfarben verglichen wird.

Allein Farbe sollte nicht verwendet werden, um Bedeutung zu vermitteln. Beispielsweise reicht die Änderung von Text- und Textdekoration-Farbe allein nicht aus, um anzuzeigen, dass ein Link fokussiert ist.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis WCAG, Erklärung der Leitlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- Beim gleichzeitigen Festlegen mehrerer Linientyp-Eigenschaften kann es bequemer sein, stattdessen die {{cssxref("text-decoration")}} Kurzschreibweise zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
