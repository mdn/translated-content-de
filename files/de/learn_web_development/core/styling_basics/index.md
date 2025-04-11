---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und anzuordnen — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet alle grundlegenden CSS-Kenntnisse, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren von Basis-Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) Modul durch, wenn nicht).

> [!NOTE]
> Wenn Sie auf einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht die Möglichkeit haben, Ihre eigenen Dateien zu erstellen, könnten Sie die meisten der Code-Beispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache unterwegs lernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie noch nicht gesehen haben.
- [Stilgestaltung einer Biografieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografieseite gestalten, wobei Sie einige der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich dem Schreiben von Selektoren und der Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektorfunktionen rekapitulieren, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu targetieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind die sogenannten **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl dieser und sie dienen oft ganz spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen wollen, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir betrachten werden, sind sogenannte Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, um Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auszuwählen (z.B. Kind oder Geschwister).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie erhalten ein Verständnis dafür, wie es funktioniert und die Terminologie, die sich darauf bezieht.
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — dem Kaskadierung-Prinzip, der Spezifität und der Vererbung — die steuern, wie CSS auf HTML angewandt wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten zulässig sind. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen untersuchen, was sie sind und wie sie funktionieren.
- [Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Merkmale in Ihrem Design sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Wege zusammenfassen, wie Elemente über CSS eine Größe erhalten, und ein paar Begriffe zur Dimensionierung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rändern machen können. Von der Erstellung von Verläufen, Hintergrundbildern und abgerundeten Ecken, Hintergründe und Ränder sind die Antwort auf viele Stilfragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Box zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS handhaben können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion betrachten wir, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten, ein wenig anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustrationen ersparen, und diese Lektion wird einige der Hauptdinge hervorheben, die Sie wissen müssen.
- [Tabellen stilisieren](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Styling einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Techniken zur Tabellen-Stilgestaltung.
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel wird Ihnen eine Anleitung geben, wie Sie ein CSS-Problem debuggen können, und Ihnen zeigen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können herauszufinden, was vor sich geht.
- [Herausforderung: Fundamentales CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung beinhaltet eine Reihe von verwandten Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Spielerkarte/soziales Medienprofil.
- [Herausforderung: Elegantes Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck machen wollen, kann das Schreiben eines Briefs auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um ein solches Aussehen zu erreichen.
- [Herausforderung: Eine ansprechend aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung können Sie mehr Übung darin erhalten, attraktiv aussehende Boxen zu erstellen, indem Sie versuchen, eine auffällige Box zu erstellen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als zusätzliche Ziele betrachten, die optional studiert werden können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Styling-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel wird Ihnen eine Anleitung geben, wie Sie ein CSS-Problem debuggen können, und Ihnen zeigen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können herauszufinden, was vor sich geht.
- [Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [kaskadierende Ebenen](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Ausrichtungen werden als Schreibrichtungen bezeichnet. Da Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibrichtungen sehr hilfreich sein, daher werden wir sie in diesem Artikel vorstellen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Methoden zum Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Der [_Lernen Sie HTML und CSS_](https://scrimba.com/?via=mdn) Kurs von Scrimba lehrt HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
