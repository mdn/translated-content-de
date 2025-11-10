---
title: update
slug: Web/CSS/Reference/At-rules/@media/update
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`update`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, wie häufig (oder ob überhaupt) das Ausgabegerät in der Lage ist, das Erscheinungsbild von Inhalten nach dem Rendern zu ändern.

## Syntax

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: Dokumente, die auf Papier gedruckt werden.
- `slow`
  - : Das Layout kann sich gemäß den üblichen Regeln von CSS dynamisch ändern, jedoch ist das Ausgabegerät nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, damit sie als fließende Animation wahrgenommen werden. Beispiele: E-Book-Reader oder stark leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich gemäß den üblichen Regeln von CSS dynamisch ändern, und das Ausgabegerät ist nicht ungewöhnlich in der Geschwindigkeit eingeschränkt, sodass regelmäßig aktualisierende Elemente wie [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verwendet werden können. Beispiel: Computerbildschirme.

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
