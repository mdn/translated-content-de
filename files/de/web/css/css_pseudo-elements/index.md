---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{CSSRef}}

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentenbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestaltet werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentenbaum hinaus zu schaffen, die durch den Dokumentenbaum nicht bereitgestellt werden.

Pseudoelemente sind mit einem Doppelpunkt-Präfix (`::`) versehen. Sie fügen Pseudoelemente zu Selektoren hinzu (wie in `p::first-line`), um diese virtuellen Elemente zu zielen und zu gestalten.

Pseudoelemente ermöglichen das Zielanvisieren von Entitäten, die nicht im HTML enthalten sind, und von Inhaltsabschnitten, die sonst ohne zusätzlichen Markup nicht zielbar wären. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentenbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}}-Pseudoelement auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den derzeit vom Benutzer hervorgehobenen Inhalt entspricht und es Ihnen ermöglicht, das zu gestalten, was übereinstimmt, wenn der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab, die sich automatisch aktualisiert, wenn sich die Zeichenzahl der ersten Zeile ändert, ohne die Zeichenlänge des Elements abfragen zu müssen.

## Referenz

### Selektoren

- {{CSSXref("::after")}}
- {{CSSXref("::before")}}
- {{CSSXref("::file-selector-button")}}
- {{CSSXref("::first-letter")}}
- {{CSSXref("::first-line")}}
- {{CSSXref("::grammar-error")}}
- {{CSSXref("::marker")}}
- {{CSSXref("::placeholder")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

### Schnittstellen

- {{DOMxRef("CSSPseudoElement")}}-Schnittstelle
  - {{DOMxRef("CSSPseudoElement.element")}}-Eigenschaft
  - {{DOMxRef("CSSPseudoElement.type")}}-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element")}} Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der von allen CSS-Spezifikationen und WebVTT definierten Pseudoelemente.

- [Bausteine: Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Teil des CSS-Bausteine-Abschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudoklassen kombiniert und zur Erzeugung von Inhalt mit `::before` und `::after` Pseudoelementen verwendet werden kann.

- [Wie man elegante Boxen mit Pseudoelementen erstellt](/de/docs/Learn/CSS/Howto/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für die Gestaltung generierter Inhalte mit `::before` und `::after`-Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweistexte:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul

  - {{CSSXref("::part")}}

- [CSS-View-Transitions](/de/docs/Web/CSS/CSS_view_transitions)-Modul

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
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)

  - {{cssxref("content")}} Eigenschaft
  - {{cssxref("quotes")}} Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)

- {{DOMXref("AnimationEvent.pseudoElement")}}-Eigenschaft
- {{DOMXref("KeyframeEffect.pseudoElement")}}-Eigenschaft
- {{DOMXref("TransitionEvent.pseudoElement")}}-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
