---
title: Spanning und Ausbalancieren von Spalten
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie Elemente über Spalten innerhalb des Multi-Column- (_Multicol_) Containers gespannt werden können und wie man die Befüllung der Spalten steuern kann.

## Spannen der Spalten

Um ein Element über Spalten zu spannen, verwenden Sie die {{cssxref("column-span")}} Eigenschaft mit dem Wert `all`. Dies führt dazu, dass das Element zu einem _Spanner_ wird, der alle Spalten umfasst.

Jedes nachgeordnete Element des Multicol-Containers kann in einen Spanner verwandelt werden, einschließlich direkter und indirekter Kinder. Zum Beispiel könnte eine direkt im Container verschachtelte Überschrift ein Spanner werden, ebenso wie eine in einem {{HTMLElement("section")}} verschachtelte Überschrift innerhalb des Multicol-Containers.

Im untenstehenden Beispiel ist das `<h2>` Element auf `column-span: all` gesetzt und spannt alle Spalten.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

In diesem zweiten Beispiel befindet sich die Überschrift innerhalb eines {{HTMLElement("article")}} Elements und spannt dennoch wie erwartet den Inhalt.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; die Spalten beginnen nach dem Spanner neu, wodurch effektiv ein neues Set von Spaltenboxen entsteht. Der Inhalt springt nicht über ein spannendes Element.

### Einschränkungen von column-span

Der `column-span` kann nur zwei Werte haben. Der Anfangswert `none` bedeutet, dass das Element nicht spannt und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten spannt. Es gibt keine Werte, die eine partielle Spannweite ermöglichen, wie das Spannen eines Elements über zwei von drei Spalten.

### Zu beachtende Dinge

Wenn das spannbare Element sich innerhalb eines anderen Elements mit Rändern, Polsterungen, einem Rand oder einer Hintergrundfarbe befindet, könnte die Box über dem Spanner erscheinen, wobei der restliche Inhalt darunter angezeigt wird. Aus diesem Grund sollte darauf geachtet werden, ein Element so einzustellen, dass es alle Spalten spannt, um sicherzustellen, dass dieses Szenario berücksichtigt wird.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

Zusätzlich, wenn ein spannendes Element später im Inhalt erscheint, kann es zu unerwartetem oder unerwünschtem Verhalten führen, wenn nicht genug Inhalt vorhanden ist, um Spalten nach dem Spanner zu erstellen. Verwenden Sie das Spannen vorsichtig und testen Sie an verschiedenen Breakpoints, um sicherzustellen, dass Sie den gewünschten Effekt erzielen.

## Befüllen und Ausbalancieren von Spalten

Ein ausgeglichenes Set von Spalten ist dort, wo alle Spalten ungefähr die gleiche Menge an Inhalt haben. Befüllen und Ausbalancieren sind relevant, wenn die Menge an Inhalt nicht mit dem bereitgestellten Raum übereinstimmt, wie zum Beispiel, wenn eine {{CSSXref("height")}} auf dem Container deklariert ist.

Der Anfangswert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so weit wie möglich ausgeglichen sind. In fragmentierten Kontexten, wie zum Beispiel [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Das bedeutet, dass auf der letzten Seite das letzte Set an Spaltenboxen ausgeglichen ist.

Der andere Ausgleichswert, `balance-all`, balanciert alle Spalten in fragmentierten Kontexten aus.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgeglichen sind. Das Bild, das nicht gebrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausgeglichen und füllen sich mit gleichen Mengen an Text.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

Der `auto` Wert für `column-fill` füllt eine Spalte sequenziell, wobei zuerst die erste Spalte in der Inline-Start-Richtung gefüllt wird, bevor Inhalte in nachfolgenden Spalten platziert werden, anstatt alle Spalten gleichmäßig zu balancieren und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten werden bis zur Höhe des Containers gefüllt und lassen am Ende leere Spalten.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

## Nächste Schritte

Im nächsten Leitfaden lernen Sie [wie Multicol das Überlaufen](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) innerhalb der Spalten behandelt und wenn es mehr Spalten gibt, als in den Container passen.
