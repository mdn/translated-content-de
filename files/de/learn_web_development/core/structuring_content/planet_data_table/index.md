---
title: "Herausforderung: Strukturierung einer Planetendatentabelle"
short-title: "Herausforderung: Planetendatentabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in einer barrierefreien HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um mit der Bewertung zu beginnen, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensammlung zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die Rohdaten, die Ihnen zur Verfügung stehen, nehmen und in eine Tabelle verwandeln, indem Sie die unten beschriebenen Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel abzuschließen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Probleme haben, sich die Daten vorzustellen, schauen Sie sich das live Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html`, und beginnen Sie mit der Tabelle, indem Sie ihr einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper geben. Sie benötigen keinen Tabellenfuß für dieses Beispiel.
2. Fügen Sie Ihrer Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie dem Tabellenkopf eine Zeile hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenkörper, und denken Sie daran, alle Zeilenüberschriften semantisch zu machen.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen platziert werden — in den Rohdaten wird jede Zeile der Planetendaten neben ihrem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Zeilen, Spalten oder Zeilengruppen zu assoziieren, für die sie als Überschriften fungieren.
7. Fügen Sie nur um die Spalte, die alle Zeilenüberschriften der Planetennamen enthält, einen schwarzen [Rahmen](/de/docs/Web/CSS/Reference/Properties/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und über zwei Spalten gehen.
- Die Gruppenzeilenüberschriften (z.B. _Jovian planets_), die sich links von den Zeilenüberschriften der Planetennamen (z.B. _Saturn_) befinden, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die richtige Anzahl an Zeilen und Spalten umfasst.
- Eine Möglichkeit, Überschriften mit ihren Zeilen/Spalten zu assoziieren, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Komplexe Tabelle mit einer Beschriftung darüber. Die obersten Zeilenzellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, wobei die dritte Spalte einzelne Überschriften für jede Zeile hat. Alle Texte sind zentriert. Die Überschriften und jede zweite Zeile haben eine leicht unterschiedliche Hintergrundfarbe.](assessment-table.png)

Sie können sich das [Beispiel auch live hier ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (schauen Sie sich den Quellcode nicht an — nicht schummeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
