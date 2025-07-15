---
title: widows
slug: Web/CSS/widows
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`widows`**- [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Anzahl von Zeilen in einem Block-Container fest, die am _oberen_ Rand einer [Seite](/de/docs/Web/CSS/CSS_paged_media), einer Region oder einer [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Widow_ (De: „Hinterbliebene“) die letzte Zeile eines Absatzes, die alleine am Anfang einer Seite erscheint. (Der Absatz wird von einer vorherigen Seite fortgesetzt.)

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
  - : Die minimale Anzahl von Zeilen, die nach einem Fragmentierungsumbruch für sich alleine am Anfang eines neuen Fragments stehen können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Steuern von Spalten-Widows

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
