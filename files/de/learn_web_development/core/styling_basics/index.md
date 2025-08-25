---
title: Grundlagen der CSS Gestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 24db8cbacdb7be74cb14ce6cd6bf90b207a85348
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und zu layouten — zum Beispiel, um Schriftart, Farbe, Größe und Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet Ihnen alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im [Installieren von Basissoftware](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie man Dateien erstellt und verwaltet (wie im [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (bearbeiten Sie unser Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content), wenn nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, können Sie versuchen, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, großartig aussehende Webseiten zu erstellen, aber wie funktioniert es unter der Haube? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Erste Schritte mit CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache auf dem Weg lernen. Wir werden auch die CSS-Syntax-Features überprüfen, die Sie noch nicht betrachtet haben.
- [Stylen einer Biografie-Seite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung werden Sie eine einfache Biografie-Seite gestalten, um einige der Fähigkeiten zu testen, die Sie in den letzten Lektionen gelernt haben, einschließlich dem Schreiben von Selektoren und Textgestaltung.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige Grundlagen der Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die weitere Details über das markierte Element geben. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen zu finden. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir betrachten werden, sind sogenannte **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl davon, und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, geeignet ist.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir betrachten werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM im Verhältnis zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box um sich herum, und das Verstehen dieser Boxen ist der Schlüssel, um in der Lage zu sein, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie werden ein Verständnis dafür erlangen, wie es funktioniert und wie die Terminologie dazu in Beziehung steht.
- [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — den Cascade, die Spezifität und die Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Werttyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Werttypen betrachten, was sie sind und wie sie funktionieren.
- [Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Es ist wichtig, zu verstehen, wie groß die verschiedenen Funktionen in Ihrem Design sein werden. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenanpassung, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige kreative Dinge ansehen, die Sie mit CSS-Hintergründen und -Rändern tun können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken, Hintergründe und Ränder sind die Antwort auf viele Styling-Fragen in CSS.
- [Überlauf Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn es zu viel Inhalt gibt, um in ein Element-Feld zu passen. In dieser Lektion lernen Sie, wie man Überlauf mit CSS verwaltet.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich ein wenig anders als normale Boxen bezüglich Ihrer Fähigkeit, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen vermeiden, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht der glamouröseste Job der Welt, aber manchmal müssen wir alle es tun. Dieser Artikel erklärt, wie man HTML-Tabellen gut aussehen lässt, mit einigen speziellen Techniken zum Tabellenstyling.
- [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen zum Debuggen eines CSS-Problems und zeigt Ihnen, wie die in modernen Browsern enthaltenen DevTools Ihnen helfen können herauszufinden, was vor sich geht.
- [Herausforderung: Grundlegendes CSS-Verständnis](/de/docs/Learn_web_development/Core/Styling_basics/Fundamental_CSS_comprehension) <sup>Herausforderung</sup>
  - : Diese Herausforderung bietet eine Reihe verwandter Übungen, die abgeschlossen werden müssen, um das endgültige Design zu erstellen — eine Visitenkarte/Gamer-Karte/Social-Media-Profil.
- [Herausforderung: Schicke Briefköpfe erstellen](/de/docs/Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper) <sup>Herausforderung</sup>
  - : Wenn Sie den richtigen Eindruck machen möchten, kann es ein wirklich guter Anfang sein, einen Brief auf schönem Briefkopfpapier zu schreiben. In dieser Herausforderung erstellen Sie eine Online-Vorlage, um einen solchen Look zu erreichen.

## Testen Sie Ihre Fähigkeiten

Sie finden Artikel zum "Testen Sie Ihre Fähigkeiten" zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen behalten haben, bevor Sie weitermachen. Wenn Sie alle diese zusammen erkunden möchten, finden Sie sie aufgelistet unter [Testen Sie Ihre Fähigkeiten: CSS Grundkenntnisse](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills).

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfades, aber sie sind dennoch interessant — Sie sollten sie als Stretch-Ziele betrachten, um sie optional zu studieren, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Styling-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stylingeigenschaften wie Box-Schatten, Mischmodi und Filter.
- [Cascade-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion soll Ihnen [Cascade-Ebenen](/de/docs/Web/CSS/@layer) vorstellen, ein fortgeschrittenes Feature, das auf den grundlegenden Konzepten der [CSS-Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) und [CSS-Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS weiterentwickelt, um die unterschiedliche Ausrichtung von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie im Japanischen) — diese unterschiedlichen Ausrichtungen werden als Schreibmodi bezeichnet. Wenn Sie im Studium vorankommen und anfangen, mit Layouts zu arbeiten, wird Ihnen ein Verständnis der Schreibmodi sehr hilfreich sein, daher werden wir sie in diesem Artikel einführen.
- [Organisieren von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Wartung einer riesigen CSS-Datei eine Herausforderung sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Praktiken zum Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die Sie von anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [Lernen Sie HTML und CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com/?via=mdn) _HTML- und CSS-Kurs_ lehrt Ihnen HTML und CSS durch das Erstellen und Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern beigebracht werden.
- [Schreiben Sie Ihre ersten Zeilen CSS!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
