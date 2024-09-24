---
title: Umgang mit Überlauf in einem Mehrspaltenlayout
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie man mit Überlauf in einem Mehrspaltenlayout umgeht, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Überlauf innerhalb von Spaltenboxen

Eine Überlaufsituation tritt auf, wenn die Größe eines Elements größer ist als die Spaltenbox. Zum Beispiel kann diese Situation eintreten, wenn ein Bild in einer Spalte breiter ist als der `column-width`-Wert oder die Breite der Spalte basierend auf der mit `column-count` angegebenen Anzahl von Spalten.

In diesem Fall sollte der Inhalt sichtbar in die nächste Spalte überlaufen, anstatt von der Spaltenbox abgeschnitten zu werden.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

Es gibt zwei Spalten Text. In der linken Spalte befindet sich ein Foto, das breiter ist als die Spalte. Das Bild erstreckt sich in die zweite Spalte und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird durch das herausragende Foto nicht beeinträchtigt, aber das Erscheinungsbild wird beeinflusst.

Wenn Sie möchten, dass ein Bild in die Spaltenbox passt, verhindert die Einstellung von `max-width: 100%`, dass das Bild über seinen Container hinauswächst, in diesem Fall die Spaltenbox.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## Mehr Spalten als passend

Wie überlaufende Spalten behandelt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie beim Druck, oder kontinuierlich, wie bei einer Webseite.

In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, verschieben sich die Spalten auf eine neue Seite und füllen diese mit Spalten. In kontinuierlichen Medien laufen die Spalten in der Inline-Richtung über. Im Web bedeutet dies, dass Sie einen horizontalen Scrollbalken erhalten.

Das folgende Beispiel zeigt dieses Überlaufverhalten. Der Mehrspalten-Container hat eine feste {{CSSXref("height")}} und es gibt mehr Text als Platz, um Spalten zu erstellen; daher werden Spalten außerhalb des Containers erstellt.

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

## Verwendung von vertikalen Media-Queries

Ein Problem mit Mehrspalten auf dem Web ist, dass wenn die Spalten höher als der Ansichtbereich sind, der Leser die Seite nach oben und unten scrollen muss, um zu lesen, was keine gute Benutzererfahrung darstellt. Eine Möglichkeit, dies zu vermeiden, ist, die Spalteneigenschaften nur anzuwenden, wenn Sie wissen, dass genügend vertikaler Platz vorhanden ist.

Im folgenden Beispiel haben wir eine {{CSSXref("min-height")}} [@media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um sicherzustellen, dass genügend vertikaler Platz vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Mehrspaltenlayouts funktioniert](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout), um uns Kontrolle darüber zu geben, wie Inhalte zwischen den Spalten aufgeteilt werden.
