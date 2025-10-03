---
title: CSS-Layout
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: ed70efeffb9717915f028104c5b33e7326a00d96
---

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

In den vorherigen Modulen haben wir uns angesehen, wie Sie die Boxen, in denen Ihr Inhalt sich befindet, gestalten und manipulieren können. Nun ist es an der Zeit, sich damit zu beschäftigen, wie Sie Ihre Boxen korrekt zueinander und zum Browser-Viewport anordnen. In diesem Modul betrachten wir Floats, Positionierung, andere moderne Layout-Tools und den Aufbau responsiver Designs, die sich an verschiedene Geräte, Bildschirmgrößen und Auflösungen anpassen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), den [grundlegenden Grundlagen von CSS](/de/docs/Learn_web_development/Core/Styling_basics) und der [CSS-Textgestaltung](/de/docs/Learn_web_development/Core/Text_styling) vertraut sein.

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Einführung in CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : Diese Lektion fasst einige der CSS-Layoutfunktionen zusammen, die wir bereits in früheren Modulen angesprochen haben, wie etwa verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden. Es behandelt auch das Konzept des normalen Flusses ausführlich.
- [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : Ursprünglich zum Einfügen von Bildern in Textblöcke gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung von mehrspaltigen Layouts auf Webseiten. Mit der Einführung von Flexbox und Grid ist sie nun zu ihrem ursprünglichen Zweck zurückgekehrt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentenfluss zu entfernen und sie anders verhalten zu lassen, z.B. übereinander zu liegen oder immer an derselben Stelle im Browser-Viewport zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine ein-dimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente passen sich an, um zusätzlichen Raum zu füllen, und schrumpfen, um in kleinere Bereiche zu passen. Dieser Artikel erklärt alle Grundlagen.
- [CSS-Grid-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten zu organisieren und bietet viele Funktionen, um die Erstellung komplexer Layouts zu vereinfachen. Dieser Artikel erklärt alles, was Sie wissen müssen, um mit Grid-Layout zu beginnen.
- [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension) <sup>Challenge</sup>
  - : Diese Herausforderung wird Ihr Wissen über die Layout-Funktionen testen, die wir bisher im Modul behandelt haben, nämlich Flexbox, Floats, Grid und Positionierung. Am Ende werden Sie ein Webseiten-Layout mit einer Vielzahl von Techniken entwickelt haben.
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : Da auf webfähigen Geräten immer vielfältigere Bildschirmgrößen aufgetaucht sind, ist das Konzept des responsiven Webdesigns (RWD) aufgekommen: eine Reihe von Praktiken, die es Webseiten ermöglichen, ihr Layout und Erscheinungsbild an verschiedene Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise verändert hat, wie wir für ein webfähiges Multi-Device gestalten, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Grundlagen der Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : Die **CSS-Media-Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung den von Ihnen festgelegten Regeln entspricht. Media Queries sind ein Schlüsselelement des responsiven Webdesigns, da sie es ermöglichen, unterschiedliche Layouts je nach Größe des Viewports zu erstellen. In dieser Lektion lernen Sie die Syntax, die in Media Queries verwendet wird, und verwenden sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gemacht werden kann.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie weitermachen. Wenn Sie all diese Artikel zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber sie sind dennoch interessant - Sie sollten diese als Stretch-Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kernstücks fertig sind.

- [Mehrspaltiges Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : Die Spezifikation für mehrspaltige Layouts bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie vielleicht in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen können.
- [Praktische Beispiele für Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie einige praxisnahe Beispiele erstellt werden, um zu veranschaulichen, welche Art von Dingen Sie mit der Positionierung machen können.
- [Veraltete Layout-Methoden](/de/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr verbreitetes Merkmal, das in CSS-Layouts verwendet wird, und vor dem CSS-Grid-Layout wurden sie dazu tendiert, mit Floats oder anderen Layout-Funktionen implementiert zu werden. Sie stellen sich Ihr Layout als eine bestimmte Anzahl von Spalten vor (z.B. 4, 6 oder 12) und passen dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir erkunden, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : Besucher Ihrer Website können Benutzer einschließen, die entweder ältere Browser verwenden oder Browser verwenden, die die von Ihnen implementierten CSS-Funktionen nicht unterstützen. Dies ist ein häufiges Szenario im Web, wo ständig neue Funktionen zu CSS hinzugefügt werden. Browser unterscheiden sich in ihrer Unterstützung für diese Funktionen, da verschiedene Browser dazu neigen, unterschiedliche Funktionen zu priorisieren. Dieser Artikel erklärt, wie Sie als Webentwickler moderne Webtechniken nutzen können, um sicherzustellen, dass Ihre Website für Benutzer mit älterer Technologie zugänglich bleibt.

## Siehe auch

- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, Dinge, die Sie möglicherweise in Ihren Seiten umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, Layout-Spezifikationen zu verwenden und die Entscheidungen, die Sie als Entwickler treffen können.

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
