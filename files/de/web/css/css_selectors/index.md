---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{CSSRef}}

Das Modul **CSS-Selektoren** definiert die Muster, um Elemente auszuwählen, auf die dann eine Reihe von CSS-Regeln zusammen mit ihrer {{cssxref("specificity")}} angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden, oder auszuwählen, die Sie stilisieren möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen das Anvisieren von HTML-Elementen basierend auf ihrem Typ, Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren erlauben es Ihnen, bei der Auswahl von Elementen präziser zu sein, indem die Auswahl auf der Beziehung zu anderen Elementen basiert.

## Referenz

### Kombinatoren und Separatoren

- `+` ([Direkt-Nachfolger-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Allgemeiner Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
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
- `:matches()` (veralteter alias für {{CSSXref( ":is", ":is()")}})
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
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [Klassenselektor](/de/docs/Web/CSS/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)

## Begriffe

- {{glossary("Pseudo-class")}} Glossarbegriff
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [Spezifität](/de/docs/Web/CSS/Specificity)

## Anleitungen

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Überblick über die verschiedenen Arten von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Erklärung der Struktur von CSS-Selektoren und der im CSS-Selektoren-Modul eingeführten Begriffe, die von "einfacher Selektor" bis "nachgiebige relative Selektorenliste" reichen.

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)

  - : Listet die Pseudo-Klassen auf, Selektoren, die es ermöglichen, Elemente basierend auf Zustandsinformationen auszuwählen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Lernen: CSS-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors)

  - : Teil der CSS-Grundlagen, umfasst Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors), [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators), [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), und [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers).

- [Verwenden der `:target` Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Lernen Sie, wie Sie die {{CSSXref(":target")}} Pseudo-Klasse verwenden, um das Zielelement eines URL-Fragmentkennzeichens zu stylen.

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn/Forms/UI_pseudo-classes)

  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen kennen, die zum Stylen von Formularen in verschiedenen Zuständen verfügbar sind.

- [DOM-Elemente mithilfe von Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":popover-open")}} Pseudo-Klasse
- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) Modul
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul

  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{cssxref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (darstellen von Entitäten, die nicht in HTML enthalten sind)

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

- [CSS-Positionierungsmodul](/de/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Kaskade](/de/docs/Web/CSS/Cascade)

- {{domxref("Document.querySelector")}} Methode
- {{domxref("Document.querySelectorAll")}} Methode
- {{domxref("NodeList.forEach()")}} Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwenden von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
