---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Guides/Selectors
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

Das **CSS-Selektoren**-Modul definiert die Muster zur Auswahl von Elementen, auf die dann eine Reihe von CSS-Regeln zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

> [!NOTE]
> Diese Seite führt in ein CSS-Modul ein. Um eine vollständige Liste aller Selektoren zu finden, die von CSS-Spezifikationen definiert werden, siehe die [Selektoren](/de/docs/Web/CSS/Reference/Selectors) Referenzseite.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente abzugleichen oder auszuwählen, die Sie stilisieren möchten. Selektoren werden auch in JavaScript verwendet, um das Auswählen der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen das Anvisieren von HTML-Elementen basierend auf ihrem Typ, ihren Attributen, aktuellen Zuständen und sogar ihrer Position im DOM. Kombinatoren ermöglichen es, präziser zu sein, wenn Sie Elemente auswählen, indem sie die Auswahl von Elementen basierend auf ihrer Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Nachfolgender Geschwisterkombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([Nachfolgende Geschwisterkombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Nachkomme-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namensraum-Trennzeichen](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spaltenkombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) ein. Derzeit unterstützen keine Browser diese Funktion.

### Selektoren

- {{CSSXref(":active")}}
- {{CSSXref(":any-link")}}
- {{CSSXref(":autofill")}}
- {{CSSXref(":buffering")}}
- {{CSSXref(":checked")}}
- {{CSSXref(":default")}}
- {{CSSXref(":defined")}}
- {{cssxref(":dir()")}}
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
- {{cssxref(":has()")}}
- {{CSSXref(":hover")}}
- {{CSSXref(":in-range")}}
- {{CSSXref(":indeterminate")}}
- {{CSSXref(":interest-source")}}
- {{CSSXref(":interest-target")}}
- {{CSSXref(":invalid")}}
- {{cssxref(":is()")}}
- {{cssxref(":lang()")}}
- {{CSSXref(":last-child")}}
- {{CSSXref(":last-of-type")}}
- {{CSSXref(":link")}}
- `:matches()` (veraltetes Legacy-Selector-Alias für {{CSSXref(":is", ":is()")}})
- {{CSSXref(":modal")}}
- {{CSSXref(":muted")}}
- {{cssxref(":not()")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-of-type()")}}
- {{cssxref(":nth-last-child()")}}
- {{cssxref(":nth-last-of-type()")}}
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
- {{CSSXref(":user-invalid")}},
- {{CSSXref(":user-valid")}},
- {{CSSXref(":valid")}},
- {{CSSXref(":visited")}},
- {{CSSxRef(":volume-locked")}},
- {{cssxref(":where()")}},
- [`:-webkit-` Pseudo-Klassen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes),
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors),
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors),
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors),
- [Typen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors),
- [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}}, und {{CSSXref(":local-link")}} Pseudo-Klassen ein. Derzeit unterstützen keine Browser diese Funktionen.

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

- [CSS Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : Erklärung der Struktur der CSS-Selektoren und der im CSS-Selektoren-Modul eingeführten Begrifflichkeiten, von "einfacher Selektor" bis "verzeihende relative Selektorliste".

- [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : Liste der Pseudo-Klassen, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target`-Pseudo-Klasse in Selektoren](/de/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : Erfahren Sie, wie Sie die {{CSSXref(":target")}}-Pseudo-Klasse verwenden, um das Ziel-Element eines URL-Fragment-Identifikators zu gestalten.

- [Datenschutz und der `:visited`-Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Untersucht die Stilbeschränkungen, die aus Gründen des Datenschutzes auf die `:visited`-Klasse angewendet werden.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in die grundlegenden CSS-Selektoren, einschließlich Tutorials zu [Typen-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudo-Klassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen UI-Pseudo-Klassen kennen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auswahl und Traversierung im DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht die Verwendung von Selektoren in JavaScript, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudo-Klasse
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Scope](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}} Pseudo-Klasse
  - {{cssxref(":host()")}} Pseudo-Klasse
  - {{cssxref(":host-context()")}} Pseudo-Klasse
  - {{CSSXref(":has-slotted")}} Pseudo-Klasse
  - {{CSSXref("::slotted")}} Pseudo-Element

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Medien für Seiten](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{CSSXref(":left")}} Pseudo-Klasse
  - {{CSSXref(":right")}} Pseudo-Klasse
  - {{CSSXref(":first")}} Pseudo-Klasse
  - `:blank` Pseudo-Klasse

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

- [CSS-Shadow-Parts-Modul](/de/docs/Web/CSS/Guides/Shadow_parts)
  - {{CSSXref("::part")}} Pseudo-Element

- [CSS-positionierte Layout-Modul](/de/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Andere [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
  - [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)

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
- [CSS-Kaskadierung und -Vererbung Modul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Verschachtelung Modul](/de/docs/Web/CSS/Guides/Nesting)
- [Verwendung des Schatten-DOMs](/de/docs/Web/API/Web_components/Using_shadow_DOM)
