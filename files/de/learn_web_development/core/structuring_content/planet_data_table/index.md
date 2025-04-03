---
title: "Herausforderung: Strukturierung einer Planetendaten-Tabelle"
short-title: "Herausforderung: Planetendaten-Tabelle"
slug: Learn_web_development/Core/Structuring_content/Planet_data_table
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung bieten wir Ihnen einige Daten über die Planeten in unserem Sonnensystem. Ihre Aufgabe ist es, diese in eine zugängliche HTML-Tabelle zu strukturieren.

## Ausgangspunkt

Um die Bewertung zu starten, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie stecken bleiben, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensatz bereitstellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten in eine Tabelle umwandeln, indem Sie die untenstehenden Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Probleme haben, sich die Daten vorzustellen, schauen Sie sich das folgende Live-Beispiel an, oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle, indem Sie ihr einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper geben. Sie benötigen in diesem Beispiel keinen Tabellenfuß.
2. Fügen Sie Ihrer Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile im Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen innerhalb des Tabellenkörpers, wobei Sie daran denken, alle Zeilenüberschriften semantisch als Überschriften zu gestalten.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen platziert werden — in den Rohdaten wird jede Zeile von Planeteninformationen neben dem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Zeilen, Spalten oder Zeilengruppen zu verknüpfen, für die sie als Überschriften dienen.
7. Fügen Sie einen schwarzen [Rahmen](/de/docs/Web/CSS/border) nur um die Spalte hinzu, die alle Zeilenüberschriften der Planeten enthält.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und sich über zwei Spalten erstrecken.
- Die Gruppenzeilenüberschriften (z. B. _Jovianische Planeten_), die links von den Planeten-Zeilenüberschriften (z. B. _Saturn_) sitzen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die korrekte Anzahl von Zeilen und Spalten überspannt.
- Eine Möglichkeit, Überschriften mit ihren Zeilen/Spalten zu verknüpfen, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Komplexe Tabelle mit einer Überschrift darüber. Die obersten Zeilen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, wobei die dritte Spalte individuelle Überschriften für jede Zeile hat. Der gesamte Text ist zentriert. Die Überschriften und jede zweite Zeile haben eine leicht abweichende Hintergrundfarbe.](assessment-table.png)

Sie können auch [das Beispiel hier live sehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (nicht den Quellcode ansehen — nicht schummeln!)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Table_accessibility", "Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content")}}
