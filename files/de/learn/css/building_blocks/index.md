---
title: CSS-Bausteine
slug: Learn/CSS/Building_blocks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieses Modul baut dort auf, wo [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) aufgehört hat — jetzt, da Sie mit der Sprache und ihrer Syntax vertraut sind und erste Erfahrungen im Umgang damit gemacht haben, ist es an der Zeit, etwas tiefer einzutauchen. Dieses Modul behandelt die Kaskade und Vererbung, alle verfügbaren Selektortypen, Einheiten, Größenanpassung, das Styling von Hintergründen und Rahmen, Debugging und vieles mehr.

Das Ziel hier ist es, Ihnen ein Werkzeugset für das Schreiben von kompetentem CSS bereitzustellen und Ihnen das notwendige theoretische Verständnis zu vermitteln, bevor Sie zu spezifischeren Disziplinen wie [Text-Styling](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie:

1. Grundlegende Vertrautheit mit der Nutzung von Computern haben und das Web passiv nutzen können (d.h. es sich nur ansehen und Inhalte konsumieren).
2. Eine grundlegende Arbeitsumgebung eingerichtet haben, wie im Abschnitt [Installieren grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, und ein Verständnis für das Erstellen und Verwalten von Dateien besitzen, wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) beschrieben.
3. Grundlegende Vertrautheit mit HTML haben, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) besprochen.
4. Ein Verständnis für die Grundlagen von CSS besitzen, wie im Modul [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) besprochen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie keine eigenen Dateien erstellen können, könnten Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die die grundlegendsten Teile der CSS-Sprache abdecken. Unterwegs finden Sie zahlreiche Übungen, um Ihr Verständnis zu testen.

- [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Es gibt eine Vielzahl von CSS-Selektoren, die eine fein abgestimmte Präzision beim Auswählen von Elementen zum Stylen ermöglichen. In diesem Artikel und dessen Unterartikeln werden wir die verschiedenen Typen im Detail durchgehen und sehen, wie sie funktionieren. Die Unterartikel sind folgende:

    - [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Kaskadenebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Diese Lektion soll Sie in [Kaskadenebenen](/de/docs/Web/CSS/@layer) einführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um Layouts mit CSS erstellen oder Elemente mit anderen Elementen ausrichten zu können. In dieser Lektion werden wir das CSS _Box Model_ richtig betrachten, damit Sie mit einem Verständnis davon, wie es funktioniert, und der damit zusammenhängenden Terminologie auf komplexere Layout-Aufgaben übergehen können.
- [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und Rahmen tun können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Fragen des Stylings in CSS.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Direktionalität von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Direktionalitäten werden als **Schreibmodi** bezeichnet. Während Sie Ihr Studium fortsetzen und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel vorstellen.
- [Überlaufender Inhalt](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : In dieser Lektion werden wir uns ein weiteres wichtiges Konzept in CSS ansehen — **Überlauf**. Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um bequem in eine Box zu passen. In diesem Leitfaden erfahren Sie, was das ist und wie Sie damit umgehen können.
- [CSS-Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : Jede in CSS verwendete Eigenschaft hat einen Wert oder einen Satz von Werten, die für diese Eigenschaft zulässig sind. In dieser Lektion werden wir uns einige der gebräuchlichsten Werte und Einheiten ansehen, die verwendet werden.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : In den bisherigen Lektionen sind Ihnen einige Möglichkeiten begegnet, Elemente auf einer Webseite mit CSS zu dimensionieren. Das Verständnis, wie groß die verschiedenen Features in Ihrem Design sind, ist wichtig, und in dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenbestimmung definieren, die Ihnen in Zukunft helfen werden.
- [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu stylen, etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel bietet einen Leitfaden, um HTML-Tabellen gut aussehen zu lassen, mit einigen spezifischen Tabell-Styling-Techniken im Fokus.
- [Erweiterte Styling-Effekte](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : Dieser Artikel dient als eine Art Trickkiste und bietet eine Einführung in einige interessante erweiterte Styling-Features wie Box-Schatten, Blendmodi und Filter.
- [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : Manchmal werden Sie bei der Erstellung von CSS auf ein Problem stoßen, bei dem Ihr CSS nicht das tut, was Sie erwarten. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie Ihnen die in allen modernen Browsern enthaltenen DevTools helfen können, herauszufinden, was vor sich geht.
- [Organisieren Ihres CSS](/de/docs/Learn/CSS/Building_blocks/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werden wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS werfen, die es leicht wartbar machen, und einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Bewertungen

Die folgenden Bewertungen werden Ihr Verständnis des in den obigen Leitfäden behandelten CSS testen.

- [Grundlegendes CSS-Verständnis](/de/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : Diese Bewertung testet Ihr Verständnis der grundlegenden Syntax, Selektoren, Spezifität, des Box-Modells und mehr.
- [Erstellung von Briefpapier mit Stil](/de/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : Wenn Sie den richtigen Eindruck machen möchten, kann es ein guter Anfang sein, einen Brief auf schönem Briefpapier zu schreiben. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, um einen solchen Look zu erzielen.
- [Eine cool aussehende Box](/de/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : Hier können Sie üben, Hintergrund- und Rahmenstyling zu verwenden, um eine auffällige Box zu erstellen.
