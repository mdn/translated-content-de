---
title: CSS-Pseudo-Elemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{CSSRef}}

Das **CSS-Pseudo-Elemente** Moduls definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, Pseudo-Elemente genannt, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudo-Elemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen.

Pseudo-Elemente werden mit einem Doppelpunkten (`::`) vorangestellt. Sie fügen Pseudo-Elemente zu Selektoren hinzu (wie in `p::first-line`), um diese Schein-Elemente anzusprechen und zu stylen.

Pseudo-Elemente ermöglichen es, Entitäten anzusprechen, die nicht im HTML enthalten sind, und Inhaltsabschnitte, die sonst nicht ohne zusätzliches Markup angesprochen werden können. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter durch das {{CSSXref("::placeholder")}} Pseudo-Element auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}} Pseudo-Element, das den aktuell von einem Benutzer hervorgehobenen Inhalt anspricht und es Ihnen ermöglicht, das Hervorgehobene zu stylen, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ähnlich zielt das {{CSSXref("::first-line")}} Pseudo-Element auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Längen der Zeilen des Elements zu überprüfen.

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

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- [Pseudo-Element](/de/docs/Glossary/Pseudo-element) Glossarbegriff

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die in allen CSS-Spezifikationen und WebVTT definiert sind.

- [Bausteine: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Teil des CSS-Bausteine-Abschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudo-Element ist und wie es mit Pseudo-Klassen kombiniert und zur Generierung von Inhalten mit `::before` und `::after` Pseudo-Elementen verwendet werden kann.

- [Anleitung: Wie man schicke Boxen mit Pseudo-Elementen erstellt](/de/docs/Learn/CSS/Howto/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für das Styling von generierten Inhalten durch die Verwendung von `::before` und `::after` Pseudo-Elementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Markierungen:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul

  - {{CSSXref("::part")}}

- [CSS-Ansichtsübergänge](/de/docs/Web/CSS/CSS_view_transitions) Modul

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

- [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut des `<input>` Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
