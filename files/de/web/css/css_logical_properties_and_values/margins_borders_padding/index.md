---
title: Logische Eigenschaften für Ränder, Rahmen und Abstände
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: a567dfc8bf5da874d1831b3f6a3ddb12b27d1ab9
---

{{CSSRef}}

Das Modul [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert flussbezogene Zuordnungen für verschiedene Rand-, Rahmen- und Abstandseigenschaften und deren Kurzformen. In diesem Leitfaden werfen wir einen Blick darauf.

Wenn Sie sich das Modul [Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen, werden Sie feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt hauptsächlich daran, dass es vier Langformwerte für jede Rand-, Rahmen- und Abstandsseite gibt, plus alle Kurzformen.

## Zuordnungen für Ränder, Rahmen und Abstände

Das Modul beschreibt Zuordnungen für jeden logischen Wert zu einem physikalischen Gegenstück. Die folgende Tabelle zeigt diese Zuordnungen für den Fall, dass der {{cssxref("writing-mode")}} `horizontal-tb` ist — mit einer Links-nach-Rechts-Richtung. Die Inline-Richtung verläuft daher horizontal — von links nach rechts — und {{cssxref("margin-inline-start")}} wäre gleichbedeutend mit {{cssxref("margin-left")}}.

Verwendeten Sie einen `horizontal-tb` Schreibmodus mit einer Rechts-nach-Links Textausrichtung, dann wäre {{cssxref("margin-inline-start")}} dasselbe wie {{cssxref("margin-right")}}, und in einem vertikalen Schreibmodus wäre es dasselbe wie {{cssxref("margin-top")}}.

| {{glossary("Logical properties", "Logische Eigenschaft")}} | {{glossary("Physical properties", "Physikalische Eigenschaft")}} |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| {{cssxref("border-block-end")}}                            | {{cssxref("border-bottom")}}                                    |
| {{cssxref("border-block-end-color")}}                      | {{cssxref("border-bottom-color")}}                              |
| {{cssxref("border-block-end-style")}}                      | {{cssxref("border-bottom-style")}}                              |
| {{cssxref("border-block-end-width")}}                      | {{cssxref("border-bottom-width")}}                              |
| {{cssxref("border-block-start")}}                          | {{cssxref("border-top")}}                                       |
| {{cssxref("border-block-start-color")}}                    | {{cssxref("border-top-color")}}                                 |
| {{cssxref("border-block-start-style")}}                    | {{cssxref("border-top-style")}}                                 |
| {{cssxref("border-block-start-width")}}                    | {{cssxref("border-top-width")}}                                 |
| {{cssxref("border-inline-end")}}                           | {{cssxref("border-right")}}                                     |
| {{cssxref("border-inline-end-color")}}                     | {{cssxref("border-right-color")}}                               |
| {{cssxref("border-inline-end-style")}}                     | {{cssxref("border-right-style")}}                               |
| {{cssxref("border-inline-end-width")}}                     | {{cssxref("border-right-width")}}                               |
| {{cssxref("border-inline-start")}}                         | {{cssxref("border-left")}}                                      |
| {{cssxref("border-inline-start-color")}}                   | {{cssxref("border-left-color")}}                                |
| {{cssxref("border-inline-start-style")}}                   | {{cssxref("border-left-style")}}                                |
| {{cssxref("border-inline-start-width")}}                   | {{cssxref("border-left-width")}}                                |
| {{cssxref("border-start-start-radius")}}                   | {{cssxref("border-top-left-radius")}}                           |
| {{cssxref("border-end-start-radius")}}                     | {{cssxref("border-bottom-left-radius")}}                        |
| {{cssxref("border-start-end-radius")}}                     | {{cssxref("border-top-right-radius")}}                          |
| {{cssxref("border-end-end-radius")}}                       | {{cssxref("border-bottom-right-radius")}}                       |
| {{cssxref("margin-block-end")}}                            | {{cssxref("margin-bottom")}}                                    |
| {{cssxref("margin-block-start")}}                          | {{cssxref("margin-top")}}                                       |
| {{cssxref("margin-inline-end")}}                           | {{cssxref("margin-right")}}                                     |
| {{cssxref("margin-inline-start")}}                         | {{cssxref("margin-left")}}                                      |
| {{cssxref("padding-block-end")}}                           | {{cssxref("padding-bottom")}}                                   |
| {{cssxref("padding-block-start")}}                         | {{cssxref("padding-top")}}                                      |
| {{cssxref("padding-inline-end")}}                          | {{cssxref("padding-right")}}                                    |
| {{cssxref("padding-inline-start")}}                        | {{cssxref("padding-left")}}                                     |

Es gibt auch zusätzliche Kurzformen, die möglich sind, weil wir gleichzeitig beide Block- oder beide Inline-Kanten des Kastens ansprechen können. Diese Kurzformen haben kein physikalisches Äquivalent.

| Eigenschaft                         | Zweck                                                                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}         | Setzt {{cssxref("border-color")}}, {{cssxref("border-style")}} und {{cssxref("border-width")}} für beide Block-Rahmen.    |
| {{cssxref("border-block-color")}}   | Setzt `border-color` für beide Block-Rahmen.                                                                               |
| {{cssxref("border-block-style")}}   | Setzt `border-style` für beide Block-Rahmen.                                                                               |
| {{cssxref("border-block-width")}}   | Setzt `border-width` für beide Block-Rahmen.                                                                               |
| {{cssxref("border-inline")}}        | Setzt `border-color`, `-style` und `-width` für beide Inline-Rahmen.                                                       |
| {{cssxref("border-inline-color")}}  | Setzt `border-color` für beide Inline-Rahmen.                                                                              |
| {{cssxref("border-inline-style")}}  | Setzt `border-style` für beide Inline-Rahmen.                                                                              |
| {{cssxref("border-inline-width")}}  | Setzt `border-width` für beide Inline-Rahmen.                                                                              |
| {{cssxref("margin-block")}}         | Setzt alle Block-{{cssxref("margin")}}s.                                                                                   |
| {{cssxref("margin-inline")}}        | Setzt alle Inline-`margin`s.                                                                                               |
| {{cssxref("padding-block")}}        | Setzt den Block-{{cssxref("padding")}}.                                                                                    |
| {{cssxref("padding-inline")}}       | Setzt den Inline-`padding`.                                                                                                |

## Randbeispiele

Die zugeordneten Rand-Eigenschaften von {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} und {{cssxref("margin-inline-end")}} können anstelle ihrer physikalischen Gegenstücke verwendet werden.

Dieses Beispiel zeigt zwei Kästen mit unterschiedlich großen Rändern an jede Kante. Ein zusätzlicher Container mit einem Rahmen wurde hinzugefügt, um den Rand deutlicher zu machen.

Ein Kasten verwendet physikalische Eigenschaften und der andere logische Eigenschaften. Versuchen Sie, die {{cssxref("direction")}} Eigenschaft auf `rtl` zu ändern, um die Kästen in einer Rechts-nach-Links-Richtung anzuzeigen; die Ränder des ersten Kastens bleiben an der gleichen Stelle, während sich die Ränder an der Inline-Dimension des zweiten Kastens ändern.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie, wie die Ränder beim ersten Kasten an der gleichen Stelle bleiben, sich aber im zweiten Kasten umdrehen, um der Textrichtung zu folgen.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Kurzformen für Ränder

Es gibt Kurzformen, um entweder beide Inline-Seiten oder beide Block-Seiten anzuvisieren, {{cssxref("margin-inline")}} und {{cssxref("margin-block")}}. Jede akzeptiert zwei Werte. Der erste Wert gilt für den Beginn dieser Dimension, der zweite für das Ende. Wenn nur ein Wert festgelegt ist, wird er auf beide angewendet.

In einem horizontalen Schreibmodus würde dieses CSS einen `5px`-Rand oben am Kasten und einen `10px`-Rand unten am Kasten anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Polsterbeispiele

Die zugeordneten Polster-Eigenschaften von {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} und {{cssxref("padding-inline-end")}} können anstelle ihrer physikalischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Kästen. Einer hat physikalische Polstereigenschaften gesetzt und der andere verwendet logische Polstereigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Kästen gleich erscheinen.

Versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Kästen in einer Rechts-nach-Links-Richtung anzuzeigen. Die Polsterung des ersten Kastens bleibt an der gleichen Stelle, während die Polsterung an der Inline-Dimension des zweiten Kastens wechselt.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie wieder, wie die Polsterung beim ersten Kasten an der gleichen Stelle bleibt, sich aber im zweiten Kasten umdreht, um der Textrichtung zu folgen.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Kurzformen für Polster

Wie bei den Rändern gibt es Zwei-Wert-Kurzformen für die Polsterung — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} — die Ihnen ermöglichen, die Polsterung der beiden Inline- und Blockdimensionen entsprechend festzulegen.

