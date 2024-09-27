---
title: Logische Eigenschaften für Margins, Borders und Padding
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: a567dfc8bf5da874d1831b3f6a3ddb12b27d1ab9
---

{{CSSRef}}

Das Modul [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert flussbezogene Zuordnungen für die verschiedenen Eigenschaften von Margins, Borders und Padding sowie deren Kurzformen. In diesem Leitfaden werfen wir einen Blick darauf.

Wenn Sie sich das Modul [Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen, werden Sie feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt hauptsächlich daran, dass es jeweils vier Langformen für Margin, Border und Padding gibt, plus alle Kurzformen.

## Zuordnungen für Margins, Borders und Padding

Das Modul beschreibt die Zuordnungen für jeden logischen Wert zu einem physischen Gegenstück. Die folgende Tabelle ordnet diese Werte zu, wenn der {{cssxref("writing-mode")}} `horizontal-tb` ist — mit einer Links-nach-Rechts-Richtung. Die Inline-Richtung verläuft daher horizontal — von links nach rechts — und {{cssxref("margin-inline-start")}} wäre gleichbedeutend mit {{cssxref("margin-left")}}.

Wenn Sie einen `horizontal-tb` Schreibmodus mit einer Rechts-nach-Links-Textausrichtung verwenden würden, dann wäre {{cssxref("margin-inline-start")}} dasselbe wie {{cssxref("margin-right")}}, und in einem vertikalen Schreibmodus wäre es dasselbe wie {{cssxref("margin-top")}} zu verwenden.

| [Logische Eigenschaft](/de/docs/Glossary/Logical_properties) | [Physische Eigenschaft](/de/docs/Glossary/Physical_properties) |
| ------------------------------------------------------------ | -------------------------------------------------------------- |
| {{cssxref("border-block-end")}}                              | {{cssxref("border-bottom")}}                                   |
| {{cssxref("border-block-end-color")}}                        | {{cssxref("border-bottom-color")}}                             |
| {{cssxref("border-block-end-style")}}                        | {{cssxref("border-bottom-style")}}                             |
| {{cssxref("border-block-end-width")}}                        | {{cssxref("border-bottom-width")}}                             |
| {{cssxref("border-block-start")}}                            | {{cssxref("border-top")}}                                      |
| {{cssxref("border-block-start-color")}}                      | {{cssxref("border-top-color")}}                                |
| {{cssxref("border-block-start-style")}}                      | {{cssxref("border-top-style")}}                                |
| {{cssxref("border-block-start-width")}}                      | {{cssxref("border-top-width")}}                                |
| {{cssxref("border-inline-end")}}                             | {{cssxref("border-right")}}                                    |
| {{cssxref("border-inline-end-color")}}                       | {{cssxref("border-right-color")}}                              |
| {{cssxref("border-inline-end-style")}}                       | {{cssxref("border-right-style")}}                              |
| {{cssxref("border-inline-end-width")}}                       | {{cssxref("border-right-width")}}                              |
| {{cssxref("border-inline-start")}}                           | {{cssxref("border-left")}}                                     |
| {{cssxref("border-inline-start-color")}}                     | {{cssxref("border-left-color")}}                               |
| {{cssxref("border-inline-start-style")}}                     | {{cssxref("border-left-style")}}                               |
| {{cssxref("border-inline-start-width")}}                     | {{cssxref("border-left-width")}}                               |
| {{cssxref("border-start-start-radius")}}                     | {{cssxref("border-top-left-radius")}}                          |
| {{cssxref("border-end-start-radius")}}                       | {{cssxref("border-bottom-left-radius")}}                       |
| {{cssxref("border-start-end-radius")}}                       | {{cssxref("border-top-right-radius")}}                         |
| {{cssxref("border-end-end-radius")}}                         | {{cssxref("border-bottom-right-radius")}}                      |
| {{cssxref("margin-block-end")}}                              | {{cssxref("margin-bottom")}}                                   |
| {{cssxref("margin-block-start")}}                            | {{cssxref("margin-top")}}                                      |
| {{cssxref("margin-inline-end")}}                             | {{cssxref("margin-right")}}                                    |
| {{cssxref("margin-inline-start")}}                           | {{cssxref("margin-left")}}                                     |
| {{cssxref("padding-block-end")}}                             | {{cssxref("padding-bottom")}}                                  |
| {{cssxref("padding-block-start")}}                           | {{cssxref("padding-top")}}                                     |
| {{cssxref("padding-inline-end")}}                            | {{cssxref("padding-right")}}                                   |
| {{cssxref("padding-inline-start")}}                          | {{cssxref("padding-left")}}                                    |

Es gibt auch einige zusätzliche Kurzformen, die möglich sind, da wir beide Block- oder Inline-Kanten des Kastens gleichzeitig anvisieren können. Diese Kurzformen haben kein physisches Äquivalent.

| Eigenschaft                        | Zweck                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| {{cssxref("border-block")}}        | Setzt {{cssxref("border-color")}}, {{cssxref("border-style")}}, und {{cssxref("border-width")}} für beide Block-Borders. |
| {{cssxref("border-block-color")}}  | Setzt `border-color` für beide Block-Borders.                                                                            |
| {{cssxref("border-block-style")}}  | Setzt `border-style` für beide Block-Borders.                                                                            |
| {{cssxref("border-block-width")}}  | Setzt `border-width` für beide Block-Borders.                                                                            |
| {{cssxref("border-inline")}}       | Setzt `border-color`, `-style`, und `-width` für beide Inline-Borders.                                                   |
| {{cssxref("border-inline-color")}} | Setzt `border-color` für beide Inline-Borders.                                                                           |
| {{cssxref("border-inline-style")}} | Setzt `border-style` für beide Inline-Borders.                                                                           |
| {{cssxref("border-inline-width")}} | Setzt `border-width` für beide Inline-Borders.                                                                           |
| {{cssxref("margin-block")}}        | Setzt alle Block-{{cssxref("margin")}}s.                                                                                 |
| {{cssxref("margin-inline")}}       | Setzt alle Inline-`margin`s.                                                                                             |
| {{cssxref("padding-block")}}       | Setzt das Block-{{cssxref("padding")}}.                                                                                  |
| {{cssxref("padding-inline")}}      | Setzt das Inline-`padding`.                                                                                              |

## Margin-Beispiele

Die zugeordneten Margin-Eigenschaften von {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}}, und {{cssxref("margin-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

Dieses Beispiel hat zwei Boxen mit unterschiedlich großen Margins an jeder Kante. Ein zusätzlicher Container mit einem Border wurde hinzugefügt, um das Margin deutlicher zu machen.

Eine Box verwendet physische Eigenschaften und die andere logische Eigenschaften. Versuchen Sie, die {{cssxref("direction")}} Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung darzustellen; die Margins der ersten Box bleiben an derselben Stelle, während sich die Margins in der Inline-Dimension der zweiten Box verschieben.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie, wie die Margins bei der ersten Box an derselben Stelle bleiben, aber sich bei der zweiten an die Textausrichtung anpassen.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Margin-Kurzformen

Es gibt Kurzformen, um entweder beide Inline-Seiten oder beide Block-Seiten anzusteuern, nämlich {{cssxref("margin-inline")}} und {{cssxref("margin-block")}}. Jede akzeptiert zwei Werte. Der erste Wert wird auf den Beginn dieser Dimension angewendet, der zweite auf das Ende. Wenn nur ein Wert gesetzt wird, wird dieser auf beide angewendet.

In einem horizontalen Schreibmodus würde dieses CSS ein `5px` Margin an der Oberseite der Box und ein `10px` Margin an der Unterseite anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Padding-Beispiele

Die zugeordneten Padding-Eigenschaften von {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}}, und {{cssxref("padding-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Boxen. Eine hat physische Padding-Eigenschaften gesetzt und die andere verwendet logische Padding-Eigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Boxen gleich angezeigt werden.

Versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung darzustellen. Das Padding der ersten Box bleibt an derselben Stelle, während sich das Padding in der Inline-Dimension der zweiten Box verschiebt.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Wiederum, beachten Sie, wie das Padding bei der ersten Box an derselben Stelle bleibt, aber sich bei der zweiten der Textausrichtung anpasst.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Padding-Kurzformen

Wie bei den Margins gibt es Kurzformen mit zwei Werten für Padding — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} — die es Ihnen ermöglichen, das Padding der beiden Inline- und der beiden Block-Dimensionen anzupassen.

In einem horizontalen `writing-mode` würde dieses CSS `5px` Padding an der Oberseite der Box und `10px` Padding an der Unterseite anwenden:

```css
.box {
  padding-block: 5px 10px;
}
```

## Border-Beispiele

Die Border-Eigenschaften sind der Hauptgrund dafür, dass dieses Modul so viele Eigenschaften zu haben scheint, da es flussbezogene Langformen für Farbe, Breite und Stil des Borders an jeder Seite einer Box sowie eine Kurzform zum gleichzeitigen Setzen aller drei für jede Seite bietet. Wie bei Margins und Padding gibt es eine zugeordnete Version jeder physischen Eigenschaft.

Das folgende Demo nutzt einige Langformen und drei Kurzformen. Wie bei den anderen Demos, versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung darzustellen, oder den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### Border-Kurzformen

Es gibt Kurzformen mit zwei Werten, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension zu setzen, und Kurzformen, um alle drei Werte in der Block- oder Inline-Dimension festzulegen. Der untenstehende Code würde Ihnen in einem horizontalen Schreibmodus ein `2px grünes solides` Border an der Ober- und Unterseite der Box und ein `4px gepunktetes lila` Border an der linken und rechten Seite geben.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussbezogene border-radius Eigenschaften

Das Modul hat flussbezogene Äquivalente für die {{cssxref("border-radius")}} Langformen. Das folgende Beispiel würde im horizontalen `writing-mode` den oberen rechten Border-Radius auf `1em`, den unteren rechten auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px` setzen.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Angabe logischer Werte für die 4-Wert Kurzform-Syntax

Die Spezifikation macht einen Vorschlag für die 4-Wert-Kurzformen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung, wie dies angezeigt werden soll, noch nicht gelöst und wird in [diesem Issue](https://github.com/w3c/csswg-drafts/issues/1282) diskutiert.

Die Verwendung jeder vierwertigen Kurzform wie `margin`, `padding` oder `border` verwendet derzeit die physischen Versionen. Wenn es also wichtig ist, dem Fluss des Dokuments zu folgen, verwenden Sie vorerst die Langformen.
