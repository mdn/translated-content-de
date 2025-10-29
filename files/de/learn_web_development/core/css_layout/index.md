---
title: CSS Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir untersucht, wie Sie die Boxen, in denen sich Ihr Inhalt befindet, stylen und manipulieren können. Nun ist es an der Zeit, sich damit zu beschäftigen, wie Sie Ihre Boxen korrekt in Bezug zueinander und zum Browser-Viewport anordnen. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und das Erstellen von responsiven Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, versuchen Sie, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir in vorherigen Modulen bereits angesprochen haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, auf die wir in diesem Modul eingehen werden. Es behandelt auch ausführlich das Konzept des normalen Flusses.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich zum Einfügen von Bildern in Textblöcke gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge zur Erstellung von Mehrspalten-Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid hat sie nun zu ihrem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentenfluss zu nehmen und sie anders zu verhalten, zum Beispiel übereinander zu liegen oder immer an derselben Stelle im Browser-Viewport zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Nutzung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layoutmethode zur Anordnung von Elementen in Zeilen oder Spalten. Elemente passen sich an, um zusätzlichen Raum zu füllen oder schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel wird alles erklären, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung wird Ihr Wissen über die Layout-Funktionen testen, die wir bisher in diesem Modul behandelt haben, nämlich Flexbox, Floats, Grid und Positionierung. Am Ende haben Sie ein Webseiten-Layout mit einer Vielzahl von Techniken entwickelt.
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Auftreten vielfältigerer Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: ein Satz von Praktiken, der es Webseiten ermöglicht, ihr Layout und Erscheinungsbild an verschiedene Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise, wie wir für das Web mit mehreren Geräten entwerfen, verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie kennen müssen, um es zu meistern.
- [Grundlagen von Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen angegebenen Regeln entspricht. Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax kennen und verwenden sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gemacht werden kann.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle gleichzeitig erkunden möchten, finden Sie sie aufgelistet unter [Testen Sie Ihre Fähigkeiten: CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials gehören nicht zum Lernpfad, sind aber dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie die wichtigsten Core-Artikel abgeschlossen haben.

- [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie es in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige realistische Beispiele erstellt, um zu veranschaulichen, welche Dinge Sie mit Positionierung tun können.
- [Veraltete Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Merkmal in CSS-Layouts, und vor dem CSS-Grid-Layout wurden sie häufig mit Floats oder anderen Layout-Funktionen implementiert. Man stellt sich das Layout als eine bestimmte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passt dann die Inhalte in diese imaginären Spalten. In diesem Artikel erforschen wir, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website könnten Benutzer sein, die entweder ältere Browser verwenden oder Browser verwenden, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, da unterschiedliche Browser tendenziell die Implementierung unterschiedlicher Funktionen priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website auch für Nutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [CSS Layout Cookbook](/de/docs/Web/CSS/How_to/Layout_cookbook)
  - : Das CSS Layout Cookbook zielt darauf ab, Rezepte für häufige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Seiten implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte nutzen können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.
- [Flexbox lernen](https://scrimba.com/learn-flexbox-c0k?via=mdn) und [CSS-Grid lernen](https://scrimba.com/learn-css-grid-c02k?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese Kurse von Scrimba bieten interaktive Lektionen, die Ihnen alles beibringen, was Sie über Flexbox und Grid wissen müssen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
