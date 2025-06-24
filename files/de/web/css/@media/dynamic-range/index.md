---
title: dynamic-range
slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`dynamic-range`** [CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{Glossary("user_agent", "User Agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte haben hohe Dynamikbereichsfähigkeiten, die nicht immer "eingeschaltet" sind und aktiviert werden müssen (manchmal programmatisch, manchmal vom Benutzer, manchmal basierend auf dem Inhalt). Diese Medienfunktion testet nicht, ob die Dynamikbereichsfähigkeit aktiv ist; sie testet nur, ob das Gerät in der Lage ist, visuelle Inhalte mit hohem Dynamikbereich darzustellen.

## Syntax

Die `dynamic-range`-Funktion wird als ein Schlüsselwortwert angegeben, das aus der unten stehenden Liste ausgewählt wird.

- `standard`

  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User Agent oder ein Ausgabegerät, das den Wert `high` erfüllt, wird auch den Wert `standard` erfüllen.

- `high`
  - : Dieser Wert entspricht User Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und Farbtiefe größer als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät, wie etwa ein LCD-Bildschirm, produzieren kann. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System produzieren kann. Derzeit gibt es keine präzise Methode zur Messung von Spitzenhelligkeit und Kontrastverhältnis, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User Agent ab.

## Beispiele

```css
@media (dynamic-range: standard) {
  p {
    color: red;
  }
}

@media (dynamic-range: high) {
  p {
    color: green;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
