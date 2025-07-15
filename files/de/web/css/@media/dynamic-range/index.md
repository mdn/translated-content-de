---
title: dynamic-range
slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt werden.

> [!NOTE]
> Einige Geräte haben eine hohe Dynamikumfangsfähigkeit, die nicht immer aktiv ist und aktiviert werden muss (manchmal programmatisch, manchmal durch den Benutzer, manchmal basierend auf dem Inhalt). Diese Media-Funktion testet nicht, ob die Dynamikumfangsfähigkeit aktiv ist; sie testet nur, ob das Gerät in der Lage ist, visuelle Inhalte mit hohem Dynamikumfang darzustellen.

## Syntax

Die `dynamic-range`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wurde.

- `standard`
  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, stimmt auch mit dem `standard`-Wert überein.

- `high`
  - : Dieser Wert entspricht User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt, den ein Licht emittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann, ist. Im Fall eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der wenigstens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Methode, um die Spitzenhelligkeit und das Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
