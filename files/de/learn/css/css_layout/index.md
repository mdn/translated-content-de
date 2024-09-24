---
title: CSS-Layout
slug: Learn/CSS/CSS_layout
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

An diesem Punkt haben wir uns mit den CSS-Grundlagen beschäftigt, gelernt, wie man Text stilisiert, und wie man die Boxen, in denen Ihr Inhalt sitzt, gestaltet und manipuliert. Nun ist es an der Zeit, sich anzusehen, wie Sie Ihre Boxen korrekt in Bezug auf das Ansichtsfenster sowie zueinander anordnen. Wir haben die notwendigen Voraussetzungen abgedeckt, also tauchen wir tief in das CSS-Layout ein und betrachten verschiedene Funktionen wie: unterschiedliche Anzeigeeinstellungen, Positionierung, moderne Layout-Tools wie Flexbox und CSS-Grid und einige der älteren Techniken, die Sie möglicherweise noch kennen sollten.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie bereits:

1. Grundlegende Vertrautheit mit HTML besitzen, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) besprochen.
2. Sich mit CSS-Grundlagen vertraut fühlen, wie in der [Einführung in CSS](/de/docs/Learn/CSS/First_steps) besprochen.
3. Verstehen, wie man [Boxen stilisiert](/de/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, an dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Diese Artikel bieten Anleitungen zu den grundlegenden Layout-Tools und -Techniken, die in CSS verfügbar sind. Am Ende der Lektionen gibt es eine Bewertung, die Ihnen hilft, Ihr Verständnis der Layoutmethoden zu überprüfen, indem Sie eine Webseite layouten.

- [Einführung in CSS-Layout](/de/docs/Learn/CSS/CSS_layout/Introduction)
  - : Dieser Artikel fasst einige der CSS-Layout-Funktionen zusammen, die wir bereits in vorherigen Modulen angesprochen haben — wie unterschiedliche {{cssxref("display")}}-Werte — und führt einige der Konzepte ein, die wir in diesem Modul behandeln werden.
- [Normaler Fluss](/de/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Elemente auf Webseiten ordnen sich gemäß dem _normalen Fluss_ an, es sei denn, wir ändern dies. Dieser Artikel erklärt die Grundlagen des normalen Flusses als Grundlage dafür, wie man ihn verändert.
- [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ist eine eindimensionale Layout-Methode zum Anordnen von Elementen in Zeilen oder Spalten. Elemente passen sich an, um zusätzlichen Platz zu füllen, und schrumpfen, um in kleinere Räume zu passen. Dieser Artikel erklärt alle Grundlagen. Nachdem Sie diesen Leitfaden studiert haben, können Sie [Ihre Flexbox-Kenntnisse testen](/de/docs/Learn/CSS/CSS_layout/Flexbox_skills), um Ihr Verständnis zu überprüfen, bevor Sie weitermachen.
- [Rastersysteme](/de/docs/Learn/CSS/CSS_layout/Grids)
  - : CSS-Grid-Layout ist ein zweidimensionales Layout-System für das Web. Es ermöglicht Ihnen, Inhalte in Zeilen und Spalten anzuordnen und bietet viele Funktionen, die den Aufbau komplexer Layouts erleichtern. Dieser Artikel bietet Ihnen alles, was Sie wissen müssen, um mit dem Layouten von Seiten zu beginnen, dann können Sie [Ihre Rasterkenntnisse testen](/de/docs/Learn/CSS/CSS_layout/Grid_skills), bevor Sie fortfahren.
- [Floats](/de/docs/Learn/CSS/CSS_layout/Floats)
  - : Ursprünglich zum Floathalten von Bildern innerhalb von Textblöcken gedacht, wurde die {{cssxref("float")}}-Eigenschaft zu einem der am häufigsten verwendeten Werkzeuge, um mehrspaltige Layouts auf Webseiten zu erstellen. Mit dem Aufkommen von Flexbox und Raster hat sie nun ihre ursprüngliche Aufgabe zurückgekehrt, wie dieser Artikel erklärt.
- [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
  - : Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokument-Layout-Fluss zu nehmen und sie anders verhalten zu lassen, zum Beispiel, indem sie übereinander liegen oder immer an derselben Stelle im Ansichtsfenster des Browsers bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.
- [Mehrspaltiges Layout](/de/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : Die mehrspaltige Layout-Spezifikation bietet Ihnen eine Methode zum Anordnen von Inhalten in Spalten, wie Sie sie in einer Zeitung sehen könnten. Dieser Artikel erklärt, wie Sie diese Funktion verwenden.
- [Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : Da immer vielfältigere Bildschirmgrößen auf internetfähigen Geräten auftauchen, hat sich das Konzept des responsiven Webdesigns (RWD) entwickelt: ein Satz von Praktiken, der es erlaubt, Webseiten so anzupassen, dass sie auf verschiedene Bildschirmbreiten, Auflösungen usw. passen. Es ist eine Idee, die unsere Art zu gestalten für ein mehrgerätiges Web verändert hat, und in diesem Artikel helfen wir Ihnen, die wichtigsten Techniken zu verstehen, die Sie benötigen, um es zu meistern.
- [Einsteigerleitfaden für Media Queries](/de/docs/Learn/CSS/CSS_layout/Media_queries)
  - : Die **CSS-Media-Query** gibt Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, beispielsweise "Ansichtsfenster ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil von Responsive Web Design, da sie es ermöglichen, je nach Größe des Ansichtsfensters unterschiedliche Layouts zu erstellen. Sie können auch verwendet werden, um andere Merkmale der Umgebung zu erkennen, in der Ihre Seite läuft, beispielsweise ob der Benutzer einen Touchscreen statt einer Maus verwendet. In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und verwenden dann in einem interaktiven Beispiel, wie ein einfaches Design responsiv gemacht werden kann.
- [Alte Layout-Methoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Rastersysteme sind ein sehr häufig genutztes Feature in CSS-Layouts. Vor dem **CSS-Grid-Layout** wurden sie tendenziell mit Floats oder anderen Layout-Features implementiert. Sie würden zuerst Ihr Layout als eine festgelegte Anzahl von Spalten (z. B. 4, 6 oder 12) vorstellen und dann Ihre Inhalts-Spalten in diese imaginären Spalten einpassen. In diesem Artikel werden wir untersuchen, wie diese älteren Methoden funktionieren, damit Sie verstehen, wie sie verwendet wurden, wenn Sie an einem älteren Projekt arbeiten.
- [Unterstützung älterer Browser](/de/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : In diesem Modul empfehlen wir die Verwendung von Flexbox und Raster als Hauptlayout-Methoden für Ihre Entwürfe. Es wird jedoch immer Besucher einer von Ihnen entwickelten Seite geben, die ältere Browser oder Browser verwenden, die die von Ihnen verwendeten Methoden nicht unterstützen. Dies wird im Web immer der Fall sein – mit der Entwicklung neuer Funktionen werden verschiedene Browser unterschiedlich priorisieren. Dieser Artikel erklärt, wie Sie moderne Web-Techniken verwenden können, ohne Benutzer älterer Technologien auszuschließen.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis der in den obigen Leitfäden behandelten CSS-Layout-Methoden testen.

- [Grundlegendes Layoutverständnis](/de/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Eine Bewertung zur Überprüfung Ihres Wissens über verschiedene Layout-Methoden durch das Layouten einer Webseite.

## Siehe auch

- [Praktische Beispiele zur Positionierung](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Dieser Artikel zeigt, wie Sie einige reale Beispiele erstellen können, um zu veranschaulichen, welche Arten von Dingen Sie mit der Positionierung tun können.
- [CSS-Layout-Kochbuch](/de/docs/Web/CSS/Layout_cookbook)
  - : Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren Seiten implementieren müssen. Zusätzlich zum Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.
