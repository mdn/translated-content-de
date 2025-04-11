---
title: "Herausforderung: Grundlegendes Layout-Verständnis"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen abgedeckt, die Sie benötigen, um heutzutage CSS-Layouts zu erstellen und auch mit älteren CSS-Versionen zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse testen, indem Sie ein einfaches Webseiten-Layout mit verschiedenen Techniken entwickeln.

## Ausgangspunkt

Sie können das HTML, CSS und eine Sammlung von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Rechner und legen Sie die Bilder in einem Ordner namens `images` ab. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollten Sie eine Seite mit grundlegender Formatierung, aber ohne Layout sehen, die etwa wie das folgende Bild aussieht.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Webseitentitel über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und Beitragstext. Zwischen dem Blogtitel und dem Bloginhalt gibt es ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Wenn Sie einen Online-Editor nutzen, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen anpassen, um auf die neuen Bildstandorte zu verweisen.

> [!NOTE]
> Wenn Sie feststecken, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihnen wurden einige Roh-HTML-Daten, grundlegendes CSS und Bilder zur Verfügung gestellt – nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout implementieren. Die Aufgaben, die Sie durchführen müssen, sind:

1. Die Navigationspunkte in einer Reihe anzeigen, mit jeweils gleichem Abstand zwischen den Elementen.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und oben im Ansichtsfenster fixiert werden, wenn sie dieses erreicht.
3. Das Bild, das sich im Artikel befindet, sollte von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten flexibel sein, sodass sie schmaler werden, wenn das Browserfenster kleiner wird.
5. Die Fotografien sollten als zweispaltiges Raster mit einem 1-Pixel-Abstand zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Es ist nicht erforderlich, das HTML zu bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt verschiedene Möglichkeiten, einige dieser Aufgaben zu lösen, und es gibt oft keinen einzigen richtigen oder falschen Weg. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich beim Experimentieren Notizen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout der Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Webseitentitel über einer schwarz Nav-Bar mit 5 gleichmäßig verteilten Links. Unter der Nav-Bar befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blogpost: Ein Blogpost-Titel gefolgt vom Beitragstext. Der Beitragstext umfließt ein Foto, das linksbündig ist. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
