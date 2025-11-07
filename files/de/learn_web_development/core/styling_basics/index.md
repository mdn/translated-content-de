---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten – zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten zu teilen oder Animationen und andere dekorative Funktionen hinzuzufügen. Dieses Modul bietet Ihnen alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Strukturierung von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content) durch, falls nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechend aussehende Webseiten zu erstellen, aber wie funktioniert es unter der Oberfläche? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache erlernen. Wir werden auch die CSS-Syntax-Features überprüfen, die Sie noch nicht betrachtet haben.
- [Gestalten einer Biografieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografieseite gestalten und einige der Fähigkeiten testen, die Sie in den letzten Lektionen gelernt haben, einschließlich des Schreibens von Selektoren, der Hintergrundfärbung und des Textstylings. Wir werden Sie auch einladen, einige grundlegende CSS-Funktionen nachzuschlagen, die wir nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige Grundlagen der Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element liefern. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu zielen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Reihe von Selektoren, die wir uns ansehen werden, sind sogenannte **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie Sie diese verwenden, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel, Kind- oder Geschwisterelemente).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verständnis dieser Boxen ist der Schlüssel dazu, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS-Boxmodell ansehen. Sie werden ein Verständnis dafür bekommen, wie es funktioniert und die Terminologie, die damit verbunden ist.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – der Kaskade, der Spezifität und der Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.
- [Stile der Blogseite korrigieren](/de/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Herausforderung</sup>
  - : In dieser Herausforderung geben wir Ihnen ein einfaches Blogseiten-Beispiel, das teilweise gestylt ist. Wir benötigen Ihre Hilfe, um einige Probleme mit dem vorhandenen CSS zu beheben und einige Stile hinzuzufügen, um es fertigzustellen. Dabei werden wir Ihr Wissen über Selektoren, das Boxmodell und Konflikte/Kaskaden testen.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir uns einige der am häufigsten verwendeten Wertetypen ansehen, was sie sind und wie sie funktionieren.
- [Elemente in CSS dimensionieren](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Zu verstehen, wie groß die verschiedenen Features in Ihrem Design sein werden, ist wichtig. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Dimensionierung, die Ihnen in der Zukunft helfen werden.
- [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rändern tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder die Antwort auf viele Stilfragen in CSS.
- [Herausforderung: Dimensionieren und Dekorieren eines Inhaltsfelds](/de/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel) <sup>Herausforderung</sup>
  - : In dieser Herausforderung steht Ihnen eine leicht gestylte Seitenstruktur zur Verfügung, die ein Inhaltsfeld rendert, mit einer Überschrift oben und einer Schaltflächenleiste unten. Wir möchten, dass Sie den Anweisungen folgen, um es zu dimensionieren und zu dekorieren und ein interessantes Layout zu erzeugen. Dabei testen wir Ihr Wissen über CSS-Werte und -Einheiten, Dimensionierung sowie Hintergründe und Ränder.
- [Überlaufender Inhalt](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf tritt auf, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen. In dieser Lektion lernen Sie, wie Sie Überläufe mit CSS verwalten.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich in Bezug auf Ihre Möglichkeit, sie mit CSS zu stylen, ein wenig anders als normale Boxen. Zu verstehen, was möglich ist und was nicht, kann Frustration sparen, und diese Lektion wird einige der Hauptsachen hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt und hebt einige spezifische Techniken zum Gestalten von Tabellen hervor.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel wird Ihnen Anleitungen geben, wie Sie ein CSS-Problem debuggen können, und zeigt Ihnen, wie die DevTools, die in allen modernen Browsern enthalten sind, Ihnen helfen können, herauszufinden, was vor sich geht.

## Testen Sie Ihre Fähigkeiten

Sie finden „Testen Sie Ihre Fähigkeiten“-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie fortfahren. Wenn Sie alle diese zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: CSS-Stilgestaltungsgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel fungiert als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stilfunktionen wie Box-Schatten, Mischmodi und Filter.
- [Kaskadenschicht](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Sie in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) einführen, eine fortgeschrittene Funktion, die auf den grundlegenden Konzepten der [CSS-Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und der [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um verschiedene Schreibrichtungen von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (zoals Japanisch) — diese unterschiedlichen Schreibrichtungen werden als Schreibmodi bezeichnet. Wenn Sie in Ihrer Ausbildung Fortschritte machen und beginnen, mit Layout zu arbeiten, wird ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel einführen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es herausfordernd sein kann, eine große CSS-Datei zu pflegen. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben von CSS, damit es einfach zu warten ist, und einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn HTML and CSS_ Kurs von [Scrimba](https://scrimba.com/?via=mdn) lehrt Ihnen HTML und CSS, indem Sie fünf großartige Projekte erstellen und bereitstellen, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von sachkundigen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
