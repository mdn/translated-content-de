---
title: Struktur von CSS-Selektoren
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: 716da01a0644bf92a2178ab8f0d51c61e717f806
---

{{CSSRef}}

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Elementen oder einem Element in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn diese Selektoren als Parameter in der `:has()`-Pseudoklasse enthalten sind, werden sie als [relative Selektoren](#relativer_selektor) bezeichnet und repräsentieren Elemente relativ zu einem oder mehreren Ankerelementen.

Diese Selektoren können in eine durch Kommas getrennte [Selektorliste](#selektorliste) kombiniert werden. Falls ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einem einzigen Bestandteil, wie einem einzigen Typselektor, Attributselektor oder einer Pseudoklasse, der nicht in Kombination mit oder zusammen mit einem anderen Selektorbestandteil oder Kombinator verwendet wird. Ein bestimmtes Element wird als passend zu einem einfachen Selektor angesehen, wenn dieser einfache Selektor das Element akkurat beschreibt. Jeder Selektor, der einen einzigen [grundlegenden Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), oder [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Sequenz von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Reihe von gleichzeitigen Bedingungen für ein einzelnes Element dar. Ein bestimmtes Element wird als passend zu einem zusammengesetzten Selektor angesehen, wenn das Element alle einfachen Selektoren in dem zusammengesetzten Selektor erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Type_selectors) oder [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) zuerst in der Sequenz der Selektoren vorkommen. Es ist nur ein Typselektor oder universeller Selektor in der Sequenz erlaubt. Da Leerzeichen den [Kombinator für Nachfahren](/de/docs/Web/CSS/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren, einschließlich des Leerzeichen-Kombinators für Nachfahren, getrennt sind.

Ein komplexer Selektor stellt eine Reihe von gleichzeitigen Bedingungen für eine Menge von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel passt `a#selected > .icon` alle Elemente mit einer Klasse von `icon`, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` passt auf die ersten `<p>`s, die unmittelbar nach einem `<h2>`-Element kommen, das ein Nachkomme eines beliebigen Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Selector_list) ist eine durch Kommas getrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein bestimmtes Element wird als passend zu einer Selektorliste angesehen, wenn das Element einem (mindestens einem) der Selektoren in dieser Selektorliste entspricht.

```css
#main,
article.heading {
}
```

Falls ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die {{cssxref(":is", ":is()")}}- und {{cssxref(":where", ":where()")}}-Pseudoklassen können verwendet werden, um [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) zu konstruieren.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Ankerelementen darstellt, dem ein Kombinator vorausgeht. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen impliziten [Kombinator für Nachfahren](/de/docs/Web/CSS/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Stattdessen werden sie in bestimmten Kontexten akzeptiert, wie der {{cssxref(":has", ":has()")}}-Pseudoklasse.

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

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
