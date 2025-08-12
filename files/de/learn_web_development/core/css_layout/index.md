---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorhergehenden Modulen haben wir uns damit beschäftigt, wie Sie die Rahmen, in denen sich Ihr Inhalt befindet, gestalten und manipulieren können. Jetzt ist es an der Zeit, sich anzuschauen, wie Sie Ihre Rahmen korrekt in Relation zueinander und zum Browserfenster anordnen. Dieses Modul behandelt Floats, Positionierungen, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und dem [CSS-Text-Styling](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion wiederholt einige der CSS-Layout-Funktionen, die wir in vorherigen Modulen bereits angesprochen haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es deckt auch das Konzept des Normalflusses ausführlich ab.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich zum Einfügen von Bildern innerhalb von Textblöcken, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Grid hat es nun zu seinem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentfluss zu entfernen und sie anders verhalten zu lassen, zum Beispiel übereinander liegend oder immer an derselben Stelle im Browserfenster verbleibend. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie man sie verwendet.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layout-Methode, um Elemente in Zeilen oder Spalten anzuordnen. Elemente passen sich an, um zusätzlichen Raum zu füllen und schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Erscheinen unterschiedlicher Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: eine Reihe von Praktiken, die es ermöglichen, dass Webseiten ihr Layout und Aussehen an verschiedene Bildschirmbreiten, Auflösungen etc. anpassen. Es ist eine Idee, die die Art und Weise verändert hat, wie wir für ein multidimensionales Web entwerfen, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS-Media-Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den Regeln entspricht, die Sie festlegen. Media Queries sind ein entscheidender Teil des responsiven Webdesigns, da sie es ermöglichen, unterschiedliche Layouts abhängig von der Größe des Viewports zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax kennen und verwenden sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gestaltet werden kann.
- [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Eine Herausforderung, um Ihr Wissen über verschiedene Layout-Methoden zu testen, indem Sie ein Webseitenlayout erstellen.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen beibehalten haben, bevor Sie weitermachen. Wenn Sie all diese zusammen erkunden möchten, finden Sie sie aufgelistet unter [Testen Sie Ihre Fähigkeiten: CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln der Kerntechniken fertig sind.

- [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten zu platzieren, wie Sie es vielleicht aus einer Zeitung kennen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen können.
- [Praktische Beispiele für Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie einige realweltliche Beispiele erstellt werden, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung tun können.
- [Alte Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufig verwendetes Feature in CSS-Layouts und wurden vor dem CSS-Grid-Layout oft mit Floats oder anderen Layout-Features implementiert. Sie stellen sich Ihr Layout als eine bestimmte Anzahl von Spalten (z. B. 4, 6 oder 12) vor und passen Ihre Inhalts-Säulen in diese imaginären Spalten ein. In diesem Artikel untersuchen wir, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Nutzer umfassen, die entweder ältere Browser verwenden oder Browser, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiger Fall im Web, in dem kontinuierlich neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken verwenden können, um sicherzustellen, dass Ihre Website auch für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites umsetzen müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
