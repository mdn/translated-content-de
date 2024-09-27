---
title: Fundamentales Layout-Verständnis
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}
{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, sollten Sie bereits die Grundlagen kennen, die Sie benötigen, um heute CSS-Layouts zu erstellen und auch mit älteren CSS-Versionen zu arbeiten. Diese Aufgabe wird Ihr Wissen testen, indem Sie ein einfaches Webseiten-Layout mit verschiedenen Techniken entwickeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von CSS-Layout-Methoden mit Flexbox, Grid, Floating und Positioning zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Sie können das HTML, CSS und einen Satz von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner namens `images` ein. Wenn Sie die `index.html`-Datei in einem Browser öffnen, sollten Sie eine Seite mit einfacher Stilgebung, aber ohne Layout sehen, die in etwa so aussieht wie das Bild unten.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Webseiten-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und Inhalt. Zwischen dem Blogtitel und dem Bloginhalt befindet sich ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im Normalfluss angezeigt wird.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen durch die neuen Bildstandorte ersetzen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihnen wurden einige Roh-HTML, grundlegende CSS und Bilder zur Verfügung gestellt — jetzt müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout umsetzen. Die Aufgaben, die Sie erreichen müssen, sind:

1. Die Navigationspunkte in einer Reihe anzuzeigen, mit einem gleichmäßigen Abstand zwischen den Punkten.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann oben im Ansichtsfenster haften bleiben, wenn sie es erreicht.
3. Das Bild, das sich im Artikel befindet, sollte Text um sich herum haben.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten eine flexible Größe haben, sodass, wenn das Browserfenster kleiner wird, die Spalten schmaler werden.
5. Die Fotos sollten als zweispaltiges Raster mit einem 1-Pixel-Abstand zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positioning

Es gibt einige Wege, um einige dieser Aufgaben zu erreichen, und es gibt oft nicht den einen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie ein paar verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Layout für das Design aussehen sollte:

![Fertige Layout-Aufgabe für die Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Webseiten-Titel, über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste gibt es zwei Abschnitte. Auf der linken Seite befindet sich ein Blogpost: Ein Blogpost-Titel, gefolgt vom Inhalt des Posts. Der Bloginhalt umgibt ein linksbündiges Foto. Auf der rechten Seite befindet sich ein 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}
