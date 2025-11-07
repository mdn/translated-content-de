---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`prefers-contrast`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob der Benutzer angefordert hat, dass der Webinhalt mit einem niedrigeren oder höheren Kontrast dargestellt wird.

## Syntax

- `no-preference`
  - : Gibt an, dass der Benutzer kein Präferenz an das System übermittelt hat. Dieser Schlüsselwortwert wird im Booleschen Kontext als falsch ausgewertet.
- `more`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit höherem Kontrast bevorzugt.
- `less`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Schnittstelle mit niedrigerem Kontrast bevorzugt.
- `custom`
  - : Gibt an, dass der Benutzer dem System eine spezifische Farbpalette mitgeteilt hat und der durch diese Farben implizierte Kontrast weder `more` noch `less` entspricht. Dieser Wert entspricht der Farbpalette, die von Benutzern von [`forced-colors: active`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) angegeben wurde.

## Benutzerpräferenzen

Verschiedene Betriebssysteme unterstützen solche Präferenzen, und es ist wahrscheinlich, dass Benutzeragenten auf die vom Betriebssystem bereitgestellten Einstellungen zurückgreifen.

## Beispiele

Dieses Beispiel hat standardmäßig einen ärgerlich niedrigen Kontrast.

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

- CSS [forced-colors](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Medienabfrage
