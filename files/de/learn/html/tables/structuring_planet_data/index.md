---
title: Strukturierung von Planetendaten
slug: Learn/HTML/Tables/Structuring_planet_data
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

In unserer Tabellenbewertung stellen wir Ihnen einige Daten zu den Planeten in unserem Sonnensystem zur Verfügung und lassen Sie diese in einer HTML-Tabelle strukturieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis von HTML-Tabellen und dazugehörigen Funktionen testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um die Bewertung zu starten, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie Schwierigkeiten haben, können Sie sich an uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine einfach zu befolgende Datensammlung zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Daten-Tabelle wäre ideal — Sie müssen die verfügbaren Rohdaten in eine Tabelle umwandeln, indem Sie die unten genannten Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel abzuschließen. Alle benötigten Daten finden Sie in der Datei `planets-data.txt`. Wenn es Ihnen schwerfällt, die Daten zu visualisieren, schauen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle, indem Sie ihr einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper geben. Ein Tabellenfuß ist für dieses Beispiel nicht erforderlich.
2. Fügen Sie Ihrer Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile in den Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen innerhalb des Tabellenkörpers und denken Sie daran, alle Zeilenüberschriften semantisch in Überschriften umzuwandeln.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen eingeordnet sind — in den Rohdaten wird jede Zeile der Planeten-Daten neben ihrem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften unmissverständlich mit den Zeilen, Spalten oder Zeilengruppen zu verknüpfen, für die sie als Überschriften dienen.
7. Fügen Sie nur um die Spalte, die alle Zeilenüberschriften der Planetennamen enthält, einen schwarzen [Rahmen](/de/docs/Web/CSS/border) hinzu.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und sich über zwei Spalten erstrecken.
- Die Gruppenzeilenüberschriften (z. B. _Jovian planets_), die links von den Zeilenüberschriften der Planetennamen (z. B. _Saturn_) sitzen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die korrekte Anzahl an Zeilen und Spalten umfasst.
- Eine Methode, um Überschriften mit ihren Zeilen/Spalten zu verknüpfen, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Komplexe Tabelle hat eine Beschriftung darüber. Die oberste Zeile der Zellen sind Spaltenüberschriften. Es gibt drei Spalten mit Überschriften. Die ersten zwei Spalten haben zusammengeführte Zellen, wobei die dritte Spalte einzelne Überschriften für jede Zeile hat. Der ganze Text ist zentriert. Die Überschriften und jede zweite Zeile haben eine leichte Hintergrundfarbe.](assessment-table.png)

Sie können sich das [Beispiel auch hier live ansehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (kein Blick in den Quellcode — nicht schummeln!)

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
