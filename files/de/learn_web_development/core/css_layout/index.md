---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir uns damit beschäftigt, wie Sie die Boxen, in denen sich Ihr Inhalt befindet, gestalten und manipulieren können. Jetzt ist es an der Zeit zu lernen, wie Sie Ihre Boxen korrekt hinsichtlich zueinander und zum Browser-Viewport anordnen. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Einführung in das CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir in vorherigen Modulen behandelt haben, wie verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Sie behandelt auch das Konzept des normalen Flusses ausführlich.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich für das Schweben von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge zur Erstellung von Layouts mit mehreren Spalten auf Webseiten. Mit der Einführung von Flexbox und Grid hat sie nun zu ihrem ursprünglichen Zweck zurückgefunden, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Mit der Positionierung können Sie Elemente aus dem normalen Dokumentenfluss herausnehmen und anders verhalten lassen, zum Beispiel übereinander liegen oder immer an der gleichen Stelle im Browser-Viewport bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Use_cases) ist eine eindimensionale Layout-Methode für die Anordnung von Elementen in Reihen oder Spalten. Elemente passen sich an, um zusätzlichen Raum zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit dem Grid-Layout zu beginnen.
- [Grundverständnis von Layouts](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung wird Ihr Wissen über die Layout-Funktionen testen, die wir bisher in diesem Modul behandelt haben, nämlich Flexbox, Floats, Grid und Positionierung. Am Ende haben Sie ein Webseiten-Layout mit einer Vielzahl von Techniken entwickelt.
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen vielfältiger Bildschirmgrößen auf webfähigen Geräten entstand das Konzept des responsiven Webdesigns (RWD): eine Reihe von Praktiken, die es Webseiten ermöglichen, ihr Layout und Erscheinungsbild an unterschiedliche Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise verändert hat, wie wir für ein Multi-Device-Web gestalten, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen von Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen festgelegten Regeln entspricht. Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax kennen und verwenden sie dann in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gemacht werden kann.

## Testen Sie Ihr Wissen

Zwischen den Tutorial-Artikeln finden Sie „Testen Sie Ihr Wissen“-Artikel, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle diese Artikel zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihr Wissen: CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills) aufgelistet.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Core-Themas fertig sind.

- [Layout mit mehreren Spalten](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten zu layouten, wie Sie sie möglicherweise in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige praktische Beispiele erstellt, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung tun können.
- [Legacy-Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Merkmal in CSS-Layouts, und bevor CSS-Grid-Layout tendierten sie dazu, mit Floats oder anderen Layout-Funktionen implementiert zu werden. Sie stellen sich Ihr Layout als eine festgelegte Anzahl von Spalten (z.B. 4, 6 oder 12) vor und passen dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir erkunden, wie diese älteren Methoden funktionieren, um zu verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser nutzen, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Die Browser unterscheiden sich in ihrer Unterstützung dieser Funktionen, da verschiedene Browser dazu neigen, die Implementierung unterschiedlicher Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzubringen, die Sie möglicherweise in Ihren Seiten implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.
- [Lernen Sie Flexbox](https://scrimba.com/learn-flexbox-c0k?via=mdn) und [Lernen Sie CSS Grid](https://scrimba.com/learn-css-grid-c02k?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese Kurse von Scrimba bieten interaktive Lektionen, die Ihnen alles beibringen, was Sie über Flexbox und Grid wissen müssen.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
