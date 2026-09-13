---
title: CSS-Eigenschaft `text-decoration`
short-title: text-decoration
slug: Web/CSS/Reference/Properties/text-decoration
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`text-decoration`** legt das Erscheinungsbild dekorativer Linien auf Text fest. Sie ist eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und die neuere Eigenschaft {{cssxref("text-decoration-thickness")}}.

Textdekorationen werden über Text in Nachfahrenelementen hinweg gezeichnet. Das bedeutet, dass ein Kindelement die Dekoration nicht entfernen kann, wenn ein Element eine Textdekoration festlegt. Beispielsweise würde in dem Markup `<p>This text has <em>some emphasized words</em> in it.</p>` die Stilregel `p { text-decoration: underline; }` dazu führen, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Änderung bewirken; der gesamte Absatz wäre weiterhin unterstrichen. Die Regel `em { text-decoration: overline; }` würde jedoch dazu führen, dass eine zweite Dekoration auf „some emphasized words“ erscheint.

{{InteractiveExample("CSS Demo: text-decoration")}}

```css interactive-example-choice
text-decoration: underline;
```

```css interactive-example-choice
text-decoration: underline dotted;
```

```css interactive-example-choice
text-decoration: underline dotted red;
```

```css interactive-example-choice
text-decoration: green wavy underline;
```

```css interactive-example-choice
text-decoration: underline overline #ff3028;
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
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}

## Syntax

```css
text-decoration: underline;
text-decoration: overline red;
text-decoration: none;

/* Global values */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

Die Eigenschaft `text-decoration` wird als ein oder mehrere durch Leerzeichen getrennte Werte angegeben, die die verschiedenen Langformeigenschaften für Textdekoration darstellen.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Legt die Art der verwendeten Dekoration fest, beispielsweise `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Legt die Farbe der Dekoration fest.
- {{cssxref("text-decoration-style")}}
  - : Legt den Stil der für die Dekoration verwendeten Linie fest, beispielsweise `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Legt die Dicke der für die Dekoration verwendeten Linie fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration von text-decoration-Werten

```css
.under {
  text-decoration: underline red;
}

.over {
  text-decoration: wavy overline lime;
}

.line {
  text-decoration: line-through;
}

.plain {
  text-decoration: none;
}

.underover {
  text-decoration: dashed underline overline;
}

.thick {
  text-decoration: solid underline purple 4px;
}

.blink {
  text-decoration: blink;
}
```

```html
<p class="under">This text has a line underneath it.</p>
<p class="over">This text has a line over it.</p>
<p class="line">This text has a line going through it.</p>
<p>
  This <a class="plain" href="#">link will not be underlined</a>, as links
  generally are by default. Be careful when removing the text decoration on
  anchors since users often depend on the underline to denote hyperlinks.
</p>
<p class="underover">This text has lines above <em>and</em> below it.</p>
<p class="thick">
  This text has a really thick purple underline in supporting browsers.
</p>
<p class="blink">
  This text might blink for you, depending on the browser you use.
</p>
```

#### Ergebnis

{{EmbedLiveSample('Examples','auto','520')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die einzelnen text-decoration-Eigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-thickness")}}.
- Die Eigenschaften {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}} und {{cssxref("text-underline-position")}} wirken sich ebenfalls auf text-decoration aus, sind aber nicht in der Kurzform enthalten.
- Die Eigenschaft {{cssxref("list-style")}} steuert das Erscheinungsbild von Elementen in HTML-Listen {{HTMLElement("ol")}} und {{HTMLElement("ul")}}.
- SVG-Attribut {{SVGAttr("text-decoration")}}
