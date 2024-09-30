---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: eb20a5272772231852864ddc71b9710de0fa1d4f
---

{{CSSRef}}

Die **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer eine Darstellung des Webinhalts mit geringerem oder höherem Kontrast angefordert hat.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer keine Präferenz an das System übermittelt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als false bewertet.
- `more`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzerschnittstelle mit einem höheren Kontrast bevorzugt.
- `less`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzerschnittstelle mit einem geringeren Kontrast bevorzugt.
- `custom`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass eine spezifische Farbpalette verwendet werden soll und der durch diese Farben implizierte Kontrast weder `more` noch `less` entspricht. Dieser Wert wird mit der von Benutzern angeforderten Farbpalette übereinstimmen, die [`forced-colors: active`](/de/docs/Web/CSS/@media/forced-colors) verwenden.

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
