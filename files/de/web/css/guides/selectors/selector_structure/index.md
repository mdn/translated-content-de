---
title: CSS-Selektorstruktur
short-title: Selector structure
slug: Web/CSS/Guides/Selectors/Selector_structure
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Elementen oder Elementen in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn sie als Parameter in der Pseudo-Klasse `:has()` enthalten sind, werden diese Selektoren als [relative Selektoren](#relativer_selektor) bezeichnet, die Elemente relativ zu einem oder mehreren Ankerelementen darstellen.

Diese Selektoren können zu einer durch Komma getrennten [Selektorliste](#selektorliste) kombiniert werden. Wenn ein beliebiger Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzelnen Komponente, wie ein einzelner Typselektor, Attributselektor oder eine Pseudo-Klasse, die nicht in Kombination mit oder in einem anderen Selektorkomponent oder Kombinator enthalten ist. Ein bestimmtes Element passt zu einem einfachen Selektor, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzigen [Basisselektor](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) oder [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Sequenz von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Reihe von gleichzeitigen Bedingungen an ein einzelnes Element dar. Ein bestimmtes Element passt zu einem zusammengesetzten Selektor, wenn das Element zu allen einfachen Selektoren im zusammengesetzten Selektor passt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) oder [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) zuerst in der Sequenz der Selektoren stehen. Nur ein Typselektor oder Universalselektor ist in der Sequenz erlaubt. Da Leerzeichen den [Nachfolgekombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren getrennt sind, einschließlich des Leerzeichen [Nachfolgekombinators](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).

Ein komplexer Selektor stellt eine Reihe von gleichzeitigen Bedingungen für eine Gruppe von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel passt `a#selected > .icon` zu allen Elementen mit der Klasse `icon`, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` passt zu den ersten `<p>`s, die direkt nach einem `<h2>`-Element kommen, das ein Nachkommen eines Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Reference/Selectors/Selector_list) ist eine durch Komma getrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein bestimmtes Element passt zu einer Selektorliste, wenn das Element zu einem (mindestens einem) der Selektoren in dieser Selektorliste passt.

```css
#main,
article.heading {
}
```

Wenn ein beliebiger Selektor in einer [nicht verzeihenden Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudo-Klassen {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} können verwendet werden, um [verzeihende Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) zu konstruieren.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Ankerelementen darstellt, die von einem Kombinator vorausgehen. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen implizierten [Nachfolgekombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Sie werden innerhalb bestimmter Kontexte akzeptiert, wie der Pseudo-Klasse {{cssxref(":has", ":has()")}}.

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

- [CSS-Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Verzeihende Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
