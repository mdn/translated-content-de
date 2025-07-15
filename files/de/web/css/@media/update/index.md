---
title: update
slug: Web/CSS/@media/update
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`update`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie häufig (wenn überhaupt) das Ausgabegerät in der Lage ist, das Aussehen von Inhalten nach dem Rendern zu ändern.

## Syntax

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: Dokumente, die auf Papier gedruckt werden.
- `slow`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, aber das Ausgabegerät ist nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, um als flüssige Animation wahrgenommen zu werden. Beispiele: E-Book-Reader oder stark leistungseingeschränkte Geräte.
- `fast`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, und das Ausgabegerät ist nicht ungewöhnlich in der Geschwindigkeit eingeschränkt, sodass regelmäßig aktualisierte Dinge wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden können. Beispiel: Computerbildschirme.

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
