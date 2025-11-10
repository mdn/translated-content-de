---
title: Verwendung von Media Queries für Barrierefreiheit
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

[**CSS-Media-Queries**](/de/docs/Web/CSS/Guides/Media_queries) können verwendet werden, um Menschen mit Behinderungen eine bessere Nutzung Ihrer Website zu ermöglichen.

## Reduzierte Bewegung

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Einschränkungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und Skotopische Empfindlichkeit sein. Das Reduzieren von Animationen oder das vollständige Abschalten von Animationen basierend auf den Vorlieben des Benutzers kann auch Benutzern mit niedrigem Batteriestand oder Geräten mit geringem Leistungsvermögen zugutekommen.

Die [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Media Query ermöglicht es, Benutzern, die die Barrierefreiheitseinstellungen ihres Betriebssystems auf reduzierte Bewegung gesetzt haben, ein Erlebnis mit weniger Animationen und Übergängen zu bieten. Es gibt zwei mögliche Werte:

- `no-preference`
  - : Zeigt an, dass der Benutzer keine Präferenz bekannt gegeben hat.
- `reduce`
  - : Zeigt an, dass der Benutzer das System darüber informiert hat, dass er eine Benutzeroberfläche bevorzugt, die die Menge an Bewegung oder Animation minimiert, vorzugsweise bis zu dem Punkt, an dem alle nicht wesentlichen Bewegungen entfernt werden.

### Beispiel

Dieses Beispiel enthält eine nervige Animation, es sei denn, Sie aktivieren die reduzierte Bewegung in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Guides/Browsing_safely).

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

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungseffekte, einschließlich derjenigen, die durch Benutzerinteraktionen ausgelöst werden, deaktiviert sind, es sei denn, die Animation ist wesentlich für die Funktionalität oder die übermittelte Information (siehe [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): zum Anpassen von Seitenstilen basierend auf der Kontrastvorliebe des Benutzers
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
