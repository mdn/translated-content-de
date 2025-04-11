---
title: "Herausforderung: Strukturierung einer Planeten-Daten-Tabelle"
short-title: "Herausforderung: Planeten-Daten-Tabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um die Bewertung zu starten, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css), und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit untersuchen Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensammlung zur Verfügung stellen, mit der sie Fakten und Zahlen über die Planeten nachschlagen können. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten in eine Tabelle umwandeln, indem Sie die folgenden Schritte befolgen.

### Schritte zum Abschluss

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten sind in der Datei `planets-data.txt` enthalten. Wenn Sie Probleme haben, die Daten zu visualisieren, schauen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html`, und beginnen Sie damit, der Tabelle einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper zu geben. Für dieses Beispiel benötigen Sie keinen Tabellenfuß.
2. Fügen Sie der Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile zum Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen innerhalb des Tabellenkörpers und denken Sie daran, alle Zeilenüberschriften semantisch als Überschriften zu formatieren.
5. Stellen Sie sicher, dass alle Inhalte in den richtigen Zellen platziert sind — in den Rohdaten wird jede Zeile der Planetendaten neben ihrem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig den Zeilen, Spalten oder Zeilengruppen zuzuordnen, für die sie als Überschrift dienen.
7. Fügen Sie nur um die Spalte, die alle Zeilenüberschriften der Planetennamen enthält, einen schwarzen [Rahmen](/de/docs/Web/CSS/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und zwei Spalten umfassen.
- Die Gruppenzeilenüberschriften (z.B. _Jovianische Planeten_), die links von den zeilenweise angeordneten Planetenbezeichnungen (z.B. _Saturn_) stehen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die richtige Anzahl von Zeilen und Spalten umfasst.
- Eine Methode, Überschriften mit ihren Zeilen/Spalten zu assoziieren, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte folgendermaßen aussehen:

![Die komplexe Tabelle hat eine darüberliegende Beschriftung. Die obersten Zellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, die dritte Spalte hat einzelne Überschriften für jede Zeile. Alle Texte sind zentriert. Die Überschriften und jede zweite Zeile haben eine leicht andere Hintergrundfarbe.](assessment-table.png)

Sie können sich das [Live-Beispiel hier ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (sehen Sie sich nicht den Quellcode an — nicht mogeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
