---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Guides/Selectors
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Das **CSS-Selektoren-Modul** definiert Muster, um Elemente auszuwählen, auf die dann eine Reihe von CSS-Regeln angewendet wird, zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity). Das CSS-Selektoren-Modul stellt uns mehr als 60 Selektoren und fünf Kombinatoren zur Verfügung. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudoklassen-Selektoren und Pseudo-Elemente.

> [!NOTE]
> Diese Seite führt ein CSS-Modul ein. Eine vollständige Liste aller Selektoren, die von CSS-Spezifikationen definiert sind, finden Sie auf der [Selektoren](/de/docs/Web/CSS/Reference/Selectors) Referenzseite.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden oder auszuwählen, die Sie gestalten möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen das Anvisieren von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben eine präzisere Auswahl von Elementen, indem sie die Auswahl basierend auf der Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Separatoren

- `+` ([Nachfolgender Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([Nachfolgender Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Nachfahre-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namespace-Separator](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) ein. Derzeit wird diese Funktion von keinem Browser unterstützt.

### Selektoren

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{CSSXref(":dir", ":dir()")}}
- {{CSSXref(":disabled")}}
- {{CSSXref(":empty")}}
- {{CSSXref(":enabled")}}
- {{CSSXref(":first-child")}}
- {{CSSXref(":first-of-type")}}
- {{CSSXref(":focus")}}
- {{CSSXref(":focus-visible")}}
- {{CSSXref(":focus-within")}}
- {{CSSXref(":fullscreen")}}
- {{CSSXref(":future")}}
- {{CSSXref(":has", ":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":interest-source")}}
- {{CSSXref(":interest-target")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- `:matches()` (veraltetes Alias für den {{CSSXref(":is", ":is()")}}-Selektor)
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not", ":not()")}}
- {{CSSXref(":nth-child", ":nth-child()")}}
- {{CSSXref(":nth-of-type", ":nth-of-type()")}}
- {{CSSXref(":nth-last-child", ":nth-last-child()")}}
- {{CSSXref(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":open")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
- {{CSSXref(":popover-open")}}
- {{CSSXref(":read-only")}}
- {{CSSXref(":read-write")}}
- {{CSSXref(":required")}}
- {{CSSXref(":root")}}
- {{CSSXref(":scope")}}
- {{CSSXref(":seeking")}}
- {{CSSXref(":stalled")}}
- {{CSSXref(":target")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [`:-webkit-` Pseudoklassen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes)
- [Attribut-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}} und {{CSSXref(":local-link")}} Pseudoklassen ein. Derzeit wird diese Funktion von keinem Browser unterstützt.

## Begriffe

- {{Glossary("Pseudo-class", "Pseudoklasse")}} Glossareintrag
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
  - : Überblick über die verschiedenen Arten einfacher Selektoren und verschiedener Kombinatoren, die in den CSS-Selektoren- und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und der im CSS-Selektoren-Modul eingeführten Begriffe, von "einfacher Selektor" bis "verzeihende relative Selektorliste".

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : Listet die Pseudoklassen auf, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, und die in den verschiedenen CSS-Modulen und HTML definiert sind.

- [Verwendung der `:target` Pseudoklasse in Selektoren](/de/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : Erfahren Sie, wie Sie die {{CSSXref(":target")}} Pseudoklasse verwenden, um das Ziel-Element eines URL-Fragmentidenfikators zu gestalten.

- [Datenschutz und der `:visited` Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Untersucht die Stilbeschränkungen, die auf die `:visited` Klasse für den Datenschutz der Benutzer festgelegt wurden.

- [CSS-Grundbausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudoklassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen UI-Pseudoklassen kennen, die zum Gestalten von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudoklasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Scope](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}} Pseudoklasse
  - {{CSSXref(":host_function", ":host()")}} Pseudoklasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudoklasse
  - {{CSSXref(":has-slotted")}} Pseudoklasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Paged-Media](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{CSSXref(":left")}} Pseudoklasse
  - {{CSSXref(":right")}} Pseudoklasse
  - {{CSSXref(":first")}} Pseudoklasse
  - `:blank` Pseudoklasse

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements) (repräsentiert Entitäten, die nicht in HTML enthalten sind)
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

- [CSS-Teile des Schattens](/de/docs/Web/CSS/Guides/Shadow_parts) Modul
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-Positioniertes Layout-Modul](/de/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} At-Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector) Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach) Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Cascade- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/Guides/Nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
