---
title: Styling columns
slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Da die innerhalb von mehrspaltigen (_multicol_) Containern erstellten Spalten-Boxen anonyme Boxen sind, ist es nicht möglich, einzelne Spalten zu stylen. Wir können jedoch die Abstände zwischen den Spalten und den Container als Ganzes stylen. Dieser Leitfaden erklärt, wie man den Abstand und die Stilregeln zwischen den Spalten ändert.

## Spaltenabstände

Der Abstand zwischen den Spalten wird mit der {{CSSXref("column-gap")}} oder der {{CSSXref("gap")}} Eigenschaft gesteuert. Die `column-gap` Eigenschaft ist im [mehrspaltigen Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert. Die `gap` Eigenschaft ist im [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dies ist eine einheitliche Eigenschaft, um Abstände zwischen Boxen in allen Layouts zu definieren, die Abstände unterstützen, einschließlich [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) und [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass die Spalten ineinander laufen. In anderen Layoutmethoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können den Abstand ändern, indem Sie einen beliebigen {{cssxref("length")}} Wert verwenden. Im folgenden Beispiel ist der `column-gap` auf `40px` gesetzt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

Der erlaubte Wert für `column-gap` ist eine {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des Multicol-Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, und bietet eine Kurzschreibweise {{CSSXref("column-rule")}} an. Diese Eigenschaften funktionieren genau wie die {{CSSXref("border")}} Eigenschaften: Jeder {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genau wie bei gültigen {{CSSXref("border-style")}}.

Diese Eigenschaften werden auf das Element angewendet, welches der Multicol-Container ist, und daher werden alle Spalten die gleiche Regel haben. Regeln werden nur zwischen Spalten und nicht an den Außenkanten gezeichnet. Regeln werden auch nur zwischen Spalten gezeichnet, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px-gepunktete Regel mit der Farbe `rebeccapurple` unter Verwendung der Langformwerte erstellt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

Beachten Sie, dass die Regel selbst keinen Platz einnimmt: Eine breite Regel wird nicht die Spalten auseinander drücken, um Platz für die Regel zu schaffen. Stattdessen überlagert die Regel den Spaltenabstand.

Das folgende Beispiel verwendet eine sehr breite Regel von `40px` und einen `10px` Abstand. Die Regel wird unterhalb des Spalteninhalts angezeigt. Um Platz auf beiden Seiten der Regel zu schaffen, müsste der Abstand größer als `40px` sein.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Nächste Schritte

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spalten-Boxen gestaltet werden können. Im nächsten Leitfaden werden wir betrachten, wie man Elemente innerhalb eines Containers [über alle Spalten hinweg erstreckt](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns).
