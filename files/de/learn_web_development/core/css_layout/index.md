---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir untersucht, wie Sie die Boxen gestalten und manipulieren können, in denen sich Ihr Inhalt befindet. Jetzt ist es an der Zeit zu sehen, wie Sie Ihre Boxen korrekt zueinander und zum Browser-Ansichtsfenster anordnen. Dieses Modul behandelt Floats, Positionierung, andere moderne Layout-Werkzeuge sowie den Aufbau reaktionsfähiger Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie dieses Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion fasst einige der CSS-Layout-Funktionen zusammen, die wir in früheren Modulen bereits angesprochen haben, wie z.B. verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir im Verlauf dieses Moduls behandeln werden. Es behandelt auch das Konzept des normalen Flusses im Detail.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich gedacht zum Einbinden von Bildern in Textblöcke, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung von Mehrspaltenlayouts auf Webseiten. Mit der Einführung von flexbox und grid kehrt sie nun zu ihrem ursprünglichen Zweck zurück, wie in diesem Artikel erklärt wird.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentenfluss herauszunehmen und sie anders zu verhalten, z.B. übereinander zu stapeln oder immer an derselben Stelle im Browserfenster zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Reihen oder Spalten. Elemente dehnen sich aus, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : CSS-Grid-Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten zu organisieren und bietet viele Funktionen zur Vereinfachung der Erstellung komplexer Layouts. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit Grid-Layout zu starten.
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen unterschiedlichster Bildschirmgrößen auf webfähigen Geräten erschien das Konzept des Responsive Web Design (RWD): eine Reihe von Praktiken, die es Webseiten ermöglicht, ihr Layout und Erscheinungsbild an verschiedene Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise verändert hat, wie wir für ein Multi-Device-Web designen, und in diesem Artikel helfen wir Ihnen, die Haupttechniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen angegebenen Regeln entspricht. Media Queries sind ein wichtiger Bestandteil des Responsive Web Design, da sie es ermöglichen, verschiedene Layouts abhängig von der Größe des Ansichtsfensters zu erstellen. In dieser Lektion lernen Sie die in Media Queries verwendete Syntax kennen und verwenden sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design reaktionsfähig gemacht werden kann.
- [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Herausforderung</sup>
  - : Eine Herausforderung, um Ihr Wissen über verschiedene Layout-Methoden durch das Layout einer Webseite zu testen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant – Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie die Hauptartikel des Kerns abgeschlossen haben.

- [Mehrspalten-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie vielleicht in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen können.
- [Veraltete Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Feature, das in CSS-Layouts verwendet wird, und vor dem CSS-Grid-Layout wurden sie dazu tendiert, mit Floats oder anderen Layout-Funktionen implementiert zu werden. Sie stellen sich Ihr Layout als eine festgelegte Anzahl von Spalten vor (z. B. 4, 6 oder 12) und passen dann Ihre Inhaltsspalten in diese imaginären Spalten. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser, die die von Ihnen implementierten CSS-Features nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo kontinuierlich neue Features zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Features, da verschiedene Browser tendenziell unterschiedliche Features priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken verwenden können, um sicherzustellen, dass Ihre Website für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie einige praxisnahe Beispiele erstellt werden können, um zu veranschaulichen, welche Dinge mit der Positionierung möglich sind.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für häufige Layout-Muster zu sammeln, Dinge, die Sie möglicherweise auf Ihren Seiten umsetzen müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
