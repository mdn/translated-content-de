---
title: min-content
slug: Web/CSS/Reference/Values/min-content
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das `min-content`-Größen-Schlüsselwort repräsentiert die {{Glossary("Intrinsic_Size#minimum_intrinsic_size", "minimale intrinsische Größe")}} eines Elements. Das Schlüsselwort verkleinert das Element auf die kleinstmögliche Größe, ohne dass ein vermeidbares Überlaufen seines Inhalts auftritt. Bei Textinhalt sorgt dieses Schlüsselwort dafür, dass der Inhalt bei jeder Gelegenheit (wie zum Beispiel bei Leerzeichen zwischen Wörtern) umbrochen wird, und das Element wird nur so breit sein wie das längste Wort.

Die {{cssxref("interpolate-size")}}-Eigenschaft und die {{cssxref("calc-size()")}}-Funktion können verwendet werden, um Animationen zu und von `min-content` zu ermöglichen.

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

### Boxen mit min-content dimensionieren

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

### Rasterspalten mit min-content dimensionieren

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
- [CSS Boxmodell](/de/docs/Web/CSS/Guides/Box_sizing) Modul
