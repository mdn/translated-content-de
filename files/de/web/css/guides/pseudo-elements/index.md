---
title: CSS-Pseudoelemente
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
l10n:
  sourceCommit: 55fa0e2b797b1358464b42ceb32167675a03ca8d
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, sogenannte Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestaltet werden können. Pseudoelemente werden verwendet, um Abstraktionen zum Dokumentbaum zu schaffen, die über den bereitgestellten Dokumentbaum hinausgehen.

> [!NOTE]
> Diese Seite führt ein CSS-Modul ein. Eine erschöpfende Liste aller Pseudoelemente, die durch CSS-Spezifikationen definiert sind, finden Sie auf der [Pseudoelemente-Referenzseite](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Pseudoelemente werden mit einem Doppelpunkt (`::`) vorangestellt. Sie fügen Pseudoelemente zu Selektoren hinzu (wie in `p::first-line`), um diese Falschelemente anzusprechen und zu gestalten.

Pseudoelemente ermöglichen das Ansprechen von Entitäten, die nicht im HTML enthalten sind, und von Inhaltsabschnitten, die nicht anders angesprochen werden können, ohne zusätzliches Markup hinzuzufügen. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elementes. Dies ist ein abstraktes Element und kein eigenes Knoten im Dokumentbaum. Sie können diesen Platzhalter auswählen, indem Sie das Pseudoelement {{CSSXref("::placeholder")}} verwenden. Ein weiteres Beispiel ist das Pseudoelement {{CSSXref("::selection")}}, das den aktuell vom Benutzer hervorgehobenen Inhalt abgleicht und es ermöglicht, das Hervorgehobene zu gestalten, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das Pseudoelement {{CSSXref("::first-line")}} auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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
- {{CSSXref("::search-text")}}
- {{CSSXref("::selection")}}
- {{CSSXref("::spelling-error")}}
- {{CSSXref("::target-text")}}

Die Spezifikation definiert auch das Pseudoelement `::details-content` sowie die Sub-Pseudoelemente `::postfix` und `::prefix`. Diese werden derzeit von keinem Browser unterstützt. Das Pseudoelement {{CSSXref("::highlight()")}} ist in diesem Modul enthalten, aber die meisten Details sind in der [CSS custom highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.parent`](/de/docs/Web/API/CSSPseudoElement/parent) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft
  - [`pseudo()`](/de/docs/Web/API/CSSPseudoElement/pseudo) Methode

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste der durch alle CSS-Spezifikationen und WebVTT definierten Pseudoelemente.

- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des CSS-Baustein-Abschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist, wie es mit Pseudoklassen kombiniert und zur Generierung von Inhalten mit `::before` und `::after` Pseudoelementen genutzt werden kann.

- [Anleitung zur Erstellung hübscher Boxen mit Pseudoelementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel zur Gestaltung generierter Inhalte mit `::before` und `::after` Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT)-Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue()")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}}
  - {{cssxref(":host()")}}
  - {{cssxref(":host-context()")}}
  - {{cssxref("::slotted()")}}

- [CSS-Schattenteile](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
  - {{CSSXref("::part")}}

- [CSS-Ansichtstransitionen](/de/docs/Web/CSS/Guides/View_transitions) Modul
  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
  - [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
  - [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
  - [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>` Elements
- {{cssxref(":placeholder-shown")}} Selektor

- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
  - {{cssxref("content")}} Eigenschaft
  - {{cssxref("quotes")}} Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement) Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement) Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement) Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Liste der Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS-Schattenteile](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS-Positionierungs-Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
