---
title: text-decoration
slug: Web/CSS/Reference/Properties/text-decoration
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-decoration`** [Kurzschrift](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Erscheinungsbild dekorativer Linien auf Text fest. Sie ist eine Kurzschrift für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und die neuere Eigenschaft {{cssxref("text-decoration-thickness")}}.

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

Textdekorationen werden über abgeleitete Textelemente hinweg gezeichnet. Das bedeutet, dass wenn ein Element eine Textdekoration festlegt, ein Kindelement die Dekoration nicht entfernen kann. Zum Beispiel würde im Markup `<p>This text has <em>some emphasized words</em> in it.</p>` die Stilregel `p { text-decoration: underline; }` dazu führen, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Änderung bewirken; der gesamte Absatz bliebe unterstrichen. Allerdings würde die Regel `em { text-decoration: overline; }` dazu führen, dass auf "some emphasized words" eine zweite Dekoration erscheint.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Die `text-decoration`-Eigenschaft wird als ein oder mehrere durch Leerzeichen getrennte Werte spezifiziert, die die verschiedenen Langschrift-Textdekorationseigenschaften repräsentieren.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Legt die Art der Dekoration fest, wie z.B. `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Legt die Farbe der Dekoration fest.
- {{cssxref("text-decoration-style")}}
  - : Legt den Stil der für die Dekoration verwendeten Linie fest, wie z.B. `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Legt die Dicke der für die Dekoration verwendeten Linie fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der text-decoration-Werte

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

- Die einzelnen Textdekorationseigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-thickness")}}.
- Die Eigenschaften {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, und {{cssxref("text-underline-position")}} beeinflussen auch die Textdekoration, sind aber nicht in der Kurzschrift enthalten.
- Die {{cssxref("list-style")}}-Eigenschaft steuert das Erscheinungsbild von Elementen in HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}} Listen.
- SVG {{SVGAttr("text-decoration")}} Attribut
