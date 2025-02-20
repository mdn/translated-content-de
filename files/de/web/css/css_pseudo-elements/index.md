---
title: CSS-Pseudo-Elemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{CSSRef}}

Das **CSS-Pseudo-Elemente**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudo-Elemente, repräsentieren Teile des Render-Baums, die ausgewählt und gestaltet werden können. Pseudo-Elemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die vom Dokumentbaum selbst nicht bereitgestellt werden.

Pseudo-Elemente werden durch zwei Doppelpunkte (`::`) vorangestellt. Sie fügen Selektoren Pseudo-Elemente hinzu (wie bei `p::first-line`), um diese künstlichen Elemente gezielt anzusprechen und zu gestalten.

Pseudo-Elemente ermöglichen das Ansprechen von Entitäten, die nicht im HTML enthalten sind, sowie von Inhaltsbereichen, die sonst nicht ohne zusätzliche Markup-Elemente gezielt angesprochen werden könnten. Betrachten Sie beispielsweise den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}}-Pseudo-Element ansprechen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudo-Element, das den Inhalt anspricht, der derzeit von einem Benutzer hervorgehoben wird, und es erlaubt, diesen Bereich während der Interaktion mit dem Benutzer stilistisch zu verändern. Ebenso ermöglicht das {{CSSXref("::first-line")}}-Pseudo-Element, die erste Zeile eines Elements anzusprechen. Diese wird automatisch aktualisiert, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudo-Elemente `::details-content` und `::search-text` sowie die Sub-Pseudo-Elemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudo-Element ist in diesem Modul enthalten, die meisten Details hierzu werden jedoch in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) spezifiziert.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudo-Element")}} Glossarbegriff

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der in allen CSS-Spezifikationen und WebVTT definierten Pseudo-Elemente.

- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

  - : Teil des CSS-Abschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudo-Element ist, wie es mit Pseudo-Klassen kombiniert und für das Generieren von Inhalten mit den Pseudo-Elementen `::before` und `::after` verwendet werden kann.

- [Anleitung: Schöne Boxen mit Hilfe von Pseudo-Elementen erstellen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für das stilistische Gestalten generierter Inhalte mithilfe der Pseudo-Elemente `::before` und `::after` für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT)-Cues:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul

  - {{CSSXref("::part")}}

- [CSS View Transitions](/de/docs/Web/CSS/CSS_view_transitions)-Modul

  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)

  - [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
  - [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
  - [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors)
  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des `<input>`-Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown)-Selektor

- [CSS Generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}}-Eigenschaft
  - {{cssxref("quotes")}}-Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement)-Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement)-Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
- [CSS Generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)-Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
