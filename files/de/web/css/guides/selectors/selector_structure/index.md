---
title: CSS-Selector-Struktur
short-title: Selector structure
slug: Web/CSS/Guides/Selectors/Selector_structure
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Der CSS-Selector stellt ein bestimmtes Muster von Elementen in einer Baumstruktur dar. Der Begriff "Selector" kann sich auf einen [einfachen Selector](#einfacher_selector), einen [zusammengesetzten Selector](#zusammengesetzter_selector) oder einen [komplexen Selector](#komplexer_selector) beziehen. Wenn sie als Parameter in der `:has()` Pseudo-Klasse verwendet werden, werden diese Selektoren als [relative Selektoren](#relativer_selector) bezeichnet und stellen Elemente relativ zu einem oder mehreren Anker-Elementen dar.

Diese Selektoren können zu einer kommagetrennten [Selector-Liste](#selector-liste) kombiniert werden. Wenn ein Selector in einer [nicht verzeihenden Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selector-Liste ungültig.

## Einfacher Selector

Ein **einfacher Selector** ist ein Selector mit einer einzigen Komponente, wie beispielsweise ein einfacher Typ-Selector, Attribut-Selector oder eine Pseudo-Klasse, die nicht in Kombination mit oder ohne andere Selector-Komponente oder Kombinator verwendet wird. Ein bestimmtes Element wird als passend zu einem einfachen Selector betrachtet, wenn dieser einfache Selector das Element genau beschreibt. Jeder Selector, der einen einzigen [Basis-Selector](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), [Attribut-Selector](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) oder [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, ist ein einfacher Selector.

```css
#myId {
}

[pattern*="\d"] {
}
```

## Zusammengesetzter Selector

Ein **zusammengesetzter Selector** ist eine Sequenz von [einfachen Selectoren](#einfacher_selector), die nicht durch einen [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selector repräsentiert eine Reihe von gleichzeitigen Bedingungen für ein einzelnes Element. Ein bestimmtes Element wird als passend zu einem zusammengesetzten Selector betrachtet, wenn das Element alle einfachen Selectoren im zusammengesetzten Selector erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selector muss der [Typ-Selector](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) oder [Universal-Selector](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) an erster Stelle in der Sequenz der Selectoren stehen. Nur ein Typ-Selector oder Universal-Selector ist in der Sequenz erlaubt. Da Leerraum den [Nachkommen-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) darstellt, ist zwischen den einfachen Selectoren, die einen zusammengesetzten Selector bilden, kein Leerraum erlaubt.

## Komplexer Selector

Ein **komplexer Selector** ist eine Sequenz von einem oder mehreren einfachen und/oder zusammengesetzten Selectoren, die durch Kombinatoren getrennt sind, einschließlich des Leerraum-Nachkommen-Kombinators.

Ein komplexer Selector repräsentiert eine Reihe von gleichzeitigen Bedingungen für eine Gruppe von Elementen.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selectoren können von rechts nach links gelesen werden. Zum Beispiel: `a#selected > .icon` passt auf alle Elemente mit einer Klasse von `icon`, die unmittelbare Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selector `.box h2 + p` passt auf die ersten `<p>`-Elemente, die unmittelbar nach jedem `<h2>` kommen, das ein Nachkomme eines beliebigen Elements mit der Klasse `box` ist.

## Selector-Liste

Eine [**Selector-Liste**](/de/docs/Web/CSS/Reference/Selectors/Selector_list) ist eine kommagetrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selectoren. Ein bestimmtes Element wird als passend zu einer Selector-Liste betrachtet, wenn es mit einem (mindestens einem) der Selectoren in dieser Liste übereinstimmt.

```css
#main,
article.heading {
}
```

Wenn ein Selector in einer [nicht verzeihenden Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selector-Liste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudo-Klassen {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} können verwendet werden, um [verzeihende Selector-Listen](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) zu erstellen.

## Relativer Selector

Ein **relativer Selector** ist ein Selector, der ein Element relativ zu einem oder mehreren Anker-Elementen darstellt, die von einem Kombinator vorangehen. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen implizierten [Nachkommen-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).

Relative Selektoren können nicht in einer Selector-Liste verwendet werden. Vielmehr werden sie in bestimmten Kontexten akzeptiert, wie z.B. in der {{cssxref(":has", ":has()")}} Pseudo-Klasse.

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
- [Verzeihende Selector-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
