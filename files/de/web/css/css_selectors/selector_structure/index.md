---
title: CSS-Selektorstruktur
short-title: Selector structure
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der CSS-Selektor repräsentiert ein bestimmtes Muster eines Elements oder mehrerer Elemente in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn diese Selektoren als Parameter in die Pseudoklasse `:has()` aufgenommen werden, werden sie als [relative Selektoren](#relativer_selektor) bezeichnet und repräsentieren Elemente relativ zu einem oder mehreren Ankerelementen.

Diese Selektoren können zu einer kommagetrennten [Selektorliste](#selektorliste) kombiniert werden. Wenn ein Selektor in einer [nicht toleranten Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie einem Typselektor, Attributselektor oder einer Pseudoklasse, die nicht in Kombination mit oder enthaltend mit einer anderen Selektorkomponente oder einem Kombinator verwendet wird. Ein gegebenes Element stimmt mit einem einfachen Selektor überein, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen [grundlegenden Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), einen [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), eine [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) oder einen [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) -Selektor enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Sequenz von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor repräsentiert einen Satz gleichzeitiger Bedingungen für ein einzelnes Element. Ein gegebenes Element wird als mit einem zusammengesetzten Selektor übereinstimmend bezeichnet, wenn das Element mit allen einfachen Selektoren im zusammengesetzten Selektor übereinstimmt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) oder der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) als erstes in der Selektorfolge stehen. Nur ein Typselektor oder universeller Selektor ist in der Folge erlaubt. Da Leerzeichen den [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren, einschließlich des Leerzeichenkombinators [Nachfahre](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), getrennt sind.

Ein komplexer Selektor repräsentiert eine Reihe gleichzeitiger Bedingungen für eine Menge von Elementen.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel, `a#selected > .icon` stimmt mit allen Elementen mit einer Klasse von `icon` überein, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` stimmt mit dem ersten `<p>` überein, das unmittelbar auf ein `<h2>` folgt, welches ein Nachkomme eines Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Reference/Selectors/Selector_list) ist eine kommagetrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein gegebenes Element stimmt mit einer Selektorliste überein, wenn das Element mit einem (mindestens einem) der Selektoren in dieser Selektorliste übereinstimmt.

```css
#main,
article.heading {
}
```

Wenn ein Selektor in einer [nicht toleranten Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudoklassen {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} können verwendet werden, um [tolerante Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) zu erstellen.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Ankerelementen repräsentiert, das von einem Kombinator vorangegangen wird. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen implizierten [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Sie werden vielmehr in bestimmten Kontexten akzeptiert, wie der Pseudoklasse {{cssxref(":has", ":has()")}}.

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
- [Tolerante Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements)
