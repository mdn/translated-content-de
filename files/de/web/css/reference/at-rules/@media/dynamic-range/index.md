---
title: "`dynamic-range` CSS Medienmerkmal"
short-title: dynamic-range
slug: Web/CSS/Reference/At-rules/@media/dynamic-range
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte verfügen über Hochdynamikbereich-Fähigkeiten, die nicht immer "eingeschaltet" sind und aktiviert werden müssen (manchmal programmgesteuert, manchmal durch den Benutzer, manchmal basierend auf dem Inhalt). Dieses Medienmerkmal testet nicht, ob die Fähigkeit des Hochdynamikbereichs aktiv ist; es testet nur, ob das Gerät in der Lage ist, Hochdynamikbereichsvisualisierungen zu erzeugen.

## Syntax

Das `dynamic-range` Merkmal wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `standard`
  - : Dieser Wert stimmt mit jedem visuellen Gerät überein und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch mit dem `standard` Wert übereinstimmen.

- `high`
  - : Dieser Wert stimmt mit User-Agents und Ausgabegeräten überein, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe größer als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät wie ein LCD-Bildschirm erzeugen kann. Im Fall eines lichtreflektierenden Geräts wie Papier oder E-Ink bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keinen genauen Weg, um die Spitzenhelligkeit und das Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
