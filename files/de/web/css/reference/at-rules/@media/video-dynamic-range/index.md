---
title: video-dynamic-range
slug: Web/CSS/Reference/At-rules/@media/video-dynamic-range
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die von der Videoebene des {{Glossary("user_agent", "User-Agents")}} und dem Ausgabegerät unterstützt werden.

Einige User-Agents, einschließlich vieler Fernseher, rendern Video und Grafik in zwei separaten Ebenen (bi-planar) mit unterschiedlichen Bildschirmeigenschaften. Das Merkmal `video-dynamic-range` wird verwendet, um die Eigenschaften der Videoebene zu testen.

## Syntax

Das Merkmal `video-dynamic-range` wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `standard`

  - : Dieser Wert passt auf jedes visuelle Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das `high` entspricht, wird auch dem Wert `standard` entsprechen.

- `high`
  - : Dieser Wert passt auf User-Agents und Ausgabegeräte, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Im Fall eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der Licht am wenigsten absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Methode, um Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
