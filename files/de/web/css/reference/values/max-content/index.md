---
title: CSS-Schlüsselwort `max-content`
short-title: max-content
slug: Web/CSS/Reference/Values/max-content
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das Schlüsselwort `max-content` für die Größenbestimmung steht für die {{Glossary("Intrinsic_Size#maximum_intrinsic_size", "maximale intrinsische Größe")}} eines Elements.
Es vergrößert das Element auf die größte Größe, die erforderlich ist, um seinen Inhalt ohne weiche Zeilenumbrüche darzustellen.
Bei Textinhalten wird der Inhalt überhaupt nicht umgebrochen, selbst wenn dadurch ein Überlauf entsteht.

Mit der Eigenschaft {{cssxref("interpolate-size")}} und der Funktion {{cssxref("calc-size()")}} lassen sich Animationen zu und von `max-content` ermöglichen.

## Syntax

```css
/* Used as a length value */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* Used in grid tracks */
grid-template-columns: 200px 1fr max-content;
```

## Beispiele

### Größe von Boxen mit max-content festlegen

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item with more text in it which will overflow the fixed width box.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Ergebnis

{{EmbedLiveSample("sizing_boxes_with_max-content", "100%", 200)}}

### Größe von Grid-Spalten mit max-content festlegen

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
  grid-template-columns: max-content max-content 1fr;
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

{{EmbedLiveSample("Sizing_grid_columns_with_max-content", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Schlüsselwörter für die Größenbestimmung: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- Modul [CSS box sizing](/de/docs/Web/CSS/Guides/Box_sizing)
