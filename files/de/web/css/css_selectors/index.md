---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{CSSRef}}

Das **CSS-Selektoren**-Modul definiert Muster zur Auswahl von Elementen, auf die eine Reihe von CSS-Regeln und deren {{cssxref("specificity")}} angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente, die Sie stylen möchten, zu finden oder auszuwählen. Selektoren werden auch in JavaScript verwendet, um die Auswahl von DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, die in CSS oder JavaScript verwendet werden, ermöglichen die gezielte Auswahl von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, ihrem aktuellen Zustand und sogar ihrer Position im DOM. Kombinatoren ermöglichen eine präzisere Auswahl von Elementen anhand ihrer Beziehung zu anderen Elementen.

## Referenz

### Kombinatoren und Separatoren

- `+` ([Nachfolgender Geschwister Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Nachfolgender Geschwister Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachfahre-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namespace-Separator](/de/docs/Web/CSS/Namespace_separator))

### Selektoren

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":blank")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":current")}}
- {{CSSXref(":current", ":current()")}}
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
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":invalid")}}
- {{CSSXref(":is", ":is()")}}
- {{CSSXref(":lang", ":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- {{CSSXref(":local-link")}}
- `:matches()` (veraltetes Legacy-Selektor-Alias für {{CSSXref(":is", ":is()")}})
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{CSSXref(":not", ":not()")}}
- {{CSSXref(":nth-child", ":nth-child()")}}
- {{CSSXref(":nth-of-type", ":nth-of-type()")}}
- {{CSSXref(":nth-last-child", ":nth-last-child()")}}
- {{CSSXref(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSXref(":only-child")}}
- {{CSSXref(":only-of-type")}}
- {{CSSXref(":optional")}}
- {{CSSXref(":out-of-range")}}
- {{CSSXref(":past")}}
- {{CSSXref(":paused")}}
- {{CSSXref(":picture-in-picture")}}
- {{CSSXref(":placeholder-shown")}}
- {{CSSXref(":playing")}}
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

- {{Glossary("Pseudo-class", "Pseudo-Klasse")}} Glossareintrag
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [Spezifität](/de/docs/Web/CSS/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Überblick über die verschiedenen Arten von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Erklärung der Struktur von CSS-Selektoren und der in den CSS-Selektoren-Modulen eingeführten Begriffe, die von "einfacher Selektor" bis "verzeihende relative Selektorenliste" reichen.

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)

  - : Listet die Pseudo-Klassen auf, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind und in den verschiedenen CSS-Modulen und HTML definiert sind.

- [Lernen: CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Teil der CSS-Bausteine, enthält Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors), [Attribut-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators), [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) und [Kaskadenebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers).

- [Verwendung der `:target`-Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Lernen Sie, wie Sie die {{CSSXref(":target")}}-Pseudo-Klasse verwenden, um das Ziel-Element eines URL-Fragment-Identifiers zu stylen.

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)

  - : Lernen Sie die verschiedenen verfügbaren UI-Pseudo-Klassen, um Formulare in verschiedenen Zuständen zu stylen.

- [Aufspüren von DOM-Elementen mithilfe von Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : Die Selektoren API ermöglicht es, Selektoren in JavaScript zu verwenden, um Elementknoten aus dem DOM zu erhalten.

## Verwandte Konzepte

- {{CSSXref(":popover-open")}} Pseudo-Klasse
- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
  - [`&` Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{cssxref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (repräsentiert Entitäten, die nicht in HTML enthalten sind)

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

  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-positionsbezogenes Layout-Modul](/de/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} At-Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Kaskade](/de/docs/Web/CSS/Cascade)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector) Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach) Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS Kaskade und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
