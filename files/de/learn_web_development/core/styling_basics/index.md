---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet alle CSS-Grundlagen, die Sie momentan benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) detailliert beschrieben), und verstehen, wie man Dateien erstellt und verwaltet (wie in [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) detailliert beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Modul durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie nicht die Möglichkeit haben, eigene Dateien zu erstellen, könnten Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es unter der Haube? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache erlernen. Wir werden auch die CSS-Syntaxfunktionen überprüfen, die Sie noch nicht angesehen haben.
- [Styling einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten und dabei einige der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich das Schreiben von Selektoren und Textstyling.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektorfundamente rekapitulieren, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu zielen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Auswahl von Selektoren, die wir uns ansehen werden, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchgehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren in einer Weise zu kombinieren, die es uns ermöglicht, Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen (zum Beispiel Kind oder Geschwister) auszuwählen.
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box darum, und das Verständnis dieser Boxen ist entscheidend, um komplexere Layouts mit CSS zu erstellen oder Artikel mit anderen Artikeln auszurichten. In dieser Lektion werden wir das CSS-Boxmodell untersuchen. Sie werden verstehen, wie es funktioniert, und die Terminologie, die sich darauf bezieht.
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen untersuchen, was sie sind und wie sie funktionieren.
- [Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Funktionen Ihres Designs sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Methoden zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe über die Größenbestimmung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und -Rändern tun können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder die Antwort auf viele Styling-Fragen in CSS.
- [Überflussinhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überfluss ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in eine Element-Box zu passen. In dieser Lektion lernen Sie, wie man den Überfluss mit CSS verwaltet.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als reguläre Boxen in Bezug auf Ihre Fähigkeit, sie mit CSS zu stylen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Die Gestaltung einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen spezifischen Stiltechniken für Tabellen.
- [Debuggen von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitung, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlagen des CSS-Verständnisses](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Gamer-Karte/Social-Media-Profil.
- [Herausforderung: Erstellung von schönen Geschäftspapieren](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck machen wollen, kann es ein wirklich guter Start sein, einen Brief auf schönem Geschäftspapier zu schreiben. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um ein solches Aussehen zu erreichen.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie etwas mehr Übung darin bekommen, cool aussehende Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernwegs, aber sie sind dennoch interessant — Sie sollten diese als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln im Kern fertig sind.

- [Fortgeschrittene Styling-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel gibt Ihnen Anleitung, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion hat zum Ziel, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Richtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Richtungen werden Schreibmodi genannt. Während Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel einführen.
- [Organisieren von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werden wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS werfen, um es leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen finden werden, die helfen, die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Kurs "Learn HTML and CSS"_ von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
