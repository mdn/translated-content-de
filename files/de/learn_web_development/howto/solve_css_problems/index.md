---
title: Lösung häufiger CSS-Probleme
short-title: Häufige CSS-Probleme
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Diese Seite fasst Fragen und Antworten sowie weiteres Material auf der MDN-Website zusammen, die Ihnen helfen können, häufige CSS-Probleme zu lösen.

## Gestaltung von Boxen

- [Wie füge ich einem Element einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können Boxen mit der {{cssxref("box-shadow")}}-Eigenschaft hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild ohne Verzerrung des Bildes?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die {{cssxref("object-fit")}}-Eigenschaft bietet verschiedene Möglichkeiten, ein Bild in eine Box einzupassen, die ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat. In diesem Tutorial erfahren Sie, wie Sie diese verwenden können.
- [Welche Methoden können zur Gestaltung von Boxen verwendet werden?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Ein Überblick über die verschiedenen Eigenschaften, die bei der Gestaltung von Boxen mit CSS nützlich sein könnten.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die {{cssxref("opacity")}}-Eigenschaft und Farbwerte mit einem Alpha-Kanal können dafür verwendet werden; erfahren Sie, wann Sie welche verwenden sollen.

### Lektionen und Leitfäden zur Box-Gestaltung

- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Hintergründe und Rahmen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich einem Text einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können Texten mit der {{cssxref("text-shadow")}}-Eigenschaft hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Erfahren Sie, wie Sie die erste Zeile eines Absatzes mit dem {{cssxref("::first-line")}}-Pseudoelement ansprechen können.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Erfahren Sie, wie Sie den ersten Absatz mit der {{cssxref(":first-child")}}-Pseudoklasse ansprechen können.
- [Wie hebe ich einen Absatz hervor, nur wenn er direkt hinter einer Überschrift steht?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente basierend auf ihrer Position im Dokument präzise anzusprechen; dieses Tutorial erklärt, wie Sie sie verwenden können, um CSS nur dann auf einen Absatz anzuwenden, wenn er direkt hinter einer Überschrift steht.

### Lektionen und Leitfäden zur Textgestaltung

- [Wie man Text stylt](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links stylt](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Das Zentrieren eines Elements innerhalb einer anderen Box horizontal und vertikal war früher knifflig, allerdings macht Flexbox es nun einfach.

### Layout-Leitfäden

- [Verwendung von CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verwendung von CSS-Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Verwendung des CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verwendung von CSS-generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch, das sich Lösungen für [CSS-Layouts](/de/docs/Web/CSS/How_to/Layout_cookbook) widmet, mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layout-Aufgaben. Sehen Sie sich auch [Practical Positioning Examples](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, in dem gezeigt wird, wie Sie Positionierung verwenden können, um ein registerkartenbasiertes Informationsfeld und ein gleitendes verstecktes Panel zu erstellen.
