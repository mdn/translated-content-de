---
title: Lösen Sie häufige CSS-Probleme
short-title: Häufige CSS-Probleme
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Diese Seite fasst Fragen und Antworten sowie weiteres Material auf der MDN-Website zusammen, das Ihnen helfen kann, häufige CSS-Probleme zu lösen.

## Gestaltung von Boxen

- [Wie füge ich einem Element einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können mit der {{cssxref("box-shadow")}}-Eigenschaft zu Boxen hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild, ohne dass das Bild verzerrt wird?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die {{cssxref("object-fit")}}-Eigenschaft bietet verschiedene Möglichkeiten, ein Bild in eine Box mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} einzupassen. In diesem Tutorial erfahren Sie, wie Sie diese Optionen nutzen können.
- [Welche Methoden können zum Stylen von Boxen verwendet werden?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Ein Überblick über die verschiedenen Eigenschaften, die beim Stylen von Boxen mit CSS nützlich sein könnten.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die {{cssxref("opacity")}}-Eigenschaft und Farbwerte mit einem Alphakanal können hierfür verwendet werden; finden Sie heraus, wann welche Option verwendet werden sollte.

### Box-Styling-Lektionen und Leitfäden

- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Hintergründe und Rahmen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich einem Text einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können mit der {{cssxref("text-shadow")}}-Eigenschaft zu Text hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz mit dem {{cssxref("::first-line")}}-Pseudoelement anvisieren können.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Erfahren Sie, wie Sie den ersten Absatz mit der {{cssxref(":first-child")}}-Pseudoklasse anvisieren können.
- [Wie hebe ich einen Absatz nur dann hervor, wenn er direkt nach einer Überschrift kommt?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente präzise basierend auf ihrer Position im Dokument zu anvisieren. Dieses Tutorial erklärt, wie Sie sie verwenden, um CSS auf einen Absatz anzuwenden, nur wenn er unmittelbar nach einer Überschrift folgt.

### Text-Styling-Lektionen und Leitfäden

- [Wie man Text stylt](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links stylt](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Das Zentrieren eines Elements innerhalb eines anderen Kastens horizontal und vertikal war früher schwierig, jedoch macht Flexbox es jetzt einfach.

### Layout-Leitfäden

- [Verwendung von CSS-Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verwendung von CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Verwendung von CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verwendung von CSS-generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch, das [Lösungen für CSS-Layouts](/de/docs/Web/CSS/Layout_cookbook) enthält, mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layout-Aufgaben. Sehen Sie sich auch [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, die zeigen, wie Sie mit Positionierung eine Registerkarten-Informationsbox und ein Schiebepanel erstellen können.
