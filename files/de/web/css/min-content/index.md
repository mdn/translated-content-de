---
title: min-content
slug: Web/CSS/min-content
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

Das `min-content` Größenschlüsselwort repräsentiert die {{Glossary("Intrinsic_Size#minimum_intrinsic_size", "minimale intrinsische Größe")}} eines Elements.
Dieses Schlüsselwort verkleinert das Element auf die kleinstmögliche Größe, ohne vermeidbares Überlaufen seines Inhalts zu verursachen.
Für Textinhalt führt dieses Schlüsselwort dazu, dass der Inhalt bei jeder Gelegenheit (wie Leerzeichen zwischen Wörtern) umgebrochen wird, und das Element wird nur so breit wie das längste Wort sein.

Die {{cssxref("interpolate-size")}} Eigenschaft und die {{cssxref("calc-size()")}} Funktion können verwendet werden, um Animationen zu und von `min-content` zu ermöglichen.

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

### Größe von Boxen mit min-content

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

### Größe von Gitterspalten mit min-content

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

- Verwandte Größenschlüsselwörter: {{cssxref("max-content")}}, {{cssxref("fit-content")}}
- [CSS Box Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
