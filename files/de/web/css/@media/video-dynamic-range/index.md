---
title: video-dynamic-range
slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Das **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die von der Videoebene des [User-Agents](/de/docs/Glossary/user_agent) und dem Ausgabegerät unterstützt werden.

Einige User-Agents, einschließlich vieler Fernseher, rendern Video und Grafik in zwei separaten Ebenen (biplane) mit unterschiedlichen Bildschirmeigenschaften. Das `video-dynamic-range` Merkmal wird verwendet, um die Eigenschaften in der Videoebene zu testen.

## Syntax

Das `video-dynamic-range` Merkmal wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste gewählt wird.

- `standard`

  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder Ausgabegerät, das `high` entspricht, wird auch dem `standard` Wert entsprechen.

- `high`
  - : Dieser Wert passt zu User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt, den ein lichtemittierendes Gerät wie ein LCD-Bildschirm erzeugen kann, ist. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der am wenigsten Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Möglichkeit, Spitzenhelligkeit und Kontrastverhältnis zu messen. Die Entscheidung darüber, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
