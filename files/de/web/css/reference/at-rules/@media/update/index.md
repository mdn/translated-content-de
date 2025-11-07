---
title: update
slug: Web/CSS/Reference/At-rules/@media/update
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`update`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie häufig (wenn überhaupt) das Ausgabegerät in der Lage ist, das Erscheinungsbild von Inhalten nach dem Rendern zu ändern.

## Syntax

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: Dokumente, die auf Papier gedruckt werden.
- `slow`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, aber das Ausgabegerät ist nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, um als reibungslose Animation wahrgenommen zu werden. Beispiele: E-Book-Reader oder stark leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, und das Ausgabegerät ist in seiner Geschwindigkeit nicht ungewöhnlich eingeschränkt, sodass regelmäßig aktualisierte Elemente wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden können. Beispiel: Computermonitore.

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
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
