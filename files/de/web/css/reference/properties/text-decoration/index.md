---
title: text-decoration
slug: Web/CSS/Reference/Properties/text-decoration
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`text-decoration`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS) legt das Erscheinungsbild dekorativer Linien auf Text fest. Sie ist eine Kurzform für die Eigenschaften {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und die neuere Eigenschaft {{cssxref("text-decoration-thickness")}}.

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

Textdekorationen werden über nachgeordnete Textelemente gezeichnet. Das bedeutet, dass ein Kindelement die Dekoration nicht entfernen kann, wenn ein Element eine Textdekoration angibt. Zum Beispiel würde in der Auszeichnung `<p>This text has <em>some emphasized words</em> in it.</p>` die Stilregel `p { text-decoration: underline; }` dazu führen, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Änderung verursachen; der gesamte Absatz bliebe unterstrichen. Die Regel `em { text-decoration: overline; }` würde jedoch dazu führen, dass eine zweite Dekoration auf "some emphasized words" erscheint.

## Konstituierende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`text-decoration-color`](/de/docs/Web/CSS/Reference/Properties/text-decoration-color)
- [`text-decoration-line`](/de/docs/Web/CSS/Reference/Properties/text-decoration-line)
- [`text-decoration-style`](/de/docs/Web/CSS/Reference/Properties/text-decoration-style)
- [`text-decoration-thickness`](/de/docs/Web/CSS/Reference/Properties/text-decoration-thickness)

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

Die `text-decoration` Eigenschaft wird als ein oder mehrere durch Leerzeichen getrennte Werte angegeben, die die verschiedenen Langform-Textdekorations-Eigenschaften darstellen.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Legt die Art der verwendeten Dekoration fest, wie z. B. `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Legt die Farbe der Dekoration fest.
- {{cssxref("text-decoration-style")}}
  - : Legt den Stil der Linie fest, die für die Dekoration verwendet wird, wie z. B. `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Legt die Dicke der Linie fest, die für die Dekoration verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der text-decoration Werte

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

- Die individuellen text-decoration Eigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-thickness")}}.
- Die {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}} und {{cssxref("text-underline-position")}} Eigenschaften beeinflussen ebenfalls die Textdekoration, sind jedoch nicht in der Kurzform enthalten.
- Die {{cssxref("list-style")}} Eigenschaft steuert das Erscheinungsbild von Elementen in HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}} Listen.
- SVG {{SVGAttr("text-decoration")}} Attribut
