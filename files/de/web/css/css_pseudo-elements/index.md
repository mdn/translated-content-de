---
title: CSS-Pseudo-Elemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Pseudo-Element**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudo-Elemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudo-Elemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die vom Dokumentbaum bereitgestellt werden.

Pseudo-Elemente werden mit einem doppelten Doppelpunkt (`::`) versehen. Sie fügen Pseudo-Elemente zu Selektoren hinzu (wie in `p::first-line`), um diese komplexen Elemente zu adressieren und zu stylen.

Pseudo-Elemente ermöglichen es, Entitäten anzusprechen, die nicht im HTML enthalten sind, und Abschnitte von Inhalten, die andernfalls nicht zielgerichtet werden können, ohne zusätzliches Markup hinzuzufügen. Ziehen Sie das Placeholder eines {{HTMLelement("input")}}-Elements in Betracht. Dies ist ein abstraktes Element und kein separates Node im Dokumentbaum. Sie können dieses Placeholder mit dem {{CSSXref("::placeholder")}}-Pseudo-Element auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudo-Element, das den Inhalt auswählt, der derzeit von einem Benutzer hervorgehoben wird, sodass Sie stylen können, was übereinstimmt, während der Benutzer mit dem Inhalt interagiert und die Auswahl verändert. In ähnlicher Weise zielt das {{CSSXref("::first-line")}}-Pseudo-Element auf die erste Zeile eines Elements ab, die sich automatisch aktualisiert, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne dass die Zeilenlänge des Elements abgefragt werden muss.

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

Die Spezifikation definiert auch die Pseudo-Elemente `::details-content` und `::search-text` sowie die Unter-Pseudo-Elemente `::postfix` und `::prefix`. Diese werden von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudo-Element ist in diesem Modul enthalten, aber die meisten Details werden in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudo-Element")}} Glossar-Begriff

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

  - : Teil des CSS-Bausteine-Abschnitts zu Selektoren. Dieser Artikel definiert, was ein Pseudo-Element ist und wie es mit Pseudo-Klassen kombiniert und für die Erzeugung von Inhalten mit `::before` und `::after` Pseudo-Elementen verwendet werden kann.

- [Anleitung zur Erstellung von schicken Boxen mit Pseudo-Elementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Styling von generierten Inhalten mit `::before` und `::after` Pseudo-Elementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweistexte:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul

  - {{cssxref("::column")}}

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul

  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Scope](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul

  - {{CSSXref("::part")}}

- [CSS-View-Transitions](/de/docs/Web/CSS/CSS_view_transitions) Modul

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
  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>` Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}} Eigenschaft
  - {{cssxref("quotes")}} Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement) Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
