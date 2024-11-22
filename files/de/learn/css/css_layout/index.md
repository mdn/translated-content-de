---
title: CSS-Layout
slug: Learn/CSS/CSS_layout
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

An diesem Punkt haben wir uns die Grundlagen von CSS angeschaut, wie man Text stilisiert und wie man die Kästchen gestaltet und manipuliert, in denen sich Ihre Inhalte befinden. Jetzt ist es an der Zeit, sich anzusehen, wie Sie Ihre Kästchen korrekt in Bezug zum Viewport sowie zueinander anordnen. Wir haben die notwendigen Voraussetzungen behandelt, also lassen Sie uns tief in das CSS-Layout eintauchen und dabei verschiedene Funktionen wie unterschiedliche Display-Einstellungen, Positionierung, moderne Layout-Tools wie Flexbox und CSS-Grid sowie einige ältere Techniken erkunden, die Sie möglicherweise noch kennen sollten.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie bereits:

1. Grundlegende Vertrautheit mit HTML haben, wie im [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) Modul besprochen.
2. Mit den Grundlagen von CSS vertraut sein, wie in der [Einführung in CSS](/de/docs/Learn/CSS/First_steps) behandelt.
3. Verstehen, wie man [Kästchen gestaltet](/de/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Code-Beispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfaden

Diese Artikel bieten Anleitungen zu den grundlegenden Layout-Tools und -Techniken, die in CSS verfügbar sind. Am Ende der Lektionen gibt es eine Bewertung, die Ihnen hilft, Ihr Verständnis der Layout-Methoden durch das Anordnen einer Webseite zu überprüfen.

- [Einführung in CSS-Layout](/de/docs/Learn/CSS/CSS_layout/Introduction)
  - : Dieser Artikel fasst einige der CSS-Layout-Funktionen zusammen, die wir in vorherigen Modulen bereits angesprochen haben — wie verschiedene {{cssxref("display")}}-Werte — und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden.
- [Normalfluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Elemente auf Webseiten legen sich gemäß dem _Normalfluss_ an, bis wir etwas tun, um das zu ändern. Dieser Artikel erklärt die Grundlagen des Normalflusses als Grundlage dafür, zu lernen, wie man ihn ändert.
- [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Reihen oder Spalten. Elemente passen sich an, um zusätzlichen Raum zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen. Nachdem Sie diesen Leitfaden studiert haben, können Sie [Ihre Flexbox-Fähigkeiten testen](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills), um Ihr Verständnis zu überprüfen, bevor Sie weitermachen.
- [Grids](/de/docs/Learn/CSS/CSS_layout/Grids)
  - : Das CSS-Grid-Layout ist ein zweidimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten anzuordnen und bietet viele Funktionen, die den Aufbau komplexer Layouts einfach machen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit dem Seitenlayout zu beginnen, dann [testen Sie Ihre Grid-Fähigkeiten](/de/docs/Learn/CSS/CSS_layout/Grid_skills), bevor Sie weitermachen.
- [Floats](/de/docs/Learn/CSS/CSS_layout/Floats)
  - : Ursprünglich gedacht, um Bilder innerhalb von Textblöcken zu schweben, wurde die {{cssxref("float")}}-Eigenschaft eines der am häufigsten verwendeten Werkzeuge für die Erstellung von Mehrspaltenlayouts auf Webseiten. Mit dem Aufkommen von Flexbox und Grid hat es sich nun zu seiner ursprünglichen Bestimmung zurückentwickelt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentlayoutfluss zu nehmen und sie dazu zu bringen, sich anders zu verhalten, z. B. indem sie übereinander sitzen oder immer am selben Ort im Browser-Viewport verbleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Mehrspalten-Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspalten-Layout-Spezifikation gibt Ihnen eine Methode, Inhalte in Spalten anzuordnen, wie Sie sie möglicherweise in einer Zeitung sehen. Dieser Artikel erklärt, wie Sie diese Funktion nutzen.
- [Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen unterschiedlicher Bildschirmgrößen auf webfähigen Geräten ist das Konzept des responsiven Webdesigns (RWD) entstanden: ein Satz von Praktiken, der es Webseiten ermöglicht, ihr Layout und Erscheinungsbild an unterschiedliche Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die die Art und Weise, wie wir für ein Multi-Device-Web designen, verändert hat, und in diesem Artikel helfen wir Ihnen, die Haupttechniken zu verstehen, die Sie kennen müssen, um es zu meistern.
- [Anleitung zu Medienabfragen](/de/docs/Learn/CSS/CSS_layout/Media_queries)
  - : Die **CSS-Medienabfrage** gibt Ihnen eine Möglichkeit, CSS nur anzuwenden, wenn die Umgebung des Browsers und Geräts einer von Ihnen festgelegten Regel entspricht, z. B. "Viewport ist breiter als 480 Pixel". Medienabfragen sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können auch verwendet werden, um andere Eigenschaften der Umgebung zu erkennen, in der Ihre Website läuft, z. B. ob der Benutzer einen Touchscreen statt einer Maus verwendet. In dieser Lektion lernen Sie zunächst die in Medienabfragen verwendete Syntax und verwenden sie dann in einem interaktiven Beispiel, um zu zeigen, wie ein einfaches Design responsiv gestaltet werden könnte.
- [Veraltete Layout-Methoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Merkmal in CSS-Layouts. Vor dem **CSS-Grid-Layout** wurden sie tendenziell mit Floats oder anderen Layout-Funktionen umgesetzt. Sie stellten sich Ihr Layout zunächst als eine bestimmte Anzahl von Spalten vor (z. B. 4, 6 oder 12), und dann passten Sie Ihre Inhaltskolonnen in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : In diesem Modul empfehlen wir, Flexbox und Grid als die Hauptlayout-Methoden für Ihre Designs zu verwenden. Es wird jedoch immer Besucher auf einer Website geben, die Sie in der Zukunft entwickeln, die ältere Browser verwenden oder Browser, die die von Ihnen verwendeten Methoden nicht unterstützen. Das wird im Web immer der Fall sein — wenn neue Funktionen entwickelt werden, werden verschiedene Browser unterschiedliche Funktionen priorisieren. Dieser Artikel erklärt, wie man moderne Webtechniken verwendet, ohne Benutzer älterer Technologie auszuschließen.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis der in den obigen Leitfäden behandelten CSS-Layout-Methoden testen.

- [Grundlage des Layout-Verständnisses](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Eine Bewertung, um Ihr Wissen über unterschiedliche Layout-Methoden durch das Anordnen einer Webseite zu testen.

## Siehe auch

- [Praktische Positionierungsbeispiele](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige praxisnahe Beispiele erstellt, um zu veranschaulichen, welche Art von Dingen man mit Positionierung machen kann.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für häufige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.
