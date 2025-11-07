---
title: min-content
slug: Web/CSS/Reference/Values/min-content
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das Schlüsselwort `min-content` für die Größenbestimmung repräsentiert die {{Glossary("Intrinsic_Size#minimum_intrinsic_size", "minimale intrinsische Größe")}} eines Elements. Dieses Schlüsselwort verkleinert das Element auf die kleinstmögliche Größe, ohne vermeidbare Überlappungen seines Inhalts zu verursachen. Bei Textinhalten bewirkt dieses Schlüsselwort, dass der Inhalt bei jeder Gelegenheit (wie z.B. bei Leerzeichen zwischen Wörtern) umbrechen kann, und das Element wird nur so breit wie das längste Wort.

Die {{cssxref("interpolate-size")}} Eigenschaft und die {{cssxref("calc-size()")}} Funktion können verwendet werden, um Animationen zu `min-content` und von `min-content` zu ermöglichen.

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

### Größenbestimmung von Boxen mit min-content

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
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
