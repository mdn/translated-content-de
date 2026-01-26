---
title: Selektorliste
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die CSS-**Selektorliste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektorliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie zu einer durch Kommas getrennten Liste zusammengefasst werden. Selektorlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann ein Leerzeichen erscheinen.

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

Wenn die gleichen Stile auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer kommagetrennten Liste die Konsistenz verbessern und gleichzeitig die Größe der Stylesheets reduzieren.

### Einzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Zeile unter Verwendung einer kommagetrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### Mehrzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen unter Verwendung einer kommagetrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorlisten

Ein ungültiger Selektor repräsentiert nichts und passt somit auf nichts. Wenn eine Selektorliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, mit Ausnahme der {{cssxref(":is()")}} und {{cssxref(":where()")}} Pseudoklassen, die [verzeihliche Selektorlisten](#verzeihliche_selektorliste) akzeptieren.

### Ungültige Selektorliste

Ein Nachteil der Verwendung einer Selektorliste besteht darin, dass ein einziger nicht unterstützter Selektor in der Selektorliste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden Stile auf die `h1`- und `h3`-Elemente angewendet, aber die `h2:invalid-pseudo`-Regel wird nicht geparst. Im zweiten Regelsatz wird, weil ein Selektor in der Liste ungültig ist, die gesamte Regel nicht geparst. Dadurch wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da bei einem ungültigen Selektor in einer Liste von Selektoren der gesamte Stilblock ignoriert wird.

### Verzeihliche Selektorliste

Eine Möglichkeit, das Problem der [ungültigen Selektorliste](#ungültige_selektorliste) zu lösen, besteht darin, die {{cssxref(":is()")}} oder die {{cssxref(":where()")}}-Pseudoklasse zu verwenden, die eine verzeihliche Selektorliste akzeptiert. Jeder Selektor in einer verzeihlichen Selektorliste wird einzeln geparst. Ungültige Selektoren in der Liste werden ignoriert und die gültigen verwendet.

In Fortsetzung des vorherigen Beispiels sind die folgenden zwei CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden besteht darin, dass die Spezifität von `:is()` das Argument mit der höchsten Spezifität ist, während der `:where()`-Selektor und der Parameter der verzeihlichen Selektorliste keine Spezifitätsgewichte hinzufügen.

### Relative Selektorliste

Eine relative Selektorliste ist eine durch Kommas getrennte Selektorliste, die als [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder implizierten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursiv geschriebene Stil auf jede `h2`-Überschrift angewendet, die unmittelbar von einem `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) relativen Selektorliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklassen akzeptieren verzeihliche Selektorlisten.
- Die [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not) Pseudoklasse akzeptiert eine reguläre Selektorliste.
- Die [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) Pseudoklasse akzeptiert eine relative Selektorliste.
- [CSS-Sselektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
