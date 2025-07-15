---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das `max-content` Größen-Schlüsselwort repräsentiert die maximale {{Glossary("intrinsic_size", "intrinsische Größe")}} des Inhalts. Für Textinhalte bedeutet dies, dass der Inhalt sich nicht umbricht, selbst wenn Überläufe entstehen.

Die Eigenschaft {{cssxref("interpolate-size")}} und die Funktion {{cssxref("calc-size()")}} können verwendet werden, um Animationen zu und von `max-content` zu ermöglichen.

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

### Verwendung von max-content für die Größe einer Box

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

### Größenanpassung von Gitterspalten mit max-content

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

- Verwandte Größen-Schlüsselwörter: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS-Box-Modell Größe](/de/docs/Web/CSS/CSS_box_sizing) Modul
