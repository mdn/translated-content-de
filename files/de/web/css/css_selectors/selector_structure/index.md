---
title: Struktur von CSS-Selektoren
short-title: Struktur des Selektors
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Element oder Elementen in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn sie als Parameter in der `:has()` Pseudo-Klasse verwendet werden, werden diese Selektoren als [relative Selektoren](#relativer_selektor) bezeichnet, die Elemente relativ zu einem oder mehreren Ankerelementen darstellen.

Diese Selektoren können zu einer durch Kommata getrennten [Selektorliste](#selektorliste) kombiniert werden. Wenn irgendein Selektor in einer [nicht-verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie z.B. ein einzelner Typselektor, Attributselektor oder Pseudo-Klasse, der nicht in Kombination mit oder nicht enthalten in einer anderen Selektorkomponente oder einem Kombinator verwendet wird. Ein bestimmtes Element wird als übereinstimmend mit einem einfachen Selektor angesehen, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzelnen [grundlegenden Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) oder [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Folge von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor stellt eine Reihe gleichzeitiger Bedingungen an ein einzelnes Element dar. Ein bestimmtes Element wird als übereinstimmend mit einem zusammengesetzten Selektor angesehen, wenn das Element alle einfachen Selektoren im zusammengesetzten Selektor erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Type_selectors) oder [Universalselektor](/de/docs/Web/CSS/Universal_selectors) zuerst in der Folge der Selektoren kommen. Es ist nur ein Typ- oder Universalselektor in der Folge erlaubt. Da Leerzeichen den [Nachkommel-Kombinator](/de/docs/Web/CSS/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Folge von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren getrennt sind, einschließlich des Leerraum-[Nachkommel-Kombinators](/de/docs/Web/CSS/Descendant_combinator).

Ein komplexer Selektor stellt eine Reihe gleichzeitiger Bedingungen für eine Menge von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Beispielsweise entspricht `a#selected > .icon` allen Elementen mit der Klasse `icon`, die direkte Kinder des `<a>`-Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` entspricht den ersten `<p>`s, die direkt nach einem `<h2>`-Element kommen, das ein Nachkomme eines Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Selector_list) ist eine durch Kommata getrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein bestimmtes Element wird als übereinstimmend mit einer Selektorliste angesehen, wenn das Element irgendeinen (mindestens einen) der Selektoren in dieser Selektorliste erfüllt.

```css
#main,
article.heading {
}
```

Wenn irgendein Selektor in einer [nicht-verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die Pseudo-Klassen {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} können verwendet werden, um [verzeihende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) zu konstruieren.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, der ein Element in Bezug auf ein oder mehrere Ankerelemente darstellt, dem ein Kombinator vorangeht. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen impliziten [Nachkommel-Kombinator](/de/docs/Web/CSS/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Sie werden vielmehr in bestimmten Kontexten akzeptiert, wie zum Beispiel in der {{cssxref(":has", ":has()")}} Pseudo-Klasse.

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
- [Verzeihende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
