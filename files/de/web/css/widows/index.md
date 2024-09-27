---
title: widows
slug: Web/CSS/widows
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`widows`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestanzahl von Zeilen in einem Block-Container fest, die oben auf einer [Seite](/de/docs/Web/CSS/CSS_paged_media), einem Bereich oder einer [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

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
  - : Die Mindestanzahl von Zeilen, die nach einem Fragmentierungsbruch alleine oben in einem neuen Fragment bleiben können. Der Wert muss positiv sein.

## Formaler Definition

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
- [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)
