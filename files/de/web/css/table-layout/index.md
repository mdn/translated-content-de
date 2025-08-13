---
title: table-layout
slug: Web/CSS/table-layout
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`table-layout`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Algorithmus fest, der verwendet wird, um die Zellen, Zeilen und Spalten von {{htmlelement("table")}} zu layouten.

{{InteractiveExample("CSS Demo: table-layout")}}

```css interactive-example-choice
table-layout: auto;
width: 150px;
```

```css interactive-example-choice
table-layout: fixed;
width: 150px;
```

```css interactive-example-choice
table-layout: auto;
width: 100%;
```

```css interactive-example-choice
table-layout: fixed;
width: 100%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    <tr>
      <td>Lion</td>
      <td>Africa</td>
    </tr>
    <tr>
      <td>Norwegian Lemming</td>
      <td>Europe</td>
    </tr>
    <tr>
      <td>Seal</td>
      <td>Antarctica</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>Asia</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  border: 1px solid #113399;
}

th,
td {
  border: 2px solid #aa1199;
  padding: 0.25rem 0.5rem;
}
```

## Syntax

```css
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: revert;
table-layout: revert-layer;
table-layout: unset;
```

### Werte

- `auto`
  - : Der automatische Tabellen-Layoutalgorithmus wird verwendet. Die Breiten der Tabelle und ihrer Zellen werden so angepasst, dass der Inhalt passt. Die meisten Browser verwenden standardmäßig diesen Algorithmus.

- `fixed`
  - : Der feste Tabellen-Layoutalgorithmus wird verwendet. Bei der Verwendung dieses Schlüsselworts _muss_ die Breite der Tabelle explizit mit der [`width`](/de/docs/Web/CSS/width)-Eigenschaft angegeben werden. Wenn der Wert der `width`-Eigenschaft auf `auto` gesetzt ist oder nicht angegeben wird, verwendet der Browser den automatischen Tabellen-Layoutalgorithmus, in diesem Fall hat der `fixed`-Wert keine Wirkung.\
    Der feste Tabellen-Layoutalgorithmus ist schneller als der automatische Layoutalgorithmus, da das horizontale Layout der Tabelle nur von der Breite der Tabelle, der Breite der Spalten und Grenz- oder Zellabständen abhängt. Das horizontale Layout hängt nicht von den Inhalten der Zellen ab, da es nur von explizit gesetzten Breiten abhängt.

    Im festen Tabellen-Layoutalgorithmus wird die Breite jeder Spalte wie folgt bestimmt:
    - Ein Spaltenelement mit expliziter Breite legt die Breite für diese Spalte fest.
    - Andernfalls bestimmt eine Zelle in der ersten Zeile mit expliziter Breite die Breite für diese Spalte.
    - Andernfalls erhält die Spalte die Breite aus dem verbleibenden horizontalen Raum.

    Mit diesem Algorithmus kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderzeit im Vergleich zur "automatischen" Layoutmethode beschleunigen, aber nachfolgende Zellinhalte passen möglicherweise nicht in die angegebenen Spaltenbreiten. Zellen verwenden die {{Cssxref("overflow")}}-Eigenschaft, um zu bestimmen, ob überfließender Inhalt abgeschnitten werden soll, jedoch nur, wenn die Tabelle eine bekannte Breite hat; andernfalls überfließen sie nicht die Zellen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Feste Tabellenbreiten mit Textüberlauf

In diesem Beispiel wird ein fester Tabellen-Layoutalgorithmus zusammen mit der {{cssxref("width")}}-Eigenschaft verwendet, um die Breite der Tabelle zu beschränken. Die {{cssxref("text-overflow")}}-Eigenschaft wird verwendet, um ein Ellipsenzeichen für Wörter anzuwenden, die zu lang sind, um zu passen. Wenn das Tabellen-Layout `auto` wäre, würde die Tabelle wachsen, um ihren Inhalt aufzunehmen, trotz der angegebenen `width`.

#### HTML

```html
<table>
  <tr>
    <td>Ed</td>
    <td>Wood</td>
  </tr>
  <tr>
    <td>Albert</td>
    <td>Schweitzer</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Fonda</td>
  </tr>
  <tr>
    <td>William</td>
    <td>Shakespeare</td>
  </tr>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### Ergebnis

{{EmbedLiveSample('Fixed-width_tables_with_text-overflow')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<table>`](/de/docs/Web/HTML/Reference/Elements/table)
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
