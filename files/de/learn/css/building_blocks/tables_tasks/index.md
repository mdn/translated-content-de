---
title: "Testen Sie Ihre Fähigkeiten: Tabellen"
slug: Learn/CSS/Building_blocks/Tables_tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu beurteilen, ob Sie verstehen, wie man [HTML-Tabellen in CSS gestaltet](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe

In der Lektion über das [Gestalten von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) haben wir eine Tabelle auf eine recht grelle Weise gestaltet. In dieser Aufgabe werden wir dieselbe Tabelle gestalten, aber einige gute Praktiken für das Tabellendesign anwenden, wie sie im externen Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) beschrieben sind.

Unsere fertige Tabelle wird wie das untenstehende Bild aussehen. Es gibt verschiedene Möglichkeiten, dies zu erreichen, aber wir schlagen vor, ähnliche Muster zu verwenden wie im Tutorial, um die folgenden Dinge zu tun:

- Fügen Sie den Tabellenüberschriften und -daten ein Padding von `0.3em` hinzu und richten Sie sie am oberen Rand ihrer Zellen aus.
- Richten Sie Überschriften und Daten für Spalten, die Zahlen enthalten, rechts aus.
- Richten Sie Überschriften und Daten für Spalten, die Text enthalten, links aus.
- Richten Sie die Überschrift der Tabellenfußzeile rechts aus.
- Richten Sie die Daten der Tabellenfußzeile links aus.
- Fügen Sie der Tabelle einen 1px oberen und unteren festen Rand mit der Hex-Farbe `#999` hinzu.
- Fügen Sie der Fußzeile einen 1px oberen festen Rand mit der Hex-Farbe `#999` hinzu.
- Entfernen Sie den Standardabstand zwischen den Rändern der Tabellenelemente, um das erwartete Ergebnis zu erzielen.
- Streifen Sie jede ungerade Reihe der Haupttabelle mit der Hex-Farbe `#eee`.

![Eine Tabelle mit gestreiften Zeilen.](mdn-table-bands.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/tables/table.html", '100%', 1000)}}

Zusätzliche Frage:

- Was können Sie tun, um das Verhalten des Tabellenlayouts etwas vorhersehbarer zu machen? Denken Sie daran, wie Tabellenspalten standardmäßig dimensioniert sind und wie wir dieses Verhalten ändern können, um die Spalten entsprechend der Breite ihrer Überschriften zu dimensionieren.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/tables/table-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
