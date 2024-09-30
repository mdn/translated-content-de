---
title: text-decoration
slug: Web/CSS/text-decoration
l10n:
  sourceCommit: b782b7d57e7040d5d9644a19017f4683044b5c90
---

{{CSSRef}}

Die **`text-decoration`** [shorthand](/de/docs/Web/CSS/Shorthand_properties)-[CSS](/de/docs/Web/CSS)-Eigenschaft legt das Erscheinungsbild dekorativer Linien auf Text fest. Sie ist eine Kurzform für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und die neuere {{cssxref("text-decoration-thickness")}} Eigenschaft.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

Textdekorationen werden über vorgelagerte Textelemente gezeichnet. Das bedeutet, wenn ein Element eine Textdekoration angibt, kann ein Kindelement die Dekoration nicht entfernen. Zum Beispiel im Markup `<p>This text has <em>some emphasized words</em> in it.</p>` würde die Stilregel `p { text-decoration: underline; }` dazu führen, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Veränderung bewirken; der gesamte Absatz wäre weiterhin unterstrichen. Die Regel `em { text-decoration: overline; }` würde jedoch eine zweite Dekoration auf "some emphasized words" erscheinen lassen.

## Bestimmende Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`text-decoration-color`](/de/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/de/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/de/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/de/docs/Web/CSS/text-decoration-thickness)

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

Die `text-decoration`-Eigenschaft wird als ein oder mehrere durch Leerzeichen getrennte Werte angegeben, die die verschiedenen umfassenden text-decoration-Eigenschaften repräsentieren.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Legt die Art der Dekoration fest, wie z.B. `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Legt die Farbe der Dekoration fest.
- {{cssxref("text-decoration-style")}}
  - : Legt den Stil der Linie fest, die für die Dekoration verwendet wird, wie z.B. `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Legt die Dicke der Linie fest, die für die Dekoration verwendet wird.

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

- Die individuellen text-decoration-Eigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-thickness")}}.
- Die {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, und {{cssxref("text-underline-position")}} Eigenschaften beeinflussen ebenfalls die Textdekoration, sind aber nicht in der Kurzform enthalten.
- Das {{cssxref("list-style")}} Attribut steuert das Erscheinungsbild von Elementen in HTML-{{HTMLElement("ol")}} und {{HTMLElement("ul")}}-Listen.
