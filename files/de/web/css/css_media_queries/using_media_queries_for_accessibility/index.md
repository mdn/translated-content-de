---
title: Einsatz von Media Queries für Barrierefreiheit
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

[**CSS Media Queries**](/de/docs/Web/CSS/CSS_media_queries) können verwendet werden, um Menschen mit Behinderungen die Nutzung Ihrer Website zu erleichtern.

## Reduzierte Bewegung

Blinkende und flackernde Animationen können problematisch sein für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS). Darüber hinaus können bestimmte Bewegungsarten ein Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein. Das Reduzieren oder vollständige Abschalten von Animationen basierend auf den Präferenzen des Benutzers kann auch Nutzern mit niedrigem Batteriestand oder leistungsschwachen Geräten zugutekommen.

Die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query ermöglicht es, Nutzern, die in den Betriebssystemeinstellungen eine Reduzierung von Bewegung aktiviert haben, eine Erfahrung mit weniger Animationen und Übergängen zu bieten. Es gibt zwei mögliche Werte:

- `no-preference`
  - : Zeigt an, dass der Benutzer dem System keine Präferenz mitgeteilt hat.
- `reduce`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche bevorzugt, die die Anzahl an Bewegungen oder Animationen minimiert, vorzugsweise bis zu dem Punkt, an dem alle nicht wesentliche Bewegungen entfernt sind.

### Beispiel

Dieses Beispiel hat eine störende Animation, es sei denn, Sie aktivieren die Funktion zur Reduzierung von Bewegungen in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely).

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

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was durch `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungsanimationen, einschließlich jener, die durch Benutzerinteraktion ausgelöst werden, deaktiviert werden, es sei denn, die Animation ist wesentlich für die Funktionalität oder die vermittelte Information (siehe [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): um Seitenstile basierend auf der Kontrastpräferenz des Benutzers anzupassen
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors)
- [Designing With Reduced Motion For Motion Sensitivities](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
