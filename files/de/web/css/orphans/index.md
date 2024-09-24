---
title: Orphans
slug: Web/CSS/orphans
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}

Die **`orphans`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Mindestanzahl von Zeilen in einem Blockcontainer fest, die am _unteren_ Rand einer [Seite](/de/docs/Web/CSS/CSS_paged_media), einer Region oder einer [Spalte](/de/docs/Web/CSS/CSS_multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Waise_ die erste Zeile eines Absatzes, die allein am unteren Rand einer Seite erscheint. (Der Absatz wird auf der nächsten Seite fortgesetzt.)

## Syntax

```css
/* <integer> Werte */
orphans: 2;
orphans: 3;

/* Globale Werte */
orphans: inherit;
orphans: initial;
orphans: revert;
orphans: revert-layer;
orphans: unset;
```

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl von Zeilen, die am unteren Rand eines Fragments ohne Unterbrechung verbleiben können. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer Mindestanzahl von drei Zeilen für Waisen

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
