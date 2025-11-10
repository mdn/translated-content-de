---
title: orphans
slug: Web/CSS/Reference/Properties/orphans
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`orphans`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt die Mindestanzahl von Zeilen in einem Block-Container fest, die am _unteren_ Ende einer [Seite](/de/docs/Web/CSS/Guides/Paged_media), einer Region oder einer [Spalte](/de/docs/Web/CSS/Guides/Multicol_layout) angezeigt werden müssen.

In der Typografie ist eine _Waise_ die erste Zeile eines Absatzes, die alleine am unteren Ende einer Seite erscheint. (Der Absatz wird auf einer folgenden Seite fortgesetzt.)

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
  - : Die Mindestanzahl von Zeilen, die am unteren Ende eines Fragments alleine bleiben können, bevor eine Fragmentierungstrennung erfolgt. Der Wert muss positiv sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen einer Mindestgröße für Waisen von drei Zeilen

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
- [Gedruckte Medien](/de/docs/Web/CSS/Guides/Paged_media)
