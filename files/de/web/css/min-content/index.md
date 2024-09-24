---
title: min-content
slug: Web/CSS/min-content
l10n:
  sourceCommit: f3f3d1b9afb5e8aaeb9adec3d5e93baf6a501bd3
---

{{CSSRef}}

Das Schlüsselwort `min-content` für Größenbestimmungen repräsentiert die minimale {{glossary("intrinsic size")}} des Inhalts. Für Textinhalt bedeutet dies, dass der Inhalt alle Möglichkeiten zum weichen Umbruch nutzt und so klein wie das längste Wort wird.

## Syntax

```css
/* Als Länge verwendet */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* In Grid-Tracks verwendet */
grid-template-columns: 200px 1fr min-content;
```

## Beispiele

### Verwendung von min-content für Box-Größen

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item mit mehr Text.</div>
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
  <div>Item mit mehr Text.</div>
  <div>Flexibles Item</div>
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
- [CSS Box-Größenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) Modul
