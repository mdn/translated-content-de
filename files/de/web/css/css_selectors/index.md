---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Das **CSS-Selektoren**-Modul definiert die Muster zur Auswahl von Elementen, auf die eine Reihe von CSS-Regeln zusammen mit ihrer {{cssxref("specificity")}} angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu finden, oder auszuwählen, die Sie stylen möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen die Zielauswahl von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren ermöglichen es Ihnen, bei der Auswahl von Elementen präziser zu sein, indem Sie Elemente basierend auf ihrer Beziehung zu anderen Elementen auswählen können.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Next-sibling Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Child Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Column Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Subsequent sibling Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Descendant Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namespace Trennzeichen](/de/docs/Web/CSS/Namespace_separator))

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
- `:matches()` (veraltete Auswahl-Selektor-Alias für {{CSSXref( ":is", ":is()")}})
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
- [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

## Begriffe

- {{Glossary("Pseudo-class", "Pseudo-Klasse")}} Glossarbegriff
- [Funktionale Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Selektor-Liste](/de/docs/Web/CSS/Selector_list)
- [Spezifität](/de/docs/Web/CSS/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Überblick über die verschiedenen Arten einfacher Selektoren und die verschiedenen Kombinatoren, die im CSS-Selektoren- und im CSS-Pseudo-Modul definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Erklärung der Struktur von CSS-Selektoren und der im CSS-Selektoren-Modul eingeführten Terminologien, die vom "einfachen Selektor" bis zur "verzeihenden relativen Selektorliste" reichen.

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)

  - : Listet die Pseudo-Klassen auf, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, wie sie in den verschiedenen CSS-Modulen und HTML definiert sind.

- [Lernen: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

  - : Teil der CSS-Bausteine, beinhaltet Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators), [Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) und [Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).

- [Verwendung der `:target` Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Lernen Sie, wie Sie die {{CSSXref(":target")}} Pseudo-Klasse verwenden können, um das Zielelement eines URL-Fragment-Identifikators zu stylen.

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)

  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen kennen, die für die Gestaltung von Formularen in verschiedenen Zuständen verfügbar sind.

- [Ermitteln von DOM-Elementen mit Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":popover-open")}} Pseudo-Klasse
- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Scoping-Modul](/de/docs/Web/CSS/CSS_scoping)

  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{cssxref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements) (darstellende Einheiten, die nicht in HTML enthalten sind)

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

- [CSS positioniertes Layout-Modul](/de/docs/Web/CSS/CSS_positioned_layout)

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
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
