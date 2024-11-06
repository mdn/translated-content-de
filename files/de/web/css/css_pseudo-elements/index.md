---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 07bcffffe4c08e8c75d3ac64ebb91e5fe50d8fd6
---

{{CSSRef}}

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestaltet werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu erstellen, die von diesem nicht bereitgestellt werden.

Pseudoelemente werden mit einem Doppelpunkt (`::`) vorangestellt. Sie fügen Selektoren Pseudoelemente hinzu (wie in `p::first-line`), um diese virtuellen Elemente zu identifizieren und zu gestalten.

Pseudoelemente ermöglichen das Anvisieren von Entitäten, die nicht in HTML enthalten sind, und von Inhaltsbereichen, die sonst nicht ohne zusätzliches Markup angesprochen werden könnten. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}}-Pseudoelement auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den aktuell von einem Benutzer hervorgehobenen Inhalt auswählt, wodurch Sie das Markierte beim Interagieren des Benutzers mit dem Inhalt und beim Ändern der Auswahl gestalten können. Ähnlich dazu zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudoelemente `::details-content` und `::search-text` sowie die Unter-Pseudoelemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist in diesem Modul enthalten, aber die meisten Details werden in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossareintrag

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Bausteine: Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Teil des CSS-Bausteinabschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudoklassen kombiniert und zur Generierung von Inhalten mit `::before` und `::after`-Pseudoelementen verwendet werden kann.

- [Anleitung zum Erstellen von dekorativen Boxen mit Pseudoelementen](/de/docs/Learn/CSS/Howto/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für die Gestaltung von generierten Inhalten mit `::before` und `::after`-Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

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
  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut des `<input>`-Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}} Eigenschaft
  - {{cssxref("quotes")}} Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement) Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
