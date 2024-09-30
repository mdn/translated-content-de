---
title: CSS Selector-Struktur
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: 716da01a0644bf92a2178ab8f0d51c61e717f806
---

{{CSSRef}}

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Element oder Elementen in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn diese Selektoren in der Pseudoklasse `:has()` als Parameter enthalten sind, werden sie als [relative Selektoren](#relativer_selektor) bezeichnet und repräsentieren Elemente relativ zu einem oder mehreren Anker-Elementen.

Diese Selektoren können zu einer komma-getrennten [Selektorliste](#selektorliste) kombiniert werden. Wenn ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie z.B. ein einzelner Typ-Selektor, Attributselektor oder Pseudoklasse, der nicht in Kombination mit oder als Teil einer anderen Selektorkomponente oder Kombinator verwendet wird. Ein bestimmtes Element wird als übereinstimmend mit einem einfachen Selektor bezeichnet, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzelnen [Basis-Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) oder [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Sequenz von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Menge simultaner Bedingungen auf ein einzelnes Element dar. Ein bestimmtes Element wird als übereinstimmend mit einem zusammengesetzten Selektor bezeichnet, wenn das Element mit allen einfachen Selektoren im zusammengesetzten Selektor übereinstimmt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) oder [universelle Selektor](/de/docs/Web/CSS/Universal_selectors) zuerst in der Sequenz der Selektoren stehen. Nur ein Typ-Selektor oder universeller Selektor ist in der Sequenz erlaubt. Da Leerzeichen den [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren getrennt sind, einschließlich des Leerzeichen [Nachfahren-Kombinators](/de/docs/Web/CSS/Descendant_combinator).

Ein komplexer Selektor stellt eine Menge gleichzeitiger Bedingungen auf eine Menge von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel, `a#selected > .icon` passt auf alle Elemente mit einer Klasse `icon`, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` passt auf die ersten `<p>`-Elemente, die direkt auf ein `<h2>`-Element folgen, welches Nachfahren eines Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Selector_list) ist eine komma-getrennte Liste einfacher, zusammengesetzter und/oder komplexer Selektoren. Ein bestimmtes Element wird als übereinstimmend mit einer Selektorliste bezeichnet, wenn das Element mit einem (mindestens einem) der Selektoren in dieser Selektorliste übereinstimmt.

```css
#main,
article.heading {
}
```

Wenn ein Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudoklassen {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} können verwendet werden, um [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) zu erstellen.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Anker-Elementen darstellt, dem ein Kombinator vorausgeht. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen impliziten [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Sie werden vielmehr in bestimmten Kontexten akzeptiert, wie z.B. der Pseudoklasse {{cssxref(":has", ":has()")}}.

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
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
