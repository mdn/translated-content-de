---
title: CSS Pseudo-Elemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{CSSRef}}

Das **CSS Pseudo-Element** Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, genannt Pseudo-Elemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudo-Elemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu erstellen, die der Dokumentbaum nicht bietet.

Pseudo-Elemente werden mit einem Doppelpunkte-Präfix (`::`) versehen. Sie fügen Pseudo-Elemente Selektoren hinzu (wie in `p::first-line`), um diese Schein-Elemente anzusprechen und zu stylen.

Pseudo-Elemente ermöglichen es, Entitäten anzusprechen, die nicht in HTML enthalten sind und Bereiche von Inhalten, die sonst nicht angesprochen werden können, ohne zusätzlichen Markup hinzuzufügen. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}} Elements. Dies ist ein abstraktes Element und kein separates Knoten im Dokumentbaum. Sie können diesen Platzhalter mittels des {{CSSXref("::placeholder")}} Pseudo-Elements auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}} Pseudo-Element, das den aktuell von einem Nutzer hervorgehobenen Inhalt abgleicht, wodurch Sie das, was beim Interagieren des Nutzers mit dem Inhalt ausgewählt wird, stylen können. Ebenso zielt das {{CSSXref("::first-line")}} Pseudo-Element auf die erste Zeile eines Elements ab und wird automatisch aktualisiert, wenn die Zeichenanzahl der ersten Zeile sich ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

- [Pseudo-Element](/de/docs/Glossary/Pseudo-element) Glossar-Begriff

## Leitfäden

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die durch alle CSS-Spezifikationen und WebVTT definiert sind.

- [Bausteine: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

  - : Teil des CSS-Bausteinabschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudo-Element ist und wie es mit Pseudo-Klassen kombiniert werden kann, um Inhalte mit `::before` und `::after` Pseudo-Elementen zu generieren.

- [Anleitung zum Erstellen von dekorativen Boxen mit Pseudo-Elementen](/de/docs/Learn/CSS/Howto/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für das Styling von generierten Inhalten mithilfe von `::before` und `::after` Pseudo-Elementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul

  - {{CSSXref("::part")}}

- [CSS View Transitions](/de/docs/Web/CSS/CSS_view_transitions) Modul

  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)

  - [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
  - [Klassenselektoren](/de/docs/Web/CSS/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
  - [Typselektoren](/de/docs/Web/CSS/Type_selectors)
  - [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut des `<input>` Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
