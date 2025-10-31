---
title: table-layout
slug: Web/CSS/Reference/Properties/table-layout
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`table-layout`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Algorithmus fest, der zum Layouten von {{htmlelement("table")}}-Zellen, -Zeilen und -Spalten verwendet wird.

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
  - : Der automatische Tabellen-Layout-Algorithmus wird verwendet. Die Breiten der Tabelle und ihrer Zellen werden angepasst, um den Inhalt aufzunehmen. Die meisten Browser verwenden diesen Algorithmus standardmäßig.

- `fixed`
  - : Der feste Tabellen-Layout-Algorithmus wird verwendet. Bei Verwendung dieses Schlüsselworts muss die Breite der Tabelle explizit mit der [`width`](/de/docs/Web/CSS/Reference/Properties/width)-Eigenschaft angegeben werden. Wenn der Wert der `width`-Eigenschaft auf `auto` gesetzt ist oder nicht angegeben wird, verwendet der Browser den automatischen Tabellen-Layout-Algorithmus, in diesem Fall hat der `fixed`-Wert keine Wirkung.\
    Der feste Tabellen-Layout-Algorithmus ist schneller als der automatische Layout-Algorithmus, da das horizontale Layout der Tabelle nur von der Breite der Tabelle, der Breite der Spalten sowie den Grenzen oder dem Zellabstand abhängt. Das horizontale Layout hängt nicht vom Inhalt der Zellen ab, da es nur von explizit gesetzten Breiten abhängt.

    Im festen Tabellen-Layout-Algorithmus wird die Breite jeder Spalte wie folgt bestimmt:
    - Ein Spaltenelement mit expliziter Breite setzt die Breite für diese Spalte.
    - Andernfalls bestimmt eine Zelle in der ersten Zeile mit expliziter Breite die Breite für diese Spalte.
    - Andernfalls erhält die Spalte die Breite aus dem gemeinsam verbleibenden horizontalen Raum.

    Mit diesem Algorithmus kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderzeit gegenüber der "automatischen" Layout-Methode beschleunigen, aber der nachfolgende Zellinhalt passt möglicherweise nicht in die zur Verfügung gestellten Spaltenbreiten. Zellen verwenden die {{Cssxref("overflow")}}-Eigenschaft, um zu bestimmen, ob überlaufender Inhalt abgeschnitten wird, aber nur, wenn die Tabelle eine bekannte Breite hat; andernfalls überlaufen sie nicht die Zellen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tabellen mit fester Breite und Textüberlauf

Dieses Beispiel verwendet ein festes Tabellen-Layout in Kombination mit der {{cssxref("width")}}-Eigenschaft, um die Breite der Tabelle zu beschränken. Die {{cssxref("text-overflow")}}-Eigenschaft wird verwendet, um ein Auslassungszeichen auf Wörter anzuwenden, die zu lang sind, um zu passen. Wenn das Tabellen-Layout `auto` wäre, würde die Tabelle wachsen, um ihren Inhalt aufzunehmen, trotz der angegebenen `width`.

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
- [CSS Table](/de/docs/Web/CSS/CSS_table) Modul
