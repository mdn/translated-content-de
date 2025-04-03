---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir uns damit beschäftigt, wie Sie die Boxen gestalten und manipulieren können, in denen Ihr Inhalt sitzt. Jetzt ist es an der Zeit, zu betrachten, wie Sie Ihre Boxen korrekt zueinander und zum Browser-Viewport layouten. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, Ihre eigenen Dateien zu erstellen, können Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in früheren Modulen angesprochen haben, wie zum Beispiel verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Sie behandelt auch das Konzept des normalen Flusses ausführlich.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich für das Schweben von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung mehrspaltiger Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid ist sie nun zu ihrem ursprünglichen Zweck zurückgekehrt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung erlaubt es Ihnen, Elemente aus dem normalen Dokumentenfluss zu nehmen und sie anders verhalten zu lassen, zum Beispiel übereinander zu liegen oder immer an derselben Stelle im Browser-Viewport zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layoutmethode zum Layouten von Elementen in Zeilen oder Spalten. Elemente passen sich an, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grids-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grids-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel wird alles erklären, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen unterschiedlicher Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: eine Reihe von Praktiken, die es Webseiten ermöglichen, ihr Layout und Erscheinungsbild an unterschiedliche Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die unsere Art des Designs für ein Multi-Device-Web verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie kennen müssen, um es zu meistern.
- [Medienabfragen-Grundlagen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Regeln, die Sie angeben, auf die Browser- und Geräteumgebung zutreffen. Medienabfragen sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie Ihnen die Möglichkeit geben, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. In dieser Lektion lernen Sie die in Medienabfragen verwendete Syntax kennen und verwenden diese dann in einem interaktiven Beispiel, um zu zeigen, wie ein einfaches Design responsiv gestaltet werden kann.
- [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Eine Herausforderung, um Ihr Wissen über verschiedene Layoutmethoden zu testen, indem eine Webseite gelayoutet wird.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten diese als weiterführende Ziele in Betracht ziehen, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Methode, Inhalt in Spalten anzuordnen, wie Sie sie vielleicht in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.
- [Alte Layoutmethoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufig genutztes Merkmal bei CSS-Layouts, und vor dem CSS-Grid-Layout wurden sie in der Regel mit Floats oder anderen Layoutfunktionen implementiert. Sie stellen sich Ihr Layout als festgelegte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passen Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, um zu verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser verwenden, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Die Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, die Implementierung unterschiedlicher Features zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken einsetzen können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige reale Beispiele erstellt, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung tun können.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, Dinge, die Sie möglicherweise auf Ihren Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Auswahl, die Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
