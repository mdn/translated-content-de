---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Guides/Selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Selektoren**-Modul definiert die Muster, die verwendet werden, um Elemente auszuwählen, auf die dann ein Satz von CSS-Regeln angewendet wird, zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity). Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden oder auszuwählen, die Sie stylen möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Unabhängig davon, ob sie in CSS oder JavaScript verwendet werden, ermöglichen Selektoren das Anvisieren von HTML-Elementen basierend auf ihrem Typ, Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben es Ihnen, bei der Auswahl von Elementen präziser zu sein, indem sie die Auswahl von Elementen basierend auf ihrer Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Nachfolger-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([nachfolgender Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Nachfahren-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namespace-Trennzeichen](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) ein. Derzeit wird dieses Feature von keinem Browser unterstützt.

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
- `:matches()` (veraltetes Legacy-Selector-Alias für {{CSSXref( ":is", ":is()")}})
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
- [`:-webkit-` pseudo-classes](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}}, und {{CSSXref(":local-link")}} Pseudo-Klassen ein. Derzeit wird keine dieser Funktionen von Browsern unterstützt.

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
  - : Überblick über die verschiedenen Typen von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektor Struktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und der im CSS-Selektoren-Modul eingeführten Fachbegriffe, von "einfacher Selektor" bis "vergebende relative Selektor Liste".

- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : Listet die Pseudo-Klassen auf, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, wie sie in den verschiedenen CSS-Modulen und HTML definiert sind.

- [Verwendung der `:target` Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : Erfahren Sie, wie Sie die {{CSSXref(":target")}} Pseudo-Klasse nutzen, um das Ziel-Element eines URL-Fragmentbezeichners zu stylen.

- [Privatsphäre und der `:visited` Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Untersucht die Stilbegrenzungen, die aus Gründen des Benutzerschutzes für die `:visited`-Klasse gelten.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, inklusive Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und -Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen kennen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auswahl und Traversierung im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [`&` Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref(":has-slotted")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Overflow](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Umbruchdarstellung](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

- [CSS-Pseudo-Element Modul](/de/docs/Web/CSS/Guides/Pseudo-elements) (repräsentiert Entitäten, die nicht in HTML enthalten sind)
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

- [CSS-Shadow-Parts Modul](/de/docs/Web/CSS/Guides/Shadow_parts)
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-Positionierungs-Layout Modul](/de/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Weitere [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
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

- [CSS-Pseudo-Element Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Nesting Modul](/de/docs/Web/CSS/Guides/Nesting)
- [Verwendung von Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
