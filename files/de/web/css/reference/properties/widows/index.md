---
title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`widows`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die minimale Anzahl von Zeilen in einem Block-Container fest, die oben auf einer [Seite](/de/docs/Web/CSS/CSS_paged_media), einer Region oder einer [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Widow_ die letzte Zeile eines Absatzes, die allein am oberen Rand einer Seite erscheint. (Der Absatz wird von einer vorhergehenden Seite fortgesetzt.)

## Syntax

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die minimale Anzahl von Zeilen, die nach einem Fragmentierungsumbruch alleine an der Spitze eines neuen Fragments bleiben können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Kontrolle von Spalten-Widows

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Controlling_column_widows", 400, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("orphans")}}
- [Paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)
