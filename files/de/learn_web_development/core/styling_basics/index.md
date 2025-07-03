---
title: Grundlegendes zur CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um Schriftarten, Farben, Größen und Abstände Ihrer Inhalte zu ändern, sie in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet alle grundlegenden CSS-Kenntnisse, die Sie zunächst benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben), und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, wenn nicht).

> [!NOTE]
> Wenn Sie auf einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert das genau? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache kennenlernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie noch nicht angeschaut haben.
- [Gestaltung einer Biographieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : Bei dieser Herausforderung gestalten Sie eine einfache Bio-Seite und testen dabei einige der Fähigkeiten, die Sie in den letzten Lektionen gelernt haben, einschließlich der Erstellung von Selektoren und der Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige der grundlegenden Selektoren wiederholen, einschließlich der grundlegenden Typen-, Klassen- und ID-Selektoren.
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem Studium von HTML wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Der nächste Satz von Selektoren, den wir uns ansehen werden, wird als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Es gibt eine große Anzahl von ihnen, und sie dienen oft ziemlich spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsuchen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, werden als Kombinatoren bezeichnet. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen (zum Beispiel, Kind- oder Geschwisterelemente) auswählen können.
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box drumherum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder um Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS- _Box-Modell_ ansehen. Sie erhalten ein Verständnis dafür, wie es funktioniert und die Terminologie, die damit zusammenhängt.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede Eigenschaft, die in CSS verwendet wird, hat einen **Wertetyp**, der beschreibt, welche Art von Werten erlaubt sind. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Werttypen ansehen, was sie sind und wie sie funktionieren.
- [Größen von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Methoden zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenbestimmung, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen machen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu Hintergründen und Rahmen gibt es viele Antworten auf Styling-Fragen in CSS.
- [Überfließender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Element-Feld zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion sehen wir uns an, wie bestimmte spezialisierte Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als reguläre Boxen, was Ihre Fähigkeit betrifft, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion hebt einige der wichtigsten Dinge hervor, die Sie wissen sollten.
- [Tabellengestaltung](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Styling einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lassen kann, mit einigen spezifischen Techniken zur Tabellenformatierung.
- [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitung, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie Ihnen die DevTools, die in allen modernen Browsern enthalten sind, helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlegendes Verständnis von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung stellt eine Reihe von verwandten Übungen bereit, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Spielerkarte/soziales Medienprofil.
- [Herausforderung: Schickes Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie einen guten Eindruck hinterlassen möchten, kann es ein wirklich guter Anfang sein, einen Brief auf schönem Briefpapier zu schreiben. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erreichen.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung erhalten Sie etwas mehr Übung im Erstellen von cool aussehenden Boxen, indem Sie versuchen, eine auffällige Box zu erstellen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Kernbereichs fertig sind.

- [Erweiterte Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stileigenschaften wie Boxschatten, Mischmodi und Filter.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie im Japanischen) – diese unterschiedlichen Ausrichtungen werden als Schreibrichtungen bezeichnet. Wenn Sie in Ihrem Studium voranschreiten und anfangen, mit dem Layout zu arbeiten, wird Ihnen ein Verständnis für Schreibrichtungen sehr hilfreich sein. Daher werden wir sie in diesem Artikel einführen.
- [Organisation von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werden wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS werfen, um es leicht wartbar zu machen, und einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs _Lernen Sie HTML und CSS_ von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Aufbau und das Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Dozenten unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!] (https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
