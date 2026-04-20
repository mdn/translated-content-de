---
title: "`orphans` CSS property"
short-title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`orphans`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die minimale Anzahl von Zeilen in einem Block-Container fest, die am _Ende_ einer [Seite](/de/docs/Web/CSS/Guides/Paged_media), eines Bereichs oder einer [Spalte](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt werden müssen.

In der Typografie bezeichnet man als _Waisen_ die erste Zeile eines Absatzes, die alleine am Ende einer Seite erscheint. (Der Absatz wird auf der folgenden Seite fortgesetzt.)

## Syntax

```css
/* <integer> values */
orphans: 2;
orphans: 3;

/* Global values */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die minimale Anzahl von Zeilen, die am Ende eines Fragments vor einem Fragmentationswechsel alleine stehen können. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer minimalen Waisenanzahl von drei Zeilen

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how orphans work.
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
  height: 150px;
  columns: 3;
  orphans: 3;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_a_minimum_orphan_size_of_three_lines", 380, 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("widows")}}
- [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media)
