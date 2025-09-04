---
title: Grundlagen der CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 5ed0891989972a0dbfdc5c1d95fa1d52a58395cb
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten – zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet Ihnen alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie beschrieben in [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)) und verstehen, wie Sie Dateien erstellen und verwalten (wie beschrieben in [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechende Webseiten zu gestalten, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache lernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie noch nicht betrachtet haben.
- [Gestaltung einer Biografieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Challenge</sup>
  - : In dieser Herausforderung gestalten Sie eine einfache Biografieseite, um einige der Fähigkeiten zu testen, die Sie in den letzten Stunden gelernt haben, einschließlich des Schreibens von Selektoren, des Färbens von Hintergründen und der Textgestaltung. Wir laden Sie auch ein, einige grundlegende CSS-Funktionen nachzuschlagen, die wir nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektor-Konzepte wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details zu dem markierten Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu identifizieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Der nächste Satz von Selektoren, den wir betrachten werden, wird als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir betrachten werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind oder Geschwister).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie werden verstehen, wie es funktioniert und die Terminologie, die damit verbunden ist.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – der Kaskade, der Spezifität und der Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.
- [Stile auf einer Blog-Seite beheben](/de/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Challenge</sup>
  - : In dieser Herausforderung geben wir Ihnen ein einfaches Blog-Seitenbeispiel, das teilweise gestaltet ist. Wir brauchen Sie, um einige Probleme mit dem bestehenden CSS zu beheben und einige Stile hinzuzufügen, um es fertigzustellen. Unterwegs werden wir Ihr Wissen über Selektoren, das Box-Modell und Konflikte/Kaskade testen.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Werttypen ansehen, was sie sind und wie sie funktionieren.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Merkmale Ihres Designs sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenanpassung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen tun können. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu Hintergründen und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in ein Element-Box zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir untersuchen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten, etwas anders als reguläre Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir das alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Styling-Techniken für Tabellen hervorgehoben.
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen eine Anleitung, wie Sie ein CSS-Problem debuggen können und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Erstellung von Briefpapier mit elegantem Briefkopf](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Challenge</sup>
  - : Wenn Sie den richtigen Eindruck hinterlassen möchten, kann das Schreiben eines Briefs auf schönem Briefpapier ein sehr guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um ein solches Erscheinungsbild zu erreichen.

## Testen Sie Ihre Fähigkeiten

Zwischen den Tutorial-Artikeln finden Sie "Testen Sie Ihre Fähigkeiten"-Artikel, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie weitermachen. Wenn Sie alle diese zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: CSS-Gestaltungsgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant – Sie sollten diese als zusätzliche Herausforderungen betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Cores fertig sind.

- [Erweiterte Gestaltungseffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel dient als Trickkiste und stellt eine Einführung in einige interessante erweiterte Gestaltungsmerkmale wie Box-Schatten, Mischmodi und Filter bereit.
- [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Sie in [Kaskadenebenen](/de/docs/Web/CSS/@layer) einführen, ein fortgeschritteneres Merkmal, das auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit unterschiedlichen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedlichen Ausrichtungen von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) – diese unterschiedlichen Ausrichtungen werden als Schreibmodi bezeichnet. Wenn Sie in Ihrem Studium Fortschritte machen und beginnen, mit Layouts zu arbeiten, wird ein Verständnis für Schreibmodi sehr hilfreich für Sie sein, daher werden wir sie in diesem Artikel vorstellen.
- [Organisation von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass das Verwalten einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werden wir uns einige bewährte Praktiken zum Schreiben Ihres CSS ansehen, um es leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Partner für Lerninhalte_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs _Learn HTML and CSS_ von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Partner für Lerninhalte_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
