---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

Das **CSS-Pseudoelemente**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, Pseudoelemente genannt, repräsentieren Teile des Render-Baums, die ausgewählt und gestaltet werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die dieser nicht direkt bereitstellt.

Pseudoelemente werden mit einem doppelten Doppelpunkt (`::`) vorangestellt. Sie können Pseudoelemente Selektoren hinzufügen (wie bei `p::first-line`), um diese virtuellen Elemente anzuwählen und zu gestalten.

Pseudoelemente ermöglichen es, Entitäten anzusprechen, die nicht in HTML enthalten sind, sowie Bereiche von Inhalten, die anderweitig nicht ohne zusätzliches Markup anvisiert werden können. Betrachten Sie beispielsweise den Placeholder eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Placeholder mit dem {{CSSXref("::placeholder")}}-Pseudoelement auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den momentan von einem Nutzer hervorgehobenen Inhalt anspricht. Damit können Sie den markierten Teil gestalten, während der Nutzer mit dem Inhalt interagiert und die Auswahl verändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne dass die Länge der Zeile abgefragt werden muss.

## Referenz

### Selektoren

- {{CSSXref("::after")}}
- {{CSSXref("::before")}}
- {{CSSXref("::file-selector-button")}}
- {{CSSXref("::first-letter")}}
- {{CSSXref("::first-line")}}
- {{CSSXref("::grammar-error")}}
- {{CSSXref("::highlight()")}}
- {{CSSXref("::marker")}}
- {{CSSXref("::placeholder")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

Die Spezifikation definiert außerdem die Pseudoelemente `::details-content` und `::search-text` sowie die Sub-Pseudoelemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist in diesem Modul enthalten, aber die meisten Details werden in der [CSS-Custom-Highlight-API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}}-Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Erlernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

  - : Teil des Abschnitts "CSS-Bausteine" zu Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist, wie es mit Pseudoklassen kombiniert und für die Generierung von Inhalten mit den Pseudoelementen `::before` und `::after` verwendet werden kann.

- [Anleitung: Fancy-Boxen mit Pseudoelementen erstellen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für das Stilieren von generierten Inhalten mithilfe der Pseudoelemente `::before` und `::after` für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- WebVTT-Cues:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul

  - {{CSSXref("::part")}}

- [CSS-Ansichtstransitionen](/de/docs/Web/CSS/CSS_view_transitions)-Modul

  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)

  - [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
  - [Klassenselektoren](/de/docs/Web/CSS/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
  - [Typselektoren](/de/docs/Web/CSS/Type_selectors)
  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des `<input>`-Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown)-Selektor

- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}}-Eigenschaft
  - {{cssxref("quotes")}}-Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement)-Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement)-Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)-Modul
- [CSS-positionsbasiertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
- [CSS-Custom-Highlight-API](/de/docs/Web/API/CSS_Custom_Highlight_API)
