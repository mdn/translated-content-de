---
title: Grundlagen der CSS-Styling
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten – zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet Ihnen alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie Sie Dateien erstellen und verwalten (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie nicht in der Lage sind, Ihre eigenen Dateien zu erstellen, können Sie (die meisten) Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert das im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache lernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie bisher noch nicht betrachtet haben.
- [Styling einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten und einige der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich des Schreibens von Selektoren und der Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige Grundlagen der Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrer HTML-Studie wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu targetieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir betrachten werden, sind **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl von ihnen, und sie haben oft ganz spezifische Zwecke. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsuchen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um mit CSS komplexere Layouts zu erstellen oder Elemente an anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS-Boxmodell _Box model_ ansehen. Sie werden ein Verständnis dafür bekommen, wie es funktioniert und welche Terminologie dazu gehört.
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, die Spezifität und die Vererbung – die kontrollieren, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten erlaubt ist. In dieser Lektion werden wir einige der am häufigsten verwendeten Werttypen ansehen, was sie sind und wie sie funktionieren.
- [Elemente in CSS skalieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größeneinstellung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und Rahmen machen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken, Hintergründe und Rahmen sind die Antwort auf viele Stylingfragen in CSS.
- [Überfüllte Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn es zu viele Inhalte gibt, um in ein Elementfeld zu passen. In dieser Lektion werden Sie lernen, wie Sie den Überlauf mit CSS verwalten können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich im Hinblick auf die Möglichkeit, sie mit CSS zu gestalten, ein wenig anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion hebt einige der Hauptsachen hervor, die Sie wissen müssen.
- [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Styling einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Techniken zur Tabellenstilisierung.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlegendes CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe zusammenhängender Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen – eine Visitenkarte/Spielerkarte/soziales Medienprofil.
- [Herausforderung: Stilvolles Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck hinterlassen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein sehr guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um solch ein Aussehen zu erzielen.
- [Herausforderung: Eine cool aussehende Box](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie mehr Übung im Erstellen von cool aussehenden Boxen bekommen, indem Sie versuchen, eine auffällige Box zu erstellen.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind trotzdem interessant – Sie sollten diese als Stretch-Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Cascade) und [CSS-Spezifizität](/de/docs/Web/CSS/Specificity) aufbaut.
- [Textausrichtungen handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) – diese unterschiedlichen Richtungen werden als Schreibmodi bezeichnet. Während Sie in Ihrem Studium fortschreiten und beginnen, mit Layout zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich für Sie sein, daher werden wir sie in diesem Artikel einführen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werden wir einen kurzen Blick auf einige bewährte Verfahren zum Schreiben Ihres CSS werfen, um es leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen in Gebrauch finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Der _HTML und CSS lernen_-Kurs von [Scrimba](https://scrimba.com?via=mdn) lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
