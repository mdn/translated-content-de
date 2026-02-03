---
title: CSS-Pseudoelemente
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
l10n:
  sourceCommit: 21d2342d16ed78d6c72c66a71599125eb2405a31
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, Pseudoelemente genannt, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu schaffen, die von diesem nicht bereitgestellt werden.

> [!NOTE]
> Diese Seite führt ein CSS-Modul ein. Eine vollständige Liste aller Pseudoelemente, die durch CSS-Spezifikationen definiert sind, finden Sie auf der Referenzseite zu [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Pseudoelemente werden mit einem doppelten Doppelpunkt (`::`) vorangestellt. Sie fügen Pseudoelemente Selektoren hinzu (wie in `p::first-line`), um diese Schein-Elemente zu markieren und zu stylen.

Pseudoelemente ermöglichen das Anvisieren von Entitäten, die nicht in HTML enthalten sind und von Inhaltsbereichen, die ansonsten nicht ohne zusätzlichen Markup angesprochen werden könnten. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein separates Knoten im Dokumentbaum. Sie können diesen Platzhalter mithilfe des {{CSSXref("::placeholder")}}-Pseudoelements auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den aktuell vom Benutzer hervorgehobenen Inhalt abgleicht und erlaubt, das Hervorheben zu stylen, wenn der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab, die sich automatisch aktualisiert, wenn sich die Zeichenzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch das `::details-content`-Pseudoelement sowie die Teilpseudoelemente `::postfix` und `::prefix`. Diese werden noch von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist Teil dieses Moduls, jedoch werden die meisten Details in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element) Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type) Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossarbegriff

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste der Pseudoelemente, die durch alle CSS-Spezifikationen und WebVTT definiert sind.

- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des CSS-Grundbausteins-Bereichs über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie man es mit Pseudoklassen kombinieren und für die Erzeugung von Inhalten mit `::before` und `::after` Pseudoelementen verwenden kann.

- [Anleitung zur Erstellung von dekorativen Boxen mit Pseudoelementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Styling generierter Inhalte mit `::before` und `::after` Pseudoelementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue()")}}

- [CSS-Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Scope](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}}
  - {{cssxref(":host()")}}
  - {{cssxref(":host-context()")}}
  - {{cssxref("::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
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

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>`-Elements
- {{cssxref(":placeholder-shown")}} Selektor

- [CSS-generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content)
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
- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [CSS-generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS-positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
