---
title: Grundlagen der CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 5f37fd46fc2408e6b646fe81d4964be7168be197
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu verändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet alle grundlegenden CSS-Kenntnisse, die Sie für den Moment benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben), und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Falls Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, können Sie (die meisten) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es hinter den Kulissen? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache lernen. Wir werden auch die CSS-Syntax-Merkmale überprüfen, die Sie noch nicht angesehen haben.
- [Gestaltung einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung gestalten Sie eine einfache Biografie-Seite, was Ihnen die Möglichkeit bietet, einige der Fähigkeiten, die Sie in den letzten Lektionen gelernt haben, einschließlich Schreiben von Selektoren und Textgestaltung, zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel rekapitulieren wir einige grundlegende Selektoren, einschließlich der Basis-Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzuvisieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Der nächste Satz von Selektoren, den wir uns ansehen werden, werden **Pseudo-Klassen** und **Pseudo-Elemente** genannt. Es gibt eine große Anzahl davon, und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie durch die verschiedenen Typen schauen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen wollen, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen (zum Beispiel Kind oder Geschwister) auswählen können.
- [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat einen Rahmen um sich herum, und das Verstehen dieser Rahmen ist der Schlüssel, um in der Lage zu sein, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen zu auszurichten. In dieser Lektion werden wir uns das CSS _Boxmodell_ ansehen. Sie werden ein Verständnis dafür bekommen, wie es funktioniert und die Terminologie, die sich darauf bezieht.
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis von einigen der grundlegendsten Konzepte von CSS zu entwickeln — dem Kaskadenprinzip, der Spezifität und der Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe über Größen, die Ihnen in der Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir einige der kreativen Dinge betrachten, die Sie mit CSS-Hintergründen und -Rahmen machen können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken — Hintergründe und Rahmen sind die Antwort auf viele Gestaltungsfragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn es zu viel Inhalt gibt, um in eine Rahmeneinheit zu passen. In dieser Lektion lernen Sie, wie Sie Überläufe mit CSS verwalten.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich etwas anders als reguläre Rahmen in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen ansprechend gestaltet, mit einigen spezifischen Techniken zur Tabellengestaltung.
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitung, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlegendes CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe verwandter Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Gamer-Karte/Social-Media-Profil.
- [Herausforderung: Erstellung von Anleitungspapier mit Briefkopf](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie einen guten Eindruck machen möchten, kann es ein wirklich guter Anfang sein, einen Brief auf schönem Briefkopfpapier zu schreiben. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu realisieren.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung üben Sie weiter, coole Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind trotzdem interessant — Sie sollten diese als zusätzliche Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Gestaltungseffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel fungiert als Kiste voller Tricks und bietet eine Einführung in einige interessante erweiterte Gestaltungsmöglichkeiten, wie Boxschatten, Mischmodi und Filter.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um besser die unterschiedliche Richtung von Inhalten zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (zum Beispiel Japanisch) — diese unterschiedlichen Richtungen werden als Schreibmodi bezeichnet. Wenn Sie in Ihrem Studium fortschreiten und beginnen, mit Layouts zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel vorstellen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie mit größeren Stylesheets und großen Projekten arbeiten, werden Sie feststellen, dass das Pflegen einer riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS, um es leicht wartbar zu machen, und auf einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_ Kurs von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
