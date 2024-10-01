---
title: Logische Eigenschaften für Ränder, Rahmen und Abstände
slug: Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding
l10n:
  sourceCommit: a567dfc8bf5da874d1831b3f6a3ddb12b27d1ab9
---

{{CSSRef}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) definiert flussbezogene Zuordnungen für die verschiedenen Rand-, Rahmen- und Abstands-Eigenschaften und deren Kurzformen. In diesem Leitfaden betrachten wir diese.

Wenn Sie sich das Modul [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) ansehen, werden Sie feststellen, dass die Liste der Moduleigenschaften sehr lang ist. Dies liegt hauptsächlich daran, dass es für jede Rand-, Rahmen- und Abstandseite vier Langformwerte sowie alle Kurzformwerte gibt.

## Zuordnungen für Ränder, Rahmen und Abstände

Das Modul beschreibt Zuordnungen für jeden logischen Wert zu einem physischen Gegenstück. Die folgende Tabelle zeigt diese Werte, wenn der {{cssxref("writing-mode")}} `horizontal-tb` ist — mit einer Links-nach-Rechts-Richtung. Die Inline-Richtung verläuft daher horizontal — von links nach rechts — und {{cssxref("margin-inline-start")}} wäre gleichbedeutend mit {{cssxref("margin-left")}}.

Wenn Sie einen `horizontal-tb` Schreibmodus mit einer Rechts-nach-Links-Textausrichtung verwendeten, dann wäre {{cssxref("margin-inline-start")}} dasselbe wie {{cssxref("margin-right")}}. In einem vertikalen Schreibmodus wäre es dasselbe wie die Verwendung von {{cssxref("margin-top")}}.

| {{Glossary("Logical_properties", "Logische Eigenschaft")}} | {{Glossary("Physical_properties", "Physische Eigenschaft")}} |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| {{cssxref("border-block-end")}}                            | {{cssxref("border-bottom")}}                                 |
| {{cssxref("border-block-end-color")}}                      | {{cssxref("border-bottom-color")}}                           |
| {{cssxref("border-block-end-style")}}                      | {{cssxref("border-bottom-style")}}                           |
| {{cssxref("border-block-end-width")}}                      | {{cssxref("border-bottom-width")}}                           |
| {{cssxref("border-block-start")}}                          | {{cssxref("border-top")}}                                    |
| {{cssxref("border-block-start-color")}}                    | {{cssxref("border-top-color")}}                              |
| {{cssxref("border-block-start-style")}}                    | {{cssxref("border-top-style")}}                              |
| {{cssxref("border-block-start-width")}}                    | {{cssxref("border-top-width")}}                              |
| {{cssxref("border-inline-end")}}                           | {{cssxref("border-right")}}                                  |
| {{cssxref("border-inline-end-color")}}                     | {{cssxref("border-right-color")}}                            |
| {{cssxref("border-inline-end-style")}}                     | {{cssxref("border-right-style")}}                            |
| {{cssxref("border-inline-end-width")}}                     | {{cssxref("border-right-width")}}                            |
| {{cssxref("border-inline-start")}}                         | {{cssxref("border-left")}}                                   |
| {{cssxref("border-inline-start-color")}}                   | {{cssxref("border-left-color")}}                             |
| {{cssxref("border-inline-start-style")}}                   | {{cssxref("border-left-style")}}                             |
| {{cssxref("border-inline-start-width")}}                   | {{cssxref("border-left-width")}}                             |
| {{cssxref("border-start-start-radius")}}                   | {{cssxref("border-top-left-radius")}}                        |
| {{cssxref("border-end-start-radius")}}                     | {{cssxref("border-bottom-left-radius")}}                     |
| {{cssxref("border-start-end-radius")}}                     | {{cssxref("border-top-right-radius")}}                       |
| {{cssxref("border-end-end-radius")}}                       | {{cssxref("border-bottom-right-radius")}}                    |
| {{cssxref("margin-block-end")}}                            | {{cssxref("margin-bottom")}}                                 |
| {{cssxref("margin-block-start")}}                          | {{cssxref("margin-top")}}                                    |
| {{cssxref("margin-inline-end")}}                           | {{cssxref("margin-right")}}                                  |
| {{cssxref("margin-inline-start")}}                         | {{cssxref("margin-left")}}                                   |
| {{cssxref("padding-block-end")}}                           | {{cssxref("padding-bottom")}}                                |
| {{cssxref("padding-block-start")}}                         | {{cssxref("padding-top")}}                                   |
| {{cssxref("padding-inline-end")}}                          | {{cssxref("padding-right")}}                                 |
| {{cssxref("padding-inline-start")}}                        | {{cssxref("padding-left")}}                                  |

