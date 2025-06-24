---
title: video-dynamic-range
slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/@media#media_features) kann dazu verwendet werden, die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu prüfen, die durch die Videoebene des {{Glossary("user_agent", "User-Agent")}} und das Ausgabegerät unterstützt werden.

Einige User-Agents, einschließlich vieler Fernseher, rendern Video und Grafik auf zwei separaten Ebenen (Bi-Ebene) mit unterschiedlichen Bildschirmeigenschaften. Das Merkmal `video-dynamic-range` wird verwendet, um die Eigenschaften der Videoebene zu testen.

## Syntax

Das Merkmal `video-dynamic-range` wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `standard`

  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder Ausgabegerät, das `high` entspricht, passt auch zum Wert `standard`.

- `high`
  - : Dieser Wert entspricht User-Agents und Ausgabegeräten, die eine hohe Spitzenhelligkeit, ein hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät, wie ein LCD-Bildschirm, produzieren kann. Im Fall eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der mindestens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keinen genauen Weg, Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
