---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`fit-content`** Schlüsselwort ist gleichbedeutend mit {{cssxref("fit-content_function", "fit-content(stretch)")}}. In der Praxis bedeutet das, dass die Box den verfügbaren Platz nutzt, jedoch niemals mehr als {{cssxref("max-content")}}.

Die `fit-content` Größe wird mit der folgenden Gleichung berechnet, wobei `<available-space>` die Größe des übergeordneten Elements oder des Grid-Tracks im [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) ist:

`min(max-content, max(min-content, <available-space>))`

Wenn es als Layout-Box-Größe für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet wird, beziehen sich die maximalen und minimalen Größen auf die Inhaltsgröße.

Die Eigenschaft {{cssxref("interpolate-size")}} und die Funktion {{cssxref("calc-size()")}} können verwendet werden, um Animationen zu und von `fit-content` zu ermöglichen.

> [!NOTE]
> Die CSS-Sizing-Spezifikation definiert auch die {{cssxref("fit-content_function", "fit-content()")}} Funktion. Diese Seite beschreibt das Schlüsselwort.

## Syntax

```css
width: fit-content;
block-size: fit-content;
```

## Beispiele

### Verwendung von fit-content für die Box-Größenbestimmung

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">
    Item with more text in it, hopefully we have added enough text so the text
    will start to wrap.
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_fit-content_for_box_sizing", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Schlüsselwörter zur Größenbestimmung: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS box sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
