---
title: CSS-Pseudoelemente
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, genannt Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die über den Dokumentbaum hinausgehen.

Pseudoelemente werden mit einem Doppelpunkt (`::`) versehen. Sie fügen Pseudoelemente Selektoren hinzu (wie in `p::first-line`), um diese falschen Elemente zu zielen und zu stylen.

Pseudoelemente ermöglichen es, Entitäten zu zielen, die nicht in HTML enthalten sind und Bereiche von Inhalten, die ansonsten nicht zielen können, ohne zusätzliches Markup hinzuzufügen. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenes Knoten im Dokumentbaum. Sie können diesen Platzhalter durch das {{CSSXref("::placeholder")}}-Pseudoelement auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den Inhalt abgleicht, der derzeit von einem Benutzer hervorgehoben wird, sodass Sie das, was abgeglichen wird, stilisieren können, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudoelemente `::details-content` und `::search-text` sowie die Sub-Pseudoelemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist in diesem Modul enthalten, aber die meisten Details werden in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossareintrag

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste von Pseudoelementen, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Lernen: Pseudo-Klassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des CSS-Bausteinabschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudo-Klassen kombiniert und für das Generieren von Inhalt mit `::before`- und `::after`-Pseudoelementen verwendet werden kann.

- [Anleitung zum Erstellen von fancy Boxen mit Pseudoelementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel zur Stilgestaltung generierter Inhalte mit `::before`- und `::after`-Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Track Format (WebVTT) Cues:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS Multi-Spalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
  - {{CSSXref("::part")}}

- [CSS View Transitions](/de/docs/Web/CSS/Guides/View_transitions) Modul
  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors)
  - [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
  - [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
  - [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>` Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/Reference/Selectors/:placeholder-shown) Selektor

- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
  - {{cssxref("content")}} Eigenschaft
  - {{cssxref("quotes")}} Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement) Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS positionsbasiertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
