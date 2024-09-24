---
title: Grundlegendes Layout-Verständnis
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen erlernt, die Sie benötigen, um CSS-Layouts heute zu erstellen und auch mit älterem CSS zu arbeiten. Diese Aufgabe wird einen Teil Ihres Wissens testen, indem Sie ein einfaches Webseiten-Layout mit einer Vielzahl von Techniken entwickeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie mit dieser Bewertung beginnen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Überprüfung des Verständnisses von CSS-Layoutmethoden unter Verwendung von Flexbox, Grid, Floating und Positioning.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Sie können das HTML, CSS und eine Reihe von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner mit dem Namen `images` ein. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollte eine Seite mit grundlegender Stilgestaltung, aber ohne Layout angezeigt werden, die ungefähr so aussieht wie das Bild unten.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel oberhalb einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und Post-Inhalt. Zwischen dem Blogtitel und dem Bloginhalt befindet sich ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen so ändern, dass sie auf die neuen Bildspeicherorte verweisen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige Roh-HTML-, grundlegende CSS- und Bilder bereitgestellt — nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout umsetzen. Die Aufgaben, die Sie erreichen müssen, sind:

1. Die Navigationspunkte in einer Reihe anzeigen, mit gleichmäßigem Abstand zwischen den Elementen.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann am oberen Rand des Ansichtsfensters haften bleiben, wenn sie diesen erreicht.
3. Das Bild, das sich innerhalb des Artikels befindet, sollte von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten flexibel sein, sodass, wenn das Browserfenster kleiner wird, die Spalten schmaler werden.
5. Die Fotos sollten als zweispaltiges Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt mehrere Möglichkeiten, wie Sie einige dieser Aufgaben erreichen können, und es gibt oft keinen einzigen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Layout für das Design aussehen sollte:

![Fertige Layout-Aufgabe Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel oberhalb einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blogpost: Ein Blogpost-Titel gefolgt vom Post-Inhalt. Der Bloginhalt umfließt ein Foto, das linksbündig ist. Auf der rechten Seite gibt es einen 'Fotografie'-Titel mit einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
