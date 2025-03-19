---
title: "Herausforderung: Strukturierung einer Planetendaten-Tabelle"
short-title: "Herausforderung: Planetendaten-Tabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine barrierearme HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um die Bewertung zu beginnen, erstellen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css), und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule. Zurzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen einen leicht nachvollziehbaren Datensatz zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten in eine Tabelle umwandeln, indem Sie die folgenden Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Schwierigkeiten haben, sich die Daten vorzustellen, schauen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle, indem Sie ihr einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper geben. Sie brauchen für dieses Beispiel keinen Tabellenfuß.
2. Fügen Sie Ihrer Tabelle die vorgesehene Beschriftung hinzu.
3. Fügen Sie dem Tabellenkopf eine Zeile hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenkörper und denken Sie daran, alle Zeilenüberschriften semantisch hervorzuheben.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen eingefügt werden — in den Rohdaten wird jede Zeile der Planetendaten neben ihrem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Zeilen, Spalten oder Zeilengruppen zu verbinden, für die sie als Überschriften fungieren.
7. Fügen Sie nur um die Spalte, die alle Zeilenüberschriften der Planetennamen enthält, einen schwarzen [Rahmen](/de/docs/Web/CSS/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und sich über zwei Spalten erstrecken.
- Die Gruppenzeilenüberschriften (z.B. _Jovianische Planeten_), die links von den Zeilenüberschriften der Planeten (z.B. _Saturn_) sitzen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede von ihnen die richtige Anzahl von Reihen und Spalten überdeckt.
- Eine Möglichkeit, Überschriften mit ihren Zeilen/Spalten zu assoziieren, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Die komplexe Tabelle hat eine Überschrift darüber. Die obersten Zeilenzellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, wobei die dritte Spalte einzelne Überschriften für jede Zeile enthält. Alle Texte sind zentriert. Die Überschriften und jede zweite Zeile haben eine leicht abgesetzte Hintergrundfarbe.](assessment-table.png)

Sie können sich das [Beispiel auch hier live ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (sehen Sie sich den Quellcode nicht an — nicht schummeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
