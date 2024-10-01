---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: f3f3d1b9afb5e8aaeb9adec3d5e93baf6a501bd3
---

{{CSSRef}}

Das `max-content` Größenschlüsselwort repräsentiert die maximale {{Glossary("intrinsic_size", "intrinsische Größe")}} des Inhalts. Für Textinhalte bedeutet dies, dass der Inhalt überhaupt nicht umbrochen wird, selbst wenn es zu Überläufen führt.

## Syntax

```css
/* Used as a length */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* used in grid tracks */
grid-template-columns: 200px 1fr max-content;
```

## Beispiele

### Verwenden von max-content für Box-Größenanpassung

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

{{EmbedLiveSample("Using_max-content_for_box_sizing", "100%", 200)}}

### Größenanpassung von Grid-Spalten mit max-content

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

- Verwandte Größenschlüsselwörter: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS Box-Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) Modul
