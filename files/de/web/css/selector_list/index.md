---
title: Selektorenliste
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{CSSRef}}

Die CSS **Selektorenliste** (`,`) wählt alle passenden Knoten aus. Eine Selektorenliste ist eine durch Kommas getrennte Liste von Selektoren.

## Beschreibung

Wenn mehrere Selektoren dieselben Deklarationen teilen, können sie in einer durch Kommas getrennten Liste zusammengefasst werden. Selektorenlisten können auch als Parameter an einige funktionale CSS-Pseudoklassen übergeben werden. Zwischen dem Komma können Leerzeichen vor und/oder nach erscheinen.

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

Durch die Anwendung derselben Stile auf Elemente, die unterschiedliche Kriterien erfüllen, kann das Gruppieren der Selektoren in einer durch Kommas getrennten Liste die Konsistenz verbessern und die Größe von Stylesheets reduzieren.

### Einzeilige Gruppierung

Dieses Beispiel zeigt das Gruppieren von Selektoren in einer Zeile mit einer durch Kommas getrennten Liste.

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: Helvetica, Arial;
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

Ein ungültiger Selektor repräsentiert nichts und passt daher auf nichts. Wenn eine Selektorenliste einen ungültigen Selektor enthält, wird der gesamte Stilblock ignoriert, außer bei den Pseudoklassen {{CSSxRef(":is", ":is()")}} und {{CSSxRef(":where", ":where()")}}, die [nachsichtige Selektorenlisten](#nachsichtige_selektorenliste) akzeptieren.

### Ungültige Selektorenliste

Ein Nachteil bei der Verwendung einer Selektorenliste ist, dass ein einziger nicht unterstützter Selektor in der Selektorenliste die gesamte Regel ungültig macht.

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

Diese sind nicht gleichwertig. Im ersten Regelsatz werden Stile auf die `h1`- und `h3`-Elemente angewendet, aber die Regel `h2:invalid-pseudo` wird nicht geparst. Im zweiten Regelsatz wird die gesamte Regel nicht geparst, da ein Selektor in der Liste ungültig ist. Daher wird kein Stil auf die `h1`- und `h3`-Elemente angewendet, da beim Vorhandensein eines ungültigen Selektors in einer Liste von Selektoren der gesamte Stilblock ignoriert wird.

### Nachsichtige Selektorenliste

Eine Möglichkeit, das Problem der [ungültigen Selektorenliste](#ungültige_selektorenliste) zu beheben, besteht darin, die Pseudoklasse {{CSSxRef(":is", ":is()")}} oder {{CSSxRef(":where", ":where()")}} zu verwenden, die eine nachsichtige Selektorenliste akzeptiert. Jeder Selektor in einer nachsichtigen Selektorenliste wird einzeln geparst. Daher werden ungültige Selektoren in der Liste ignoriert und die gültigen verwendet.

Ausgehend vom vorherigen Beispiel sind die folgenden zwei CSS-Regelsätze nun gleichwertig:

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

Der Unterschied zwischen den beiden liegt darin, dass die Spezifität von `:is()` ihr spezifischstes Argument ist, wohingegen der `:where()`-Selektor und der Parameter der nachsichtigen Selektorenliste kein Spezifitätsgewicht hinzufügen.

### Relative Selektorenliste

Eine relative Selektorenliste ist eine durch Kommas getrennte Selektorenliste, die als [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) geparst wird, die mit einem expliziten oder impliziten Kombinator beginnen.

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

Im obigen Beispiel wird der kursiv geschriebene Stil auf alle `h2`-Überschriften angewendet, die unmittelbar von einem `<p>` oder `<ul class="red">` gefolgt werden. Beachten Sie, dass Pseudoelemente und der `:has()`-Selektor innerhalb der relativen Selektorenliste von [`:has()`](/de/docs/Web/CSS/:has) nicht gültig sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoklassen [`:is()`](/de/docs/Web/CSS/:is) und [`:where()`](/de/docs/Web/CSS/:where) akzeptieren nachsichtige Selektorenlisten.
- Die Pseudoklasse [`:not()`](/de/docs/Web/CSS/:not) akzeptiert eine reguläre Selektorenliste.
- Die Pseudoklasse [`:has()`](/de/docs/Web/CSS/:has) akzeptiert eine relative Selektorenliste.
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
