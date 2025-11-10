---
title: widows
slug: Web/CSS/Reference/Properties/widows
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`widows`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die minimale Anzahl von Zeilen in einem Blockcontainer fest, die oben auf einer [Seite](/de/docs/Web/CSS/Guides/Paged_media), Region oder [Spalte](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Widow_ die letzte Zeile eines Absatzes, die allein oben auf einer Seite erscheint. (Der Absatz wird von einer vorherigen Seite fortgesetzt.)

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
  - : Die minimale Anzahl von Zeilen, die nach einem Fragmentierungsumbruch am Anfang eines neuen Fragmentes allein stehen können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Steuerung von Spalten-Widows

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
- [Ausgabe auf Papiere (Paged media)](/de/docs/Web/CSS/Guides/Paged_media)
