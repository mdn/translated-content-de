---
title: Verwendung von Media Queries für Barrierefreiheit
short-title: Für Barrierefreiheit
slug: Web/CSS/Guides/Media_queries/Using_for_accessibility
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[**CSS Media Queries**](/de/docs/Web/CSS/Guides/Media_queries) können verwendet werden, um Menschen mit Behinderungen ein besseres Erlebnis auf Ihrer Website zu bieten.

## Reduzierte Bewegung

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen, wie beispielsweise Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS), problematisch sein. Darüber hinaus können bestimmte Arten von Bewegungen eine Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und Skotopische Empfindlichkeit sein. Das Reduzieren von Animationen oder das komplette Ausschalten basierend auf den Präferenzen des Nutzers kann auch denjenigen mit niedrigem Batteriestand oder Geräten mit geringer Leistungsfähigkeit zugutekommen.

Die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) ermöglicht es, Benutzern, die in den Barrierefreiheitseinstellungen ihres Betriebssystems die Präferenz für reduzierte Bewegung eingestellt haben, ein Erlebnis mit weniger Animationen und Übergängen zu bieten. Sie hat zwei mögliche Werte:

- `no-preference`
  - : Gibt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat.
- `reduce`
  - : Gibt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Oberfläche bevorzugt, die die Bewegung oder Animation auf das Minimum reduziert, vorzugsweise bis zu dem Punkt, an dem alle nicht wesentlichen Bewegungen entfernt werden.

### Beispiel

Dieses Beispiel enthält eine störende Animation, es sei denn, Sie schalten die reduzierte Bewegung in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Guides/Browsing_safely) ein.

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

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungsanimationen, einschließlich derer, die durch Benutzerinteraktionen ausgelöst werden, deaktiviert werden, es sei denn, die Animation ist essenziell für die Funktionalität oder die zu vermittelnde Information (siehe [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): zur Anpassung der Seitengestaltung basierend auf den Kontrastpräferenzen des Benutzers
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)
- [Gestaltung mit reduzierter Bewegung für Bewegungsempfindlichkeiten](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
