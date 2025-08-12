---
title: "Herausforderung: Grundlegendes Layoutverständnis"
short-title: "Herausforderung: Grundlagen des Layouts"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen erlernt, die Sie benötigen, um heutiges CSS-Layout zu erstellen und auch mit älterem CSS zu arbeiten. Diese Aufgabe wird einige Ihrer Kenntnisse testen, indem Sie ein einfaches Webseiten-Layout mit einer Vielzahl von Techniken entwickeln.

## Ausgangspunkt

Sie können das HTML, CSS und ein Set von sechs Bildern [in unserem Learning-Area-Repo](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und fügen Sie die Bilder in einen Ordner namens `images` ein. Wenn Sie die `index.html`-Datei in einem Browser öffnen, sollte eine Seite mit grundlegender Gestaltung, aber ohne Layout angezeigt werden, die in etwa dem unten stehenden Bild ähnelt.

![Startpunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt von dem Blogbeitragstitel und -inhalt. Zwischen dem Blog-Titel und dem Blog-Inhalt befindet sich ein Foto, das linksbündig ist.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im normalen Fluss angezeigt wird.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen so ändern, dass sie auf die neuen Bildstandorte verweisen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektauftrag

Ihnen wurden einige Roh-HTML, grundlegendes CSS und Bilder zur Verfügung gestellt – nun müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen nun Ihr Layout implementieren. Die Aufgaben, die Sie erreichen müssen, sind:

1. Anzeige der Navigationspunkte in einer Reihe mit einem gleichen Abstand zwischen den Punkten.
2. Die Navigationsleiste sollte mit dem Inhalt scrollen und dann am oberen Rand des Viewports fixiert werden, wenn sie ihn erreicht.
3. Das Bild, das sich im Artikel befindet, sollte von Text umflossen sein.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollten als zweispaltiges Layout angezeigt werden. Die Spalten sollten eine flexible Größe haben, sodass sie schmaler werden, wenn das Browserfenster kleiner wird.
5. Die Fotografien sollten als zweispaltiges Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erzielen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt einige Möglichkeiten, wie Sie einige dieser Aufgaben erreichen könnten, und es gibt oft keinen einzigen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout der Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste, die 5 gleich beabstandete Links enthält. Unterhalb der Navigationsleiste gibt es zwei Abschnitte. Links befindet sich ein Blogbeitrag: Ein Blogpost-Titel gefolgt vom Inhalt des Beitrags. Der Blog-Inhalt umfließt ein linksbündiges Foto. Auf der rechten Seite befindet sich ein "Fotografie"-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
