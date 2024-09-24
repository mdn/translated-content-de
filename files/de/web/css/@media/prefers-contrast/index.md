---
title: Prefers-Kontrast
slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: eb20a5272772231852864ddc71b9710de0fa1d4f
---

{{CSSRef}}

Das **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer verlangt hat, dass der Webinhalt mit einem niedrigeren oder höheren Kontrast dargestellt wird.

## Syntax

- `no-preference`
  - : Zeigt an, dass der Benutzer keine Präferenz dem System mitgeteilt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als false ausgewertet.
- `more`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit einem höheren Kontrast bevorzugt.
- `less`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit einem geringeren Kontrast bevorzugt.
- `custom`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, eine spezielle Farbpalette zu verwenden, und der durch diese Farben implizierte Kontrast entspricht weder `more` noch `less`. Dieser Wert wird mit der Farbpalette übereinstimmen, die von Benutzern von [`forced-colors: active`](/de/docs/Web/CSS/@media/forced-colors) angegeben wurde.

## Benutzerpräferenzen

Verschiedene Betriebssysteme unterstützen solche Präferenzen und Benutzeragenten werden wahrscheinlich auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

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
