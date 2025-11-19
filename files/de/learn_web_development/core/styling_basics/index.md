---
title: Grundlagen der CSS-Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: cdf7db9ffe08cb952243d7e20b9beee4e9c9451b
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — beispielsweise, um die Schriftart, Farbe, Größe und den Abstand Ihrer Inhalte zu ändern, sie in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet alle CSS-Grundlagen, die Sie zunächst benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es im Hintergrund? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu stylen.
- [Einstieg in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache kennenlernen. Wir werden auch die CSS-Syntax-Funktionen überprüfen, die Sie noch nicht betrachtet haben.
- [Gestaltung einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten, wobei einige der in den letzten Lektionen erlernten Fähigkeiten getestet werden, einschließlich der Erstellung von Selektoren, dem Färben von Hintergründen und der Textgestaltung. Wir laden Sie auch ein, einige grundlegende CSS-Funktionen nachzuschlagen, die wir nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektor-Konzepte wiederholen, einschließlich der grundlegenden Typen-, Klassen- und ID-Selektoren.
- [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element angeben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu markieren. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir uns ansehen werden, wird als **Pseudo-Klassen** und **Pseudo-Elemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe funktioniert, die Sie zu erreichen versuchen.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (z. B. Kind- oder Geschwisterelement).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich, und das Verständnis dieser Boxen ist der Schlüssel, um komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werfen wir einen Blick auf das CSS _Box-Modell_. Sie werden verstehen, wie es funktioniert und welche Begriffe sich darauf beziehen.
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — der Kaskade, Spezifität und Vererbung — die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Erklärungen gelöst werden.
- [Stil einer Blog-Seite korrigieren](/de/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Herausforderung</sup>
  - : In dieser Herausforderung geben wir Ihnen ein einfaches Blog-Seitenbeispiel, das teilweise gestaltet ist. Wir benötigen, dass Sie einige Probleme mit dem vorhandenen CSS beheben und einige Stile hinzufügen, um es abzuschließen. Dabei werden wir Ihr Wissen über Selektoren, das Box-Modell und Konflikte/Kaskaden testen.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.
- [Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Es ist wichtig zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden. In dieser Lektion werden wir die verschiedenen Möglichkeiten zusammenfassen, wie Elemente ihre Größe über CSS erhalten und einige Begriffe zur Dimensionierung definieren, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die man mit CSS-Hintergründen und Rahmen machen kann. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken — Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.
- [Herausforderung: Größe und Dekoration eines Inhaltsfensters](/de/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel) <sup>Herausforderung</sup>
  - : In dieser Herausforderung erhalten Sie eine leicht gestaltete Seitenstruktur, die ein Inhaltsfenster rendert, mit einer Überschrift oben und einer Schaltflächenleiste unten. Wir möchten, dass Sie den Anweisungen folgen, um die Größe festzulegen und es zu dekorieren, um ein interessantes Layout zu erzeugen. Dabei testen wir Ihr Wissen über CSS-Werte und -Einheiten, Größenanpassung sowie Hintergründe und Rahmen.
- [Überlaufende Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mithilfe von CSS verwalten können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Styling-Möglichkeiten mit CSS etwas anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustration ersparen, und diese Lektion wird einige der Hauptsachen hervorheben, die Sie wissen müssen.
- [Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Stylen einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen spezifischen Tabellen-Styling-Techniken, die hervorgehoben werden.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die in allen modernen Browsern enthaltenen DevTools Ihnen helfen können, herauszufinden, was vor sich geht.

## Testen Sie Ihre Fähigkeiten

Sie werden Artikel "Testen Sie Ihre Fähigkeiten" zwischen den Tutorial-Artikeln finden, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: CSS-Gestaltungsgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills) aufgelistet.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als erweiterte Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel fungiert als eine Sammlung von Tricks und bietet eine Einführung in einige interessante erweiterte Stilfunktionen wie Boxschatten, Mischmodi und Filter.
- [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Sie in [Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) einführen, eine fortgeschrittenere Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um besser verschiedene Inhaltsrichtungen zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) — diese unterschiedlichen Richtungen werden als Schreibrichtungen bezeichnet. Während Sie in Ihrem Studium voranschreiten und beginnen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibrichtungen sehr hilfreich sein, daher werden wir sie in diesem Artikel einführen.
- [Organisieren von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Wartung einer riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werden wir einen kurzen Blick auf einige bewährte Praktiken werfen, um Ihr CSS so zu schreiben, dass es leicht wartbar ist, und einige der Lösungen betrachten, die andere verwenden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_-Kurs von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS durch den Aufbau und die Bereitstellung von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
