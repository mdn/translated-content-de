---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das Modul **CSS-Pseudoelement** definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen des Dokumentbaums zu erstellen, die über die im Dokumentbaum bereitgestellten hinausgehen.

Pseudoelemente sind mit einem doppelten Doppelpunkt (`::`) versehen. Sie fügen Pseudoelemente Selektoren hinzu (wie in `p::first-line`), um diese künstlichen Elemente zu zielen und zu stylen.

Pseudoelemente ermöglichen es, Entitäten zu zielen, die nicht in HTML enthalten sind, und Inhaltsabschnitte, die sonst nicht ohne das Hinzufügen von zusätzlichem Markup gezielt werden können. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem Pseudoelement {{CSSXref("::placeholder")}} auswählen. Ein weiteres Beispiel ist das Pseudoelement {{CSSXref("::selection")}}, das den aktuell von einem Benutzer hervorgehobenen Inhalt abgleicht und es Ihnen ermöglicht, das Gezielte zu stylen, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das Pseudoelement {{CSSXref("::first-line")}} auf die erste Zeile eines Elements und wird automatisch aktualisiert, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abzufragen.

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

Die Spezifikation definiert auch die Pseudoelemente `::details-content` und `::search-text` sowie die Unter-Pseudoelemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das Pseudoelement {{CSSXref("::highlight()")}} ist in diesem Modul enthalten, aber die meisten Details sind in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) beschrieben.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}}-Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste von Pseudoelementen, die durch alle CSS-Spezifikationen und WebVTT definiert sind.

- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)

  - : Teil des CSS-Grundlagenabschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudoklassen kombiniert und für die Generierung von Inhalten mit `::before` und `::after` Pseudoelementen verwendet werden kann.

- [Anleitung zum Erstellen von dekorativen Boxen mit Pseudoelementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)

  - : Beispiel für das Styling von generierten Inhalten mit `::before` und `::after` Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:

  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul

  - {{cssxref("::column")}}

- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul

  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) Modul

  - {{CSSXref("::part")}}

- [CSS Übergangseffekte](/de/docs/Web/CSS/CSS_view_transitions) Modul

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
  - [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
  - [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>` Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/:placeholder-shown) Selektor

- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content)

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
