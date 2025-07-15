---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das Modul **CSS-Selektoren** definiert Muster zur Auswahl von Elementen, auf die dann eine Reihe von CSS-Regeln mit ihrer [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) angewendet werden. Das CSS-Selektoren-Modul stellt uns mehr als 60 Selektoren und fünf Kombinatoren zur Verfügung. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente, die Sie gestalten möchten, zu finden oder auszuwählen. Selektoren werden auch in JavaScript verwendet, um das Auswählen der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen die Zielbestimmung von HTML-Elementen basierend auf ihrem Typ, Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren ermöglichen eine genauere Auswahl von Elementen, indem sie die Auswahl von Elementen basierend auf ihrer Beziehung zu anderen Elementen erlauben.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namespace-Trennzeichen](/de/docs/Web/CSS/Namespace_separator))
- `,` ([Selektorliste](/de/docs/Web/CSS/Selector_list))

### Selektoren

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":current")}}
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
- {{CSSXref(":local-link")}}
- `:matches()` (veralteter Alias für {{CSSXref( ":is", ":is()")}})
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
- {{CSSXref(":target-within")}}
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{CSSXref(":where", ":where()")}}
- [`:-webkit-` Pseudo-Klassen](/de/docs/Web/CSS/WebKit_Extensions#pseudo-classes)
- [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors)
- [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
- [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

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

- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
  - : Überblick über die verschiedenen Arten von einfachen Selektoren und diversen Kombinatoren, die in den CSS-Selektoren- und CSS-Pseudo-Modulen definiert sind.

- [CSS Selektor-Struktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und der in den CSS-Selektoren-Modulen eingeführten Begriffe, die von "einfacher Selektor" bis "nachsichtige relative Selektorenliste" reichen.

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)
  - : Listet die Pseudo-Klassen auf, Selektoren, die es ermöglichen, Elemente basierend auf Zustandsinformationen auszuwählen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target`-Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
  - : Lernen Sie, wie Sie die {{CSSXref(":target")}}-Pseudo-Klasse verwenden, um das Zielelement eines URL-Fragment-Identifiers zu gestalten.

- [Datenschutz und der `:visited`-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)
  - : Erforscht die Stilbeschränkungen, die auf die `:visited`-Klasse zum Schutz der Privatsphäre der Nutzer gesetzt wurden.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials über [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attribut-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements), und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen verfügbaren UI-Pseudo-Klassen zum Stilisieren von Formularen in verschiedenen Zuständen.

- [Lokalisierung von DOM-Elementen mittels Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
  - : Die Selektoren-API ermöglicht die Nutzung von Selektoren in JavaScript, um Elementknoten aus dem DOM zu finden.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [`&` Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scope](/de/docs/Web/CSS/CSS_scoping) Modul
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

- [CSS-Mehrspaltige Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) Modul
  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

- [CSS-Pseudo-Elemente Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (Repräsentiert Entitäten, die nicht im HTML enthalten sind)
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

- [CSS-Schattenteile Modul](/de/docs/Web/CSS/CSS_shadow_parts)
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-Gestaltungsmodul für positionierte Inhalte](/de/docs/Web/CSS/CSS_positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
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
- [CSS-Kaskadierung und Vererbung Modul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
