---
title: Übergreifen und Ausgleichen von Spalten
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie man Elemente innerhalb des Mehrspalten-Containers (_multicol_) über Spalten hinweg erstreckt und wie man steuert, wie die Spalten gefüllt werden.

## Spalten übergreifen

Um ein Element über Spalten hinweg erstrecken zu lassen, verwenden Sie die {{cssxref("column-span")}}-Eigenschaft mit dem Wert `all`. Dadurch wird das Element zu einem _Spanner_, der alle Spalten überspannt.

Jedes Nachfahr-Element des Multicol-Containers kann zu einem Spanner gemacht werden, einschließlich direkter und indirekter Kinder. Beispielsweise könnte eine direkt im Container verschachtelte Überschrift zu einem Spanner werden, ebenso wie eine Überschrift, die in einem {{HTMLElement("section")}} geschachtelt ist, das sich innerhalb des Multicol-Containers befindet.

Im folgenden Beispiel ist das `<h2>`-Element auf `column-span: all` gesetzt und erstreckt sich über alle Spalten.

{{EmbedGHLiveSample("css-examples/multicol/spanning/h2-span.html", '100%', 800)}}

In diesem zweiten Beispiel befindet sich die Überschrift innerhalb eines {{HTMLElement("article")}}-Elements, was jedoch die erwartete Überstreckung des Inhalts nicht beeinträchtigt.

{{EmbedGHLiveSample("css-examples/multicol/spanning/nested-h2-span.html", '100%', 800)}}

Wenn ein Spanner eingeführt wird, wird der Fluss der Spalten unterbrochen; die Spalten beginnen nach dem Spanner neu, was effektiv ein neues Set von Spaltenboxen erzeugt. Der Inhalt springt nicht über ein Element hinweg, das die Spalten überspannt.

### Einschränkungen von `column-span`

`column-span` kann nur zwei Werte haben. Der anfängliche Wert `none` bedeutet, dass das Element nicht spannt und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten spannt. Es gibt keine Werte, die ein partielles Spannen ermöglichen, wie z.B., dass ein Element zwei von drei Spalten spannt.

### Zu beachtende Punkte

Wenn das übergreifende Element in einem anderen Element mit Rändern, Auffüllungen und einem Rahmen oder Hintergrundfarbe enthalten ist, könnte die Box über dem Spanner erscheinen, wobei der restliche Inhalt darunter angezeigt wird. Aus diesem Grund sollte darauf geachtet werden, ein Element so einzustellen, dass es alle Spalten überspannt, um auf dieses Szenario vorbereitet zu sein.

{{EmbedGHLiveSample("css-examples/multicol/spanning/mpb-span.html", '100%', 800)}}

Außerdem, wenn ein übergreifendes Element später im Inhalt erscheint, kann es zu unerwartetem oder unerwünschtem Verhalten führen, wenn nicht genügend Inhalt vorhanden ist, um Spalten nach dem Spanner zu erstellen. Verwenden Sie das Übergreifen mit Bedacht und testen Sie es bei verschiedenen Breakpoints, um sicherzustellen, dass Sie den beabsichtigten Effekt erzielen.

## Füllen und Ausgleichen von Spalten

Ein ausgewogenes Set von Spalten ist eines, bei dem alle Spalten ungefähr die gleiche Menge an Inhalt haben. Das Füllen und Ausgleichen ist relevant, wenn die Menge an Inhalt nicht mit dem verfügbaren Platz übereinstimmt, z.B. wenn eine {{CSSXref("height")}} auf dem Container deklariert ist.

Der anfängliche Wert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so gut wie möglich ausgeglichen sind. In fragmentierten Kontexts, wie [Paged Media](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Das bedeutet, dass auf der letzten Seite das finale Set von Spaltenboxen ausgeglichen ist.

Der andere Ausgleichswert, `balance-all`, gleicht alle Spalten in fragmentierten Kontexts aus.

In diesem Beispiel enthalten die Spalten ein Bild und etwas Text, die ausgeglichen sind. Das Bild, das nicht brechen kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausgeglichen und füllen sich mit gleicher Menge an Text.

{{EmbedGHLiveSample("css-examples/multicol/balancing/balance.html", '100%', 550)}}

Der Wert `auto` für `column-fill` füllt eine Spalte sequentiell, indem er die erste Spalte in der Inline-Start-Richtung füllt, bevor er den Inhalt in nachfolgenden Spalten platziert, anstatt alle Spalten gleichmäßig auszugleichen und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten füllen sich bis zur Höhe des Containers und lassen am Ende leere Spalten übrig.

{{EmbedGHLiveSample("css-examples/multicol/balancing/auto.html", '100%', 550)}}

## Nächste Schritte

Im nächsten Leitfaden erfahren Sie [wie Multicol Überlauf handhabt](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) innerhalb von Spalten und wenn es mehr Spalten gibt, als der Container aufnehmen kann.
