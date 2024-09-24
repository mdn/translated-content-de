---
title: bevorzugt-reduzierte-Transparenz
slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}{{SeeCompatTable}}

Das **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren. Das Einschalten einer solchen Einstellung kann den Kontrast und die Lesbarkeit für einige Benutzer verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch im booleschen Kontext ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge an transparenten oder durchscheinenden Schichteffekten zu minimieren.

## Benutzerpräferenzen

Verschiedene Betriebssysteme bieten eine Präferenz zum Reduzieren der Transparenz, und Benutzeragenten werden sich wahrscheinlich auf diese Systemeinstellungen verlassen.
Sie könnten sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezielle Einstellung anbieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig ein durchscheinendes Feld. Wenn die Einstellung zur Reduzierung der Transparenz in den Bedienungshilfen auf Ihrem Gerät aktiviert ist, wird das durchscheinende Feld undurchsichtiger.

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

- CSS [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienabfrage
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
