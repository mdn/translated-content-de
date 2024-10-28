---
title: Strukturierung von Planeten-Daten
slug: Learn/HTML/Tables/Structuring_planet_data
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}

In unserer Tabellenbewertung stellen wir Ihnen einige Daten über die Planeten in unserem Sonnensystem zur Verfügung und lassen Sie diese in eine HTML-Tabelle strukturieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis von HTML-Tabellen und den zugehörigen Funktionen zu testen.</td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit der Bewertung zu beginnen, machen Sie lokale Kopien von [blank-template.html](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/blank-template.html), [minimal-table.css](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/minimal-table.css) und [planets-data.txt](https://github.com/mdn/learning-area/blob/main/html/tables/assessment-start/planets-data.txt) in einem neuen Verzeichnis auf Ihrem lokalen Computer.

> [!NOTE]
> Sie können Lösungen in Ihrem Code-Editor oder in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie arbeiten an einer Schule; derzeit studieren Ihre Schüler die Planeten unseres Sonnensystems, und Sie möchten ihnen eine leicht verständliche Datensammlung zur Verfügung stellen, um Fakten und Zahlen über die Planeten nachzuschlagen. Eine HTML-Datentabelle wäre ideal — Sie müssen die Ihnen zur Verfügung stehenden Rohdaten in eine Tabelle umwandeln, indem Sie die folgenden Schritte befolgen.

### Schritte zur Fertigstellung

Die folgenden Schritte beschreiben, was Sie tun müssen, um das Tabellenbeispiel zu vervollständigen. Alle benötigten Daten befinden sich in der `planets-data.txt` Datei. Wenn Sie Schwierigkeiten haben, sich die Daten vorzustellen, sehen Sie sich das Live-Beispiel unten an oder versuchen Sie, ein Diagramm zu zeichnen.

1. Öffnen Sie Ihre Kopie von `blank-template.html`, und beginnen Sie die Tabelle mit einem äußeren Container, einem Tabellendach und einem Tabellenkörper. Sie benötigen keinen Tabellenfuß für dieses Beispiel.
2. Fügen Sie Ihrer Tabelle die bereitgestellte Beschriftung hinzu.
3. Fügen Sie eine Zeile zum Tabellenkopf hinzu, die alle Spaltenüberschriften enthält.
4. Erstellen Sie alle Inhaltszeilen im Tabellenkörper, und denken Sie daran, dass alle Zeilenüberschriften semantisch als Überschriften gestaltet werden müssen.
5. Stellen Sie sicher, dass alle Inhalte in die richtigen Zellen platziert werden — in den Rohdaten wird jede Zeile von Planetendaten neben dem zugehörigen Planeten angezeigt.
6. Fügen Sie Attribute hinzu, um die Zeilen- und Spaltenüberschriften eindeutig mit den Reihen, Spalten oder Zeilengruppen zu verknüpfen, für die sie als Überschriften fungieren.
7. Fügen Sie einen schwarzen [Rahmen](/de/docs/Web/CSS/border) nur um die Spalte hinzu, die alle Zeilenüberschriften der Planetennamen enthält.

## Hinweise und Tipps

- Die erste Zelle der Kopfzeile muss leer sein und zwei Spalten umspannen.
- Die Gruppenzeilenüberschriften (z.B. _Jovianische Planeten_), die links von den Zeilenüberschriften der Planetennamen (z.B. _Saturn_) sitzen, sind etwas knifflig zu sortieren — Sie müssen sicherstellen, dass jede die richtige Anzahl von Zeilen und Spalten umfasst.
- Eine Möglichkeit, Überschriften mit ihren Reihen/Spalten zu verknüpfen, ist viel einfacher als die andere.

## Beispiel

Die fertige Tabelle sollte so aussehen:

![Komplexe Tabelle hat eine Beschriftung darüber. Die oberste Zeile der Zellen sind Spaltenüberschriften. Es gibt drei Spalten von Überschriften. Die ersten beiden Spalten haben zusammengeführte Zellen, während die dritte Spalte individuelle Überschriften für jede Zeile hat. Alle Texte sind zentriert. Die Überschriften und jede zweite Zeile haben eine leichte Hintergrundfarbe.](assessment-table.png)

Sie können das Beispiel auch [hier live sehen](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) (nicht in den Quellcode schauen — nicht schummeln!)

{{PreviousMenu("Learn/HTML/Tables/Advanced", "Learn/HTML/Tables")}}
