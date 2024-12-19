---
title: "Herausforderung: Strukturierung einer Planeten-Datentabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe besteht darin, diese in eine zugängliche HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um die Bewertung zu starten, erstellen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor ausprobieren oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/).
>
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektbrief

Sie arbeiten an einer Schule; derzeit beschäftigen sich Ihre Schüler mit den Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datentabelle zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten nehmen und in eine Tabelle umwandeln, indem Sie die unten aufgeführten Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel abzuschließen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Probleme haben, sich die Daten bildlich vorzustellen, schauen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle, indem Sie einen äußeren Container, einen Tabellenkopf und einen Tabellenteil hinzufügen. Sie benötigen für dieses Beispiel keinen Tabellenfuß.
2. Fügen Sie Ihrer Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile zum Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenteil und achten Sie darauf, dass alle Zeilenüberschriften semantisch zu Überschriften gemacht werden.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen eingefügt werden — in den Rohdaten wird jede Zeile der Planetendaten neben dem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Zeilen, Spalten oder Zeilengruppen zu verknüpfen, für die sie als Überschriften dienen.
7. Fügen Sie nur um die Spalte, die alle Zeilenüberschriften der Planetennamen enthält, einen schwarzen [Rand](/de/docs/Web/CSS/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und zwei Spalten umfassen.
- Die Gruppenzeilenüberschriften (z.B. _Jovian planets_), die links von den Zeilenüberschriften der Planetennamen (z.B. _Saturn_) stehen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die korrekte Anzahl an Zeilen und Spalten umfasst.
- Eine Möglichkeit, Überschriften mit ihren Zeilen/Spalten zu verknüpfen, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Komplexe Tabelle hat eine Beschriftung darüber. Die obersten Zeilenzellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, wobei die dritte Spalte individuelle Überschriften für jede Zeile hat. Alle Texte sind zentriert. Die Überschriften und jede andere Zeile haben eine leichte Hintergrundfarbe.](assessment-table.png)

Sie können auch [das Live-Beispiel hier ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (nicht im Quellcode schauen — nicht schummeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
