---
title: Media Queries für Barrierefreiheit verwenden
short-title: Für Barrierefreiheit
slug: Web/CSS/Guides/Media_queries/Using_for_accessibility
l10n:
  sourceCommit: 5d20ba73fde9de229a91dbdabe3be20966e95a65
---

[**CSS Media Queries**](/de/docs/Web/CSS/Guides/Media_queries) können dazu beitragen, dass Menschen mit Behinderungen Ihre Website besser nutzen können.

## Reduzierte Bewegung

Blinkende und aufblitzende Animationen können für Menschen mit kognitiven Beeinträchtigungen, etwa einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS), problematisch sein. Bestimmte Arten von Bewegung können außerdem vestibuläre Störungen, Epilepsie, Migräne und eine erhöhte Empfindlichkeit bei schwachem Licht auslösen. Animationen zu reduzieren oder entsprechend den Einstellungen der Nutzenden vollständig abzuschalten, kann auch Menschen mit geringem Akkustand oder leistungsschwachen Geräten zugutekommen.

Mit der Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) können Sie Nutzenden, die in den Barrierefreiheitseinstellungen ihres Betriebssystems reduzierte Bewegung ausgewählt haben, eine Darstellung mit weniger Animationen und Übergängen anbieten. Sie hat zwei mögliche Werte:

- `no-preference`
  - : Gibt an, dass die nutzende Person dem System keine Präferenz mitgeteilt hat.
- `reduce`
  - : Gibt an, dass die nutzende Person dem System mitgeteilt hat, dass sie eine Benutzeroberfläche mit möglichst wenig Bewegung oder Animation bevorzugt. Idealerweise werden dabei alle nicht notwendigen Bewegungen entfernt.

### Beispiel

Dieses Beispiel enthält eine störende Animation, sofern Sie „Bewegung reduzieren“ nicht in [Ihren Barrierefreiheitseinstellungen](/de/docs/Web/Accessibility/Guides/Browsing_safely) aktivieren.

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

Der Wert von `prefers-reduced-motion` lautet `reduce`, nicht „none“. Diese Einstellung bedeutet nicht, dass alle Animationen entfernt werden müssen, was mit `* {animation: none !important;}` möglich wäre. Vielmehr erwarten Nutzende, dass Bewegungsanimationen – auch solche, die durch Interaktionen ausgelöst werden – deaktiviert sind, sofern sie für die Funktionalität oder die Vermittlung von Informationen nicht wesentlich sind (siehe [WCAG: Animationen durch Interaktionen](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html)).

## Siehe auch

- [`prefers-contrast`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast): zum Anpassen des Seitenstils an die Kontrastpräferenz der Nutzenden
- [`prefers-reduced-transparency`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency)
- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [`inverted-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/inverted-colors)
- [Gestaltung mit reduzierter Bewegung für Menschen mit Bewegungsempfindlichkeit](https://www.smashingmagazine.com/2020/09/design-reduced-motion-sensitivities/)