Es gibt auch einige zusätzliche Kurzschreibweisen, die möglich sind, weil wir gleichzeitig beide Block- oder beide Inline-Kanten der Box ansprechen können. Diese Kurzschreibweisen haben kein physisches Äquivalent.

| Eigenschaft                        | Zweck                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| {{cssxref("border-block")}}        | Setzt {{cssxref("border-color")}}, {{cssxref("border-style")}} und {{cssxref("border-width")}} für beide Blockrahmen. |
| {{cssxref("border-block-color")}}  | Setzt `border-color` für beide Blockrahmen.                                                                           |
| {{cssxref("border-block-style")}}  | Setzt `border-style` für beide Blockrahmen.                                                                           |
| {{cssxref("border-block-width")}}  | Setzt `border-width` für beide Blockrahmen.                                                                           |
| {{cssxref("border-inline")}}       | Setzt `border-color`, `-style` und `-width` für beide Inline-Rahmen.                                                  |
| {{cssxref("border-inline-color")}} | Setzt `border-color` für beide Inline-Rahmen.                                                                         |
| {{cssxref("border-inline-style")}} | Setzt `border-style` für beide Inline-Rahmen.                                                                         |
| {{cssxref("border-inline-width")}} | Setzt `border-width` für beide Inline-Rahmen.                                                                         |
| {{cssxref("margin-block")}}        | Setzt alle Block-{{cssxref("margin")}}.                                                                               |
| {{cssxref("margin-inline")}}       | Setzt alle Inline-`margin`.                                                                                           |
| {{cssxref("padding-block")}}       | Setzt das Block-{{cssxref("padding")}}.                                                                               |
| {{cssxref("padding-inline")}}      | Setzt das Inline-`padding`.                                                                                           |

## Randbeispiele

