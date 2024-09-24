---
title: Struktur von CSS-Selektoren
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: 716da01a0644bf92a2178ab8f0d51c61e717f806
---

{{CSSRef}}

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Element oder Elementen in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn diese Selektoren als Parameter in der `:has()` Pseudo-Klasse enthalten sind, werden sie als [relative Selektoren](#relativer_selektor) bezeichnet, die Elemente relativ zu einem oder mehreren Ankerelementen darstellen.

Diese Selektoren können in einer kommagetrennten [Selektorenliste](#selektorenliste) kombiniert werden. Wenn ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorenliste ungültig gemacht.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie z.B. ein einzelner Typ-Selektor, Attributselektor oder Pseudo-Klasse, der/die nicht in Kombination mit oder keinen anderen Selektorkomponenten oder Kombinator enthält. Ein gegebenes Element wird als passend zu einem einfachen Selektor angesehen, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzelnen [Basis-Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) oder [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) Selektor enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Sequenz von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Reihe von gleichzeitigen Bedingungen auf ein einzelnes Element dar. Ein gegebenes Element wird als passend zu einem zusammengesetzten Selektor angesehen, wenn das Element alle einfachen Selektoren im zusammengesetzten Selektor erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) oder [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) zuerst in der Sequenz von Selektoren erscheinen. Nur ein Typ-Selektor oder universelle Selektor ist in der Sequenz erlaubt. Da Leerzeichen den [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren getrennt sind, einschließlich des Leerzeichen [Nachfahren-Kombinators](/de/docs/Web/CSS/Descendant_combinator).

Ein komplexer Selektor stellt eine Reihe von gleichzeitigen Bedingungen auf einen Satz von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel, `a#selected > .icon` trifft auf alle Elemente mit einer Klasse von `icon` zu, die direkte Kinder des `<a>` Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` trifft auf die ersten `<p>`s zu, die unmittelbar nach jedem `<h2>` Element kommen, das Nachfahren eines Elements mit der Klasse `box` ist.

### Selektorenliste

Eine [**Selektorenliste**](/de/docs/Web/CSS/Selector_list) ist eine kommagetrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein gegebenes Element wird als passend zu einer Selektorenliste angesehen, wenn das Element einen (mindestens einen) der Selektoren in dieser Selektorenliste erfüllt.

```css
#main,
article.heading {
}
```

Wenn ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorenliste ungültig gemacht.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` ist ungültig und macht diesen Stilblock ungültig */
}
```

Die {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} Pseudo-Klassen können verwendet werden, um [verzeihende Selektorenlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) zu erstellen.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Ankerelementen darstellt, die durch einen Kombinator vorangestellt sind. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen implizierten [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorenliste verwendet werden. Vielmehr wird er in bestimmten Kontexten akzeptiert, wie z.B. in der {{cssxref(":has", ":has()")}} Pseudo-Klasse.

```css
:has(+ div#topic > #reference) {
}

:has(> .icon) {
}

dt:has(+ img) ~ dd {
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Verzeihende Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list)
- {{DOMXref("Document.querySelector()")}}
- {{DOMXref("Document.querySelectorAll()")}}
- Modul [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
- Modul [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)
