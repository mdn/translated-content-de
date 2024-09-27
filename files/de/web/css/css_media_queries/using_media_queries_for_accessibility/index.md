---
title: Verwendung von Media-Queries für Barrierefreiheit
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

[**CSS-Media-Queries**](/de/docs/Web/CSS/CSS_media_queries) können verwendet werden, um Menschen mit Behinderungen ein besseres Erlebnis auf Ihrer Website zu bieten.

## Reduzierte Bewegung

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Bewegungen Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein. Das Reduzieren von Animationen oder das vollständige Abschalten von Animationen basierend auf den Präferenzen des Benutzers kann auch Nutzern mit niedrigem Akkustand oder Geräten mit niedriger Leistung zugutekommen.

Die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Query ermöglicht es, Nutzern, die ihre Betriebssystem-Einstellungen auf reduzierte Bewegung gesetzt haben, ein Erlebnis mit weniger Animationen und Übergängen zu bieten. Es hat zwei mögliche Werte:

- `no-preference`
  - : Zeigt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat.
- `reduce`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche bevorzugt, die die Menge an Bewegung oder Animation minimiert, vorzugsweise bis zu dem Punkt, an dem alle nicht wesentlichen Bewegungen entfernt werden.

### Beispiel

Dieses Beispiel zeigt eine lästige Animation, es sei denn, Sie aktivieren die Option "Bewegung reduzieren" in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely).

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungsanimationen, einschließlich derjenigen, die durch Benutzerinteraktion ausgelöst werden, deaktiviert werden, es sei denn, die Animation ist für die Funktionalität oder die übermittelten Informationen wesentlich (siehe [WCAG: Animation von Interaktionen](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): um Seitenstile basierend auf der Kontrastpräferenz des Benutzers anzupassen
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
