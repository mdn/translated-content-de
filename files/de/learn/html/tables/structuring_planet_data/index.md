---
title: Strukturierung von Planetendaten
slug: Learn/HTML/Tables/Structuring_planet_data
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

In unserer Tabellenbewertung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung und lassen Sie diese in eine HTML-Tabelle strukturieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie mit dieser Bewertung beginnen, sollten Sie alle Artikel in diesem Modul bereits durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis von HTML-Tabellen und zugehörigen Funktionen zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um die Bewertung zu beginnen, erstellen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensammlung zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die verfügbaren Rohdaten in eine Tabelle umwandeln, indem Sie die folgenden Schritte ausführen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten befinden sich in der Datei `planets-data.txt`. Wenn Sie Schwierigkeiten haben, die Daten zu visualisieren, sehen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html` und beginnen Sie die Tabelle, indem Sie ihr einen äußeren Container, einen Tabellenkopf und einen Tabellenkörper geben. Sie benötigen für dieses Beispiel keine Tabellenfußzeile.
2. Fügen Sie der Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile zum Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenkörper, und denken Sie daran, alle Zeilenüberschriften semantisch als Überschriften zu gestalten.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen eingefügt werden – in den Rohdaten wird jede Zeile mit Planetendaten neben ihrem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um sicherzustellen, dass die Zeilen- und Spaltenüberschriften eindeutig den Zeilen, Spalten oder Zeilengruppen zugeordnet sind, für die sie als Überschriften fungieren.
7. Fügen Sie einen schwarzen [Rahmen](/de/docs/Web/CSS/border) nur um die Spalte hinzu, die alle Zeilenüberschriften der Planetennamen enthält.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und sich über zwei Spalten erstrecken.
- Die Gruppenzeilenüberschriften (z. B. _Jovianische Planeten_), die links von den Zeilenüberschriften der Planetennamen (z. B. _Saturn_) liegen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die richtige Anzahl von Zeilen und Spalten überspannt.
- Eine Methode, Überschriften ihren Zeilen/Spalten zuzuordnen, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte folgendermaßen aussehen:

![Komplexe Tabelle hat eine Beschriftung darüber. Die oberste Zeile sind Spaltenüberschriften. Es gibt drei Spalten von Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, wobei die dritte Spalte individuelle Überschriften für jede Zeile hat. Alle Texte sind zentriert. Die Überschriften und jede zweite Zeile haben eine leichte Hintergrundfarbe.](assessment-table.png)

Sie können das Beispiel auch [live hier sehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (schauen Sie nicht auf den Quellcode — nicht schummeln!)

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
