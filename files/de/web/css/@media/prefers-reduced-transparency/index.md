---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

{{SeeCompatTable}}

Das **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die auf dem Gerät verwendeten transparenten oder durchscheinenden Effekte zu reduzieren. Das Einschalten einer solchen Einstellung kann einigen Benutzern helfen, den Kontrast und die Lesbarkeit zu verbessern.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät festgelegt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Menge der transparenten oder durchscheinenden Effekte zu minimieren.

## Benutzerpräferenzen

Verschiedene Betriebssysteme bieten eine Präferenz zur Reduzierung der Transparenz, und Benutzeragenten werden sich wahrscheinlich auf diese Systemeinstellungen verlassen. Sie können sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezielle Einstellung bieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel hat standardmäßig einen durchscheinenden Kasten. Wenn die Einstellung zur Reduzierung der Transparenz in den Bedienungshilfen auf Ihrem Gerät aktiviert ist, wird der durchscheinende Kasten undurchsichtiger.

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
- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
