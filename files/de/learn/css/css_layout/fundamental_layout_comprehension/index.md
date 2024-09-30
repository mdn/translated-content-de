---
title: Grundlegendes Verständnis von Layouts
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen gelernt, die Sie heute benötigen, um CSS-Layouts zu erstellen, und um mit älterem CSS zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse durch die Entwicklung eines einfachen Webseiten-Layouts unter Verwendung verschiedener Techniken testen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung in Angriff nehmen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von CSS-Layout-Methoden mit Flexbox, Grid, Floating und Positionierung zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Sie können das HTML, CSS und ein Set von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner namens `images` ein. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollten Sie eine Seite mit grundlegender Gestaltung, aber ohne Layout sehen, die ungefähr wie das Bild unten aussehen sollte.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und Inhalt des Postings. Zwischen dem Blogtitel und dem Bloginhalt gibt es ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen so ändern, dass sie auf die neuen Bildstandorte verweisen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben einige Roh-HTML, grundlegendes CSS und Bilder erhalten — nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen jetzt Ihr Layout umsetzen. Die Aufgaben, die Sie erledigen müssen, sind:

1. Die Navigationspunkte in einer Zeile anzeigen, mit einem gleichen Abstand zwischen den Punkten.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann oben im Viewport haften bleiben, wenn sie diesen erreicht.
3. Das Bild, das sich im Artikel befindet, sollte von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten flexibel sein, sodass sie bei Verkleinerung des Browserfensters schmaler werden.
5. Die Fotos sollten als zweispaltiges Gitter mit einem 1-Pixel-Abstand zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt mehrere Möglichkeiten, wie Sie einige dieser Aufgaben erreichen können, und es gibt oft keinen eindeutigen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Layout für das Design aussehen sollte:

![Abgeschlossenes Layout der Aufgaben-Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blogpost: Ein Blogpost-Titel gefolgt vom Inhalt des Posts. Der Bloginhalt umfließt ein linksbündiges Foto. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die als zweispaltiges Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
