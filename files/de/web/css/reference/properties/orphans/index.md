---
title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`orphans`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die minimale Anzahl von Zeilen in einem Block-Container fest, die am _unteren_ Rand einer [Seite](/de/docs/Web/CSS/CSS_paged_media), Region oder [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

In der Typografie ist ein _Waisenkind_ die erste Zeile eines Absatzes, die allein am unteren Rand einer Seite erscheint. (Der Absatz wird auf der nächsten Seite fortgesetzt.)

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
  - : Die minimale Anzahl von Zeilen, die am unteren Ende eines Fragments allein stehen können, bevor ein Fragmentierungsbruch erfolgt. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer minimalen Waisengröße von drei Zeilen

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
- [Seitenbezogene Medien](/de/docs/Web/CSS/CSS_paged_media)
