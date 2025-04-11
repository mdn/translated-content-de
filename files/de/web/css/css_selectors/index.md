---
title: CSS-Selektoren
slug: Web/CSS/CSS_selectors
l10n:
  sourceCommit: 898dd2394e7b70daa2c0c212282a64ccf5938341
---

{{CSSRef}}

Das Modul **CSS-Selektoren** definiert die Muster zur Auswahl von Elementen, auf die dann eine Reihe von CSS-Regeln zusammen mit deren [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente zu matchen oder auszuwählen, die Sie gestalten möchten. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden.

Selektoren, unabhängig davon, ob sie in CSS oder JavaScript verwendet werden, ermöglichen das Ansprechen von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar Positionen im DOM. Kombinatoren ermöglichen es Ihnen, bei der Auswahl von Elementen präziser zu sein, indem Sie Elemente basierend auf ihrer Beziehung zu anderen Elementen auswählen.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Child_combinator))
- `||` ([Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator))
- `~` ([Allgemeiner Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator))
- " " ([Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator))
- `|` ([Namensraum-Trennzeichen](/de/docs/Web/CSS/Namespace_separator))
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
- `:matches()` (veraltetes Erbe-Selektor-Synonym für {{CSSXref( ":is", ":is()")}})
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
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors)
- [Klassenselektoren](/de/docs/Web/CSS/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Universal_selectors)

## Begriffe

- {{Glossary("Pseudo-class", "Pseudo-Klasse")}} Glossarbegriff
- [Funktionelle Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector)
- [Zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)

  - : Überblick über die verschiedenen Arten von einfachen Selektoren und verschiedenen Kombinatoren, die im CSS-Selektoren-Modul und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)

  - : Erklärung der Struktur von CSS-Selektoren und der in den CSS-Selektoren-Modulen eingeführten Terminologien, von "einfachen Selektoren" bis "nachgiebige relative Selektorenliste".

- [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes)

  - : Listet die Pseudo-Klassen auf, Selektoren, die die Auswahl von Elementen basierend auf Statusinformationen ermöglichen, die nicht im Dokument-Baum enthalten sind, definiert in den verschiedenen CSS- und HTML-Modulen.

- [Verwendung der `:target`-Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

  - : Lernen Sie, wie Sie die {{CSSXref(":target")}}-Pseudo-Klasse verwenden, um das Ziel-Element eines URL-Fragment-Bezeichners zu stylen.

- [Datenschutz und der `:visited`-Selektor](/de/docs/Web/CSS/CSS_selectors/Privacy_and_the_visited_selector)

  - : Erforscht die Stilbeschränkungen auf der `:visited`-Klasse zu Gunsten des Benutzerdatenschutzes.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) sowie [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)

  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen, die zum Stylen von Formularen in verschiedenen Zuständen verfügbar sind.

- [Lokalisieren von DOM-Elementen mithilfe von Selektoren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)

  - : Die Selektoren-API ermöglicht es, Selektoren in JavaScript zu verwenden, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Nestingsmodul](/de/docs/Web/CSS/CSS_nesting)
  - [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [CSS-Skopingmodul](/de/docs/Web/CSS/CSS_scoping)

  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{CSSXref(":host_function", ":host()")}} Pseudo-Klasse
  - {{CSSXref(":host-context", ":host-context()")}} Pseudo-Klasse
  - {{CSSXref(":has-slotted")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow)

  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Multispalten-Layoutmodul](/de/docs/Web/CSS/CSS_multicol_layout)

  - {{cssxref("::column")}}

- [CSS seitengesteuertes Medienmodul](/de/docs/Web/CSS/CSS_paged_media)

  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

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

- [CSS-Schattenparts-Modul](/de/docs/Web/CSS/CSS_shadow_parts)

  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-Positionierungs-Layoutmodul](/de/docs/Web/CSS/CSS_positioned_layout)

  - {{CSSxRef("::backdrop")}}

- Weitere [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - {{CSSxRef("::cue")}}

- {{CSSXref("@namespace")}} At-Regel

- {{cssxref("important", "!important")}}
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector)-Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll)-Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)-Methode

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Element-Modul](/de/docs/Web/CSS/CSS_pseudo-elements)
- [CSS-Kaskaden- und Vererbungssmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Nestingsmodul](/de/docs/Web/CSS/CSS_nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
