---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten – beispielsweise, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, diesen in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet alle Grundlagen zu CSS, die Sie derzeit benötigen, einschließlich Syntax, Features und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Artikel [Grundlegende Software installieren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und wissen, wie Sie Dateien erstellen und verwalten (nachzulesen im Artikel [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Außerdem sollten Sie mit HTML vertraut sein (arbeiten Sie unser Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer/Tablet/anderen Gerät arbeiten, auf dem Sie keine eigenen Dateien erstellen können, könnten Sie die meisten Codebeispiele in einem Online-Coding-Programm wie [JSBin](https://jsbin.com/) oder [Glitch](https://glitch.com/) ausprobieren.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechende Webseiten zu erstellen — aber wie funktioniert es hinter den Kulissen? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel nehmen wir ein einfaches HTML-Dokument und wenden CSS darauf an, wobei wir einige praktische Details der Sprache lernen. Außerdem überprüfen wir CSS-Syntax-Funktionen, die Sie bisher noch nicht kennengelernt haben.
- [Eine Biografie-Seite gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung stylen Sie eine einfache Biografie-Seite und testen damit einige der Fähigkeiten, die Sie in den letzten Lektionen gelernt haben, wie das Schreiben von Selektoren und das Stylen von Texten.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel wiederholen wir einige grundlegende Selektoren, einschließlich der Typ-, Klassen- und ID-Selektoren.
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute besitzen, die weitere Informationen über das markierte Element geben. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen auszuwählen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden können.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir uns ansehen, sind sogenannte **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon, und sie erfüllen oft sehr spezifische Zwecke. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um herauszufinden, ob es etwas gibt, das für Ihre Aufgabe geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren und damit Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen (z. B. Kind- oder Geschwisterelemente) auszuwählen.
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : In CSS hat alles eine Box um sich herum, und das Verstehen dieser Boxen ist entscheidend, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS-_Box-Modell_. Sie werden verstehen, wie es funktioniert und welche Begriffe damit verbunden sind.
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Cascade, Spezifität und Vererbung —, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stilangaben gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Arten von Werten zulässig sind. In dieser Lektion sehen wir uns einige der am häufigsten verwendeten Wertetypen an, was sie sind und wie sie funktionieren.
- [Elementgrößen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Elemente in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Wege zusammen, wie Elemente mit CSS eine Größe erhalten, und definieren einige Begriffe, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werfen wir einen Blick auf einige der kreativen Möglichkeiten, die Sie mit CSS-Hintergründen und Rahmen haben. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken bieten Hintergründe und Rahmen Antworten auf viele Styling-Fragen in CSS.
- [Überfließender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn zu viel Inhalt für eine Box vorhanden ist. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS handhaben.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion betrachten wir, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als gewöhnliche Boxen, wenn es darum geht, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann Frustrationen vermeiden, und diese Lektion hebt einige der wichtigsten Punkte hervor, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir es alle machen. Dieser Artikel erklärt, wie Sie HTML-Tabellen ansprechend gestalten können, mit einigen spezifischen Techniken zur Tabellenformatierung im Fokus.
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die Entwicklertools in modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Herausforderung: Grundlagen der CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung umfasst mehrere zusammenhängende Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Spielerkarte/Soziales-Media-Profil.
- [Herausforderung: Elegantes Briefpapier erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie einen guten Eindruck machen möchten, kann es ein wirklich guter Anfang sein, einen Brief auf elegantem Briefpapier zu schreiben. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um solch einen Look zu erreichen.
- [Herausforderung: Eine coole Box gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Cool-looking_box) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie weitere Erfahrungen im Erstellen cooler Boxen sammeln, indem Sie versuchen, eine auffällige Box zu gestalten.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie können diese als Stretch-Ziele betrachten, die Sie optional nach Abschluss der Hauptartikel im Core-Bereich studieren können.

- [Erweiterte Styling-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die Entwicklertools in modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.
- [Cascade Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Sie mit [Cascade Layers](/de/docs/Web/CSS/@layer) vertraut machen, einem fortgeschrittenen Feature, das auf den grundlegenden Konzepten der [CSS-Cascade](/de/docs/Web/CSS/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/Specificity) aufbaut.
- [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich Rechts-nach-Links sowie Oben-nach-Unten-Content (wie Japanisch). Diese unterschiedlichen Ausrichtungen werden als Schreibmodi bezeichnet. Wenn Sie in Ihrem Studium fortschreiten und beginnen, mit Layouts zu arbeiten, wird ein Verständnis für Schreibmodi sehr hilfreich sein. Deshalb führen wir sie in diesem Artikel ein.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege eines riesigen CSS-Files eine Herausforderung sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben von CSS, um es leicht wartbar zu machen, sowie auf einige Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [HTML und CSS lernen](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _HTML- und CSS-lernen_ Kurs lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
