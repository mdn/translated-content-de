---
title: text-Dekoration
slug: Web/CSS/text-decoration
l10n:
  sourceCommit: b782b7d57e7040d5d9644a19017f4683044b5c90
---

{{CSSRef}}

Die **`text-decoration`** [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) der [CSS](/de/docs/Web/CSS) legt das Erscheinungsbild dekorativer Linien auf Text fest. Sie ist eine Kurzform für die Eigenschaften {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, und die neuere Eigenschaft {{cssxref("text-decoration-thickness")}}.

{{EmbedInteractiveExample("pages/css/text-decoration.html")}}

Textdekorationen werden über abgeleitete Textelemente gezeichnet. Das bedeutet, dass, wenn ein Element eine Textdekoration angibt, ein Kindelement die Dekoration nicht entfernen kann. Zum Beispiel würde im Markup `<p>Dieser Text hat <em>einige betonte Wörter</em> darin.</p>` die Stilregel `p { text-decoration: underline; }` dazu führen, dass der gesamte Absatz unterstrichen wird. Die Stilregel `em { text-decoration: none; }` würde keine Änderung bewirken; der gesamte Absatz wäre weiterhin unterstrichen. Die Regel `em { text-decoration: overline; }` würde jedoch eine zweite Dekoration auf „einige betonte Wörter“ erscheinen lassen.

## Zusammensetzende Eigenschaften

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

/* Globale Werte */
text-decoration: inherit;
text-decoration: initial;
text-decoration: revert;
text-decoration: revert-layer;
text-decoration: unset;
```

Die `text-decoration`-Eigenschaft wird als ein oder mehrere durch Leerzeichen getrennte Werte angegeben, die die verschiedenen Langform-Textdekorations-Eigenschaften repräsentieren.

### Werte

- {{cssxref("text-decoration-line")}}
  - : Legt die Art der verwendeten Dekoration fest, wie `underline` oder `line-through`.
- {{cssxref("text-decoration-color")}}
  - : Legt die Farbe der Dekoration fest.
- {{cssxref("text-decoration-style")}}
  - : Legt den Stil der für die Dekoration verwendeten Linie fest, wie `solid`, `wavy` oder `dashed`.
- {{cssxref("text-decoration-thickness")}}
  - : Legt die Dicke der für die Dekoration verwendeten Linie fest.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration der text-Dekorationswerte

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
<p class="under">Dieser Text hat eine Linie darunter.</p>
<p class="over">Dieser Text hat eine Linie darüber.</p>
<p class="line">Dieser Text hat eine Linie, die ihn durchstreicht.</p>
<p>
  Dieser <a class="plain" href="#">Link wird nicht unterstrichen</a>, wie es
  Links in der Regel sind. Seien Sie vorsichtig, wenn Sie die Textdekoration
  bei Ankern entfernen, da Benutzer oft auf das Unterstreichen angewiesen
  sind, um Hyperlinks zu erkennen.
</p>
<p class="underover">Dieser Text hat Linien <em>oberhalb</em> und unterhalb.</p>
<p class="thick">
  Dieser Text hat eine wirklich dicke violette Unterstreichung in
  unterstützten Browsern.
</p>
<p class="blink">
  Dieser Text könnte für Sie blinken, je nach dem Browser, den Sie verwenden.
</p>
```

#### Ergebnis

{{EmbedLiveSample('Examples','auto','520')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die individuellen text-Dekorationseigenschaften sind {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-style")}}, und {{cssxref("text-decoration-thickness")}}.
- Die Eigenschaften {{cssxref("text-decoration-skip-ink")}}, {{cssxref("text-underline-offset")}}, und {{cssxref("text-underline-position")}} beeinflussen ebenfalls die Textdekoration, sind jedoch nicht in der Kurzform enthalten.
- Das {{cssxref("list-style")}}-Attribut steuert das Erscheinungsbild von Elementen in HTML-Listen wie {{HTMLElement("ol")}} und {{HTMLElement("ul")}}.
