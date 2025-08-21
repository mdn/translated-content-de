---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um Schriftart, Farbe, Größe und Abstände Ihres Inhalts zu ändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieser Modul bietet alle grundlegenden CSS-Kenntnisse, die Sie vorerst benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie Dateien erstellt und verwaltet werden (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es im Grunde genommen? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel nehmen wir ein einfaches HTML-Dokument und wenden CSS darauf an. Dabei lernen wir einige praktische Details der Sprache kennen. Wir werden auch die CSS-Syntax-Merkmale überprüfen, mit denen Sie sich noch nicht befasst haben.
- [Gestaltung einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten, um einige der in den letzten Lektionen erlernten Fähigkeiten zu testen, einschließlich der Erstellung von Selektoren und der Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel fassen wir einige Grundlagen der Selektoren zusammen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind sogenannte **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erledigen möchten, passt.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).
- [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box darum, und das Verständnis dieser Boxen ist der Schlüssel dafür, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS _Boxmodell_ ansehen. Sie bekommen ein Verständnis dafür, wie es funktioniert und die Terminologie, die damit in Zusammenhang steht.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — der Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig ist. In dieser Lektion werden wir uns einige der häufig verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.
- [Elemente in CSS größenmäßig anpassen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten und definieren einige Begriffe über Größenverhältnisse, die Ihnen in der Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und Rahmen tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken — Hintergründe und Rahmen sind die Antwort auf viele Stylingfragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in eine Element-Box zu passen. In dieser Lektion lernen Sie, wie man Überlauf mit CSS verwaltet.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion sehen wir uns an, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich im Vergleich zu regulären Boxen etwas anders in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten. Verstehen, was möglich ist und was nicht, kann eine Menge Frustration ersparen, und diese Lektion wird einige der Hauptaspekte hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Eine HTML-Tabelle zu stylen ist vielleicht nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle das tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, wobei einige spezielle Tabellenstil-Techniken hervorgehoben werden.
- [Fehlersuche in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen dazu, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können herauszufinden, was los ist.
- [Herausforderung: Fundamentales CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe verwandter Aufgaben, die abgeschlossen werden müssen, um das endgültige Design — eine Visitenkarte/Gamer-Karte/Social-Media-Profil — zu erstellen.
- [Herausforderung: Erstellen von stilvollem Briefpapier](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck machen wollen, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um ein solches Aussehen zu erreichen.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie etwas mehr Übung darin bekommen, cool aussehende Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu gestalten.

## Testen Sie Ihre Fähigkeiten

Sie werden Artikel zum Thema "Testen Sie Ihre Fähigkeiten" zwischen den Tutorial-Artikeln finden, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie weitermachen. Wenn Sie alle diese zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als Stretch-Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kernmoduls fertig sind.

- [Erweiterte Stilisierungseffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel fungiert als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stilisierungsfunktionen wie Box-Schatten, Mischmodi und Filter.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Richtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Richtungen werden Schreibmodi genannt. Da Sie in Ihrem Studium Fortschritte machen und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibmodi sehr helfen, weshalb wir sie in diesem Artikel vorstellen werden.
- [Organisation von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege eines riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Praktiken für das Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die Sie von anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs _"Learn HTML and CSS"_ von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen vermittelt von sachkundigen Lehrern.
- [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
