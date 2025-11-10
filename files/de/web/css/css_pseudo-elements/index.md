---
title: CSS-Pseudoelemente
slug: Web/CSS/CSS_pseudo-elements
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das **CSS-Pseudoelement**-Modul definiert abstrakte Elemente, die nicht direkt im Dokumentbaum vorhanden sind. Diese abstrakten Elemente, genannt Pseudoelemente, repräsentieren Teile des Renderbaums, die ausgewählt und gestylt werden können. Pseudoelemente werden verwendet, um Abstraktionen über den Dokumentbaum hinaus zu erstellen, die über den vom Dokumentbaum bereitgestellten hinausgehen.

Pseudoelemente haben ein Präfix mit einem doppelten Doppelpunkt (`::`). Sie fügen Selektoren Pseudoelemente hinzu (wie in `p::first-line`), um diese Schein-Elemente zu zielgerichtet auszuwählen und zu gestalten.

Pseudoelemente ermöglichen es, Entitäten zu nutzen, die nicht im HTML enthalten sind, sowie Inhaltsbereiche zu zielgerichtet auswählen, die sonst nicht ohne zusätzliche Markups zielgerichtet erreichbar wären. Betrachten Sie den Platzhalter eines {{HTMLelement("input")}}-Elements. Dies ist ein abstraktes Element und kein eigenständiger Knoten im Dokumentbaum. Sie können diesen Platzhalter mithilfe des {{CSSXref("::placeholder")}}-Pseudoelements auswählen. Ein weiteres Beispiel ist das {{CSSXref("::selection")}}-Pseudoelement, das den aktuell von einem Benutzer markierten Inhalt übereinstimmt und Ihnen erlaubt zu gestalten, was angezeigt wird, während der Benutzer mit dem Inhalt interagiert und die Auswahl ändert. Ähnlich zielt das {{CSSXref("::first-line")}}-Pseudoelement auf die erste Zeile eines Elements ab und aktualisiert sich automatisch, wenn sich die Zeichenanzahl der ersten Zeile ändert, ohne dass die Zeilenlänge des Elements abgefragt werden muss.

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

Die Spezifikation definiert auch die `::details-content` und `::search-text` Pseudoelemente sowie die `::postfix` und `::prefix` Sub-Pseudoelemente. Diese werden derzeit von keinem Browser unterstützt. Das {{CSSXref("::highlight()")}}-Pseudoelement ist in diesem Modul enthalten, die meisten Details sind jedoch in der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu finden.

### Schnittstellen

- [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Schnittstelle
  - [`CSSPseudoElement.element`](/de/docs/Web/API/CSSPseudoElement/element)-Eigenschaft
  - [`CSSPseudoElement.type`](/de/docs/Web/API/CSSPseudoElement/type)-Eigenschaft

### Begriffe

- {{Glossary("Pseudo-element", "Pseudoelement")}} Glossareintrag

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : Teil des CSS-Bausteinabschnitts über Selektoren. Dieser Artikel definiert, was ein Pseudoelement ist und wie es mit Pseudoklassen kombiniert und für die Generierung von Inhalten mit den Pseudoelementen `::before` und `::after` genutzt werden kann.

- [Anleitung, um elegante Kästchen mit Pseudoelementen zu erstellen](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Create_fancy_boxes#pseudo-elements)
  - : Beispiel für das Styling generierter Inhalte mit den Pseudoelementen `::before` und `::after` für visuelle Effekte.

## Verwandte Konzepte

- {{cssxref("::backdrop")}}

- Web Video Text Tracks Format (WebVTT) Hinweise:
  - {{cssxref("::cue")}}
  - {{cssxref("::cue", "::cue()")}}

- [CSS-Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout)-Modul
  - {{cssxref("::column")}}

- [CSS Overflow](/de/docs/Web/CSS/Guides/Overflow)-Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted", "::slotted()")}}

- [CSS Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
  - {{CSSXref("::part")}}

- [CSS-Ansichten-Übergänge](/de/docs/Web/CSS/Guides/View_transitions)-Modul
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
  - [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

- [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des `<input>`-Elements
- [`:placeholder-shown`](/de/docs/Web/CSS/Reference/Selectors/:placeholder-shown)-Selektor

- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
  - {{cssxref("content")}}-Eigenschaft
  - {{cssxref("quotes")}}-Eigenschaft

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)

- [`AnimationEvent.pseudoElement`](/de/docs/Web/API/AnimationEvent/pseudoElement)-Eigenschaft
- [`KeyframeEffect.pseudoElement`](/de/docs/Web/API/KeyframeEffect/pseudoElement)-Eigenschaft
- [`TransitionEvent.pseudoElement`](/de/docs/Web/API/TransitionEvent/pseudoElement)-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)-Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)-Modul
- [CSS-Positionierungs-Layout](/de/docs/Web/CSS/Guides/Positioned_layout)-Modul
- [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
