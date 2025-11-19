---
title: CSS-Pseudoelemente
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, Pseudoelemente genannt, stellen Teile des Renderbaums dar, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu erstellen, die über den im Dokumentbaum bereitgestellten hinausgehen.

> [!NOTE]
> Diese Seite führt ein CSS-Modul ein. Eine erschöpfende Liste aller durch CSS-Spezifikationen definierten Pseudoelemente finden Sie auf der [Pseudoelemente-Referenzseite](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Pseudoelemente werden mit einem Doppelpunkt (`::`) vorangestellt. Sie fügen Pseudoelemente zu Selektoren hinzu (wie in `p::first-line`), um diese Schein-Elemente anzuvisieren und zu stylen.

Pseudoelemente ermöglichen das Anvisieren von Entitäten, die nicht in HTML enthalten sind, und von Inhalten, die sonst nicht ohne zusätzlichen Markup anvisiert werden können. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}} Pseudoelement auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}} Pseudoelement, das den derzeit von einem Benutzer hervorgehobenen Inhalt abgleicht, sodass Sie das, was mit dem Inhalt abgeglichen wird, stylen können, während der Benutzer damit interagiert und die Auswahl ändert. Ähnlich zielt das {{CSSXref("::first-line")}} Pseudoelement auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudoelemente `::details-content` und `::search-text` sowie die Unter-Pseudoelemente `::postfix` und `::prefix`. Diese werden noch von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}} Pseudoelement ist in diesem Modul enthalten, jedoch werden die meisten Details in der [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste von Pseudoelementen, die durch alle CSS-Spezifikationen und WebVTT definiert sind.

- [Erlernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des CSS-Bausteine-Abschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudoklassen kombiniert und für die Generierung von Inhalten mit `::before` und `::after` Pseudoelementen verwendet werden kann.

- [Anleitung zum Erstellen von dekorativen Boxen mit Pseudoelementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Stylen generierter Inhalte unter Verwendung von `::before` und `::after` Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
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

- [CSS Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
  - {{CSSXref("::part")}}

- [CSS View-Transitions](/de/docs/Web/CSS/Guides/View_transitions) Modul
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
  - [Typleselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
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

- [Liste von Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Positionierungslayout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
