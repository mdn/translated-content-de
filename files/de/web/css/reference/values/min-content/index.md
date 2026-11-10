---
title: CSS-Schlüsselwort `min-content`
short-title: min-content
slug: Web/CSS/Reference/Values/min-content
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Schlüsselwort `min-content` für die Größenbestimmung steht für die {{Glossary("Intrinsic_Size#minimum_intrinsic_size", "minimale intrinsische Größe")}} eines Elements.
Es verkleinert das Element auf die kleinstmögliche Größe, ohne einen vermeidbaren Überlauf seines Inhalts zu verursachen.
Bei Textinhalten bewirkt das Schlüsselwort, dass der Inhalt an jeder möglichen Stelle umbricht (etwa an Leerzeichen zwischen Wörtern). Das Element ist dabei nur so breit wie das längste Wort.

Mit der Eigenschaft {{cssxref("interpolate-size")}} und der Funktion {{cssxref("calc-size()")}} lassen sich Animationen zu und von `min-content` ermöglichen.

## Syntax

```css
/* Used as a length value */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* Used in grid tracks */
grid-template-columns: 200px 1fr min-content;
```

## Beispiele

### Größe von Boxen mit min-content festlegen

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Ergebnis

{{EmbedLiveSample("sizing_boxes_with_min-content", "100%", 200)}}

### Größe von Grid-Spalten mit min-content festlegen

#### HTML

```html
<div id="container">
  <div>Item</div>
  <div>Item with more text in it.</div>
  <div>Flexible item</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: min-content min-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Ergebnis

{{EmbedLiveSample("Sizing_grid_columns_with_min-content", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Schlüsselwörter für die Größenbestimmung: {{cssxref("max-content")}}, {{cssxref("fit-content")}}
- Modul [CSS box sizing](/de/docs/Web/CSS/Guides/Box_sizing)
