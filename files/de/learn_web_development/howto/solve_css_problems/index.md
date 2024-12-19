---
title: Häufige CSS-Probleme lösen
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Diese Seite enthält Fragen und Antworten sowie weiteres Material auf der MDN-Website, das Ihnen helfen kann, häufige CSS-Probleme zu lösen.

## Gestaltung von Boxen

- [Wie füge ich einem Element einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können Boxen mit der {{cssxref("box-shadow")}}-Eigenschaft hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild, ohne das Bild zu verzerren?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die {{cssxref("object-fit")}}-Eigenschaft bietet verschiedene Möglichkeiten, ein Bild in eine Box einzupassen, die ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, und Sie können in diesem Tutorial erfahren, wie man sie einsetzt.
- [Welche Methoden können verwendet werden, um Boxen zu stylen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Eine Übersicht über verschiedene Eigenschaften, die nützlich sein können, wenn Boxen mit CSS gestaltet werden.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die {{cssxref("opacity")}}-Eigenschaft und Farbwerte mit einem Alphakanal können hierfür verwendet werden; erfahren Sie, wann welche Option eingesetzt werden sollte.

### Lektionen und Leitfäden zur Box-Gestaltung

- [Das Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Hintergründe und Rahmen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich einem Text einen Schlagschatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können Texten mit der {{cssxref("text-shadow")}}-Eigenschaft hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Erfahren Sie, wie Sie die erste Zeile eines Absatzes mit dem {{cssxref("::first-line")}}-Pseudo-Element ansprechen.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Erfahren Sie, wie Sie den ersten Absatz mit der {{cssxref(":first-child")}}-Pseudo-Klasse ansprechen.
- [Wie hebe ich einen Absatz nur hervor, wenn er direkt nach einer Überschrift kommt?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente genau zu identifizieren, basierend auf ihrer Position im Dokument; dieses Tutorial erklärt, wie Sie sie verwenden, um CSS nur auf einen Absatz anzuwenden, wenn er direkt auf eine Überschrift folgt.

### Lektionen und Leitfäden zur Textgestaltung

- [Wie man Text gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Das Zentrieren eines Elements innerhalb einer anderen Box horizontal und vertikal war früher kompliziert, aber Flexbox macht es jetzt einfach.

### Leitfäden für Layouts

- [Verwendung von CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verwendung von CSS-Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)
- [Verwendung von CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Verwendung von CSS-generierten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch, das sich den [CSS-Layout-Lösungen](/de/docs/Web/CSS/Layout_cookbook) widmet, mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layoutaufgaben. Schauen Sie sich auch die [Praktischen Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, die zeigen, wie Sie Positionierung verwenden können, um eine Registerkarten-Info-Box und ein verschiebbares verstecktes Panel zu erstellen.
