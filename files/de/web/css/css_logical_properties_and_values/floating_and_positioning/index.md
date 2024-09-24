---
title: Logische Eigenschaften für Floats und Positionierung
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 3b4bf3e92c726515fe99042c7f7f119ef1009b68
---

{{CSSRef}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Zuordnungen für die physikalischen Werte von {{cssxref("float")}} und {{cssxref("clear")}}, sowie für die Positionierungseigenschaften, die mit dem [positionierten Layout](/de/docs/Web/CSS/CSS_positioned_layout) verwendet werden. Dieser Leitfaden zeigt, wie diese zu nutzen sind.

## Zugeordnete Eigenschaften und Werte

Die folgende Tabelle beschreibt die in diesem Leitfaden besprochenen {{glossary("logischen Eigenschaften")}} und Werte sowie deren Zuordnung zu {{glossary("physikalischen Eigenschaften")}} und Werten. Sie gehen von einem horizontalen {{cssxref("writing-mode")}} mit einer Richtung von links nach rechts aus.

| Logische Eigenschaft oder Wert     | Physikalische Eigenschaft oder Wert |
| ---------------------------------- | ---------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left         |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right        |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left         |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right        |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}                |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}               |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}                 |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}              |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left    |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right   |

Neben diesen zugeordneten Eigenschaften gibt es einige zusätzliche Kurzschreibweisen, die durch die Möglichkeit, Block- und Inline-Dimensionen anzusprechen, ermöglicht werden. Diese haben keine Zuordnung zu physikalischen Eigenschaften, abgesehen von der {{cssxref("inset")}}-Eigenschaft.

| Logische Eigenschaft          | Zweck                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------ |
| {{cssxref("inset-inline")}}   | Setzt gleichzeitig beide der oben genannten Inset-Werte für die Inline-Dimension. |
| {{cssxref("inset-block")}}    | Setzt gleichzeitig beide der oben genannten Inset-Werte für die Block-Dimension.  |
| {{cssxref("inset")}}          | Setzt alle vier Inset-Werte gleichzeitig mit physikalischer Zuordnung von Mehrwert. |

## Beispiel für Float und Clear

Die physikalischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das Modul für CSS logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Dieses Beispiel hat zwei Boxen — die erste ist mit `float: left` gefloatet, die zweite mit `float: inline-start`. Wenn Sie den `writing-mode` auf `vertical-rl` ändern oder die `direction` auf `rtl` setzen, werden Sie sehen, dass die mit `left` gefloatete Box immer links bleibt, während das mit `inline-start` gefloatete Element der `direction` und dem `writing-mode` folgt.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## Beispiel: Inset-Eigenschaften für positioniertes Layout

Die CSS-Positionierung ermöglicht es uns im Allgemeinen, ein Element relativ zu seinem Containing-Block zu positionieren — wir setzen das Element im Wesentlichen relativ zu seiner Position im normalen Fluss ein. Um ein Element relativ zum Viewport zu positionieren, verwenden Sie die physikalischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass sich die Positionierung auf den Textfluss in Ihrem Schreibmodus bezieht, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften erhalten als Wert eine Länge oder einen Prozentsatz und beziehen sich auf die Abmessungen des Bildschirms des Nutzers.

Im folgenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um die blaue Box mit der Eigenschaft `position: absolute` innerhalb des Bereichs mit der grauen gepunkteten Umrandung zu positionieren, die `position: relative` hat. Ändern Sie die Eigenschaft `writing-mode` zu `vertical-rl` oder fügen Sie `direction: rtl` hinzu und sehen Sie, wie die relativ zum Textfluss gesetzte Box in der Textflussrichtung bleibt.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## Neue Zwei- und Vier-Wert-Kurzschreibweisen

Wie bei anderen Eigenschaften im Modul haben wir Kurzschreibweisen, die die Möglichkeit bieten, zwei oder vier Werte gleichzeitig zu setzen.

- {{cssxref("inset")}} — setzt alle vier Seiten zusammen mit physikalischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Insets.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Insets.

## Beispiel: Logische Werte für Textausrichtung

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte, die sich auf die Textrichtung beziehen — anstelle von `left` und `right` können Sie `start` und `end` verwenden. Im folgenden Beispiel ist im ersten Block `text-align: right` gesetzt und im zweiten `text-align: end`.

Wenn Sie den Wert der `direction` in `rtl` ändern, werden Sie sehen, dass die Ausrichtung im ersten Block rechts bleibt, aber im zweiten logischen Ende auf die linke Seite wechselt.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

Dies funktioniert konsistenter, wenn Box-Ausrichtung verwendet wird, die Start und Ende anstelle von physikalischen Richtungen für die Ausrichtung verwendet.
