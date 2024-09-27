---
title: CSS-Layout
slug: Learn/CSS/CSS_layout
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

An diesem Punkt haben wir uns mit den Grundlagen von CSS befasst, wie man Text stylt und wie man die Boxen stylt und manipuliert, in denen sich Ihre Inhalte befinden. Jetzt ist es an der Zeit, sich anzusehen, wie Sie Ihre Boxen korrekt im Verhältnis zum Viewport und zueinander anordnen können. Wir haben die notwendigen Voraussetzungen behandelt, also tauchen wir nun tief in das CSS-Layout ein und betrachten dabei verschiedene Funktionen wie: unterschiedliche Anzeigeeinstellungen, Positionierung, moderne Layout-Tools wie Flexbox und CSS Grid sowie einige der älteren Techniken, die Sie möglicherweise noch kennen möchten.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie bereits:

1. Grundlegende Kenntnisse in HTML haben, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) besprochen.
2. Sich mit den Grundlagen von CSS vertraut fühlen, wie in [Einführung in CSS](/de/docs/Learn/CSS/First_steps) besprochen.
3. Verstehen, wie man [Boxen stylt](/de/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfaden

Diese Artikel bieten Anleitungen zu den grundlegenden Layout-Tools und Techniken, die in CSS verfügbar sind. Am Ende der Lektionen gibt es eine Bewertung, die Ihnen hilft, Ihr Verständnis der Layout-Methoden zu überprüfen, indem Sie eine Webseite gestalten.

- [Einführung in das CSS-Layout](/de/docs/Learn/CSS/CSS_layout/Introduction)
  - : Dieser Artikel fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in vorherigen Modulen berührt haben, wie z.B. verschiedene {{cssxref("display")}}-Werte, und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden.
- [Normalfluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Elemente auf Webseiten ordnen sich gemäß dem _Normalfluss_ an - bis wir etwas tun, um dies zu ändern. Dieser Artikel erklärt die Grundlagen des Normalflusses als Basis dafür, wie man ihn verändert.
- [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Reihen oder Spalten. Elemente passen sich an, um zusätzlichen Platz zu füllen und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen. Nachdem Sie diesen Leitfaden studiert haben, können Sie [Ihre Flexbox-Kenntnisse testen](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills), um Ihr Verständnis zu überprüfen, bevor Sie fortfahren.
- [Grids](/de/docs/Learn/CSS/CSS_layout/Grids)
  - : CSS Grid Layout ist ein zweidimensionales Layoutsystem für das Web. Es ermöglicht Ihnen, Inhalte in Reihen und Spalten anzuordnen und verfügt über viele Funktionen, die den Aufbau komplexer Layouts unkompliziert machen. Dieser Artikel gibt Ihnen alles, was Sie wissen müssen, um mit dem Seitenlayout zu beginnen, und dann können Sie [Ihre Grid-Kenntnisse testen](/de/docs/Learn/CSS/CSS_layout/Grid_skills), bevor Sie fortfahren.
- [Floats](/de/docs/Learn/CSS/CSS_layout/Floats)
  - : Ursprünglich zum Fließenlassen von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Tools zum Erstellen von Mehrspaltenlayouts auf Webseiten. Mit dem Aufkommen von Flexbox und Grid ist sie nun zu ihrem ursprünglichen Zweck zurückgekehrt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentenlayoutfluss herauszunehmen und sie anders verhalten zu lassen, z.B. indem sie übereinander sitzen oder immer am selben Ort im Browser-Viewport bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie Sie sie verwenden können.
- [Mehrspaltenlayout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : Die Mehrspaltenlayout-Spezifikation bietet Ihnen eine Methode, Inhalte in Spalten anzuordnen, wie Sie es in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.
- [Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : Mit dem Aufkommen verschiedener Bildschirmgrößen auf webfähigen Geräten hat sich das Konzept des responsiven Webdesigns (RWD) entwickelt: eine Reihe von Praktiken, die es Webseiten ermöglichen, ihr Layout und Aussehen an verschiedene Bildschirmbreiten, Auflösungen usw. anzupassen. Es ist eine Idee, die unsere Gestaltung für ein Multi-Device-Web verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie beherrschen müssen.
- [Anleitung zu Media Queries für Anfänger](/de/docs/Learn/CSS/CSS_layout/Media_queries)
  - : Die **CSS-Media-Query** gibt Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteeinstellungen einer Regel entsprechen, die Sie festlegen, z.B. "Viewport ist breiter als 480 Pixel". Media Queries sind ein Schlüsselteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können auch verwendet werden, um andere Eigenschaften der Umgebung, in der Ihre Seite läuft, zu erkennen, z.B. ob der Benutzer einen Touchscreen verwendet anstelle einer Maus. In dieser Lektion lernen Sie zuerst die in Media Queries verwendete Syntax kennen und verwenden sie dann in einem interaktiven Beispiel, das zeigt, wie ein einfaches Design responsiv gestaltet werden könnte.
- [Veraltete Layoutmethoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufiges Element, das in CSS-Layouts verwendet wird. Vor **CSS Grid Layout** wurden sie meist mit Floats oder anderen Layout-Funktionen implementiert. Sie stellten sich Ihr Layout zunächst als eine bestimmte Anzahl von Spalten vor (z.B. 4, 6 oder 12) und passten dann Ihre Inhalts-Spalten in diese imaginären Spalten ein. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, falls Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : In diesem Modul empfehlen wir, Flexbox und Grid als die Hauptlayout-Methoden für Ihre Designs zu verwenden. Es wird jedoch immer Besucher einer von Ihnen entwickelten Seite geben, die ältere Browser verwenden oder Browser, die die von Ihnen verwendeten Methoden nicht unterstützen. Dies wird immer der Fall im Web sein - da neue Funktionen entwickelt werden, werden verschiedene Browser unterschiedliche Funktionen priorisieren. Dieser Artikel erklärt, wie Sie moderne Webtechniken anwenden, ohne Benutzer älterer Technologie auszuschließen.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis der in den obigen Leitfäden behandelten CSS-Layout-Methoden testen.

- [Grundlegendes Layout-Verständnis](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Eine Bewertung, um Ihr Wissen über verschiedene Layout-Methoden zu testen, indem Sie eine Webseite gestalten.

## Siehe auch

- [Praktische Positionierungsbeispiele](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie man einige praktische Beispiele erstellt, um zu veranschaulichen, welche Dinge man mit Positionierung erreichen kann.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.
