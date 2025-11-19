---
title: Selektorenliste
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Die CSS **Selektorenliste** (`,`) wählt alle übereinstimmenden Knoten aus. Eine Selektorenliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren die gleichen Deklarationen teilen, können sie in einer durch Kommas getrennten Liste zusammengefasst werden. Selektorenlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Vor und/oder nach dem Komma kann Leerraum erscheinen.

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

Wenn die gleichen Styles auf Elemente angewendet werden, die unterschiedlichen Kriterien entsprechen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern, während die Größe der Stylesheets reduziert wird.

### Einzelne Zeilengruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer einzigen Linie unter Verwendung einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### Mehrzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in mehreren Zeilen unter Verwendung einer durch Kommas getrennten Liste.

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## Gültige und ungültige Selektorenlisten

Ein ungültiger Selektor steht für nichts und passt daher auf nichts. Wenn eine Selektorenliste einen ungültigen Selektor enthält, wird der gesamte Style-Block ignoriert, außer bei den Pseudoklassen {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}}, die [nachsichtige Selektorenlisten](#nachsichtige_selektorenliste) akzeptieren.

### Ungültige Selektorenliste

Ein Nachteil bei der Verwendung einer Selektorenliste ist, dass ein einziger nicht unterstützter Selektor in der Selektorenliste die gesamte Regel ungültig macht.

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

Sie sind nicht gleichwertig. Im ersten Regelsatz werden die Styles auf die `h1`- und `h3`-Elemente angewendet, jedoch wird die `h2:invalid-pseudo`-Regel nicht analysiert. Im zweiten Regelsatz wird, da ein Selektor in der Liste ungültig ist, die gesamte Regel nicht analysiert. Aufgrund dessen wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da wenn ein beliebiger Selektor in einer Liste von Selektoren ungültig ist, der gesamte Style-Block ignoriert wird.

### Nachsichtige Selektorenliste

Eine Möglichkeit, das Problem der [ungültigen Selektorenliste](#ungültige_selektorenliste) zu beheben, besteht darin, die Pseudoklasse {{CSSxRef(":is", ":is()")}} oder {{CSSxRef(":where", ":where()")}} zu verwenden, die eine nachsichtige Selektorenliste akzeptieren. Jeder Selektor in einer nachsichtigen Selektorenliste wird individuell analysiert. Ungültige Selektoren in der Liste werden ignoriert und die gültigen verwendet.

Anknüpfend an das vorherige Beispiel sind die folgenden beiden CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen beiden ist, dass die Spezifität von `:is()` das maßgeblichste Argument ist, während der `:where()`-Selektor und der nachsichtige Selektorenlistenparameter kein Spezifitätsgewicht hinzufügen.

### Relative Selektorenliste

Eine relative Selektorenliste ist eine durch Kommas getrennte Selektorenliste, die als [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) analysiert wird, die mit einem expliziten oder impliziten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der Kursivstil auf jede `h2`-Überschrift angewendet, die unmittelbar von `<p>` oder `<ul class="red">` gefolgt wird. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) relativen Selektorenliste nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) und [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) Pseudoklassen akzeptieren nachsichtige Selektorenlisten.
- Die [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not) Pseudoklasse akzeptiert eine reguläre Selektorenliste.
- Die [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) Pseudoklasse akzeptiert eine relative Selektorenliste.
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
