---
title: Selektorliste
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die CSS **Selektorliste** (`,`) wählt alle passenden Knoten aus. Eine Selektorliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren die gleichen Deklarationen teilen, können sie zu einer durch Kommas getrennten Liste zusammengefasst werden. Selektorlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann ein Leerzeichen stehen.

Die folgenden drei Deklarationen sind gleichwertig:

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## Beispiele

Wenn dieselben Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Gruppierung in einer Zeile

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer Zeile mit einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### Gruppierung in mehreren Zeilen

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen mit einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorlisten

Ein ungültiger Selektor repräsentiert und entspricht somit nichts. Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [verzeihende Selektorliste](#verzeihende_selektorliste) akzeptieren.

### Ungültige Selektorliste

Ein Nachteil der Verwendung einer Selektorliste besteht darin, dass ein einzelner nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig macht.

Betrachten Sie die folgenden beiden CSS-Regelsätze:

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}
```

Sie sind nicht gleichwertig. Im ersten Regelsatz werden die Stile auf die `h1` und `h3` Elemente angewendet, aber die `h2:invalid-pseudo` Regel wird nicht geparst. Im zweiten Regelsatz wird, weil ein Selektor in der Liste ungültig ist, die gesamte Regel nicht geparst. Aus diesem Grund wird kein Stil auf die `h1` und `h3` Elemente angewendet, da bei einer ungültigen Selektorliste der gesamte Stilblock ignoriert wird.

### Verzeihende Selektorliste

Eine Möglichkeit, das Problem der [ungültigen Selektorliste](#ungültige_selektorliste) zu beheben, besteht darin, die {{CSSxRef(":is", ":is()")}} oder die {{CSSxRef(":where", ":where()")}} Pseudoklasse zu verwenden, die eine verzeihende Selektorliste akzeptiert. Jeder Selektor in einer verzeihenden Selektorliste wird einzeln geparst. Daher werden ungültige Selektoren in der Liste ignoriert und die gültigen verwendet.

Ausgehend von dem vorherigen Beispiel sind die folgenden beiden CSS-Regelsätze jetzt gleichwertig:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

Der Unterschied zwischen den beiden ist, dass die Spezifität von `:is()` sein spezifischstes Argument ist, während der `:where()` Selektor und der Parameter der verzeihenden Selektorliste keine Spezifitätsgewichtung hinzufügen.

### Relative Selektorliste

Eine relative Selektorliste ist eine durch Kommas getrennte Selektorliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursive Stil auf jede `h2` Überschrift angewendet, die unmittelbar von `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudoelemente und der `:has()` Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) relativen Selektorliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklassen akzeptieren verzeihende Selektorlisten.
- Die [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not) Pseudoklasse akzeptiert eine reguläre Selektorliste.
- Die [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) Pseudoklasse akzeptiert eine relative Selektorliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
