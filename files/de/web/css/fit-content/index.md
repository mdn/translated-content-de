---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **`fit-content`** Schlüsselwort ist gleichbedeutend mit {{cssxref("fit-content_function", "fit-content(stretch)")}}. In der Praxis bedeutet dies, dass das Element den verfügbaren Platz nutzt, aber niemals mehr als {{cssxref("max-content")}}.

Wird es als berechnete Elementgröße für {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}} und {{cssxref("max-height")}} verwendet, beziehen sich die maximalen und minimalen Größen auf die Inhaltsgröße.

> [!NOTE]
> Die CSS Sizing Spezifikation definiert ebenfalls die {{cssxref("fit-content_function", "fit-content()")}} Funktion. Diese Seite beschreibt das Schlüsselwort.

## Syntax

```css
width: fit-content;
block-size: fit-content;
```

## Beispiele

### Verwendung von fit-content für die Größenbestimmung von Boxen

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

- Verwandte Größenbestimmungsschlüsselwörter: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_sizing) Modul
