---
title: "`prefers-contrast` CSS-Media-Feature"
short-title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer eine Darstellung der Webinhalte mit geringem oder hohem Kontrast angefordert hat.

## Syntax

- `no-preference`
  - : Zeigt an, dass der Benutzer keine Präferenz an das System bekanntgegeben hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `more`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche mit einem höheren Kontrast bevorzugt.
- `less`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche mit einem niedrigeren Kontrast bevorzugt.
- `custom`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, eine spezifische Farbpalette zu verwenden, und der durch diese Farben implizierte Kontrast weder `more` noch `less` entspricht. Dieser Wert wird der von Benutzern von [`forced-colors: active`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) angegebenen Farbpalette entsprechen.

## Benutzerpräferenzen

Verschiedene Betriebssysteme unterstützen solche Präferenzen und Benutzeragenten werden wahrscheinlich auf die Einstellungen des Betriebssystems zurückgreifen.

## Beispiele

Dieses Beispiel enthält ein Feld mit einer gestrichelten {{cssxref("outline")}}, die standardmäßig gesetzt ist. Wenn die `prefers-contrast: more` Media-Query übereinstimmt, wird die angewendete Umrandung stattdessen mit einem kontrastreicheren `solid`-Stil versehen.

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
  margin: 5px;
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS [forced-colors](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Media-Query
