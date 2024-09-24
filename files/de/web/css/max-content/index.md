---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: f3f3d1b9afb5e8aaeb9adec3d5e93baf6a501bd3
---

{{CSSRef}}

Das Stichwort `max-content` stellt die maximale {{glossary("intrinsic size", "intrinsische Größe")}} des Inhalts dar. Für Textinhalte bedeutet dies, dass der Inhalt nicht umbrechen wird, selbst wenn Überläufe entstehen.

## Syntax

```css
/* Wird als Länge verwendet */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* wird in Gitterspuren verwendet */
grid-template-columns: 200px 1fr max-content;
```

## Beispiele

### Verwendung von max-content für Box-Größenanpassung

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item mit mehr Text, das das feste Breitenfeld überfluten wird.
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
  <div>Item mit mehr Text darin.</div>
  <div>Flexibles Item</div>
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Verwandte Stichwörter zur Größenanpassung: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS-Box-Größenanpassungsmodul](/de/docs/Web/CSS/CSS_box_sizing)
