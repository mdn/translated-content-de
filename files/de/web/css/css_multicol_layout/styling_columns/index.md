---
title: Spalten stylen
slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Da die in mehrspaltigen (_multicol_) Containern erstellten Spaltenkästen anonyme Kästen sind, ist das Stylen einzelner Spalten nicht möglich. Wir können jedoch die Abstände zwischen den Spalten und den Container im Allgemeinen stylen. Dieser Leitfaden erklärt, wie man den Abstand verändert und Stilregeln zwischen Spalten anwendet.

## Spaltenabstände

Der Abstand zwischen Spalten wird mit der Eigenschaft {{CSSXref("column-gap")}} oder {{CSSXref("gap")}} gesteuert. Die `column-gap`-Eigenschaft wird im [mehrspaltigen Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert. Die `gap`-Eigenschaft wird im [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dies ist eine einheitliche Eigenschaft, um Abstände zwischen Kästen in allen Layouts zu definieren, die Abstände unterstützen, einschließlich [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) und [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass sich die Spalten überschneiden. In anderen Layoutmethoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können den Abstand ändern, indem Sie einen beliebigen {{cssxref("length")}} Wert verwenden. Im untenstehenden Beispiel ist der `column-gap` auf `40px` gesetzt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

Der erlaubte Wert für `column-gap` ist ein {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des multicol Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, die eine Kurzform {{CSSXref("column-rule")}} bieten. Diese Eigenschaften funktionieren genau wie die {{CSSXref("border")}} Eigenschaften: jeder {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genauso wie für gültige {{CSSXref("border-style")}}.

Diese Eigenschaften werden auf das Element angewendet, welches der multicol Container ist, und daher haben alle Spalten die gleiche Regel. Regeln werden nur zwischen den Spalten und nicht an den äußeren Rändern gezeichnet. Regeln werden auch nur zwischen Spalten gezeichnet, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px gepunktete Regel mit der Farbe `rebeccapurple` unter Verwendung der Langformen erstellt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

Beachten Sie, dass die Regel selbst keinen Platz einnimmt: Eine breite Regel wird die Spalten nicht auseinanderschieben, um Platz für die Regel zu schaffen. Stattdessen überlagert die Regel den Abstand.

Das folgende Beispiel verwendet eine sehr breite Regel von `40px` und einen `10px` Abstand. Die Regel wird unter dem Spalteninhalt angezeigt. Um auf beiden Seiten der Regel Platz zu schaffen, müsste der Abstand auf mehr als `40px` erhöht werden.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Nächste Schritte

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spaltenkästen gestylt werden können. Im nächsten Leitfaden werden wir uns damit befassen, wie man Elemente innerhalb eines Containers [über alle Spalten erstrecken](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns) kann.
