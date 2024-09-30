---
title: prefers-reduced-transparency
slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}{{SeeCompatTable}}

Die **`prefers-reduced-transparency`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die Effekte von transparenten oder halbtransparenten Ebenen zu verringern. Das Aktivieren einer solchen Einstellung kann dazu beitragen, den Kontrast und die Lesbarkeit für einige Benutzer zu verbessern.

## Syntax

- `no-preference`
  - : Zeigt an, dass ein Benutzer keine Präferenz auf dem Gerät festgelegt hat. Dieser Schlüsselwortwert wird im booleschen Kontext als falsch ausgewertet.
- `reduce`
  - : Zeigt an, dass ein Benutzer die Einstellung auf seinem Gerät aktiviert hat, um die Anzahl der transparenten oder halbtransparenten Ebeneneffekte zu minimieren.

## Benutzerpräferenzen

Verschiedene Betriebssysteme bieten eine Präferenz zur Verringerung der Transparenz, und Benutzeragenten werden sich wahrscheinlich auf diese Systemeinstellungen stützen. Sie können sich auch auf weniger explizite Signale auf Plattformen verlassen, die keine spezielle Einstellung anbieten.

- In Windows 10/11: Einstellungen > Personalisierung > Farben > Transparenzeffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Transparenz reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Anzeige & Textgröße > Transparenz reduzieren.

## Beispiele

Dieses Beispiel enthält standardmäßig eine halbdurchsichtige Box. Wenn die Einstellung zur Reduzierung der Transparenz in den Bedienungshilfeneinstellungen auf Ihrem Gerät aktiviert ist, wird die halbdurchsichtige Box undurchsichtiger.

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

- CSS [prefers-reduced-motion](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
