---
title: Häufige CSS-Probleme lösen
short-title: Häufige CSS-Probleme
slug: Learn_web_development/Howto/Solve_CSS_problems
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Diese Seite fasst Fragen und Antworten sowie weiteres Material auf der MDN-Seite zusammen, das Ihnen helfen kann, häufige CSS-Probleme zu lösen.

## Gestaltung von Boxen

- [Wie füge ich einem Element einen Schatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_shadow)
  - : Schatten können Boxen mit der Eigenschaft {{cssxref("box-shadow")}} hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie fülle ich eine Box mit einem Bild, ohne das Bild zu verzerren?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Fill_a_box_with_an_image)
  - : Die Eigenschaft {{cssxref("object-fit")}} bietet verschiedene Möglichkeiten, ein Bild in eine Box einzupassen, die ein anderes {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, und Sie können in diesem Tutorial herausfinden, wie Sie sie verwenden.
- [Welche Methoden können zur Gestaltung von Boxen verwendet werden?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes)
  - : Eine Übersicht über die verschiedenen Eigenschaften, die beim Styling von Boxen mit CSS nützlich sein können.
- [Wie kann ich Elemente halbtransparent machen?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Make_box_transparent)
  - : Die Eigenschaft {{cssxref("opacity")}} und Farbwerte mit einem Alphakanal können hierfür verwendet werden; erfahren Sie, welche Sie wann verwenden sollten.

### Lektionen und Leitfäden zur Boxgestaltung

- [Das Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [Gestaltung von Hintergründen und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)

## CSS und Text

- [Wie füge ich einem Text einen Schatten hinzu?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Add_a_text_shadow)
  - : Schatten können Texten mit der Eigenschaft {{cssxref("text-shadow")}} hinzugefügt werden. Dieses Tutorial erklärt, wie es funktioniert, und zeigt ein Beispiel.
- [Wie hebe ich die erste Zeile eines Absatzes hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line)
  - : Finden Sie heraus, wie Sie mit dem Pseudo-Element {{cssxref("::first-line")}} die erste Textzeile in einem Absatz ansprechen können.
- [Wie hebe ich den ersten Absatz in einem Artikel hervor?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para)
  - : Finden Sie heraus, wie Sie den ersten Absatz mit der Pseudo-Klasse {{cssxref(":first-child")}} ansprechen können.
- [Wie hebe ich einen Absatz hervor, nur wenn er direkt nach einer Überschrift kommt?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1)
  - : Kombinatoren können Ihnen helfen, Elemente präzise basierend auf ihrer Position im Dokument anzusprechen; dieses Tutorial erklärt, wie Sie sie verwenden, um CSS nur auf einen Absatz anzuwenden, wenn er direkt auf eine Überschrift folgt.

### Lektionen und Leitfäden zur Textgestaltung

- [Wie man Text gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [Wie man eine Liste von Elementen anpasst](/de/docs/Learn_web_development/Core/Text_styling/Styling_lists)
- [Wie man Links gestaltet](/de/docs/Learn_web_development/Core/Text_styling/Styling_links)
- [CSS Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## CSS-Layout

- [Wie zentriere ich ein Element?](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Center_an_item)
  - : Ein Element horizontal und vertikal innerhalb einer anderen Box zu zentrieren war früher schwierig, jedoch macht es Flexbox jetzt einfach.

### Layout-Leitfäden

- [Verwendung von CSS Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Verwendung von CSS-Mehrspaltenlayouts](/de/docs/Web/CSS/Guides/Multicol_layout/Using)
- [Verwendung von CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Verwendung von CSS-generierten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content)

> [!NOTE]
> Wir haben ein Kochbuch, das sich mit [CSS-Layoutlösungen](/de/docs/Web/CSS/How_to/Layout_cookbook) beschäftigt, mit vollständig funktionierenden Beispielen und Erklärungen zu häufigen Layoutaufgaben. Schauen Sie sich auch [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) an, welches zeigt, wie Sie Positionierung verwenden können, um eine Registerkarten-Infobox und ein verschiebbares verstecktes Panel zu erstellen.
