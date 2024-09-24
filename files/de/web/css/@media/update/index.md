---
title: aktualisieren
slug: Web/CSS/@media/update
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`update`**- [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, wie häufig (falls überhaupt) das Ausgabegerät in der Lage ist, das Erscheinungsbild von Inhalten nach der Darstellung zu ändern.

```css
@media (update: < none | slow | fast >) {
  /* Stile, die angewendet werden, wenn die Aktualisierungsfrequenz des Ausgabegeräts übereinstimmt */
}
```

## Syntax

Die `update`-Funktion wird als ein einzelner Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `none`
  - : Sobald es gerendert wurde, kann das Layout nicht mehr aktualisiert werden. Beispiel: Dokumente, die auf Papier gedruckt werden.
- `slow`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, aber das Ausgabegerät ist nicht in der Lage, Änderungen schnell genug zu rendern oder anzuzeigen, damit sie als flüssige Animation wahrgenommen werden. Beispiele: E-Book-Reader oder stark leistungsschwache Geräte.
- `fast`
  - : Das Layout kann sich dynamisch gemäß den üblichen Regeln von CSS ändern, und das Ausgabegerät ist in seiner Geschwindigkeit nicht ungewöhnlich eingeschränkt, sodass regelmäßig aktualisierte Dinge wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet werden können. Beispiel: Computerbildschirme.

## Beispiele

### HTML

```html
<p>
  Wenn dieser Text für Sie animiert wird, unterstützt Ihr Browser `update` und Sie verwenden ein Gerät mit schneller Aktualisierung.
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
