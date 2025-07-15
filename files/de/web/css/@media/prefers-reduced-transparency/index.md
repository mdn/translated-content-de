---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Das **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um festzustellen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder transluzenten Schichteffekte auf dem Gerät zu reduzieren. Das Aktivieren einer solchen Einstellung kann den Kontrast und die Lesbarkeit für einige Benutzer verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät bekannt gemacht hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge der transparenten oder transluzenten Schichteffekte zu minimieren.

## Benutzerpräferenzen

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz, und Benutzeragenten werden voraussichtlich auf diese Systemeinstellungen zurückgreifen.
Sie können sich auch auf weniger explizite Signale auf Plattformen stützen, die keine spezifische Einstellung bieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig ein transluzentes Kästchen. Wenn die Einstellung zur Reduzierung der Transparenz in den Bedienungshilfeneinstellungen auf Ihrem Gerät aktiviert ist, wird das transluzente Kästchen opaker.

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
