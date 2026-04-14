---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Guides/Selectors
l10n:
  sourceCommit: a75edf682e5e346b4f97582db6cbccaae800ef73
---

Das **CSS-Selektoren**-Modul definiert die Muster zur Auswahl von Elementen, auf die eine Reihe von CSS-Regeln zusammen mit ihrer [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) angewendet werden. Das CSS-Selektoren-Modul bietet uns mehr als 60 Selektoren und fünf Kombinatoren. [Andere Module](#verwandte_konzepte) bieten zusätzliche Pseudo-Klassen-Selektoren und Pseudo-Elemente.

> [!NOTE]
> Diese Seite stellt ein CSS-Modul vor. Eine vollständige Liste aller Selektoren, die durch die CSS-Spezifikationen definiert sind, finden Sie auf der [Selektoren](/de/docs/Web/CSS/Reference/Selectors) Referenzseite.

In CSS sind Selektoren Muster, die verwendet werden, um die Elemente, die Sie stylen möchten, zu erfassen oder auszuwählen. Selektoren werden auch in JavaScript verwendet, um die Auswahl der DOM-Knoten zu ermöglichen, die als [`NodeList`](/de/docs/Web/API/NodeList) zurückgegeben werden sollen.

Selektoren, ob in CSS oder JavaScript verwendet, ermöglichen es, HTML-Elemente basierend auf ihrem Typ, ihren Attributen, ihren aktuellen Zuständen und sogar ihrer Position im DOM zu zielen. Kombinatoren erlauben es Ihnen, präziser bei der Auswahl von Elementen zu sein, indem Sie die Auswahl basierend auf ihrer Beziehung zu anderen Elementen ermöglichen.

## Referenz

### Kombinatoren und Trennzeichen

- `+` ([Nachfolger-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator))
- `>` ([Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator))
- `~` ([Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator))
- " " ([Nachfahren-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator))
- `|` ([Namespace-Trennzeichen](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator))
- `,` ([Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list))

Das CSS-Selektoren-Modul führt auch den [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator) (`||`) ein. Derzeit unterstützen keine Browser dieses Feature.

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
- `:matches()` (veralteter Alias für {{CSSXref( ":is", ":is()")}})
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
- {{CSSXref(":user-invalid")}}
- {{CSSXref(":user-valid")}}
- {{CSSXref(":valid")}}
- {{CSSXref(":visited")}}
- {{CSSXref(":volume-locked")}}
- {{cssxref(":where()")}}
- [`:-webkit-` Pseudoklassen](/de/docs/Web/CSS/Reference/Webkit_extensions#pseudo-classes)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

Das CSS-Selektoren-Modul führt auch die {{CSSXref(":blank")}}, {{CSSXref(":current")}} und {{CSSXref(":local-link")}} Pseudoklassen ein. Derzeit unterstützen keine Browser diese Features.

## Begriffe

- {{Glossary("Pseudo-class", "Pseudoklasse")}} Glossarbegriff
- [Funktionale Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes)
- [Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators)
- [Einfacher Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector)
- [Kombinierter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector)
- [Komplexer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector)
- [Relativer Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)

## Leitfäden

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
  - : Überblick über die verschiedenen Typen von einfachen Selektoren und verschiedenen Kombinatoren, die in den CSS-Selektoren und den CSS-Pseudo-Modulen definiert sind.

- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
  - : Erklärung der Struktur von CSS-Selektoren und der in den CSS-Selektoren-Modulen eingeführten Begriffe, von "einfachem Selektor" bis "verzeihende relative Selektorenliste".

- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - : Listet die Pseudoklassen auf, Selektoren, die die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind, definiert in den verschiedenen CSS-Modulen und HTML.

- [Verwendung der `:target` Pseudoklasse in Selektoren](/de/docs/Web/CSS/Guides/Selectors/Using_:target)
  - : Erfahren Sie, wie Sie die {{CSSXref(":target")}} Pseudoklasse verwenden, um das Zielelement eines URL-Fragmentidentifikators zu stylen.

- [Privatsphäre und der `:visited` Selektor](/de/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Erforscht die Stilbeschränkungen für die `:visited` Klasse zum Schutz der Privatsphäre der Benutzer.

- [CSS-Bausteine: CSS-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : Einführung in grundlegende CSS-Selektoren, einschließlich Tutorials zu [Typ-, Klassen- und ID-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), [Attributselektoren](/de/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors), [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) und [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators).

- [Lernen: UI-Pseudoklassen](/de/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : Lernen Sie die verschiedenen UI-Pseudoklassen kennen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

- [Auswahl und Traversierung auf dem DOM-Baum](/de/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
  - : Die Selektoren-API ermöglicht es, Selektoren in JavaScript zu verwenden, um Elementknoten aus dem DOM abzurufen.

## Verwandte Konzepte

- {{CSSXref(":state","state()")}} Pseudoklasse
- {{CSSXref(":xr-overlay")}} Pseudoklasse
- [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul
  - [`&` Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Scope](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}} Pseudoklasse
  - {{cssxref(":host()")}} Pseudoklasse
  - {{cssxref(":host-context()")}} Pseudoklasse
  - {{CSSXref(":has-slotted")}} Pseudoklasse
  - {{CSSXref("::slotted")}} Pseudoelement

- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{cssxref("::scroll-button()")}}
  - {{cssxref("::scroll-marker")}}
  - {{cssxref("::scroll-marker-group")}}
  - {{cssxref(":target-current")}}

- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
  - {{cssxref("::column")}}

- [CSS-Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) Modul
  - {{CSSXref(":left")}} Pseudoklasse
  - {{CSSXref(":right")}} Pseudoklasse
  - {{CSSXref(":first")}} Pseudoklasse
  - `:blank` Pseudoklasse

- [CSS-Pseudoelement-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements) (repräsentiert Entitäten, die nicht im HTML enthalten sind)
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

- [CSS-Schattenteile-Modul](/de/docs/Web/CSS/Guides/Shadow_parts)
  - {{CSSXref("::part")}} Pseudoelement

- [CSS-positioniertes-Layout-Modul](/de/docs/Web/CSS/Guides/Positioned_layout)
  - {{CSSxRef("::backdrop")}}

- Andere [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{CSSxRef("::cue")}}

- [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
  - [`<keyframe-selector>`](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)

- {{CSSXref("@namespace")}} Regel

- {{cssxref("wichtig", "!important")}}
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction)

- [`Document.querySelector`](/de/docs/Web/API/Document/querySelector) Methode
- [`Document.querySelectorAll`](/de/docs/Web/API/Document/querySelectorAll) Methode
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach) Methode

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [CSS-Pseudoelement-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [CSS-Kaskadierungs- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/Guides/Nesting)
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
