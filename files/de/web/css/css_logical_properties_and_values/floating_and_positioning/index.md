---
title: Logische Eigenschaften für Floats und Positionierung
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 3b4bf3e92c726515fe99042c7f7f119ef1009b68
---

{{CSSRef}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Zuordnungen für die physischen Werte von {{cssxref("float")}} und {{cssxref("clear")}}, sowie für die Positionierungseigenschaften, die mit dem [positionierten Layout](/de/docs/Web/CSS/CSS_positioned_layout) verwendet werden. Dieser Leitfaden zeigt, wie man diese verwendet.

## Zuordnete Eigenschaften und Werte

Die folgende Tabelle führt die {{Glossary("logical_properties", "logischen Eigenschaften")}} und Werte auf, die in diesem Leitfaden besprochen werden, zusammen mit ihren Zuordnungen zu {{Glossary("physical_properties", "physischen Eigenschaften")}} und Werten. Sie nehmen einen horizontalen {{cssxref("writing-mode")}} mit einer Links-nach-Rechts-Richtung an.

| Logische Eigenschaft oder Wert     | Physische Eigenschaft oder Wert  |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

Zusätzlich zu diesen zugeordneten Eigenschaften gibt es einige zusätzliche Kurznotationseigenschaften, die durch die Möglichkeit, Block- und Inline-Dimensionen anzusprechen, ermöglicht werden. Diese haben keine Zuordnung zu physischen Eigenschaften, abgesehen von der {{cssxref("inset")}}-Eigenschaft.

| Logische Eigenschaft        | Zweck                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Setzt beide oben genannten Einfügewerte für die Inline-Dimension gleichzeitig.     |
| {{cssxref("inset-block")}}  | Setzt beide oben genannten Einfügewerte für die Block-Dimension gleichzeitig.      |
| {{cssxref("inset")}}        | Setzt alle vier Einfügewerte gleichzeitig mit physischer Zuordnung von Mehrwerten. |

## Beispiel für Float und Clear

Die physischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das CSS-Modul für logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Dieses Beispiel hat zwei Boxen — die erste Box ist mit `float: left` gefloatet, die zweite mit `float: inline-start`. Wenn Sie den `writing-mode` auf `vertical-rl` oder die `direction` auf `rtl` ändern, sehen Sie, dass die links gefloatete Box immer links bleibt, während sich das `inline-start`-gefloatete Element der `direction` und dem `writing-mode` anpasst.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## Beispiel: Einfügeeigenschaften für das positionierte Layout

Die CSS-Positionierung ermöglicht es im Allgemeinen, ein Element in einer Weise relativ zu seinem umgebenden Block zu positionieren — wir setzen das Element im Wesentlichen relativ zu dem Punkt, an dem es im normalen Fluss fallen würde, ein. Um ein Element relativ zum Ansichtsfenster zu positionieren, verwenden Sie die physischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass die Positionierung sich auf den Textfluss im Schreibmodus bezieht, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften nehmen eine Länge oder einen Prozentsatz als Wert und beziehen sich auf die Bildschirmabmessungen des Benutzers.

Im untenstehenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um die blaue Box mit absoluter Positionierung innerhalb des Bereichs mit der grauen gestrichelten Umrandung zu positionieren, der `position: relative` hat. Ändern Sie die `writing-mode`-Eigenschaft auf `vertical-rl`, oder fügen Sie `direction: rtl` hinzu, und sehen Sie, wie sich die relativ zum Textfluss positionierte Box verhält.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## Neue Zwei- und Vier-Wert-Kurznotationen

Wie bei anderen Eigenschaften im Modul haben wir Kurznotationseigenschaften, die die Möglichkeit geben, zwei oder vier Werte gleichzeitig festzulegen.

- {{cssxref("inset")}} — setzt alle vier Seiten zusammen mit physischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Einfügungen.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Einfügungen.

## Beispiel: Logische Werte für text-align

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte, die sich auf die Textrichtung beziehen — anstatt `left` und `right` zu verwenden, können Sie `start` und `end` verwenden. Im untenstehenden Beispiel ist `text-align: right` im ersten Block gesetzt und `text-align: end` im zweiten.

Wenn Sie den Wert von `direction` auf `rtl` ändern, sehen Sie, dass die Ausrichtung beim ersten Block rechts bleibt, aber im zweiten Block zum logischen Ende auf der linken Seite geht.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

Dies funktioniert konsistenter, wenn Sie Box-Ausrichtung verwenden, die Start und Ende anstelle von physischen Richtungen für die Ausrichtung verwendet.
