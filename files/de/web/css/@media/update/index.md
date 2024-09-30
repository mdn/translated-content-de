---
title: update
slug: Web/CSS/@media/update
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`update`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu prüfen, wie häufig (wenn überhaupt) das Ausgabegerät das Aussehen von Inhalten nach der Wiedergabe ändern kann.

```css
@media (update: < none | slow | fast >) {
  /* styles to apply if the update frequency of the output device is a match */
}
```

## Syntax

Die `update`-Eigenschaft wird als ein einzelner Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `none`
  - : Nach der Wiedergabe kann das Layout nicht mehr aktualisiert werden. Beispiel: auf Papier gedruckte Dokumente.
- `slow`
  - : Das Layout kann sich dynamisch gemäß den üblichen CSS-Regeln ändern, aber das Ausgabegerät kann die Änderungen nicht schnell genug rendern oder anzeigen, um sie als flüssige Animation wahrzunehmen. Beispiele: E-Book-Reader oder extrem leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich dynamisch gemäß den üblichen CSS-Regeln ändern, und das Ausgabegerät ist nicht ungewöhnlich in der Geschwindigkeit eingeschränkt, sodass regelmäßig aktualisierte Dinge wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden können. Beispiel: Computerbildschirme.

## Beispiele

### HTML

```html
<p>
  If this text animates for you, your browser supports `update` and you are
  using a fast-updating device.
</p>
```

### CSS

```css
@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
