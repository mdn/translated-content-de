---
title: Selektorenliste
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: be7a098e6af7b820c06a2d5169a9221ee2065e82
---

{{CSSRef}}

Die CSS-**Selektorenliste** (`,`) wählt alle zutreffenden Knoten aus. Eine Selektorenliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie zu einer durch Kommas getrennten Liste zusammengefasst werden. Selektorenlisten können auch als Parameter für einige funktionale CSS-Pseudoklassen übergeben werden. Es kann ein Leerzeichen vor und/oder nach dem Komma erscheinen.

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

Wenn Sie denselben Stil auf Elemente anwenden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Einzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Zeile mit einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica;
}
```

### Mehrzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen mit einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorenlisten

Ein ungültiger Selektor repräsentiert und passt daher zu nichts. Wenn eine Selektorenliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}} Pseudoklassen, die [nachsichtige Selektorenlisten](#nachsichtige_selektorenliste) akzeptieren.

### Ungültige Selektorenliste

Ein Nachteil der Verwendung einer Selektorenliste besteht darin, dass ein einzelner nicht unterstützter Selektor in der Liste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden Stile auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht geparst. Im zweiten Regelsatz wird aufgrund eines ungültigen Selektors in der Liste die gesamte Regel nicht geparst. Dadurch wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da bei einem ungültigen Selektor in einer Liste von Selektoren der gesamte Stilblock ignoriert wird.

### Nachsichtige Selektorenliste

Ein Weg, um das Problem der [ungültigen Selektorenliste](#ungültige_selektorenliste) zu beheben, ist die Verwendung der {{CSSxRef(":is", ":is()")}} oder der {{CSSxRef(":where", ":where()")}} Pseudoklasse, die eine nachsichtige Selektorenliste akzeptiert. Jeder Selektor in einer nachsichtigen Selektorenliste wird individuell geparst. Daher werden ungültige Selektoren in der Liste ignoriert, und die gültigen werden verwendet.

Fortführend aus dem vorherigen Beispiel sind die folgenden beiden CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden besteht darin, dass die Spezifität von `:is()` sein spezifischstes Argument ist, während der `:where()`-Selektor und der Parameter der nachsichtigen Selektorenliste keinerlei Spezifitätsgewichtung hinzufügen.

### Relative Selektorenliste

Eine relative Selektorenliste ist eine durch Kommas getrennte Selektorenliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursive Stil auf jede `h2`-Überschrift angewendet, die unmittelbar gefolgt wird von `<p>` oder `<ul class="red">`. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/:has) relativen Selektorenliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) Pseudoklassen akzeptieren nachsichtige Selektorenlisten.
- Die [`:not()`](/de/docs/Web/CSS/:not) Pseudoklasse akzeptiert eine reguläre Selektorenliste.
- Die [`:has()`](/de/docs/Web/CSS/:has) Pseudoklasse akzeptiert eine relative Selektorenliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
