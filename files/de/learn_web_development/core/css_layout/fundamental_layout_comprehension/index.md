---
title: "Herausforderung: Grundlegendes Verständnis von Layouts"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen gelernt, die Sie benötigen, um heutzutage CSS-Layout zu erstellen und auch mit älterem CSS zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse testen, indem Sie ein einfaches Webseiten-Layout mit einer Vielzahl von Techniken entwickeln.

## Ausgangspunkt

Sie können das HTML, CSS und eine Reihe von sechs Bildern [hier](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und geben Sie die Bilder in einem Ordner mit dem Namen `images` an. Wenn Sie die Datei `index.html` in einem Browser öffnen, sollte eine Seite mit grundlegender Formatierung, aber ohne Layout angezeigt werden, die ungefähr so aussieht wie das nachfolgende Bild.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, oberhalb einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Titel und Inhalt des Blogbeitrags. Zwischen dem Blogtitel und dem Bloginhalt befindet sich ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen ändern, um auf die neuen Bildstandorte zu verweisen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Ihnen wurden einige rohe HTML-Daten, grundlegendes CSS und Bilder zur Verfügung gestellt – nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout umsetzen. Die Aufgaben, die Sie erreichen müssen, sind:

1. Anzeigen der Navigationselemente in einer Reihe, mit gleicher Menge an Platz zwischen den Elementen.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann oben am Anzeigefenster festkleben, wenn sie es erreicht.
3. Das Bild, das sich im Artikel befindet, sollte von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten eine flexible Größe haben, sodass sie bei Verkleinerung des Browserfensters schmaler werden.
5. Die Fotos sollten als zweispaltiges Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt einige Möglichkeiten, wie Sie einige dieser Aufgaben erreichen könnten, und oft gibt es keinen einzigen richtigen oder falschen Weg, die Dinge zu tun. Probieren Sie ein paar verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Layout des Designs aussehen sollte:

![Fertiges Website-Layout der Aufgabe. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, oberhalb einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unterhalb der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blogbeitrag: Einen Blogtitel gefolgt vom Bloginhalt. Der Bloginhalt umfließt ein linksbündiges Foto. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
