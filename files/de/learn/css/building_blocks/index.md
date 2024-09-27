---
title: CSS-Bausteine
slug: Learn/CSS/Building_blocks
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}

Dieses Modul baut auf den [ersten CSS-Schritten](/de/docs/Learn/CSS/First_steps) auf — jetzt, da Sie Vertrautheit mit der Sprache und ihrer Syntax gewonnen haben und einige grundlegende Erfahrungen im Umgang damit gesammelt haben, ist es an der Zeit, etwas tiefer einzutauchen. Dieses Modul betrachtet die Kaskade und Vererbung, alle verfügbaren Selektortypen, Einheiten, Größenanpassung, Gestaltung von Hintergründen und Rahmen, Debugging und vieles mehr.

Das Ziel hier ist es, Ihnen ein Werkzeugset zum Schreiben von kompetentem CSS bereitzustellen und Ihnen zu helfen, alle wesentlichen Theorien zu verstehen, bevor Sie zu spezifischeren Disziplinen wie [Textstil](/de/docs/Learn/CSS/Styling_text) und [CSS-Layout](/de/docs/Learn/CSS/CSS_layout) übergehen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie:

1. Grundlegende Vertrautheit mit der Nutzung von Computern und passiver Nutzung des Webs (z.B. nur Anschauen und Konsumieren von Inhalten) haben.
2. Eine grundlegende Arbeitsumgebung eingerichtet haben, wie im [Installieren grundlegender Software](/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software) beschrieben, und ein Verständnis dafür, wie man Dateien erstellt und verwaltet, wie in [Umgang mit Dateien](/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files) erklärt.
3. Grundlegende Kenntnisse in HTML haben, wie im Modul [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML) behandelt.
4. Ein Verständnis der Grundlagen von CSS haben, wie im Modul [erste CSS-Schritte](/de/docs/Learn/CSS/First_steps) besprochen.

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Leitfäden

Dieses Modul enthält die folgenden Artikel, die die grundlegendsten Teile der CSS-Sprache abdecken. Unterwegs begegnen Sie zahlreichen Übungen, um Ihr Verständnis zu testen.

- [CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl der zu stilisierenden Elemente ermöglichen. In diesem Artikel und seinen Unterartikeln werden wir die verschiedenen Typen im Detail besprechen und sehen, wie sie funktionieren. Die Unterartikel sind wie folgt:
    - [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

  - : Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung —, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte gelöst werden.

- [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)

  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.

- [Das Boxmodell](/de/docs/Learn/CSS/Building_blocks/The_box_model)

  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir einen genaueren Blick auf das _Boxmodell_ von CSS werfen, damit Sie mit dem Verständnis, wie es funktioniert und welche Terminologie dazugehört, zu komplexeren Layout-Aufgaben übergehen können.

- [Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

  - : In dieser Lektion werden wir einige der kreativen Möglichkeiten besprechen, die Sie mit CSS-Hintergründen und -Rahmen haben. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Stilfragen in CSS.

- [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)

  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie bei Japanisch) — diese unterschiedlichen Ausrichtungen werden als **Schreibmodi** bezeichnet. Während Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen das Verständnis von Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel einführen.

- [Überlaufende Inhalte](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)

  - : In dieser Lektion werden wir uns mit einem weiteren wichtigen Konzept in CSS befassen — dem **Überlauf**. Überlauf tritt auf, wenn zu viel Inhalt in einer Box enthalten ist. In diesem Leitfaden lernen Sie, was es ist und wie Sie damit umgehen.

- [CSS-Werte und -Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)

  - : Jede Eigenschaft, die in CSS verwendet wird, hat einen oder mehrere erlaubte Werte. In dieser Lektion werden wir einige der am häufigsten verwendeten Werte und Einheiten betrachten.

- [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)

  - : In den verschiedenen bisher behandelten Lektionen haben Sie verschiedene Möglichkeiten kennengelernt, um Elemente auf einer Webseite mit CSS zu dimensionieren. Das Verständnis, wie groß die verschiedenen Merkmale in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS dimensioniert werden können, und definieren einige Begriffe rund um das Größenthema, die Ihnen in Zukunft helfen werden.

- [Bilder, Medien und Formularelemente](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements)

  - : In dieser Lektion werden wir die Behandlung bestimmter spezieller Elemente in CSS betrachten. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf die Möglichkeit, sie mit CSS zu gestalten, etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen. Diese Lektion wird einige der Hauptsachen hervorheben, die Sie wissen müssen.

- [Tabellenstile](/de/docs/Learn/CSS/Building_blocks/Styling_tables)

  - : Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel bietet einen Leitfaden, um HTML-Tabellen gut aussehen zu lassen, mit einigen spezifischen Techniken zur Tabellenstilierung.

- [Erweiterte Stileffekte](/de/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)

  - : Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante fortgeschrittene Stilverfahren wie Box-Schatten, Mischmodi und Filter.

- [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)

  - : Manchmal stoßen Sie beim Schreiben von CSS auf ein Problem, bei dem Ihr CSS nicht das tut, was Sie erwarten. Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was passiert.

- [Organisation Ihres CSS](/de/docs/Learn/CSS/Building_blocks/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Verwaltung eines riesigen CSS-Files herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices zum Schreiben Ihres CSS, um es leicht wartbar zu machen, und auf einige Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Bewertungen

Die folgenden Bewertungen werden Ihr Verständnis des in den oben genannten Leitfäden behandelten CSS testen.

- [Grundlegendes CSS-Verständnis](/de/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)

  - : Diese Bewertung testet Ihr Verständnis der grundlegenden Syntax, Selektoren, Spezifität, Boxmodell und mehr.

- [Erstellung von stilvollem Briefpapier](/de/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)

  - : Wenn Sie einen guten Eindruck hinterlassen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Start sein. In dieser Bewertung fordern wir Sie heraus, eine Online-Vorlage zu erstellen, um einen solchen Look zu erreichen.

- [Eine coole Box gestalten](/de/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : Hier üben Sie den Einsatz von Hintergrund- und Rahmenstilierung, um eine auffällige Box zu erstellen.
