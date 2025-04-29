---
title: Häufige CSS-Probleme lösen
short-title: Häufige CSS-Probleme
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

Diese Seite fasst Fragen und Antworten sowie weiteres Material auf der MDN-Website zusammen, das Ihnen bei der Lösung häufiger CSS-Probleme helfen kann.

## Styling von Boxen

- [Wie füge ich einem Element einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können mit der Eigenschaft {{cssxref("box-shadow")}} zu Boxen hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild, ohne das Bild zu verzerren?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die Eigenschaft {{cssxref("object-fit")}} bietet verschiedene Möglichkeiten, ein Bild in eine Box mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} einzupassen. In diesem Tutorial erfahren Sie, wie Sie diese verwenden können.
- [Welche Methoden können verwendet werden, um Boxen zu stylen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Eine Übersicht über verschiedene Eigenschaften, die beim Stylen von Boxen mit CSS nützlich sein könnten.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die Eigenschaft {{cssxref("opacity")}} und Farbwerte mit einem Alpha-Kanal können hierfür verwendet werden; erfahren Sie, welche Methode wann eingesetzt werden sollte.

### Lektionen und Leitfäden zum Box-Styling

- [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Hintergründe und Rahmen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich Text einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können mit der Eigenschaft {{cssxref("text-shadow")}} zu Texten hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Erfahren Sie, wie Sie die erste Textzeile eines Absatzes mit dem Pseudo-Element {{cssxref("::first-line")}} ansprechen können.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Erfahren Sie, wie Sie den ersten Absatz mit der Pseudo-Klasse {{cssxref(":first-child")}} ansprechen können.
- [Wie hebe ich einen Absatz nur hervor, wenn er direkt nach einer Überschrift kommt?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente präzise basierend auf ihrer Position im Dokument anzusprechen. Dieses Tutorial erklärt, wie Sie CSS auf einen Absatz anwenden, nur wenn er unmittelbar auf eine Überschrift folgt.

### Lektionen und Leitfäden zum Text-Styling

- [Wie man Text stylt](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links stylt](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Das Zentrieren eines Elements innerhalb einer anderen Box sowohl horizontal als auch vertikal war früher schwierig; mit Flexbox ist es jedoch jetzt einfach.

### Layout-Leitfäden

- [Verwendung von CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verwendung von CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Verwendung des CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verwendung von CSS-generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch gewidmet den [CSS-Layout-Lösungen](/de/docs/Web/CSS/Layout_cookbook), mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layout-Aufgaben. Schauen Sie sich auch die [Praktischen Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, die zeigen, wie Sie mit Positionierung eine Registerkarten-Info-Box und ein verstecktes, verschiebbares Panel erstellen können.
