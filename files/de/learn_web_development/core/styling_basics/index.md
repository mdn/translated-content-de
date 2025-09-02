---
title: Grundlagen der CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: d86ab254d0ed24f36a4657e4f54409df786b2433
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten - zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten zu unterteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren von grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben), und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (bearbeiten Sie unser Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content), falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel nehmen wir ein einfaches HTML-Dokument und wenden CSS darauf an, um einige praktische Details der Sprache zu lernen. Wir werden auch CSS-Syntax-Funktionen überprüfen, die Sie bisher noch nicht betrachtet haben.
- [Styling einer Biographieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biographieseite gestalten und sich in einigen der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich der Erstellung von Selektoren, Hintergrundfärbung und Textgestaltung. Wir werden Sie auch dazu einladen, einige grundlegende CSS-Funktionen zu recherchieren, die wir nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige Grundlagen zu Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie von Ihrem Studium des HTML wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attribut-Selektoren verwenden, um Elemente mit bestimmten Attributen zu selektieren. Diese Lektion zeigt Ihnen, wie man diese sehr nützlichen Selektoren verwendet.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Der nächste Satz von Selektoren, den wir betrachten, wird als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Es gibt eine große Anzahl dieser und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die verschiedenen Typen durchsuchen, um festzustellen, ob etwas für die Aufgabe, die Sie erreichen möchten, geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir betrachten, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, wodurch es möglich wird, Elemente basierend auf ihrer Lage im DOM relativ zu anderen Elementen auszuwählen (zum Beispiel Kind oder Geschwister).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : In CSS ist alles von einer Box umgeben, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie werden verstehen, wie es funktioniert und die Terminologie, die damit zusammenhängt.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln - die Kaskade, Spezifität und Vererbung -, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einen Blick auf einige der am häufigsten verwendeten Wertetypen werfen, was sie sind und wie sie funktionieren.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden, ist wichtig. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente über CSS eine Größe erhalten, und einige Begriffe zur Größenanpassung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und -Rändern tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder die Antwort auf viele Stil-Fragen in CSS.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementbox zu passen. In dieser Lektion erfahren Sie, wie Sie Überlauf mit CSS verwalten können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werfen wir einen Blick darauf, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als normale Boxen in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Eine HTML-Tabelle zu gestalten, ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir alle das tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Tabellenstiltechniken.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Hinweise, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können festzustellen, was vor sich geht.
- [Herausforderung: Schickes Briefpapier gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck machen möchten, kann das Schreiben eines Briefes auf schönem Briefpapier ein wirklich guter Anfang sein. In dieser Herausforderung werden Sie eine Online-Vorlage erstellen, um ein solches Erscheinungsbild zu erreichen.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen beibehalten haben, bevor Sie weitermachen. Wenn Sie alle zusammen erkunden möchten, können Sie sie unter [Testen Sie Ihre Fähigkeiten: Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills) finden.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber sie sind dennoch interessant - Sie sollten diese als zusätzliche Ziele in Betracht ziehen, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Fortgeschrittene Stileffekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel fungiert als Trickkiste, die eine Einführung in einige interessante fortgeschrittene Stilmerkmale wie Box-Schatten, Mischmodi und Filter bietet.
- [Kaskaden-Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Kaskadenschichten](/de/docs/Web/CSS/@layer) einzuführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links und auch von oben nach unten (wie im Japanischen) - diese unterschiedlichen Richtungen werden als Schreibrichtungen bezeichnet. Während Sie in Ihrem Studium fortschreiten und beginnen, mit Layout zu arbeiten, wird ein Verständnis von Schreibrichtungen Ihnen sehr nützlich sein, deshalb werden wir sie in diesem Artikel vorstellen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Sobald Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices zum Schreiben Ihrer CSS, um sie leicht pflegbar zu machen, und einige der Lösungen, die Sie in der Anwendung anderer finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Partner für Lerninhalte_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Bau und die Bereitstellung von fünf großartigen Projekten mit interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Partner für Lerninhalte_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
