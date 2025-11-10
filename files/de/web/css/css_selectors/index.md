---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **CSS-Selektoren**-Modul definiert die Muster zur Auswahl von Elementen, auf die eine Reihe von CSS-Regeln zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) angewendet wird. Das CSS-Selektoren-Modul stellt uns mehr als 60 Selektoren und fünf Kombinatoren zur Verfügung. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden oder auszuwählen, die Sie gestalten möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl von DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen die Zielsetzung von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben es Ihnen, bei der Auswahl von Elementen präziser zu sein, indem sie das Auswählen von Elementen basierend auf ihrer Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Separatoren

- `+` ([Direkter Nachfolger-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([Allgemeiner Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Nachfahre-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namespace-Separator](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) ein. Zurzeit unterstützen keine Browser diese Funktion.

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
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- `:matches()` (veraltetes Legacy-Selektor-Alia für {{CSSXref(":is", ":is()")}})
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
- [`:-webkit-` Pseudo-Klassen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}} und {{CSSXref(":local-link")}} Pseudo-Klassen ein. Zurzeit unterstützen keine Browser diese Funktionen.

## Begriffe

- {{Glossary("Pseudo-class", "Pseudo-Klasse")}} Glossarbegriff
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
  - : Überblick über die verschiedenen Arten von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und der in den CSS-Selektoren-Modulen eingeführten Terminologien, von "einfachen Selektor" bis "verzeihende relative Selektorenliste".

- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : Listet die Pseudo-Klassen, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target` Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : Erfahren Sie, wie Sie die {{CSSXref(":target")}} Pseudo-Klasse verwenden, um das Ziel-Element eines URL-Fragment-Identifiers zu gestalten.

- [Datenschutz und der `:visited` Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Erforscht die Stileinschränkungen, die auf die `:visited` Klasse aus Datenschutzgründen angewendet werden.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements), und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen kennen, die zur Gestaltung von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref(":has-slotted")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

- [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements) (Repräsentation von Entitäten, die nicht in HTML enthalten sind)
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

- [CSS-Schatten-Teile-Modul](/de/docs/Web/CSS/Guides/Shadow_parts)
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-positioniertes Layout-Modul](/de/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} At-Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector) Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach) Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
