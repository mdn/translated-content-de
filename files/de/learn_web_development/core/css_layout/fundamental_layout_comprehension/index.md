---
title: "Herausforderung: Grundlegendes Layout-Verständnis"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen erlernt, die Sie heute benötigen, um CSS-Layouts zu erstellen und auch mit älterem CSS zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse testen, indem Sie ein einfaches Webseitenlayout mit verschiedenen Techniken entwickeln.

## Ausgangspunkt

Sie können das HTML, CSS und eine Reihe von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner namens `images` ein. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollte Ihnen eine Seite mit grundlegender Formatierung, aber ohne Layout angezeigt werden. Diese sollte in etwa so aussehen wie das Bild unten.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blog-Beitragstitel und Inhalt. Zwischen dem Blog-Titel und dem Blog-Inhalt befindet sich ein Bild, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ können Sie auch einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Wenn Sie einen Online-Editor benutzen, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen ersetzen, um auf die neuen Bildstandorte zu verweisen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbrief

Ihnen wurden einige rohe HTML-, grundlegende CSS- und Bilder bereitgestellt — nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout umsetzen. Die Aufgaben, die Sie erreichen müssen, sind:

1. Die Navigationspunkte in einer Reihe anzeigen, mit einem gleichen Abstand zwischen den Elementen.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann am oberen Rand des Viewports haften bleiben, wenn sie ihn erreicht.
3. Das Bild, das sich im Artikel befindet, sollte von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten eine flexible Größe haben, sodass sie schmaler werden, wenn das Browserfenster kleiner wird.
5. Die Fotos sollten als zweispaltiges Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt einige Möglichkeiten, wie Sie einige dieser Aufgaben erreichen können, und es gibt oft keinen eindeutig richtigen oder falschen Weg, Dinge zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich beim Experimentieren Notizen.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout-Aufgaben-Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blog-Beitrag: Ein Blog-Beitragstitel gefolgt vom Beitragstext. Der Blog-Inhalt umfließt ein linksbündiges Foto. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
