---
title: Spalten gestalten
slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Da Spaltenboxen, die innerhalb von Multi-Column- (_multicol_) Containern erstellt werden, anonyme Boxen sind, ist es nicht möglich, einzelne Spalten zu gestalten. Wir können jedoch die Abstände zwischen den Spalten und dem Container im Allgemeinen gestalten. Diese Anleitung erklärt, wie Sie den Abstand ändern und Gestaltungsregeln zwischen den Spalten festlegen können.

## Spaltenabstände

Der Abstand zwischen den Spalten wird mit der Eigenschaft {{CSSXref("column-gap")}} oder {{CSSXref("gap")}} gesteuert. Die Eigenschaft `column-gap` wird im [Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert. Die Eigenschaft `gap` wird im [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Diese ist eine einheitliche Eigenschaft, um Abstände zwischen Boxen in allen Layouts zu definieren, die Abstände unterstützen, einschließlich [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) und [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass Spalten ineinander übergehen. In anderen Layoutmethoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können den Abstand ändern, indem Sie einen beliebigen {{cssxref("length")}} Wert verwenden. Im folgenden Beispiel ist `column-gap` auf `40px` gesetzt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-gap.html", '100%', 750)}}

Der zulässige Wert für `column-gap` ist ein {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des Multicol-Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, die eine Kurzform {{CSSXref("column-rule")}} bieten. Diese Eigenschaften funktionieren genau so wie die {{CSSXref("border")}} Eigenschaften: Jedes {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genauso wie für gültige {{CSSXref("border-style")}}.

Diese Eigenschaften werden auf das Element angewendet, das der Multicol-Container ist, und daher werden alle Spalten die gleiche Regel haben. Regeln werden nur zwischen Spalten gezogen und nicht an den äußeren Rändern. Regeln werden auch nur zwischen Spalten gezogen, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px-gestrichelte Regel mit der Farbe `rebeccapurple` mithilfe der Langformwerte erstellt.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule.html", '100%', 550)}}

Beachten Sie, dass die Regel selbst keinen Raum einnimmt: Eine breite Regel wird die Spalten nicht auseinanderdrängen, um Platz für die Regel zu schaffen. Stattdessen liegt die Regel über dem Abstand.

Das folgende Beispiel verwendet eine sehr breite Regel von `40px` und einen `10px` Abstand. Die Regel wird unter dem Spalteninhalt angezeigt. Um Platz auf beiden Seiten der Regel zu schaffen, müsste der Abstand auf mehr als `40px` erhöht werden.

{{EmbedGHLiveSample("css-examples/multicol/styling/column-rule-wide.html", '100%', 550)}}

## Nächste Schritte

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spaltenboxen gestaltet werden können. Im nächsten Leitfaden werden wir uns damit befassen, Elemente innerhalb eines Containers [über alle Spalten zu spannen](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns).
