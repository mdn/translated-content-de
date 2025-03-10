---
title: Verwenden von Media Queries für Barrierefreiheit
slug: Web/CSS/CSS_media_queries/Using_media_queries_for_accessibility
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

[**CSS-Media-Queries**](/de/docs/Web/CSS/CSS_media_queries) können genutzt werden, um Nutzern mit Behinderungen ein besseres Erlebnis auf Ihrer Website zu bieten.

## Reduzierte Bewegung

Blinkende und blitzende Animationen können problematisch für Menschen mit kognitiven Einschränkungen wie der Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Außerdem können bestimmte Bewegungsarten Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein. Das Reduzieren oder vollständige Ausschalten von Animationen basierend auf den Präferenzen des Nutzers kann auch Nutzern mit geringem Akkustand oder Low-End-Geräten zugutekommen.

Die [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media Query ermöglicht es, Nutzererfahrungen mit weniger Animationen und Übergängen zu bieten, für diejenigen, die in ihren Betriebssystemeinstellungen angegeben haben, die Bewegung zu reduzieren. Es gibt zwei mögliche Werte:

- `no-preference`
  - : Zeigt an, dass der Benutzer keine Präferenz für das System angegeben hat.
- `reduce`
  - : Zeigt an, dass der Benutzer dem System mitgeteilt hat, dass er eine Benutzeroberfläche bevorzugt, die die Menge der Bewegung oder Animation minimiert, vorzugsweise so weit, dass alle nicht wesentlichen Bewegungen entfernt werden.

### Beispiel

Dieses Beispiel enthält eine lästige Animation, es sei denn, Sie aktivieren die Funktion "Reduce Motion" in [ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Guides/Browsing_safely).

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

Der Wert von `prefers-reduced-motion` ist `reduce`, nicht "none". Diese Präferenz bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` erreicht werden könnte. Vielmehr erwarten Benutzer, dass Bewegungsanimationen, einschließlich derjenigen, die durch Benutzerinteraktion ausgelöst werden, deaktiviert werden, es sei denn, die Animation ist essentiell für die Funktionalität oder die vermittelten Informationen (siehe [WCAG: Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast): um Seitenstile basierend auf den Kontrastpräferenzen des Nutzers anzupassen
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors)
- [Gestalten mit reduzierter Bewegung für Bewegungsempfindlichkeiten](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
