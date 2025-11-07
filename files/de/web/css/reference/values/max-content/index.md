---
title: max-content
slug: Web/CSS/Reference/Values/max-content
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das `max-content`-Größenbestimmungs-Keyword repräsentiert die {{Glossary("Intrinsic_Size#maximum_intrinsic_size", "maximale intrinsische Größe")}} eines Elements. Das Keyword erweitert das Element auf die größte Größe, die benötigt wird, um seinen Inhalt ohne weiche Umbrüche anzuzeigen. Für Textinhalte bricht dieses Keyword den Inhalt überhaupt nicht um, selbst wenn es zu einem Überlauf führt.

Die {{cssxref("interpolate-size")}}-Eigenschaft und die {{cssxref("calc-size()")}}-Funktion können verwendet werden, um Animationen zu und von `max-content` zu ermöglichen.

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

### Boxen mit max-content dimensionieren

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

### Grid-Spalten mit max-content dimensionieren

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

- Verwandte Größenbestimmungs-Keywords: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_sizing) Modul
