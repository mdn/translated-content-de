---
title: "`update` CSS-Media-Feature"
short-title: update
slug: Web/CSS/Reference/At-rules/@media/update
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`update`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie oft (wenn überhaupt) das Ausgabegerät in der Lage ist, das Erscheinungsbild von Inhalten nach dem Rendern zu ändern.

## Syntax

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: auf Papier gedruckte Dokumente.
- `slow`
  - : Das Layout kann sich gemäß den üblichen Regeln von CSS dynamisch ändern, aber das Ausgabegerät ist nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, um als flüssige Animation wahrgenommen zu werden. Beispiele: E-Book-Reader oder extrem leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich gemäß den üblichen Regeln von CSS dynamisch ändern, und das Ausgabegerät ist in der Geschwindigkeit nicht ungewöhnlich eingeschränkt, sodass regelmäßig aktualisierende Dinge wie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verwendet werden können. Beispiel: Computermonitore.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
