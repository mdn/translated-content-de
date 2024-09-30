---
title: Umgang mit Überlauf im Mehrspaltenlayout
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie man mit Überläufen in einem Mehrspalten- (_multicol_) Layout umgeht, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Überlauf innerhalb von Spaltenboxen

Eine Überlaufsituation tritt auf, wenn die Größe eines Elements größer ist als die Spaltenbox. Zum Beispiel könnte die Situation auftreten, wenn ein Bild in einer Spalte breiter ist als der `column-width`-Wert oder die Breite der Spalte basierend auf der Anzahl der mit `column-count` deklarierten Spalten.

In diesem Fall sollte der Inhalt sichtbar in die nächste Spalte überlaufen, anstatt von der Spaltenbox abgeschnitten zu werden.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

Es gibt zwei Spalten Text. In der linken Spalte befindet sich ein Foto, das breiter ist als die Spalte. Das Bild dehnt sich in die zweite Spalte aus und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird durch das hervorstehende Foto nicht beeinflusst, aber das Erscheinungsbild schon.

Wenn Sie möchten, dass ein Bild in die Spaltenbox passt, verhindert das Setzen von `max-width: 100%`, dass das Bild über seinen Container hinauswächst, in diesem Fall die Spaltenbox.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## Mehr Spalten, als passen

Wie überlaufende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie zum Beispiel beim Drucken, oder kontinuierlich, wie bei einer Webseite.

In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und dort mit Spalten gefüllt. In kontinuierlichen Medien laufen die Spalten in der Inline-Richtung über. Im Web bedeutet das, dass Sie einen horizontalen Scrollbalken bekommen.

Das unten stehende Beispiel zeigt dieses Überlaufverhalten. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}} und es gibt mehr Text als Platz zum Erstellen von Spalten; daher werden Spalten außerhalb des Containers erstellt.

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

## Verwendung von vertikalen Media Queries

Ein Problem mit Multicol im Web ist, dass der Leser, wenn die Spalten höher als der Viewport sind, die Seite hoch- und runterscrollen muss, um zu lesen, was keine gute Benutzererfahrung ist. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur dann anzuwenden, wenn Sie wissen, dass genügend vertikaler Raum vorhanden ist.

Im unten stehenden Beispiel haben wir eine {{CSSXref("min-height")}} [@media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um sicherzustellen, dass genügend vertikaler Raum vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Multicol-Layouts funktioniert](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout), um uns die Kontrolle darüber zu geben, wie Inhalte zwischen Spalten getrennt werden.
