---
title: "`prefers-reduced-transparency` CSS-Media-Feature"
short-title: prefers-reduced-transparency
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{SeeCompatTable}}

Die **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, die die durchsichtigen oder halbtransparenten Schichteffekte reduziert, die auf dem Gerät verwendet werden. Das Aktivieren einer solchen Einstellung kann für einige Benutzer den Kontrast und die Lesbarkeit verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer auf dem Gerät keine Präferenz angegeben hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge der durchsichtigen oder halbtransparenten Schichteffekte zu minimieren.

## Benutzervorlieben

Verschiedene Betriebssysteme bieten eine Präferenz für die Reduzierung von Transparenz, und Benutzeragenten verlassen sich wahrscheinlich auf diese Systemeinstellungen.
Sie können sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezielle Einstellung anbieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig ein halbtransparentes Kästchen. Wenn die Einstellung zur Reduzierung von Transparenz in den Bedienungshilfeneinstellungen auf Ihrem Gerät aktiviert ist, wird das halbtransparente Kästchen undurchsichtiger.

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
- [Verwendung von Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
