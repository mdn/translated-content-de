---
title: Selektorliste
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die CSS-**Selektorliste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektorliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie in eine durch Kommas getrennte Liste zusammengefasst werden. Selektorlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann ein Leerzeichen eingefügt werden.

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

Wenn die gleichen Styles auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Gruppierung in einer Zeile

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer Zeile unter Verwendung einer durch Kommas getrennten Liste.

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

Ein ungültiger Selektor repräsentiert nichts und entspricht daher nichts. Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Style-Block ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [nachsichtige Selektorlisten](#nachsichtige_selektorliste) akzeptieren.

### Ungültige Selektorliste

Ein Nachteil der Verwendung einer Selektorliste ist, dass ein einziger nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig macht.

Betrachten Sie die folgenden zwei CSS-Regelsätze:

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden Styles auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht geparst. Im zweiten Regelsatz wird, weil ein Selektor in der Liste ungültig ist, die gesamte Regel nicht geparst. Aufgrund dessen wird kein Style auf die `h1`- und `h3`-Elemente angewendet, da bei ungültigen Selektoren in einer Liste von Selektoren der gesamte Style-Block ignoriert wird.

### Nachsichtige Selektorliste

Eine Möglichkeit, das Problem der [ungültigen Selektorliste](#ungültige_selektorliste) zu beheben, besteht darin, die {{CSSxRef(":is", ":is()")}}- oder die {{CSSxRef(":where", ":where()")}}-Pseudoklasse zu verwenden, die eine nachsichtige Selektorliste akzeptieren. Jeder Selektor in einer nachsichtigen Selektorliste wird individuell geparst. Daher werden ungültige Selektoren in der Liste ignoriert und die gültigen verwendet.

Ausgehend vom vorherigen Beispiel sind die folgenden beiden CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden ist, dass die Spezifität von `:is()` ihr spezifischstes Argument ist, während der `:where()`-Selektor und der nachsichtige Selektorlistenparameter kein zusätzliches Spezifitätsgewicht hinzufügen.

### Relative Selektorliste

Eine relative Selektorliste ist eine durch Kommas getrennte Selektorliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursiv gedruckte Stil auf jeden `h2`-Kopf angewendet, der unmittelbar gefolgt wird von `<p>` oder `<ul class="red">`. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/:has) relativen Selektorliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) Pseudoklassen akzeptieren nachsichtige Selektorlisten.
- Die [`:not()`](/de/docs/Web/CSS/:not) Pseudoklasse akzeptiert eine reguläre Selektorliste.
- Die [`:has()`](/de/docs/Web/CSS/:has) Pseudoklasse akzeptiert eine relative Selektorliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
