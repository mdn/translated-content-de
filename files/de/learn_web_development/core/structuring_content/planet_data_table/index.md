---
title: "Herausforderung: Strukturierung einer Planetendatentabelle"
short-title: "Herausforderung: Planetendatentabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung stellen wir Ihnen einige Daten zu den Planeten in unserem Sonnensystem zur Verfügung. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um mit der Bewertung zu beginnen, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Falls Sie stecken bleiben, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Projektauftrag

Sie arbeiten an einer Schule; aktuell lernen Ihre Schüler über die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensammlung bieten, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten nehmen und in eine Tabelle umwandeln, indem Sie die unten stehenden Schritte befolgen.

### Schritte zum Abschließen

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Schwierigkeiten haben, sich die Daten vorzustellen, schauen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle mit einem äußeren Container, einem Tabellenkopf und einem Tabellenkörper. Einen Tabellenfuß benötigen Sie für dieses Beispiel nicht.
2. Fügen Sie die bereitgestellte Beschriftung zu Ihrer Tabelle hinzu.
3. Fügen Sie eine Zeile zum Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenkörper und denken Sie daran, alle Zeilenüberschriften semantisch als Überschriften zu gestalten.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen eingefügt werden – in den Rohdaten wird jede Zeile der Planetendaten neben dem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Zeilen, Spalten oder Zeilengruppen zu verknüpfen, für die sie als Überschriften fungieren.
7. Fügen Sie nur um die Spalte, die alle Planetenzeilenüberschriften enthält, einen schwarzen [Rand](/de/docs/Web/CSS/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und sich über zwei Spalten erstrecken.
- Die Gruppenzeilenüberschriften (z.B. _Jovian planets_), die links von den Planetenzeilenüberschriften (z.B. _Saturn_) sitzen, sind etwas knifflig zu sortieren – Sie müssen sicherstellen, dass jede die richtige Anzahl von Zeilen und Spalten umfasst.
- Eine Methode zur Zuordnung von Überschriften zu ihren Zeilen/Spalten ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte folgendermaßen aussehen:

![Komplexe Tabelle mit einer Beschriftung darüber. Die obersten Zeilenzellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, und die dritte Spalte sind einzelne Überschriften für jede Zeile. Der gesamte Text ist zentriert. Die Überschriften und jede zweite Zeile haben eine leichte Hintergrundfarbe.](assessment-table.png)

Sie können das [Beispiel auch hier live sehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (nicht den Quellcode ansehen — nicht schummeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
