---
title: table-layout
slug: Web/CSS/table-layout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`table-layout`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Algorithmus fest, der verwendet wird, um {{htmlelement("table")}} Zellen, Zeilen und Spalten zu layouten.

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
  border: 1px solid #139;
}

th,
td {
  border: 2px solid #a19;
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

  - : Der automatische Tabellenlayout-Algorithmus wird verwendet. Die Breiten der Tabelle und ihrer Zellen werden angepasst, um den Inhalt aufzunehmen. Die meisten Browser verwenden standardmäßig diesen Algorithmus.

- `fixed`

  - : Der feste Tabellenlayout-Algorithmus wird verwendet. Wenn dieses Schlüsselwort verwendet wird, muss die Breite der Tabelle _explizit_ mithilfe der [`width`](/de/docs/Web/CSS/width) Eigenschaft angegeben werden. Wenn der Wert der `width` Eigenschaft auf `auto` gesetzt ist oder nicht angegeben wurde, verwendet der Browser den automatischen Tabellenlayout-Algorithmus, wobei der `fixed` Wert keine Wirkung hat.\
    Der feste Tabellenlayout-Algorithmus ist schneller als der automatische, da das horizontale Layout der Tabelle nur von der Breite der Tabelle, der Breite der Spalten sowie von Rändern oder Zellabständen abhängt. Das horizontale Layout hängt nicht vom Inhalt der Zellen ab, sondern nur von explizit festgelegten Breiten.

    Im festen Tabellenlayout-Algorithmus wird die Breite jeder Spalte wie folgt bestimmt:

    - Ein Spaltenelement mit expliziter Breite legt die Breite für diese Spalte fest.
    - Andernfalls bestimmt eine Zelle in der ersten Zeile mit expliziter Breite die Breite für diese Spalte.
    - Andernfalls erhält die Spalte die Breite aus dem gemeinsam verbleibenden horizontalen Platz.

    Mit diesem Algorithmus kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderzeit im Vergleich zur "automatischen" Layoutmethode beschleunigen, aber nachfolgender Zellinhalt passt möglicherweise nicht in die bereitgestellten Spaltenbreiten. Zellen verwenden die {{Cssxref("overflow")}} Eigenschaft, um zu bestimmen, ob überfließender Inhalt abgeschnitten werden soll, aber nur, wenn die Tabelle eine bekannte Breite hat; andernfalls wird der Inhalt nicht über die Zellen hinausfließen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tabellen mit fester Breite und Textüberlauf

Dieses Beispiel verwendet ein festes Tabellenlayout, kombiniert mit der {{cssxref("width")}} Eigenschaft, um die Breite der Tabelle zu beschränken. Die {{cssxref("text-overflow")}} Eigenschaft wird verwendet, um ein Auslassungszeichen für Wörter anzuwenden, die zu lang sind, um zu passen. Wenn das Tabellenlayout `auto` wäre, würde die Tabelle wachsen, um ihren Inhalt aufzunehmen, trotz der angegebenen `width`.

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
