---
title: Lösung häufiger CSS-Probleme
short-title: Häufige CSS-Probleme
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Diese Seite fasst Fragen und Antworten sowie anderes Material auf der MDN-Website zusammen, das Ihnen helfen kann, häufige CSS-Probleme zu lösen.

## Gestaltung von Boxen

- [Wie füge ich einem Element einen Drop-Shadow hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können mit der {{cssxref("box-shadow")}}-Eigenschaft zu Boxen hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild, ohne das Bild zu verzerren?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die {{cssxref("object-fit")}}-Eigenschaft bietet verschiedene Möglichkeiten, ein Bild in eine Box mit einem anderen {{Glossary("aspect_ratio", "Seitenverhältnis")}} einzupassen. In diesem Tutorial erfahren Sie, wie diese verwendet werden.
- [Welche Methoden können verwendet werden, um Boxen zu gestalten?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Eine Übersicht über die verschiedenen Eigenschaften, die bei der Gestaltung von Boxen mit CSS nützlich sein könnten.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die {{cssxref("opacity")}}-Eigenschaft und Farbwerte mit einem Alpha-Kanal können hierfür verwendet werden; finden Sie heraus, welche Option wann zu verwenden ist.

### Box-Gestaltungslektionen und Leitfäden

- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Gestaltung von Hintergründen und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich Text einen Drop-Shadow hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können dem Text mit der {{cssxref("text-shadow")}}-Eigenschaft hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Finden Sie heraus, wie Sie die erste Zeile eines Textes in einem Absatz mit dem {{cssxref("::first-line")}}-Pseudoelement ansprechen können.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Erfahren Sie, wie Sie den ersten Absatz mit der {{cssxref(":first-child")}}-Pseudoklasse ansprechen können.
- [Wie hebe ich einen Absatz hervor, nur wenn er direkt nach einer Überschrift kommt?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente genau dort im Dokument zu adressieren, wo sie sich befinden. Dieses Tutorial erklärt, wie Sie sie verwenden können, um CSS auf einen Absatz anzuwenden, nur wenn er unmittelbar einer Überschrift folgt.

### Textgestaltungslektionen und Leitfäden

- [Wie man Text gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Das Zentrieren eines Elements in einer anderen Box war früher schwierig, aber mit Flexbox ist es jetzt einfach.

### Layout-Leitfäden

- [Verwendung von CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verwendung von CSS mehrspaltigen Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Verwendung von CSS Gitternetzlayout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verwendung von CSS-generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch, das sich [CSS-Layoutlösungen](/de/docs/Web/CSS/Layout_cookbook) widmet, mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layoutaufgaben. Schauen Sie sich auch [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, das zeigt, wie Sie durch Positionierung ein Informationsregister und ein verschiebbares verstecktes Panel erstellen können.
