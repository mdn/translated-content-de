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

  - : Der automatische Tabellenlayout-Algorithmus wird verwendet. Die Breiten der Tabelle und ihrer Zellen werden an den Inhalt angepasst. Die meisten Browser verwenden diesen Algorithmus standardmäßig.

- `fixed`

  - : Der feste Tabellenlayout-Algorithmus wird verwendet. Bei der Verwendung dieses Schlüsselworts _muss_ die Breite der Tabelle explizit mit der [`width`](/de/docs/Web/CSS/width)-Eigenschaft angegeben werden. Falls der Wert der `width`-Eigenschaft auf `auto` gesetzt oder nicht angegeben ist, verwendet der Browser den automatischen Tabellenlayout-Algorithmus, wobei der `fixed`-Wert keine Wirkung hat.\
    Der feste Tabellenlayout-Algorithmus ist schneller als der automatische Layout-Algorithmus, da das horizontale Layout der Tabelle nur von der Breite der Tabelle, der Breite der Spalten und von Rändern oder Zellabständen abhängt. Das horizontale Layout hängt nicht vom Inhalt der Zellen ab, sondern nur von explizit festgelegten Breiten.

    Im festen Tabellenlayout-Algorithmus wird die Breite jeder Spalte wie folgt bestimmt:

    - Ein Spaltenteil mit expliziter Breite legt die Breite für diese Spalte fest.
    - Andernfalls bestimmt eine Zelle in der ersten Zeile mit expliziter Breite die Breite der Spalte.
    - Andernfalls erhält die Spalte die Breite aus dem gemeinsam genutzten verbleibenden horizontalen Raum.

    Mit diesem Algorithmus kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderzeit im Vergleich zur "automatischen" Layout-Methode beschleunigen, aber nachfolgende Zellinhalte passen möglicherweise nicht in die bereitgestellten Spaltenbreiten. Zellen verwenden die {{Cssxref("overflow")}}-Eigenschaft, um zu bestimmen, ob überflüssiger Inhalt abgeschnitten werden soll, jedoch nur, wenn die Tabelle eine bekannte Breite hat; andernfalls überlaufen sie die Zellen nicht.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tabellen mit fester Breite und Textüberlauf

Dieses Beispiel verwendet ein festes Tabellenlayout in Kombination mit der {{cssxref("width")}}-Eigenschaft, um die Breite der Tabelle zu beschränken. Die {{cssxref("text-overflow")}}-Eigenschaft wird verwendet, um ein Auslassungszeichen für Wörter anzuwenden, die zu lang sind, um zu passen. Wenn das Tabellenlayout `auto` wäre, würde die Tabelle wachsen, um ihren Inhalt unterzubringen, trotz der angegebenen `width`.

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
- [CSS table](/de/docs/Web/CSS/CSS_table) module
