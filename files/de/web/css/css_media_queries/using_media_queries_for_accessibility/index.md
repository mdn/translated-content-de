---
title: Verwendung von Media Queries für Barrierefreiheit
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[**CSS Media Queries**](/de/docs/Web/CSS/CSS_media_queries) können verwendet werden, um Benutzern mit Behinderungen eine bessere Erfahrung auf Ihrer Website zu bieten.

## Reduzierte Bewegung

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Außerdem können bestimmte Bewegungen Auslöser für Vestibularstörungen, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein. Das Reduzieren von Animationen oder das vollständige Abschalten von Animationen basierend auf den Benutzerpräferenzen kann auch Benutzern mit niedrigem Akkustand oder Low-End-Geräten zugutekommen.

Die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query ermöglicht es, Benutzern, die in ihren Betriebssystemeinstellungen die Barrierefreiheit zur Reduzierung von Bewegungen eingestellt haben, eine Erfahrung mit weniger Animationen und Übergängen zu bieten. Es hat zwei mögliche Werte:

- `no-preference`
  - : Zeigt an, dass der Benutzer keine Präferenz gegenüber dem System bekannt gegeben hat.
- `reduce`
  - : Zeigt an, dass der Benutzer das System benachrichtigt hat, dass er eine Benutzeroberfläche bevorzugt, die die Menge an Bewegung oder Animation minimiert, vorzugsweise bis zu dem Punkt, an dem alle nicht essenziellen Bewegungen entfernt werden.

### Beispiel

Dieses Beispiel enthält eine störende Animation, es sei denn, Sie schalten reduzierte Bewegung in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Guides/Browsing_safely) ein.

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

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungsanimationen, einschließlich der durch Benutzerinteraktion ausgelösten, deaktiviert werden, es sei denn, die Animation ist essenziell für die Funktionalität oder die vermittelte Information (siehe [WCAG: Animationen durch Interaktionen](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): zur Anpassung der Seitenstile basierend auf der Kontrastpräferenz des Benutzers
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