In einem horizontalen `writing-mode` würde dieses CSS `5px` Polsterung oben am Kasten und `10px` Polsterung unten am Kasten anwenden:

```css
.box {
  padding-block: 5px 10px;
}
```

## Rahmenbeispiele

Die Rahmen-Eigenschaften sind der Hauptgrund dafür, dass dieses Modul so viele Eigenschaften zu haben scheint, da es Langform-logische Eigenschaften für die Farbe, Breite und den Stil des Rahmens auf jeder Seite eines Kastens bietet, zusammen mit der Kurzform, um alle drei zugleich für jede Seite einzustellen. Wie bei Rand und Polster gibt es eine angepasste Version jeder physikalischen Eigenschaft.

Das folgende Demobeispiel verwendet einige Langformen und drei Kurzformwerte. Wie bei den anderen Demos versuchen Sie, die `direction` Eigenschaft auf `rtl` zu ändern, um die Kästen in einer Rechts-nach-Links-Richtung anzuzeigen, oder den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### Kurzformen für Rahmen

Es gibt Zwei-Wert-Kurzformen, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension festzulegen, und Kurzformen, um alle drei Werte in der Block- oder Inline-Dimension festzulegen. Der untenstehende Code würde Ihnen in einem horizontalen Schreibmodus eine `2px grüne feste` Grenze oben und unten im Kasten geben und eine `4px punktierte lila` Grenze links und rechts.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussrelative border-radius-Eigenschaften

Das Modul enthält flussbezogene Äquivalente für die Langformen des {{cssxref("border-radius")}}. Das untenstehende Beispiel würde im horizontalen `writing-mode` den oberen rechten Rahmenradius auf `1em`, den unteren rechten auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px` setzen.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Angabe logischer Werte für die 4-Wert-Kurzform-Syntax

Die Spezifikation macht einen Vorschlag für die vier-Wert-Kurzformen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung, wie dies angezeigt werden soll, noch ungeklärt und wird in [dieser Angelegenheit](https://github.com/w3c/csswg-drafts/issues/1282) diskutiert.

Die Verwendung einer vier-Wert-Kurzform wie `margin`, `padding` oder `border` wird derzeit die physikalischen Versionen verwenden, daher sollten Sie, wenn es wichtig ist, dem Fluss des Dokuments zu folgen, vorerst die Langform-Eigenschaften verwenden.
