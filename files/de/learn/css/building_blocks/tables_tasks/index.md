---
title: "Testen Sie Ihre Fähigkeiten: Tabellen"
slug: Learn/CSS/Building_blocks/Tables_tasks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie verstehen, wie man [HTML-Tabellen in CSS stylt](/de/docs/Learn/CSS/Building_blocks/Styling_tables).

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe

In der Lektion über das [Stylen von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables) haben wir eine Tabelle auf eher auffällige Weise gestylt. In dieser Aufgabe werden wir dieselbe Tabelle stylen, jedoch unter Anwendung guter Praktiken für das Tabellendesign, wie sie in dem externen Artikel [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) dargelegt werden.

Unsere fertige Tabelle wird aussehen wie das Bild unten. Es gibt mehrere Möglichkeiten, dies zu erreichen, aber wir empfehlen, ähnliche Muster wie im Tutorial zu verwenden, um Folgendes zu tun:

- Fügen Sie den Tabellenüberschriften und Daten einen Abstand von `0.3em` hinzu und richten Sie sie am oberen Rand ihrer Zellen aus.
- Richten Sie Überschriften und Daten für Spalten mit Zahlen rechtsbündig aus.
- Richten Sie Überschriften und Daten für Spalten mit Text linksbündig aus.
- Richten Sie die Überschrift der Tabellenfußzeile rechtsbündig aus.
- Richten Sie die Daten der Tabellenfußzeile linksbündig aus.
- Fügen Sie der Tabelle eine 1px starke durchgezogene Ober- und Untergrenze mit der Hex-Farbe `#999` hinzu.
- Fügen Sie der Fußzeile eine 1px starke durchgezogene Obergrenze mit der Hex-Farbe `#999` hinzu.
- Entfernen Sie den Standardabstand zwischen den Tabellenrändern, um das erwartete Ergebnis zu erzielen.
- Streifen Sie jede ungerade Zeile der Haupttabelle mit der Hex-Farbe `#eee`.

![Eine Tabelle mit gestreiften Zeilen.](mdn-table-bands.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

{{EmbedGHLiveSample("css-examples/learn/tasks/tables/table.html", '100%', 1000)}}

Zusätzliche Frage:

- Was können Sie tun, damit sich das Tabellenlayout etwas vorhersehbarer verhält? Denken Sie darüber nach, wie Tabellenspalten standardmäßig dimensioniert werden und wie wir dieses Verhalten ändern können, um die Spalten entsprechend der Breite ihrer Überschriften zu dimensionieren.

> [!CALLOUT]
>
> [Laden Sie den Ausgangspunkt für diese Aufgabe herunter](https://github.com/mdn/css-examples/blob/main/learn/tasks/tables/table-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.
