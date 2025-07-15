---
title: min-content
slug: Web/CSS/min-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das `min-content` Schlüsselwort zur Größenbestimmung repräsentiert die minimale {{Glossary("intrinsic_size", "intrinsische Größe")}} des Inhalts. Für Textinhalte bedeutet dies, dass der Inhalt alle Gelegenheiten zum weichen Umbruch nutzt und so klein wie das längste Wort wird.

Die {{cssxref("interpolate-size")}} Eigenschaft und die {{cssxref("calc-size()")}} Funktion können verwendet werden, um Animationen zu und von `min-content` zu ermöglichen.

## Syntax

```css
/* Used as a length */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr min-content;
```

## Beispiele

### Verwendung von min-content für Box-Größenbestimmung

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

{{EmbedLiveSample("Using_min-content_for_box_sizing", "100%", 200)}}

### Größenbestimmung von Grid-Spalten mit min-content

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

- Verwandte Schlüsselwörter zur Größenbestimmung: {{cssxref("max-content")}}, {{cssxref("fit-content")}}
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
