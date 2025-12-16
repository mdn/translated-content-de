---
title: CSS-Pseudo-Elemente
short-title: Pseudo-elements
slug: Web/CSS/Guides/Pseudo-elements
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Pseudo-Element**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, Pseudo-Elemente genannt, repräsentieren Teile des Rendering-Baums, die ausgewählt und gestylt werden können. Pseudo-Elemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu erstellen, die über den vom Dokumentbaum bereitgestellten Rahmen hinausgehen.

> [!NOTE]
> Diese Seite stellt ein CSS-Modul vor. Eine vollständige Liste aller durch CSS-Spezifikationen definierten Pseudo-Elemente finden Sie auf der Referenzseite zu den [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

Pseudo-Elemente werden mit einem Doppeldoppelpunkt (`::`) vorangestellt. Sie fügen Pseudo-Elemente zu Selektoren hinzu (wie in `p::first-line`), um diese fingierten Elemente anzusprechen und zu stylen.

Pseudo-Elemente ermöglichen die gezielte Ansprache von Entitäten, die nicht in HTML enthalten sind, und von Inhaltsbereichen, die anderweitig nicht ohne zusätzliche Markup-Zeilen angesprochen werden können. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mit dem {{CSSXref("::placeholder")}}-Pseudo-Element auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudo-Element, das den aktuell von einem Benutzer hervorgehobenen Inhalt erreicht, sodass Sie das übereinstimmende Styling anpassen können, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ebenso zielt das {{CSSXref("::first-line")}}-Pseudo-Element auf die erste Zeile eines Elements ab und wird automatisch aktualisiert, wenn sich die Zeichenzahl der ersten Zeile ändert, ohne die Zeilenlänge des Elements abfragen zu müssen.

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

Die Spezifikation definiert auch die Pseudo-Elemente `::details-content` und `::search-text` sowie die Sub-Pseudo-Elemente `::postfix` und `::prefix`. Diese werden noch von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudo-Element ist in diesem Modul enthalten, die meisten Details werden jedoch in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) bereitgestellt.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudo-Element")}} Glossary Begriff

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste der durch alle CSS-Spezifikationen und WebVTT definierten Pseudo-Elemente.

- [Lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des Abschnitts CSS-Grundbausteine zu Selektoren. In diesem Artikel wird definiert, was ein Pseudo-Element ist und wie es mit Pseudo-Klassen kombiniert und zur Generierung von Inhalten mit den Pseudo-Elementen `::before` und `::after` verwendet werden kann.

- [Anleitung zur Erstellung von aufwändigen Boxen mit Pseudo-Elementen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Styling generierter Inhalte mit `::before` und `::after` Pseudo-Elementen für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue()")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)-Modul
  - {{cssxref("::column")}}

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Skopierung](/de/docs/Web/CSS/Guides/Scoping)-Modul
  - {{CSSXref(":host")}}
  - {{cssxref(":host()")}}
  - {{cssxref(":host-context()")}}
  - {{cssxref("::slotted()")}}

- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
  - {{CSSXref("::part")}}

- [CSS-Ansichtstransitionen](/de/docs/Web/CSS/Guides/View_transitions)-Modul
  - {{cssxref("::view-transition")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-image-pair()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-group()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-new()")}} {{Experimental_Inline}}
  - {{cssxref("::view-transition-old()")}} {{Experimental_Inline}}

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
  - [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
  - [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
  - [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
  - [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
  - [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
  - [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des `<input>` Elements
- {{cssxref(":placeholder-shown")}} Selektor

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

- [Liste von Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [CSS Positionslayout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
