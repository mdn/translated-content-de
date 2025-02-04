---
title: text-decoration
slug: Web/CSS/text-decoration
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`text-decoration`** [Shorthand](/de/docs/Web/CSS/Shorthand_properties) [CSS](/de/docs/Web/CSS) Eigenschaft setzt das Erscheinungsbild dekorativer Linien auf Text. Es handelt sich um eine Shorthand-Eigenschaft für {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und die neuere {{cssxref("text-decoration-thickness")}} Eigenschaft.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

Textdekorationen werden über nachfolgende Textelemente hinweg gezeichnet. Das bedeutet, dass wenn ein Element eine Textdekoration spezifiziert, ein Kindelement die Dekoration nicht entfernen kann. Zum Beispiel würde im Markup `<p>This text has <em>some emphasized words</em> in it.</p>` die Stilregel `p { text-decoration: underline; }` bewirken, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Änderung bewirken; der gesamte Absatz bliebe unterstrichen. Allerdings würde die Regel `em { text-decoration: overline; }` eine zweite Dekoration auf "some emphasized words" erscheinen lassen.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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

Die `text-decoration` Eigenschaft wird als ein oder mehrere durch Leerzeichen getrennte Werte angegeben, die die verschiedenen Langform-Eigenschaften der Textdekoration repräsentieren.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Setzt die Art der verwendeten Dekoration, wie `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Setzt die Farbe der Dekoration.
- {{cssxref("text-decoration-style")}}
  - : Setzt den Stil der Linie, die für die Dekoration verwendet wird, wie `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Setzt die Dicke der Linie, die für die Dekoration verwendet wird.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der Werte von text-decoration

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

- Die individuellen Textdekorationseigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}} und {{cssxref("text-decoration-thickness")}}.
- Die Eigenschaften {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}} und {{cssxref("text-underline-position")}} wirken sich ebenfalls auf Textdekorationen aus, sind jedoch nicht in der Shorthand enthalten.
- Die {{cssxref("list-style")}} Eigenschaft steuert das Erscheinungsbild von Elementen in HTML {{HTMLElement("ol")}} und {{HTMLElement("ul")}} Listen.
- SVG {{SVGAttr("text-decoration")}} Attribut
