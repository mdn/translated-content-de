---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten – beispielsweise, um Schriftarten, Farben, Größen und Abstände Ihrer Inhalte zu ändern, diese in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Elemente hinzuzufügen. Dieses Modul bietet alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul starten, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Abschnitt [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und wissen, wie Sie Dateien erstellen und verwalten (wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten außerdem mit HTML vertraut sein (arbeiten Sie das Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, bei dem Sie keine eigenen Dateien erstellen können, können Sie (den größten Teil) der Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, attraktive Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein simples HTML-Dokument nehmen und CSS darauf anwenden, um einige praktische Details der Sprache kennenzulernen. Wir werden auch CSS-Syntaxfunktionen besprechen, die bisher noch nicht betrachtet wurden.
- [Gestaltung einer Biographieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung gestalten Sie eine einfache Biographie-Seite und testen dabei einige der Fähigkeiten, die Sie in den letzten Lektionen gelernt haben – unter anderem das Schreiben von Selektoren und Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige Grundlagen zu Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details zu dem markierten Element geben. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen zu targeten. Diese Lektion zeigt Ihnen, wie Sie diese äußerst nützlichen Selektoren verwenden.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir betrachten, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um festzustellen, ob etwas für die jeweilige Aufgabe geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir betrachten, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS-Box-Modell. Sie erfahren, wie es funktioniert und welche Terminologie dazu gehört.
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu vertiefen – die Kaskade, Spezifität und Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stilangaben gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werfen wir einen Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.
- [Größe von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Elemente in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente ihre Größe über CSS erhalten, und definieren einige Begriffe zum Thema Größen, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werfen wir einen Blick auf einige kreative Möglichkeiten, die Sie mit CSS-Hintergründen und Rahmen umsetzen können. Von Farbverläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu Hintergründen und Rahmen sind dies Antworten auf viele Styling-Fragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen. In dieser Lektion lernen Sie, wie Sie den Überlauf mithilfe von CSS verwalten können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Styling-Möglichkeiten mit CSS etwas anders als reguläre Boxen. Zu verstehen, was möglich und was nicht möglich ist, kann Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Styling einer HTML-Tabelle gehört nicht zu den glamourösesten Aufgaben, aber manchmal muss es getan werden. Dieser Artikel erklärt, wie man HTML-Tabellen optisch ansprechender gestaltet, und hebt einige spezifische Techniken zur Tabellengestaltung hervor.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen eine Anleitung, wie Sie ein CSS-Problem beheben können, und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen dabei helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlagenverständnis CSS](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung beinhaltet eine Reihe verwandter Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Gamer-Karte/soziales Medienprofil.
- [Herausforderung: Elegantes Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie einen guten Eindruck machen möchten, kann das Schreiben eines Briefes auf schönem, personalisiertem Briefpapier ein guter Anfang sein. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erzielen.
- [Herausforderung: Eine coole Box erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung üben Sie weiter, coole Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber dennoch interessant – Sie können diese als zusätzliche Lernziele betrachten, die Sie optional studieren können, wenn Sie die Hauptartikel abgeschlossen haben.

- [Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel gibt Ihnen eine Anleitung, wie Sie ein CSS-Problem beheben können, und zeigt Ihnen, wie die DevTools in modernen Browsern Ihnen dabei helfen können, herauszufinden, was vor sich geht.
- [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenebenen](/de/docs/Web/CSS/@layer) einzuführen, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die Unterstützung unterschiedlicher Schreibrichtungen von Inhalten zu verbessern, einschließlich von rechts nach links und auch von oben nach unten (z. B. Japanisch) – diese unterschiedlichen Ausrichtungen werden als Schreibmodi bezeichnet. Während Sie in Ihrem Studium fortschreiten und mit Layouts arbeiten, wird ein Verständnis von Schreibmodi sehr hilfreich sein; daher stellen wir sie in diesem Artikel vor.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass das Verwalten einer riesigen CSS-Datei schwierig sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices zur Erstellung Ihres CSS, um es einfach zu pflegen, sowie auf einige der Lösungen, die Sie bei anderen finden können, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN-Partner für Lerninhalte_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML und CSS lernen_-Kurs lehrt Ihnen HTML und CSS durch fünf spannende Projekte, die Sie aufbauen und bereitstellen, mit Spaß bringenden interaktiven Lektionen und Herausforderungen von kompetenten Lehrkräften.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN-Partner für Lerninhalte_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
