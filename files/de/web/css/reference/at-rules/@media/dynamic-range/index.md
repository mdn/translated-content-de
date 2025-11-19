---
title: dynamic-range
slug: Web/CSS/Reference/At-rules/@media/dynamic-range
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte haben Fähigkeiten für hohen Dynamikbereich, die nicht immer „eingeschaltet“ und manchmal aktiviert werden müssen (manchmal programmgesteuert, manchmal durch den Benutzer, manchmal basierend auf dem Inhalt). Dieses Media-Feature testet nicht, ob die Fähigkeit für hohen Dynamikbereich aktiv ist; es testet nur, ob das Gerät in der Lage ist, visuelle Inhalte mit hohem Dynamikbereich darzustellen.

## Syntax

Das `dynamic-range` Feature wird als Schlüsselwortwert angegeben, der aus der nachstehenden Liste ausgewählt wird.

- `standard`
  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das zu `high` passt, wird auch den `standard`-Wert erfüllen.

- `high`
  - : Dieser Wert passt zu User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt eines lichtemittierenden Geräts, wie z. B. eines LCD-Bildschirms, sein kann. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der mindestens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine genaue Methode zur Messung von Spitzenhelligkeit und Kontrastverhältnis, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

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

- [Verwenden von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
