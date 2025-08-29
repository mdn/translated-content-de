---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: e35c1a8397220f5aa1a9063c5e62444899d3aa26
---

Das **CSS-Selektoren**-Modul definiert die Muster, um Elemente auszuwählen, auf die anschließend eine Reihe von CSS-Regeln zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden oder auszuwählen, die Sie stylen möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen das Ziel von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben eine präzisere Auswahl von Elementen, indem sie die Auswahl von Elementen basierend auf ihrer Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Adjazenter Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kindkombinator](/de/docs/Web/CSS/Child_combinator))
- `~` ([Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namespace-Trennzeichen](/de/docs/Web/CSS/Namespace_separator))
- `,` ([Selektorliste](/de/docs/Web/CSS/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator) (`||`) ein. Derzeit wird dieses Feature von keinem Browser unterstützt.

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
- `:matches()` (veralteter Legacy-Selektor-Alias für {{CSSXref(":is", ":is()")}})
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
- [`:-webkit-` Pseudo-Klassen](/de/docs/Web/CSS/WebKit_Extensions#pseudo-classes)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}} und {{CSSXref(":local-link")}} Pseudo-Klassen ein. Derzeit werden diese Features von keinem Browser unterstützt.

## Begriffe

- {{Glossary("Pseudo-class", "Pseudo-Klasse")}} Glossarbegriff
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
  - : Übersicht über die verschiedenen Arten einfacher Selektoren und verschiedener Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und die in dem CSS-Selektoren-Modul eingeführten Begrifflichkeiten, von "einfacher Selektor" bis "fehlertolerante relative Selektorenliste".

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
  - : Listet die Pseudo-Klassen auf, Selektoren, die die Auswahl von Elementen basierend auf Statusinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target`-Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
  - : Lernen Sie, wie Sie die {{CSSXref(":target")}}-Pseudo-Klasse verwenden können, um das Zielelement eines URL-Fragmentidentifikators zu stylen.

- [Datenschutz und der `:visited`-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Untersucht die Stilbeschränkungen, die aus Datenschutzgründen auf die `:visited`-Klasse angewendet werden.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Erfahren Sie mehr über die verschiedenen UI-Pseudo-Klassen, die für die Gestaltung von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auffinden von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref(":has-slotted")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

- [CSS-Pseudo-Elemente Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (Repräsentation von Entitäten, die nicht in HTML enthalten sind)
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

- [CSS-Schatten-Teile Modul](/de/docs/Web/CSS/CSS_shadow_parts)
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-Positionierungslayout Modul](/de/docs/Web/CSS/CSS_positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Weitere [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} At-Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector) Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach) Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
