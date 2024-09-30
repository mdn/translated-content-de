---
title: CSS Layout
slug: Learn/CSS/CSS_layout
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

An dieser Stelle haben wir die Grundlagen von CSS, die Textgestaltung und die Gestaltung und Manipulation der Boxen, in denen sich Ihre Inhalte befinden, betrachtet. Nun ist es an der Zeit, sich anzusehen, wie Sie Ihre Boxen korrekt in Bezug auf das Ansichtsfenster sowie zueinander anordnen. Wir haben die notwendigen Voraussetzungen behandelt, also lassen Sie uns tief in das CSS-Layout einsteigen und dabei verschiedene Funktionen betrachten, wie: verschiedene Anzeigeeinstellungen, Positionierung, moderne Layout-Tools wie Flexbox und CSS Grid sowie einige der älteren Techniken, die Sie vielleicht noch kennen sollten.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie bereits:

1. Ein grundlegendes Verständnis von HTML haben, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) besprochen.
2. Sich mit den CSS-Grundlagen wohlfühlen, wie in [Einführung in CSS](/de/docs/Learn/CSS/First_steps) besprochen.
3. Verstehen, wie man [Boxen gestaltet](/de/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, an dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Diese Artikel bieten Anleitungen zu den grundlegenden Layout-Tools und Techniken, die in CSS verfügbar sind. Am Ende der Lektionen gibt es eine Bewertung, um Ihr Verständnis der Layoutmethoden zu überprüfen, indem Sie eine Webseite gestalten.

- [Einführung in das CSS-Layout](/de/docs/Learn/CSS/CSS_layout/Introduction)
  - : Dieser Artikel wird einige der CSS-Layout-Funktionen zusammenfassen, die wir bereits in früheren Modulen angesprochen haben — wie verschiedene {{cssxref("display")}}-Werte — und einige der Konzepte einführen, die wir in diesem Modul behandeln werden.
- [Normalfluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Elemente auf Webseiten ordnen sich gemäß dem _Normalfluss_ an, bis wir etwas tun, um dies zu ändern. Dieser Artikel erklärt die Grundlagen des Normalflusses als Grundlage, um zu lernen, wie man ihn ändert.
- [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layoutmethode zum Anordnen von Elementen in Zeilen oder Spalten. Die Elemente passen sich an, um zusätzlichen Raum zu füllen und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen. Nachdem Sie diesen Leitfaden studiert haben, können Sie [Ihre Flexbox-Fähigkeiten testen](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills), um Ihr Verständnis zu überprüfen, bevor Sie fortfahren.
- [Grids](/de/docs/Learn/CSS/CSS_layout/Grids)
  - : CSS Grid Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht, Inhalte in Zeilen und Spalten anzuordnen und verfügt über viele Funktionen, die den Aufbau komplexer Layouts einfach machen. Dieser Artikel bietet Ihnen alles, was Sie benötigen, um mit dem Seitenlayout zu beginnen, dann [testen Sie Ihre Grid-Fähigkeiten](/de/docs/Learn/CSS/CSS_layout/Grid_skills), bevor Sie fortfahren.
- [Floats](/de/docs/Learn/CSS/CSS_layout/Floats)
  - : Ursprünglich zum Einbetten von Bildern in Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge für die Erstellung von mehrspaltigen Layouts auf Webseiten. Mit dem Aufkommen von Flexbox und Grid hat sie sich nun in ihre ursprüngliche Funktion zurückentwickelt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es, Elemente aus dem normalen Dokumentlayoutfluss zu nehmen und sie unterschiedlich verhalten zu lassen, zum Beispiel indem sie übereinander liegen oder immer an derselben Stelle innerhalb des Browseransichtsfensters bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation bietet Ihnen eine Methode, um Inhalte in Spalten anzuordnen, wie Sie sie in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion nutzen können.
- [Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen unterschiedlicher Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: ein Set von Praktiken, das es ermöglicht, Webseitenlayouts und -erscheinungsbilder an unterschiedliche Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise, wie wir für ein Multi-Device-Web designen, verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Einsteigerleitfaden zu Media Queries](/de/docs/Learn/CSS/CSS_layout/Media_queries)
  - : Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, z. B. "Ansichtsfenster ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es ermöglichen, unterschiedliche Layouts abhängig von der Größe des Ansichtsfensters zu erstellen. Sie können auch verwendet werden, um andere Merkmale der Umgebung zu erkennen, in der Ihre Website läuft, z. B. ob der Benutzer einen Touchscreen anstelle einer Maus verwendet. In dieser Lektion lernen Sie zuerst die Syntax, die in Media Queries verwendet wird, und dann verwenden Sie sie in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gemacht werden könnte.
- [Alte Layoutmethoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Merkmal in CSS-Layouts. Vor **CSS Grid Layout** wurden sie häufig mit Floats oder anderen Layout-Funktionen implementiert. Sie stellen sich Ihr Layout zuerst als eine festgelegte Anzahl von Spalten (z. B. 4, 6 oder 12) vor und passen dann Ihre Inhaltsspalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : In diesem Modul empfehlen wir, Flexbox und Grid als die Hauptlayoutmethoden für Ihre Designs zu verwenden. Es wird jedoch immer Besucher einer von Ihnen entwickelten Website geben, die ältere Browser verwenden oder Browser, die die von Ihnen verwendeten Methoden nicht unterstützen. Dies wird immer im Web der Fall sein - da neue Funktionen entwickelt werden, werden verschiedene Browser unterschiedliche Funktionen priorisieren. Dieser Artikel erklärt, wie Sie moderne Webtechniken verwenden können, ohne Benutzer älterer Technologie auszuschließen.

## Bewertung

Das folgende Bewertungsquiz wird Ihr Verständnis der in den oben genannten Leitfäden behandelten CSS-Layoutmethoden testen.

- [Grundlegendes Layoutverständnis](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Eine Bewertung zur Überprüfung Ihrer Kenntnisse der verschiedenen Layoutmethoden durch das Anordnen einer Webseite.

## Siehe auch

- [Praktische Beispiele zur Positionierung](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie einige praxisnahe Beispiele erstellt werden, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung tun können.
- [CSS Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise in Ihren Websites umsetzen müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layoutspezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.
