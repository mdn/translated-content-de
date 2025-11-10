---
title: Grundlagen der CSS-Stilgestaltung
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS (Cascading Style Sheets) wird verwendet, um Webseiten zu gestalten und anzuordnen — zum Beispiel, um die Schriftart, Farbe, Größe und den Abstand Ihres Inhalts zu ändern, ihn in mehrere Spalten aufzuteilen oder Animationen und andere dekorative Merkmale hinzuzufügen. Dieses Modul bietet alle CSS-Grundlagen, die Sie derzeit benötigen, einschließlich Syntax, Funktionen und Techniken.

## Voraussetzungen

Bevor Sie dieses Modul starten, sollten Sie eine grundlegende Arbeitsumgebung eingerichtet haben (wie im Abschnitt [Installation grundlegender Software](/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) beschrieben) und verstehen, wie Dateien erstellt und verwaltet werden (wie im Abschnitt [Umgang mit Dateien](/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) beschrieben). Sie sollten auch mit HTML vertraut sein (arbeiten Sie unser Modul [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content) durch, wenn nicht).

> [!NOTE]
> Wenn Sie an einem Computer, Tablet oder einem anderen Gerät arbeiten, auf dem Sie keine Dateien erstellen können, versuchen Sie, den Code in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) auszuführen.

## Tutorials und Herausforderungen

