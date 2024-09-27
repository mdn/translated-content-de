---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`text-decoration-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe von Dekorationen fest, die durch {{ cssxref("text-decoration-line") }} zu Text hinzugefügt werden.

Die Farbe gilt für Dekorationen wie Unterstreichungen, Überstreichungen, Durchstreichungen und Wellenlinien, wie sie zur Kennzeichnung von Rechtschreibfehlern verwendet werden, im Rahmen des Wertes der Eigenschaft.

{{EmbedInteractiveExample("pages/css/text-decoration-color.html")}}

CSS bietet keinen direkten Mechanismus, um eine einzigartige Farbe für jeden Linientyp zu spezifizieren. Dieser Effekt kann jedoch erreicht werden, indem Elemente verschachtelt werden, wobei jedem Element ein anderer Linientyp zugewiesen wird (mit der {{cssxref("text-decoration-line")}} Eigenschaft) und die Linienfarbe (mit `text-decoration-color`) für jedes Element angegeben wird.

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

Es ist wichtig sicherzustellen, dass das Kontrastverhältnis zwischen der Farbe des Textes, dem Hintergrund, über dem der Text platziert ist, und der Textdekorationslinie hoch genug ist, damit Personen mit Sehbehinderungen den Inhalt der Seite lesen können. Das Farbkontrastverhältnis wird bestimmt, indem die Leuchtkraft der Text- und Hintergrundfarbwerte verglichen wird.

Farbe allein sollte nicht verwendet werden, um Bedeutung zu vermitteln. Zum Beispiel ist nur die Änderung der Text- und Textdekoration-Farbe nicht ausreichend, um anzuzeigen, dass ein Link den Fokus hat.

- [WebAIM: Farbkontrastprüfer](https://webaim.org/resources/contrastchecker/)
- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

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

- Wenn mehrere Liniendekorationseigenschaften auf einmal festgelegt werden, kann es praktischer sein, die Kurzschrift-Eigenschaft {{cssxref("text-decoration")}} zu verwenden.
- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Andere farbbezogene Eigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, und {{cssxref("column-rule-color")}}
