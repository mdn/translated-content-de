---
title: Grundlagen der CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und anzuordnen – zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Elemente hinzuzufügen. Dieses Modul vermittelt Ihnen alle grundlegenden CSS-Kenntnisse, die Sie vorerst benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Artikel [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im Artikel [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (bearbeiten Sie unser Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content), falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache auf dem Weg lernen. Wir werden auch die CSS-Syntaxelemente überprüfen, die Sie bisher noch nicht gesehen haben.
- [Stilisierung einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten und Ihre Fähigkeiten aus den letzten Lektionen, einschließlich des Schreibens von Selektoren und Textstilisierung, testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektor-Fundamente wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details zum markierten Element liefern. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir betrachten werden, sind **Pseudoklassen** und **Pseudoelemente**. Es gibt viele davon, und sie erfüllen oft sehr spezifische Zwecke. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren in einer Weise zu kombinieren, die es uns erlaubt, Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auszuwählen (zum Beispiel Kind oder Geschwister).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat einen Rahmen darum, und das Verständnis dieser Rahmen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie werden verstehen, wie es funktioniert und die Terminologie, die sich darauf bezieht.
- [Konflikte beheben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, die Spezifität und die Vererbung –, die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.
- [Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Features in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe über Größen, die Ihnen in der Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und Rahmen tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken, Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt in ein Element-Box passt. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich geringfügig anders als reguläre Boxen in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann Frustration ersparen, und diese Lektion wird einige der wichtigsten Dinge aufzeigen, die Sie wissen müssen.
- [Tabellen stilisieren](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Eine HTML-Tabelle zu gestalten ist vielleicht nicht die glamouröseste Aufgabe der Welt, aber manchmal muss man es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, wobei einige spezifische Techniken zur Tabellengestaltung hervorgehoben werden.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlegendes CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe von zusammenhängenden Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Gamer-Karte/Social-Media-Profil.
- [Herausforderung: Elegantes Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck hinterlassen möchten, kann es ein guter Anfang sein, einen Brief auf schönem Briefpapier zu schreiben. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um einen solchen Look zu erreichen.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung können Sie Ihre Fähigkeiten im Erstellen cooler Boxen weiter ausüben, indem Sie versuchen, eine auffällige Box zu erstellen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernweges, aber dennoch interessant – Sie sollten diese als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Core fertig sind.

- [Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Richtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) – diese verschiedenen Richtungen werden als Schreibmodi bezeichnet. Während Sie in Ihrem Studium voranschreiten und anfangen, mit Layouts zu arbeiten, wird es sehr hilfreich sein, ein Verständnis für Schreibmodi zu haben, daher werden wir diese in diesem Artikel vorstellen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, größere Stylesheets und große Projekte zu bearbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Verfahren zum Schreiben Ihres CSS, um es einfach wartbar zu machen, und auf einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) Kurs _HTML und CSS lernen_ lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von fachkundigen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
