---
title: Struktur von CSS-Selektoren
short-title: Struktur von Selektoren
slug: Web/CSS/Guides/Selectors/Selector_structure
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der CSS-Selektor stellt ein bestimmtes Muster eines Elements oder von Elementen in einer Baumstruktur dar. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn sie als Parameter in der Pseudoklasse `:has()` enthalten sind, werden diese Selektoren als [relative Selektoren](#relativer_selektor) bezeichnet, die Elemente relativ zu einem oder mehreren Ankerelementen darstellen.

Diese Selektoren können zu einer kommagetrennten [Selektorenliste](#selektorenliste) kombiniert werden. Wenn ein Selektor in einer [nicht verzeihenden Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorenliste ungültig.

## Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie ein einzelner Typselektor, Attributselektor oder eine Pseudoklasse, die nicht in Kombination mit oder nicht andere Selektorkomponenten oder Kombinatoren enthält. Ein gegebenes Element soll einen einfachen Selektor erfüllen, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzelnen [Basisselektor](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) oder [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) Selektor enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

## Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Folge von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Reihe von gleichzeitigen Bedingungen an ein einzelnes Element dar. Ein gegebenes Element soll einem zusammengesetzten Selektor entsprechen, wenn das Element alle einfachen Selektoren im zusammengesetzten Selektor erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) oder [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) zuerst in der Reihenfolge der Selektoren erscheinen. In der Reihenfolge ist nur ein Typselektor oder universeller Selektor erlaubt. Da Leerzeichen den [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

## Komplexer Selektor

Ein **komplexer Selektor** ist eine Folge von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren, einschließlich des Leerraum-[Nachfahrenkombinators](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), getrennt sind.

Ein komplexer Selektor stellt eine Reihe von gleichzeitigen Bedingungen an eine Gruppe von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel passt `a#selected > .icon` auf alle Elemente mit einer Klasse von `icon`, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` passt auf die ersten `<p>`s, die direkt nach einem `<h2>`-Element kommen, das ein Nachfahre eines Elements mit der Klasse `box` ist.

## Selektorenliste

Eine [**Selektorenliste**](/de/docs/Web/CSS/Reference/Selectors/Selector_list) ist eine kommagetrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein gegebenes Element gilt als übereinstimmend mit einer Selektorenliste, wenn das Element mit einem (mindestens einem) der Selektoren in dieser Selektorenliste übereinstimmt.

```css
#main,
article.heading {
}
```

Wenn ein Selektor in einer [nicht verzeihenden Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorenliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudoklassen {{cssxref(":is()")}} und {{cssxref(":where()")}} können verwendet werden, um [verzeihende Selektorenlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) zu erstellen.

## Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element relativ zu einem oder mehreren Ankerelementen darstellt, das von einem Kombinator vorausgeht. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen implizierten [Nachfahrenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorenliste verwendet werden. Sie werden vielmehr in bestimmten Kontexten akzeptiert, wie zum Beispiel in der {{cssxref(":has()")}} Pseudoklasse.

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
- [Verzeihende Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements)
