---
title: prefers-reduced-transparency
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Das **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um festzustellen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte auf dem Gerät zu reduzieren. Das Einschalten einer solchen Einstellung kann helfen, den Kontrast und die Lesbarkeit für einige Benutzer zu verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät festgelegt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge der transparenten oder durchscheinenden Schichteffekte zu minimieren.

## Benutzerpräferenzen

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz, und Benutzeragenten verlassen sich wahrscheinlich auf diese Systemeinstellungen. Sie können sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezifische Einstellung anbieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig ein durchscheinendes Feld. Wenn die Einstellung zur Reduzierung von Transparenz in den Bedienungshilfen Ihres Geräts aktiviert ist, wird das durchscheinende Feld undurchsichtiger.

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

- CSS [prefers-reduced-motion](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Medienabfrage
- [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