Die abgebildeten Randeigenschaften von {{cssxref("margin-inline-start")}}, {{cssxref("margin-inline-end")}}, {{cssxref("margin-block-start")}} und {{cssxref("margin-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

Dieses Beispiel hat zwei Boxen mit unterschiedlich großen Rändern an jeder Kante. Ein zusätzliches Behältnis mit einem Rahmen wurde hinzugefügt, um den Rand deutlicher sichtbar zu machen.

Eine Box verwendet physische Eigenschaften und die andere logische Eigenschaften. Versuchen Sie, die {{cssxref("direction")}}-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen; die Ränder der ersten Box bleiben an derselben Stelle, während die Ränder auf der Inline-Dimension der zweiten Box umschalten.

Versuchen Sie auch, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Beachten Sie, wie die Ränder bei der ersten Box an derselben Stelle bleiben, sich aber bei der zweiten Box entsprechend der Schreibrichtung verschieben.

{{EmbedGHLiveSample("css-examples/logical/margin-longhands.html", '100%', 700)}}

### Randkurzschreibweisen

Es gibt Kurzschreibweisen, um entweder beide Inline-Seiten oder beide Block-Seiten anzuvisieren, {{cssxref("margin-inline")}} bzw. {{cssxref("margin-block")}}. Jede akzeptiert zwei Werte. Der erste Wert wird am Anfang dieser Dimension angewendet, der zweite am Ende. Wenn nur ein Wert festgelegt ist, wird er auf beide angewendet.

In einem horizontalen Schreibmodus würde dieses CSS einen `5px` Rand an der Oberseite der Box und einen `10px` Rand an der Unterseite anwenden.

```css
.box {
  margin-block: 5px 10px;
}
```

## Abstandbeispiele

Die abgebildeten Abstands-Eigenschaften von {{cssxref("padding-inline-start")}}, {{cssxref("padding-inline-end")}}, {{cssxref("padding-block-start")}} und {{cssxref("padding-inline-end")}} können anstelle ihrer physischen Gegenstücke verwendet werden.

In diesem Beispiel gibt es zwei Boxen. Eine hat physische Abstands-Eigenschaften gesetzt und die andere verwendet logische Abstands-Eigenschaften. Mit einem `writing-mode` von `horizontal-tb` sollten beide Boxen gleich aussehen.

Versuchen Sie, die `direction`-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen. Der Abstand bei der ersten Box bleibt an derselben Stelle, während der Abstand auf der Inline-Dimension der zweiten Box umschaltet.

Sie können auch versuchen, den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern. Auch hier ist zu beachten, dass der Abstand bei der ersten Box an gleicher Stelle bleibt, sich jedoch bei der zweiten Box entsprechend der Schreibrichtung verschiebt.

{{EmbedGHLiveSample("css-examples/logical/padding-longhands.html", '100%', 700)}}

### Abstands-Kurzschreibweisen

Wie bei den Rändern gibt es zweistellige Kurzschreibweisen für Abstände — {{cssxref("padding-inline")}} und {{cssxref("padding-block")}} — die es ermöglichen, den Abstand der beiden Inline- und der beiden Block-Dimensionen einzustellen.

Bei einem horizontalen `writing-mode` würde dieses CSS `5px` Abstand an der Oberseite der Box und `10px` Abstand an der Unterseite anwenden:

```css
.box {
  padding-block: 5px 10px;
}
```

## Rahmenbeispiele

Die Rahmeneigenschaften sind der Hauptgrund, warum dieses Modul so viele Eigenschaften zu haben scheint, da es Langhand-Logik-Eigenschaften für die Farbe, Breite und den Stil des Rahmens auf jeder Seite einer Box bereitstellt, zusammen mit der Abkürzung, um alle drei auf einmal für jede Seite einzustellen. Wie bei Rand und Abstand gibt es eine abgebildete Version jeder physischen Eigenschaft.

Das folgende Demo verwendet einige Langschreibweisen und drei Kurzschreibwerte. Versuchen Sie, die `direction`-Eigenschaft auf `rtl` zu ändern, um die Boxen in einer Rechts-nach-Links-Richtung anzuzeigen, oder den `writing-mode` von `horizontal-tb` auf `vertical-rl` zu ändern.

{{EmbedGHLiveSample("css-examples/logical/border-longhands.html", '100%', 700)}}

### Rahmenkurzschreibweisen

Es gibt zweistellige Kurzschreibweisen, um die Breite, den Stil und die Farbe der Block- oder Inline-Dimension festzulegen, und Kurzschreibweisen, um alle drei Werte in der Block- oder Inline-Dimension festzusetzen. Der folgende Code würde Ihnen in einem horizontalen Schreibmodus einen `2px solid` grünen Rahmen oben und unten auf der Box und einen `4px dotted` lila Rahmen links und rechts geben.

```css
.box {
  border-block: 2px solid green;
  border-inline-width: 4px;
  border-inline-style: dotted;
  border-inline-color: rebeccapurple;
}
```

### Flussrelative border-radius-Eigenschaften

Das Modul hat flussbezogene Äquivalente für die {{cssxref("border-radius")}} Langhande. Das folgende Beispiel würde im horizontalen `writing-mode` den oberen rechten Rahmenradius auf `1em`, den unteren Rechteck auf `0`, den unteren linken auf `20px` und den oberen linken auf `40px` setzen.

```css
.box {
  border-end-start-radius: 1em;
  border-end-end-radius: 0;
  border-start-end-radius: 20px;
  border-start-start-radius: 40px;
}
```

## Angabe logischer Werte für die 4-Werte-Kurzschreibsyntax

Die Spezifikation macht einen Vorschlag für die vierwertigen Kurzschreibweisen wie die `margin`-Eigenschaft, jedoch ist die endgültige Entscheidung darüber noch ungelöst und wird in [diesem Problem](https://github.com/w3c/csswg-drafts/issues/1282) diskutiert.

Die Verwendung einer vierwertigen Kurzschreibweise wie `margin`, `padding` oder `border` wird derzeit die physischen Versionen verwenden. Wenn es also wichtig ist, dem Fluss des Dokuments zu folgen, verwenden Sie vorerst die Langhande-Eigenschaften.
