---
title: update
slug: Web/CSS/@media/update
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Das **`update`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie oft (wenn überhaupt) das Ausgabegerät in der Lage ist, das Erscheinungsbild von Inhalten nach dem Rendering zu ändern.

## Syntax

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: auf Papier gedruckte Dokumente.
- `slow`
  - : Das Layout kann sich dynamisch gemäß den üblichen CSS-Regeln ändern, aber das Ausgabegerät ist nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, um als flüssige Animation wahrgenommen zu werden. Beispiele: E-Book-Lesegeräte oder extrem leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich dynamisch gemäß den üblichen CSS-Regeln ändern, und das Ausgabegerät ist in der Geschwindigkeit nicht außergewöhnlich eingeschränkt, sodass regelmäßig aktualisierte Dinge wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden können. Beispiel: Computermonitore.

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