- [Was ist CSS?](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS ermöglicht es Ihnen, ansprechende Webseiten zu gestalten, aber wie funktioniert es eigentlich? Dieser Artikel erklärt, was CSS ist, wie die grundlegende Syntax aussieht und wie Ihr Browser CSS auf HTML anwendet, um es zu gestalten.
- [Einstieg in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : In diesem Artikel werden wir ein einfaches HTML-Dokument nehmen und CSS darauf anwenden, wobei wir einige praktische Details der Sprache erlernen. Wir werden auch die CSS-Syntaxfunktionen überprüfen, die Sie bisher noch nicht betrachtet haben.
- [Gestaltung einer Biografieseite](/de/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>Herausforderung</sup>
  - : In dieser Herausforderung gestalten Sie eine einfache Biografieseite und testen dabei einige der Fähigkeiten, die Sie in den letzten Lektionen gelernt haben, einschließlich der Erstellung von Selektoren, der Färbung von Hintergründen und der Textgestaltung. Wir werden Sie auch einladen, einige grundlegende CSS-Funktionen zu recherchieren, die wir nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.
- [Grundlegende CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : In diesem Artikel werden wir einige grundlegende Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren.
- [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : Wie Sie aus Ihrem HTML-Studium wissen, können Elemente Attribute haben, die zusätzliche Details über das ausgezeichnete Element liefern. In CSS können Sie Attributselektoren verwenden, um Elemente mit bestimmten Attributen anzusprechen. Diese Lektion zeigt Ihnen, wie Sie diese sehr nützlichen Selektoren verwenden.
- [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Die nächste Gruppe von Selektoren, die wir uns ansehen werden, werden als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Es gibt eine große Anzahl davon, und sie erfüllen oft sehr spezifische Zwecke. Sobald Sie wissen, wie man sie verwendet, können Sie die verschiedenen Typen durchsuchen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie erreichen möchten, funktioniert.
- [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, damit wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind oder Geschwister).
- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Alles in CSS hat eine Box darum, und das Verständnis dieser Boxen ist der Schlüssel, um in der Lage zu sein, komplexere Layouts mit CSS zu erstellen oder Elemente mit anderen Elementen auszurichten. In dieser Lektion werden wir uns das CSS _Box-Modell_ ansehen. Sie werden ein Verständnis dafür bekommen, wie es funktioniert und welche Terminologie darauf bezogen wird.
- [Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — den Stilfluss, die Spezifität und die Vererbung —, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.
- [Blog-Seitenstile beheben](/de/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles) <sup>Herausforderung</sup>
  - : In dieser Herausforderung geben wir Ihnen ein einfaches Blog-Seitenbeispiel, das teilweise gestaltet ist. Wir benötigen, dass Sie einige Probleme mit dem vorhandenen CSS beheben und einige Stile hinzufügen, um es abzuschließen. Dabei testen wir Ihr Wissen über Selektoren, das Box-Modell und Konflikte/Stilfluss.
- [Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS-Regeln enthalten [Deklarationen](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_declarations), die wiederum aus Eigenschaften und Werten bestehen. Jede in CSS verwendete Eigenschaft hat einen **Wertetyp**, der beschreibt, welche Art von Werten sie haben darf. In dieser Lektion werden wir einige der am häufigsten verwendeten Wertetypen betrachten, was sie sind und wie sie funktionieren.
- [Elemente in CSS größen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : Es ist wichtig zu verstehen, wie groß die verschiedenen Merkmale in Ihrem Design sein werden. In dieser Lektion fassen wir die verschiedenen Möglichkeiten zusammen, wie Elemente über CSS eine Größe erhalten, und definieren einige Begriffe zur Größenbestimmung, die Ihnen in Zukunft helfen werden.
- [Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und Rahmen machen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken — Hintergründe und Rahmen sind die Antwort auf viele Stilfragen in CSS.
- [Herausforderung: Eine Inhaltsleiste größen und dekorieren](/de/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel) <sup>Herausforderung</sup>
  - : In dieser Herausforderung erhalten Sie eine leicht gestaltete Seitenstruktur, die eine Inhaltsleiste darstellt, mit einer Überschrift oben und einer Schaltflächenleiste unten. Wir möchten, dass Sie den Anweisungen folgen, um sie zu größen und zu dekorieren und dabei ein interessantes Layout zu erzeugen. Dabei testen wir Ihr Wissen über CSS-Werte und -Einheiten, Größenbestimmung sowie Hintergründe und Rahmen.
- [Überlange Inhalte](/de/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : Überlauf ist das, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen. In dieser Lektion lernen Sie, wie Sie Überlauf mit CSS verwalten können.
- [Bilder, Medien und Formularelemente](/de/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : In dieser Lektion werden wir uns ansehen, wie bestimmte spezielle Elemente in CSS behandelt werden. Bilder, andere Medien und Formularelemente verhalten sich etwas anders als normale Boxen in Bezug auf Ihre Fähigkeit, sie mit CSS zu gestalten. Zu verstehen, was möglich ist und was nicht, kann einige Frustrationen ersparen, und diese Lektion wird einige der wichtigsten Dinge hervorheben, die Sie wissen müssen.
- [Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : Das Gestalten einer HTML-Tabelle ist nicht die glamouröseste Aufgabe der Welt, aber manchmal müssen wir es alle tun. Dieser Artikel erklärt, wie Sie HTML-Tabellen gut aussehen lassen, mit einigen spezifischen Tabellengestaltungstechniken.
- [CSS debuggen](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : Dieser Artikel gibt Ihnen Anleitungen, wie Sie ein CSS-Problem debuggen und zeigt Ihnen, wie die DevTools in allen modernen Browsern Ihnen helfen können, herauszufinden, was vor sich geht.

## Testen Sie Ihre Fähigkeiten

Sie finden "Testen Sie Ihre Fähigkeiten"-Artikel zwischen den Tutorial-Artikeln, um zu überprüfen, ob Sie die wichtigsten Informationen beibehalten haben, bevor Sie fortfahren. Wenn Sie alle diese zusammen erkunden möchten, finden Sie sie unter [Testen Sie Ihre Fähigkeiten: Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills) aufgeführt.

## Zusätzliche Tutorials

Diese Tutorials sind nicht Teil des Lernpfads, aber sie sind dennoch interessant — Sie sollten diese als erweiterte Ziele betrachten, die Sie optional studieren können, wenn Sie mit den Hauptartikeln des Kerns fertig sind.

- [Erweiterte Stil-Effekte](/de/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : Dieser Artikel dient als Trickkiste und bietet eine Einführung in einige interessante erweiterte Stilfunktionen wie Box-Schatten, Mischmodi und Filter.
- [Stilfluss-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Diese Lektion zielt darauf ab, Sie in [Stilfluss-Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) einzuführen, ein fortgeschritteneres Feature, das auf den grundlegenden Konzepten des [CSS-Stilflusses](/de/docs/Web/CSS/Guides/Cascade/Introduction) und der [CSS-Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufbaut.
- [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : In den letzten Jahren hat sich CSS entwickelt, um unterschiedliche Ausrichtungen von Inhalten besser zu unterstützen, einschließlich von rechts nach links, aber auch von oben nach unten (wie Japanisch) – diese unterschiedlichen Ausrichtungen werden Schriftmodi genannt. Da Sie in Ihrem Studium fortschreiten und beginnen, mit Layouts zu arbeiten, wird ein Verständnis von Schriftmodi für Sie sehr hilfreich sein, deshalb werden wir sie in diesem Artikel vorstellen.
- [CSS organisieren](/de/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es herausfordernd sein kann, eine riesige CSS-Datei zu verwalten. In diesem Artikel werden wir einen kurzen Blick auf einige bewährte Methoden zum Schreiben Ihrer CSS werfen, um sie leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

## Siehe auch

- [HTML und CSS lernen](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com/?via=mdn) Kurs _HTML und CSS lernen_ lehrt Ihnen HTML und CSS durch den Aufbau und das Bereitstellen von fünf großartigen Projekten, mit unterhaltsamen interaktiven Lektionen und Herausforderungen, die von erfahrenen Lehrern unterrichtet werden.
- [Schreiben Sie Ihre ersten CSS-Zeilen!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Diese interaktive Lektion bietet eine nützliche Einführung in die CSS-Syntax.

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
