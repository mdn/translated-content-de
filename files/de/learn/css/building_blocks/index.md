---
title: CSS-Grundbausteine
slug: Learn/CSS/Building_blocks
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Dieses Modul setzt fort, wo die [Ersten Schritte mit CSS](/de/docs/Learn/CSS/First_steps) aufgehört haben — jetzt, da Sie mit der Sprache und ihrer Syntax vertraut sind und erste Erfahrungen mit ihrer Anwendung gesammelt haben, ist es an der Zeit, etwas tiefer einzutauchen. In diesem Modul werden wir uns mit der Kaskade und Vererbung, allen verfügbaren Selektortypen, Einheiten, Größen, dem Styling von Hintergründen und Rahmen, Debugging und vielem mehr beschäftigen.

Das Ziel ist es, Ihnen ein Werkzeugset zum Schreiben von kompetentem CSS zur Verfügung zu stellen und Ihnen das grundlegende Verständnis der Theorie zu vermitteln, bevor Sie sich spezifischeren Disziplinen wie [Textgestaltung](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) widmen.

## Voraussetzungen

Bevor Sie dieses Modul starten, sollten Sie:

1. Grundlegende Vertrautheit mit der Benutzung von Computern und der passiven Nutzung des Webs (d.h. nur das Ansehen und Konsumieren von Inhalten) haben.
2. Eine grundlegende Arbeitsumgebung eingerichtet haben, wie im Abschnitt [Installation grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, sowie ein Verständnis davon, wie Dateien erstellt und verwaltet werden, wie es im Abschnitt [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) detailliert beschrieben ist.
3. Eine grundlegende Vertrautheit mit HTML besitzen, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) besprochen.
4. Ein Verständnis der CSS-Grundlagen haben, wie im Modul [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) erörtert.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/einem anderen Gerät arbeiten, wo Sie keine eigenen Dateien erstellen können, dann können Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JS Bin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die die wichtigsten Teile der CSS-Sprache abdecken. Unterwegs werden Sie auf viele Übungen stoßen, die es Ihnen ermöglichen, Ihr Verständnis zu testen.

- [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Es gibt eine große Vielfalt an CSS-Selektoren, die eine präzise Auswahl von Elementen zum Stylen ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen im Detail durchgehen und sehen, wie sie funktionieren. Die Unterartikel sind wie folgt:

    - [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribut-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudoklassen und -elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — der Kaskade, der Spezifität und der Vererbung —, die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Diese Lektion soll Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir das CSS _Box Model_ genauer betrachten, damit Sie sich an komplexere Layout-Aufgaben wagen können, mit einem Verständnis dafür, wie es funktioniert und welche Terminologie damit in Verbindung steht.
- [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen anstellen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken bieten Hintergründe und Rahmen die Antwort auf viele Stylingfragen in CSS.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um besseren Support für verschiedene Richtungen von Inhalten zu bieten, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese verschiedenen Richtungen werden als **Schreibmodi** bezeichnet. Wenn Sie Ihr Studium fortsetzen und beginnen, sich mit Layouts zu beschäftigen, wird ein Verständnis dieser Schreibmodi sehr hilfreich sein. Daher werden wir sie in diesem Artikel vorstellen.
- [Überlaufende Inhalte](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : In dieser Lektion betrachten wir ein weiteres wichtiges Konzept in CSS — **Überschuss**. Überschuss tritt auf, wenn zu viel Inhalt vorhanden ist, um bequem in einer Box untergebracht zu werden. In diesem Leitfaden erfahren Sie, was es ist und wie Sie es handhaben können.
- [CSS-Werte und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Jede in CSS verwendete Eigenschaft hat einen Wert oder einen Satz von Werten, die für diese Eigenschaft zulässig sind. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Werte und Einheiten.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : In den verschiedenen Lektionen bisher haben Sie eine Reihe von Möglichkeiten kennengelernt, um Elemente auf einer Webseite mit CSS zu dimensionieren. Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig, und in dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente eine Größe über CSS erhalten, und einige Begriffe um die Größenanpassung definieren, die Ihnen in der Zukunft helfen werden.
- [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich hinsichtlich Ihrer Styling-Möglichkeiten mit CSS etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustration sparen, und diese Lektion wird einige der Hauptaspekte hervorheben, die Sie wissen müssen.
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : Das Styling einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel bietet einen Leitfaden, um HTML-Tabellen gut aussehen zu lassen, wobei einige spezifische Tabellengestaltungstechniken hervorgehoben werden.
- [Erweiterte Styling-Effekte](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : Dieser Artikel fungiert als Trickkiste und bietet eine Einführung in einige interessante erweiterte Styling-Funktionen wie Box-Schatten, Mischmodi und Filter.
- [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Manchmal werden Sie beim Schreiben von CSS auf ein Problem stoßen, bei dem Ihr CSS nicht so funktioniert, wie Sie es erwarten. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was vor sich geht.
- [Organisieren Ihres CSS](/de/docs/Learn/CSS/Building_blocks/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Verwaltung einer riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Praktiken zum Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

## Bewertungen

Die folgenden Bewertungen werden Ihr Verständnis des in den oben genannten Leitfäden behandelten CSS prüfen.

- [Grundlegendes CSS-Verständnis](/de/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : Diese Bewertung prüft Ihr Verständnis der grundlegenden Syntax, Selektoren, Spezifität, des Box-Modells und mehr.
- [Erstellung von stilvollem Briefpapier](/de/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : Wenn Sie den richtigen Eindruck machen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, um ein solches Aussehen zu erreichen.
- [Eine cool aussehende Box](/de/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : Hier erhalten Sie Übung im Einsatz von Hintergrund- und Rahmenstyling, um eine auffällige Box zu erstellen.
