---
title: Struktur von CSS-Selektoren
short-title: Struktur von Selektoren
slug: Web/CSS/CSS_selectors/Selector_structure
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der CSS-Selektor repräsentiert ein bestimmtes Muster von Elementen in einer Baumstruktur. Der Begriff "Selektor" kann sich auf einen [einfachen Selektor](#einfacher_selektor), einen [zusammengesetzten Selektor](#zusammengesetzter_selektor) oder einen [komplexen Selektor](#komplexer_selektor) beziehen. Wenn sie als Parameter in der `:has()` Pseudoklasse enthalten sind, werden diese Selektoren als [relative Selektoren](#relativer_selektor) bezeichnet, die Elemente relativ zu einem oder mehreren Ankerelementen darstellen.

Diese Selektoren können zu einer durch Kommas getrennten [Selektorliste](#selektorliste) kombiniert werden. Wenn ein Selektor in einer [nicht-vergebenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

### Einfacher Selektor

Ein **einfacher Selektor** ist ein Selektor mit einer einzigen Komponente, wie beispielsweise ein einzelner Typselektor, Attributselektor oder Pseudoklasse, der nicht in Kombination mit anderen Selektorkomponenten oder Kombinatoren verwendet wird oder diese enthält. Ein bestimmtes Element wird als passend zu einem einfachen Selektor angesehen, wenn dieser einfache Selektor das Element genau beschreibt. Jeder Selektor, der einen einzelnen [Basisselektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) oder [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthält, ist ein einfacher Selektor.

```css
#myId {
}

[pattern*="\d"] {
}
```

### Zusammengesetzter Selektor

Ein **zusammengesetzter Selektor** ist eine Folge von [einfachen Selektoren](#einfacher_selektor), die nicht durch einen [Kombinator](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators) getrennt sind. Ein zusammengesetzter Selektor repräsentiert eine Menge gleichzeitiger Bedingungen auf einem einzelnen Element. Ein bestimmtes Element wird als passend zu einem zusammengesetzten Selektor angesehen, wenn das Element alle einfachen Selektoren im zusammengesetzten Selektor erfüllt.

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

In einem zusammengesetzten Selektor muss der [Typselektor](/de/docs/Web/CSS/Type_selectors) oder [Universalselektor](/de/docs/Web/CSS/Universal_selectors) zuerst in der Sequenz von Selektoren kommen. In der Sequenz ist nur ein Typselektor oder Universalselektor zulässig. Da Leerzeichen den [Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator) darstellen, sind keine Leerzeichen zwischen den einfachen Selektoren erlaubt, die einen zusammengesetzten Selektor bilden.

### Komplexer Selektor

Ein **komplexer Selektor** ist eine Abfolge von einem oder mehreren einfachen und/oder zusammengesetzten Selektoren, die durch Kombinatoren getrennt sind, einschließlich des Leerzeichen [Nachkommen-Kombinators](/de/docs/Web/CSS/Descendant_combinator).

Ein komplexer Selektor stellt eine Menge gleichzeitiger Bedingungen auf einer Menge von Elementen dar.

```css
a#selected > .icon {
}

.box h2 + p {
}
```

Selektoren können von rechts nach links gelesen werden. Zum Beispiel, `a#selected > .icon` wählt alle Elemente mit einer Klasse von `icon` aus, die direkte Kinder des `<a>` Elements mit der ID `selected` sind. Der Selektor `.box h2 + p` wählt das erste `<p>` nach jedem `<h2>` Element aus, das ein Nachkomme eines beliebigen Elements mit der Klasse `box` ist.

### Selektorliste

Eine [**Selektorliste**](/de/docs/Web/CSS/Selector_list) ist eine durch Kommas getrennte Liste von einfachen, zusammengesetzten und/oder komplexen Selektoren. Ein bestimmtes Element wird als passend zu einer Selektorliste angesehen, wenn das Element einen (mindestens einen) der Selektoren in dieser Selektorliste erfüllt.

```css
#main,
article.heading {
}
```

Wenn ein Selektor in einer [nicht-vergebenden Selektorliste](/de/docs/Web/CSS/Selector_list#valid_and_invalid_selector_lists) ungültig ist, wird die gesamte Selektorliste ungültig.

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` is invalid, invalidating this style block */
}
```

Die {{cssxref(":is", ":is()")}} und {{cssxref(":where", ":where()")}} Pseudoklassen können verwendet werden, um [vergebende Selektorlisten](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) zu erstellen.

### Relativer Selektor

Ein **relativer Selektor** ist ein Selektor, das ein Element relativ zu einem oder mehreren Ankerelementen darstellt, das von einem Kombinator vorangegangen wird. Relative Selektoren, die nicht mit einem expliziten Kombinator beginnen, haben einen impliziten [Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator).

Relative Selektoren können nicht in einer Selektorliste verwendet werden. Stattdessen werden sie in bestimmten Kontexten akzeptiert, wie etwa in der {{cssxref(":has", ":has()")}} Pseudoklasse.

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
- [Vergebende Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
