---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer die Webinhalte mit einem niedrigeren oder höheren Kontrast dargestellt haben möchte.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch ausgewertet.
- `more`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche mit einem höheren Kontrast bevorzugt.
- `less`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche mit einem niedrigeren Kontrast bevorzugt.
- `custom`
  - : Gibt an, dass der Benutzer dem System die Verwendung eines bestimmten Satzes von Farben mitgeteilt hat und der durch diese Farben implizierte Kontrast weder `more` noch `less` entspricht. Dieser Wert entspricht der Farbpalette, die von Benutzern von [`forced-colors: active`](/de/docs/Web/CSS/@media/forced-colors) angegeben ist.

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

- CSS [forced-colors](/de/docs/Web/CSS/@media/forced-colors) Media Query
