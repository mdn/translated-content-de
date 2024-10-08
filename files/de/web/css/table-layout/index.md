---
title: table-layout
slug: Web/CSS/table-layout
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`table-layout`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Algorithmus fest, der zur Anordnung von {{htmlelement("table")}}-Zellen, -Zeilen und -Spalten verwendet wird.

{{EmbedInteractiveExample("pages/css/table-layout.html")}}

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

  - : Der automatische Tabellenlayout-Algorithmus wird verwendet. Die Breiten der Tabelle und ihrer Zellen werden angepasst, um dem Inhalt zu entsprechen. Die meisten Browser verwenden diesen Algorithmus standardmäßig.

- `fixed`

  - : Der feste Tabellenlayout-Algorithmus wird verwendet. Bei Verwendung dieses Schlüsselworts muss die Breite der Tabelle explizit mit der [`width`](/de/docs/Web/CSS/width)-Eigenschaft angegeben werden. Wenn der Wert der `width`-Eigenschaft auf `auto` gesetzt ist oder nicht angegeben wurde, verwendet der Browser den automatischen Tabellenlayout-Algorithmus, in diesem Fall hat der `fixed`-Wert keine Wirkung.\
    Der feste Tabellenlayout-Algorithmus ist schneller als der automatische Layout-Algorithmus, da das horizontale Layout der Tabelle nur von der Breite der Tabelle, der Breite der Spalten und den Rändern oder dem Zellabstand abhängt. Das horizontale Layout hängt nicht vom Inhalt der Zellen ab, da es nur auf explizit gesetzten Breiten basiert.

    Beim festen Tabellenlayout-Algorithmus wird die Breite jeder Spalte folgendermaßen bestimmt:

    - Ein Spaltenelement mit expliziter Breite setzt die Breite für diese Spalte.
    - Andernfalls bestimmt eine Zelle in der ersten Zeile mit expliziter Breite die Breite für diese Spalte.
    - Andernfalls erhält die Spalte die Breite aus dem gemeinsam verbleibenden horizontalen Raum.

    Mit diesem Algorithmus kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderzeit im Vergleich zur Methode des "automatischen" Layouts beschleunigen, aber der nachfolgende Zellinhalt passt möglicherweise nicht in die bereitgestellten Spaltenbreiten. Zellen verwenden die {{Cssxref("overflow")}}-Eigenschaft, um zu bestimmen, ob überlaufender Inhalt abgeschnitten werden soll, jedoch nur, wenn die Tabelle eine bekannte Breite hat; andernfalls wird der Inhalt nicht über die Zellen hinausfließen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tabllen mit fester Breite und Textüberlauf

In diesem Beispiel wird ein festes Tabellenlayout in Kombination mit der {{cssxref("width")}}-Eigenschaft verwendet, um die Breite der Tabelle einzuschränken. Die {{cssxref("text-overflow")}}-Eigenschaft wird verwendet, um ein Auslassungszeichen auf Wörter anzuwenden, die zu lang sind, um zu passen. Wenn das Tabellenlayout `auto` wäre, würde die Tabelle trotz der angegebenen `width` wachsen, um ihren Inhalt aufzunehmen.

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

- [`<table>`](/de/docs/Web/HTML/Element/table)
- [CSS table](/de/docs/Web/CSS/CSS_table) Modul
