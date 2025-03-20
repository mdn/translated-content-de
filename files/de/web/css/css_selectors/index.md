---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 62f49419c2c97353749cf9d21df9e205a60ca62b
---

{{CSSRef}}

Das **CSS-Selektoren**-Modul definiert die Muster zur Auswahl von Elementen, auf die ein Satz von CSS-Regeln zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) angewendet wird. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) liefern zusätzliche Pseudoklassen-Selektoren und Pseudoelemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu auswählen, die Sie gestalten möchten. Selektoren werden auch in JavaScript verwendet, um das Auswählen der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen das Ansprechen von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben es Ihnen, präziser zu sein, indem Sie Elemente basierend auf ihrer Beziehung zu anderen Elementen auswählen.

## Referenz

### Kombinatoren und Trenner

- `+` ([Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachfahre-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namensraum-Trenner](/de/docs/Web/CSS/Namespace_separator))
- `,` ([Selektorenliste](/de/docs/Web/CSS/Selector_list))

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
- `:matches()` (veraltetes Legacy-Selektor-Alias für {{CSSXref( ":is", ":is()")}})
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
- [`:-webkit-` Pseudoklassen](/de/docs/Web/CSS/WebKit_Extensions#pseudo-classes)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
- [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

## Begriffe

- {{Glossary("Pseudo-class", "Pseudoklasse")}} Glossarbegriff
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Überblick über die verschiedenen Typen von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudomodulen definiert sind.

- [Struktur der CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Erklärung der Struktur von CSS-Selektoren und der in dem CSS-Selektoren-Modul eingeführten Fachbegriffe, vom "einfachen Selektor" bis zur "nachsichtigen relativen Selektorenliste".

- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)

  - : Liste der Pseudoklassen, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target` Pseudoklasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Lernen Sie, wie Sie die {{CSSXref(":target")}} Pseudoklasse verwenden, um das Ziel-Element eines URL-Fragment-Identifikators zu gestalten.

- [Datenschutz und der `:visited` Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)

  - : Untersucht die Stilbeschränkungen, die im Interesse der Privatsphäre auf die `.visited`-Klasse gesetzt werden.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

  - : Einführung in die grundlegenden CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)

  - : Lernen Sie die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auffinden von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM zu erhalten.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudoklasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [`&` Verschachtelung-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scope](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}} Pseudoklasse
  - {{CSSXref(":host_function", ":host()")}} Pseudoklasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudoklasse
  - {{CSSXref(":has-slotted")}} Pseudoklasse
  - {{CSSXref("::slotted")}} Pseudoelement

- [CSS-Paged-Media](/de/docs/Web/CSS/CSS_paged_media) Modul

  - {{CSSXref(":left")}} Pseudoklasse
  - {{CSSXref(":right")}} Pseudoklasse
  - {{CSSXref(":first")}} Pseudoklasse
  - `:blank` Pseudoklasse

- [CSS-Pseudoelement-Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (repräsentiert Entitäten, die nicht in HTML enthalten sind)

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

- [CSS-Shadow-Parts-Modul](/de/docs/Web/CSS/CSS_shadow_parts)

  - {{CSSXref("::part")}} Pseudoelement

- [CSS-Positioned-Layout-Modul](/de/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Andere [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

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

- [CSS-Pseudoelement-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
