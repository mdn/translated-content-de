---
title: "Herausforderung: Grundlegendes Layoutverständnis"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, haben Sie bereits die Grundlagen gelernt, die Sie benötigen, um heute CSS-Layouts zu erstellen und auch mit älteren CSS-Versionen zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse durch die Entwicklung eines einfachen Webseitenlayouts mit verschiedenen Techniken testen.

## Ausgangspunkt

Sie können das HTML, CSS und eine Serie von sechs Bildern [in unserem Learning-Area-Repo](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner namens `images` ein. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollten Sie eine Seite mit grundlegender Formatierung, aber ohne Layout sehen, die etwa wie das unten stehende Bild aussieht.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Webseitentitel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und -inhalt. Zwischen Titel und Inhalt des Blogs befindet sich ein Bild, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser in normalem Fluss angezeigt wird.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen so ersetzen, dass sie auf die neuen Bildstandorte verweisen.

> [!NOTE]
> Falls Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben einige rohe HTML-, grundlegende CSS-Dateien und Bilder zur Verfügung gestellt bekommen - jetzt müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen jetzt Ihr Layout umsetzen. Die Aufgaben, die Sie erreichen müssen, sind:

1. Die Navigationselemente in einer Reihe anzeigen, mit einem gleichen Abstand zwischen den Elementen.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann oben am Viewport haften bleiben, wenn sie diesen erreicht.
3. Das Bild im Artikel sollte von Text umflossen sein.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten flexibel groß sein, sodass wenn das Browserfenster kleiner wird, die Spalten schmaler werden.
5. Die Fotos sollten in einem zweispaltigen Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt verschiedene Möglichkeiten, einige dieser Aufgaben zu erreichen, und oft gibt es nicht den einen richtigen oder falschen Weg, um Dinge zu tun. Probieren Sie ein paar verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel davon, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout der Aufgabe. Die Elemente sind ordentlich angeordnet. Es gibt einen Webseitentitel über einer schwarzen Navigationsleiste mit 5 gleichmäßig beabstandeten Links. Unter der Navigationsleiste gibt es zwei Abschnitte. Auf der linken Seite gibt es einen Blogpost: Einen Blogpost-Titel gefolgt vom Post-Inhalt. Der Blog-Inhalt umfließt ein Bild, das linksbündig ist. Auf der rechten Seite gibt es einen "Fotografie"-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angezeigt werden.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
