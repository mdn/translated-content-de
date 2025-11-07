---
title: prefers-reduced-transparency
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Das **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die durchsichtigen oder transluzenten Schichteffekte auf dem Gerät zu reduzieren. Das Einschalten einer solchen Einstellung kann einigen Benutzern helfen, den Kontrast und die Lesbarkeit zu verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Vorliebe auf dem Gerät bekannt gegeben hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge der durchsichtigen oder transluzenten Schichteffekte zu minimieren.

## Benutzereinstellungen

Verschiedene Betriebssysteme bieten eine Einstellung zur Reduzierung der Transparenz an, und Benutzeragenten werden wahrscheinlich auf diese Systemeinstellungen zurückgreifen.
Sie können sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezifische Einstellung anbieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig einen durchsichtigen Kasten. Wenn die Einstellung zur Reduzierung der Transparenz in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktiviert ist, wird der durchsichtige Kasten undurchsichtiger.

### HTML

```html
<div class="translucent">translucent box</div>
```

### CSS

```css
.translucent {
  opacity: 0.4;
}

@media (prefers-reduced-transparency) {
  .translucent {
    opacity: 0.8;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Media Query
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
