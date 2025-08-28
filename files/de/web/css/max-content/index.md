---
title: max-content
slug: Web/CSS/max-content
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

Das Schlüsselwort `max-content` zur Größenbestimmung steht für die {{Glossary("Intrinsic_Size#maximum_intrinsic_size", "maximale intrinsische Größe")}} eines Elements. Das Schlüsselwort erweitert das Element auf die größtmögliche Größe, die zur Anzeige seines Inhalts ohne weiche Umbrüche erforderlich ist. Bei Textinhalten umbricht dieses Schlüsselwort den Inhalt überhaupt nicht, selbst wenn dadurch ein Überlauf verursacht wird.

Die {{cssxref("interpolate-size")}} Eigenschaft und die {{cssxref("calc-size()")}} Funktion können verwendet werden, um Animationen zu und von `max-content` zu ermöglichen.

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

### Box-Größen mit max-content

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

### Größe von Gitternetzspalten mit max-content

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

- Verwandte Schlüsselwörter zur Größenbestimmung: {{cssxref("min-content")}}, {{cssxref("fit-content")}}
- [CSS-Boxgrößenbestimmung](/de/docs/Web/CSS/CSS_box_sizing) Modul
