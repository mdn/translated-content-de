---
title: Hurenkinder
slug: Web/CSS/widows
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`widows`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Mindestanzahl der Zeilen in einem Block-Container fest, die oben auf einer [Seite](/de/docs/Web/CSS/CSS_paged_media), Region oder [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

In der Typografie ist ein _Hurenkind_ die letzte Zeile eines Absatzes, die alleine oben auf einer Seite erscheint. (Der Absatz wird von einer vorherigen Seite fortgesetzt.)

## Syntax

```css
/* <integer> Werte */
widows: 2;
widows: 3;

/* Globale Werte */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl der Zeilen, die nach einem Fragmentierungsumbruch oben in einem neuen Fragment allein stehen können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Kontrolle von Hurenkindern in Spalten

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
