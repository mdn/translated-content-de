---
title: "Herausforderung: Grundlegendes Verständnis von Layouts"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Wenn Sie dieses Modul durchgearbeitet haben, dann haben Sie bereits die Grundlagen gelernt, die Sie benötigen, um heute mit CSS-Layouts zu arbeiten, und um auch mit älterem CSS zurechtzukommen. Diese Aufgabe wird einige Ihrer Kenntnisse testen, indem Sie ein einfaches Webseiten-Layout unter Verwendung einer Vielzahl von Techniken entwickeln.

## Ausgangspunkt

Sie können das HTML, CSS und eine Reihe von sechs Bildern [in unserem Learning-Area-Repo](https://github.com/mdn/learning-area/tree/main/css/css-layout/fundamental-layout-comprehension) herunterladen.

Speichern Sie das HTML-Dokument und das Stylesheet in einem Verzeichnis auf Ihrem Computer und legen Sie die Bilder in einem Ordner namens `images` ab. Wenn Sie die `index.html`-Datei in einem Browser öffnen, sollte eine Seite mit grundlegender Gestaltung, aber ohne Layout zu sehen sein, die in etwa so aussieht wie das Bild unten.

![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und -Inhalt. Zwischen dem Blog-Titel und dem Blog-Inhalt befindet sich ein linksbündiges Foto.](layout-task-start.png)

Dieser Ausgangspunkt enthält den gesamten Inhalt Ihres Layouts, wie er vom Browser im Normalfluss dargestellt wird.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Wenn Sie einen Online-Editor verwenden, müssen Sie die Bilder hochladen und die Werte in den `src`-Attributen ändern, um auf die neuen Bildstandorte zu verweisen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Projektbeschreibung

Sie haben einige Roh-HTML, grundlegendes CSS und Bilder erhalten — jetzt müssen Sie ein Layout für das Design erstellen.

### Ihre Aufgaben

Sie müssen jetzt Ihr Layout umsetzen. Die Aufgaben, die Sie erledigen müssen, sind:

1. Die Navigationspunkte sollen in einer Reihe angezeigt werden, mit einem gleichmäßigen Abstand zwischen den Punkten.
2. Die Navigationsleiste soll mit dem Inhalt scrollen und dann am oberen Rand des Viewports anhaften, sobald sie ihn erreicht.
3. Das Bild innerhalb des Artikels soll von Text umflossen werden.
4. Die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente sollen als zweispaltiges Layout angezeigt werden. Die Spalten sollten eine flexible Größe haben, sodass sie bei Verkleinerung des Browserfensters schmaler werden.
5. Die Fotografien sollen als zweispaltiges Raster mit einem Abstand von 1 Pixel zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

Sie müssen das HTML nicht bearbeiten, um dieses Layout zu erreichen, und die Techniken, die Sie verwenden sollten, sind:

- Flexbox
- Grid
- Floating
- Positionierung

Es gibt einige Möglichkeiten, wie Sie einige dieser Aufgaben erreichen können, und es gibt oft nicht nur einen richtigen oder falschen Weg, dies zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, welcher am besten funktioniert. Machen Sie Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Layout für das Design aussehen sollte:

![Fertige Layout-Webseite. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste gibt es zwei Abschnitte. Auf der linken Seite gibt es einen Blog-Beitrag: Ein Blog-Beitrag-Titel gefolgt vom Beitragstext. Der Blog-Inhalt umfließt ein linksbündiges Foto. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Media_queries", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
