---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, genannt Pseudoelemente, repräsentieren Teile des Rendertrees, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die über das hinausgehen, was der Dokumentbaum bereitstellen kann.

Pseudoelemente sind mit einem Doppelpunkt (`::`) vorangestellt. Sie fügen Pseudoelemente zu Selektoren hinzu (wie in `p::first-line`), um diese simulierten Elemente zu gezielt auszuwählen und zu stylen.

Pseudoelemente ermöglichen es, Entitäten zu adressieren, die nicht in HTML enthalten sind, und Inhaltsabschnitte anzusprechen, die sonst nicht ohne zusätzlichen Markup angesprochen werden könnten. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}}-Pseudoelement auswählen. Als weiteres Beispiel passt das {{CSSXref("::selection")}}-Pseudoelement auf den Inhalt, der derzeit von einem Benutzer hervorgehoben wird, und ermöglicht es Ihnen, das zu stylen, was ausgewählt wird, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Linienlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudoelemente `::details-content` und `::search-text` sowie die Unter-Pseudoelemente `::postfix` und `::prefix`. Diese werden von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist in diesem Modul enthalten, die meisten Details sind jedoch in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}}-Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)
  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Lernen: Pseudo-Klassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des Abschnitts CSS-Bausteine zu Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudo-Klassen kombiniert werden kann sowie zur Erzeugung von Inhalten mit den Pseudoelementen `::before` und `::after` verwendet werden kann.

- [Anleitung: Elegante Boxen mit Pseudoelementen erstellen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Styling von generierten Inhalten unter Verwendung von `::before` und `::after`-Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul
  - {{cssxref("::column")}}

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow)-Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
  - {{CSSXref("::part")}}

- [CSS-Ansicht-Übergänge](/de/docs/Web/CSS/CSS_view_transitions)-Modul
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

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des `<input>`-Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown)-Selektor

- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)
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
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)-Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout)-Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
