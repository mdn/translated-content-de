---
title: CSS-Bausteine
slug: Learn/CSS/Building_blocks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieses Modul setzt dort fort, wo [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) aufgehört haben – jetzt, da Sie mit der Sprache und ihrer Syntax vertraut sind und einige grundlegende Erfahrungen mit ihrer Anwendung gesammelt haben, ist es an der Zeit, etwas tiefer einzutauchen. Dieses Modul behandelt das Kaskadenprinzip und die Vererbung, alle verfügbaren Selektortypen, Einheiten, Größenbestimmung, das Stylen von Hintergründen und Rahmen, das Debuggen und vieles mehr.

Das Ziel ist es, Ihnen ein Werkzeugset für das Schreiben kompetenter CSS zu bieten und Ihnen das grundlegende theoretische Wissen zu vermitteln, bevor Sie sich spezifischeren Bereichen wie [Textgestaltung](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) zuwenden.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie Folgendes haben:

1. Grundlegende Vertrautheit mit der Nutzung von Computern und der passiven Nutzung des Webs (d.h. nur betrachten und konsumieren der Inhalte).
2. Eine grundlegende Arbeitsumgebung eingerichtet, wie im Artikel [Installation grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, sowie ein Verständnis dafür, wie man Dateien erstellt und verwaltet, wie im Artikel [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) beschrieben.
3. Grundlegende Vertrautheit mit HTML, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt.
4. Ein Verständnis der Grundlagen von CSS, wie im Modul [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) behandelt.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, könnten Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Anleitungen

Dieses Modul enthält die folgenden Artikel, die die wichtigsten Teile der CSS-Sprache abdecken. Unterwegs stoßen Sie auf viele Übungen, die es Ihnen ermöglichen, Ihr Verständnis zu testen.

- [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl von Elementen zum Stylen ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen ausführlich durchgehen und sehen, wie sie funktionieren. Die Unterartikel sind wie folgt:

    - [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir das CSS _Box-Modell_ genauer betrachten, damit Sie mit einem Verständnis, wie es funktioniert und der damit verbundenen Terminologie zu komplexeren Layoutaufgaben übergehen können.
- [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : In dieser Lektion betrachten wir einige der kreativen Dinge, die Sie mit CSS-Hintergründen und -Rahmen tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken – Hintergründe und Rahmen sind die Antwort auf viele Fragen des Stylings in CSS.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die verschiedenen Richtungen von Inhalten, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Schreibrichtungen werden als **Schreibmodi** bezeichnet — besser zu unterstützen. Wenn Sie in Ihrem Studium fortschreiten und beginnen, sich mit dem Layout zu beschäftigen, wird Ihnen das Verständnis der Schreibmodi sehr nützlich sein. Daher werden wir sie in diesem Artikel einführen.
- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : In dieser Lektion betrachten wir ein weiteres wichtiges Konzept in CSS — **Overflow**. Overflow tritt auf, wenn zu viel Inhalt vorhanden ist, um bequem in einer Box untergebracht zu werden. In diesem Leitfaden erfahren Sie, was es ist und wie Sie damit umgehen können.
- [CSS-Werte und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Jede in CSS verwendete Eigenschaft hat einen Wert oder eine Menge von Werten, die für diese Eigenschaft erlaubt sind. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Werte und Einheiten ansehen.
- [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : In den verschiedenen Lektionen bisher sind Ihnen eine Reihe von Möglichkeiten zur Größenbestimmung von Elementen auf einer Webseite mit CSS begegnet. Zu verstehen, wie groß die verschiedenen Merkmale Ihres Designs sein werden, ist wichtig, und in dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe bekommen, und definieren einige Begriffe zur Größenbestimmung, die Ihnen in Zukunft helfen werden.
- [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Fähigkeit, sie mit CSS zu stylen, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustrationen sparen, und diese Lektion hebt einige der wichtigsten Dinge hervor, die Sie wissen müssen.
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel bietet eine Anleitung, um HTML-Tabellen gut aussehen zu lassen, mit einigen speziellen Techniken zum Stylen von Tabellen.
- [Fortgeschrittene Stileffekte](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : Dieser Artikel dient als eine Trickkiste und bietet eine Einführung in einige interessante fortgeschrittene Stileigenschaften wie Box-Schatten, Mischmodi und Filter.
- [CSS-Debugging](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS scheinbar nicht das macht, was Sie erwarten. Dieser Artikel gibt Ihnen Anleitungen, wie Sie beim Debugging eines CSS-Problems vorgehen können, und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was vor sich geht.
- [Organisation Ihres CSS](/de/docs/Learn/CSS/Building_blocks/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices beim Schreiben Ihres CSS, um es einfach wartbar zu machen, und auf einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

## Prüfungen

Die folgenden Prüfungen werden Ihr Verständnis der in den obigen Anleitungen behandelten CSS-Themen testen.

- [Grundlegendes Verständnis von CSS](/de/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : Diese Prüfung testet Ihr Verständnis der grundlegenden Syntax, Selektoren, Spezifität, des Box-Modells und mehr.
- [Gestaltung von Briefpapier mit Stil](/de/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : Wenn Sie den richtigen Eindruck machen möchten, kann ein Brief auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Prüfung werden wir Sie herausfordern, eine Online-Vorlage zu erstellen, um einen solchen Look zu erzielen.
- [Eine cool aussehende Box](/de/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : Hier können Sie üben, Hintergrund- und Rahmenstile zu verwenden, um eine auffällige Box zu erstellen.
