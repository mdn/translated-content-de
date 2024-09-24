---
title: Spalten übergreifen und ausgleichen
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie Elemente in einem mehrspaltigen (_multicol_) Container über Spalten hinwegreichen können und wie man kontrolliert, wie die Spalten gefüllt werden.

## Die Spalten übergreifen

Um ein Element über Spalten hinweg reichen zu lassen, verwenden Sie die {{cssxref("column-span")}} Eigenschaft mit dem Wert `all`. Dadurch wird das Element zu einem _Spanner_, der alle Spalten übergreift.

Jedes nachfolgende Element des Multicol-Containers kann zu einem Spanner werden, einschließlich direkter und indirekter Kinder. Beispielsweise könnte eine direkt im Container verschachtelte Überschrift zu einem Spanner werden, ebenso wie eine Überschrift, die in einem {{HTMLElement("section")}} verschachtelt ist, das sich innerhalb des Multicol-Containers befindet.

Im unten stehenden Beispiel ist das `<h2>` Element auf `column-span: all` gesetzt und erstreckt sich über alle Spalten.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

In diesem zweiten Beispiel befindet sich die Überschrift in einem {{HTMLElement("article")}} Element und erstreckt sich dennoch wie erwartet über den Inhalt.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; die Spalten beginnen nach dem Spanner neu, wodurch effektiv ein neuer Satz von Spaltenboxen erstellt wird. Der Inhalt springt nicht über ein sich erstreckendes Element hinweg.

### Einschränkungen von column-span

Der `column-span` kann nur zwei Werte haben. Der Anfangswert `none` bedeutet, dass das Element nicht übergreift und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten übergreift. Es gibt keine Werte, die ein teilweises Übergreifen ermöglichen, wie zum Beispiel, dass ein Element zwei von drei Spalten übergreift.

### Dinge, auf die man achten sollte

Wenn das sich erstreckende Element sich in einem anderen Element mit Rändern, Polsterung und einem Rahmen oder Hintergrundfarbe befindet, kann die Box oberhalb des Spanners erscheinen, wobei der restliche Inhalt darunter angezeigt wird. Aus diesem Grund ist Vorsicht geboten, wenn ein Element so eingestellt wird, dass es alle Spalten übergreift, und dieses Szenario berücksichtigt wird.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

Außerdem kann ein später im Inhalt erscheinendes Spannelement unerwartetes oder unerwünschtes Verhalten hervorrufen, wenn nicht genügend Inhalt vorhanden ist, um nach dem Spanner Spalten zu erstellen. Verwenden Sie das Spannen mit Bedacht und testen Sie es an verschiedenen Breakpoints, um sicherzustellen, dass Sie den gewünschten Effekt erzielen.

## Füllen und Ausgleichen von Spalten

Ein ausgewogener Satz von Spalten ist einer, in dem alle Spalten ungefähr den gleichen Inhalt haben. Das Füllen und Ausgleichen sind relevant, wenn die Menge des Inhalts nicht mit dem zur Verfügung stehenden Platz übereinstimmt, wie zum Beispiel, wenn eine {{CSSXref("height")}} auf den Container deklariert ist.

Der Anfangswert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so ausgeglichen wie möglich sind. In fragmentierten Kontexten, wie etwa [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Das bedeutet, dass auf der letzten Seite der letzte Satz von Spaltenboxen ausgeglichen ist.

Der andere Ausgleichswert, `balance-all`, gleicht alle Spalten in fragmentierten Kontexten aus.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgeglichen sind. Das Bild, das nicht gebrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausgeglichen und mit gleichen Mengen an Text gefüllt.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

Der `auto` Wert für `column-fill` füllt eine Spalte der Reihe nach, beginnend in der inline-start Richtung, bevor der Inhalt in nachfolgende Spalten platziert wird, anstatt alle Spalten gleichmäßig zu balancieren und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten sind bis zur Höhe des Containers gefüllt, wobei leere Spalten am Ende bleiben.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

## Nächste Schritte

Im nächsten Leitfaden erfahren Sie [wie Multicol Überlauf handhabt](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) innerhalb von Spalten und wenn es mehr Spalten gibt, als im Container Platz finden.
