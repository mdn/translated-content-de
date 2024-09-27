---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: eb20a5272772231852864ddc71b9710de0fa1d4f
---

{{CSSRef}}

Das **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, dass der Webinhalt mit einem niedrigeren oder höheren Kontrast dargestellt wird.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer keine Präferenz im System festgelegt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `more`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit einem höheren Kontrast bevorzugt.
- `less`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit einem niedrigeren Kontrast bevorzugt.
- `custom`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, eine spezifische Farbpalette zu verwenden, deren Kontrast weder `more` noch `less` entspricht. Dieser Wert wird mit der vom Benutzer angegebenen Farbpalette übereinstimmen, wenn [`forced-colors: active`](/de/docs/Web/CSS/@media/forced-colors) verwendet wird.

## Benutzerpräferenzen

Verschiedene Betriebssysteme unterstützen solche Präferenzen, und Benutzeragenten werden wahrscheinlich auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

## Beispiele

Dieses Beispiel hat standardmäßig einen störend niedrigen Kontrast.

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
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

- CSS [forced-colors](/de/docs/Web/CSS/@media/forced-colors) Medienabfrage
