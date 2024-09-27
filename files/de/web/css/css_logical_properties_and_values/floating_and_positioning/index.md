---
title: Logische Eigenschaften für Floating und Positionierung
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 3b4bf3e92c726515fe99042c7f7f119ef1009b68
---

{{CSSRef}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Zuordnungen für die physikalischen Werte von {{cssxref("float")}} und {{cssxref("clear")}} sowie für die Positionierungseigenschaften, die mit dem [positionierten Layout](/de/docs/Web/CSS/CSS_positioned_layout) verwendet werden. Dieser Leitfaden erläutert, wie Sie diese Eigenschaften verwenden können.

## Zugeordnete Eigenschaften und Werte

Die folgende Tabelle zeigt die in diesem Leitfaden besprochenen [logischen Eigenschaften](/de/docs/Glossary/logical_properties) und Werte sowie ihre Zuordnungen zu [physikalischen Eigenschaften](/de/docs/Glossary/physical_properties) und Werten. Sie gehen von einem horizontalen {{cssxref("writing-mode")}} mit einer Links-nach-Rechts-Richtung aus.

| Logische Eigenschaft oder Wert     | Physikalische Eigenschaft oder Wert |
| ---------------------------------- | ----------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left          |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right         |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left          |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right         |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}                 |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}                |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}                  |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}               |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left     |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right    |

Zusätzlich zu diesen zugeordneten Eigenschaften gibt es einige weitere Kurzschreibweisen, die möglich sind, indem Block- und Inline-Dimensionen adressiert werden. Diese haben abgesehen von der {{cssxref("inset")}}-Eigenschaft keine Zuordnung zu physikalischen Eigenschaften.

| Logische Eigenschaft        | Zweck                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | Setzt beide oben genannten Einlagungswerte für die Inline-Dimension gleichzeitig.             |
| {{cssxref("inset-block")}}  | Setzt beide oben genannten Einlagungswerte für die Blockdimension gleichzeitig.               |
| {{cssxref("inset")}}        | Setzt alle vier Einlagungswerte gleichzeitig mit physikalischer Zuordnung von Mehrfachwerten. |

## Float- und Clear-Beispiel

Die physikalischen Werte, die mit den Eigenschaften {{cssxref("float")}} und {{cssxref("clear")}} verwendet werden, sind `left`, `right` und `both`. Das Modul für CSS logische Eigenschaften und Werte definiert die Werte `inline-start` und `inline-end` als Zuordnungen für `left` und `right`.

Dieses Beispiel hat zwei Boxen — die erste Box wird mit `float: left` und die zweite mit `float: inline-start` gefloatet. Wenn Sie den `writing-mode` auf `vertical-rl` ändern oder die `direction` auf `rtl` setzen, werden Sie sehen, dass die nach links gefloatete Box immer links bleibt, während das `inline-start`-gefloate Element der `direction` und dem `writing-mode` folgt.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## Beispiel: Einlageeigenschaften für positioniertes Layout

Die CSS-Positionierung ermöglicht es uns im Allgemeinen, ein Element relativ zu seinem enthaltenden Block zu positionieren — wir setzen das Element im Wesentlichen relativ zur normalen Flussposition ein. Um ein Element relativ zum Viewport zu positionieren, verwenden Sie die physikalischen Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}. Wenn Sie möchten, dass sich die Positionierung auf den Fluss des Textes in Ihrem Schriftsystem bezieht, verwenden Sie stattdessen {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} und {{cssxref("inset-inline-end")}}.

Diese Eigenschaften nehmen eine Länge oder einen Prozentsatz als Wert und beziehen sich auf die Bildschirmabmessungen des Benutzers.

Im unten stehenden Beispiel werden die Eigenschaften `inset-block-start` und `inset-inline-end` verwendet, um die blaue Box unter Verwendung absoluter Positionierung innerhalb des Bereichs mit der grau gepunkteten Umrandung zu positionieren, welche `position: relative` hat. Ändern Sie die `writing-mode`-Eigenschaft auf `vertical-rl` oder fügen Sie `direction: rtl` hinzu und sehen Sie, wie die flussrelativ positionierte Box mit der Textausrichtung bleibt.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## Neue Zwei- und Vier-Werte-Kurzschreibweisen

Wie bei anderen Eigenschaften im Modul haben wir Kurzschreibweise-Eigenschaften, mit denen zwei oder vier Werte gleichzeitig festgelegt werden können.

- {{cssxref("inset")}} — setzt alle vier Seiten zusammen mit physikalischer Zuordnung.
- {{cssxref("inset-inline")}} — setzt beide logischen Inline-Einlagungen.
- {{cssxref("inset-block")}} — setzt beide logischen Block-Einlagungen.

## Beispiel: Logische Werte für text-align

Die {{cssxref("text-align")}}-Eigenschaft hat logische Werte, die sich auf die Textausrichtung beziehen — anstatt `left` und `right` zu verwenden, können Sie `start` und `end` verwenden. Im unten stehenden Beispiel wird im ersten Block `text-align: right` und im zweiten `text-align: end` gesetzt.

Wenn Sie den Wert von `direction` auf `rtl` ändern, werden Sie sehen, dass die Ausrichtung im ersten Block rechts bleibt, aber im zweiten zur logischen Endseite auf der linken Seite wechselt.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

Dies funktioniert konsistenter, wenn Box-Ausrichtung verwendet wird, die Start und Ende anstatt physikalischer Richtungen für die Ausrichtung verwendet.
