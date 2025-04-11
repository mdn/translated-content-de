---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir uns angesehen, wie Sie die Boxen stylen und manipulieren können, in denen Ihr Inhalt sitzt. Jetzt ist es an der Zeit, sich anzusehen, wie Sie Ihre Boxen korrekt in Bezug zueinander und zum Browser-Viewport anordnen. Dieses Modul befasst sich mit Floats, Positionierung, anderen modernen Layout-Tools und dem Erstellen responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Einführung in das CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion wiederholt einige der CSS-Layout-Funktionen, die wir bereits in vorherigen Modulen behandelt haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es wird auch das Konzept des normalen Flusses eingehend behandelt.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich gedacht, um Bilder innerhalb von Textblöcken zu platzieren, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge zum Erstellen von Mehrspaltenlayouts auf Webseiten. Mit der Einführung von Flexbox und Grid hat es nun seine ursprüngliche Bestimmung wiedererlangt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentenfluss zu nehmen und sie unterschiedlich verhalten zu lassen, zum Beispiel übereinanderliegen oder immer an derselben Stelle im Browser-Viewport bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie man sie verwendet.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layoutmethode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente passen sich an, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Damit können Sie Inhalte in Zeilen und Spalten organisieren und es bietet viele Features, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen vielfältigerer Bildschirmgrößen auf internetfähigen Geräten hat sich das Konzept des responsiven Webdesigns (RWD) entwickelt: eine Reihe von Praktiken, die es ermöglichen, dass sich Webseitenlayout und -erscheinungsbild an verschiedene Bildschirmbreiten, Auflösungen usw. anpassen. Es ist eine Idee, die die Art und Weise, wie wir für das multidimensionale Web gestalten, verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS-Media-Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen angegebenen Regeln entspricht. Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax und dann in einem interaktiven Beispiel, wie ein einfaches Design responsiv gestaltet werden könnte.
- [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Eine Herausforderung, um Ihr Wissen über verschiedene Layout-Methoden zu testen, indem Sie eine Webseite layouten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernwegs, aber dennoch interessant – Sie sollten diese als Erweiterungsziele betrachten, um sie optional zu studieren, wenn Sie die Hauptartikel abgeschlossen haben.

- [Mehrspaltenlayout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspaltenlayout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie es in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie dieses Feature nutzen können.
- [Veraltete Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Merkmal in CSS-Layouts, und bevor CSS-Grid-Layout eingeführt wurde, wurden sie tendenziell mit Floats oder anderen Layoutfunktionen implementiert. Sie stellen sich Ihr Layout als eine festgelegte Anzahl von Spalten vor (z.B. 4, 6 oder 12) und passen dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir erkunden, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Webseite könnten Benutzer einschließen, die entweder ältere Browser verwenden oder Browser, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo kontinuierlich neue Features zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Features, weil verschiedene Browser dazu neigen, unterschiedliche Features zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Webseite auch für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie Sie einige realistische Beispiele erstellen können, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung machen können.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für häufige Layout-Muster zusammenzubringen, die Sie möglicherweise auf Ihren Seiten implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
