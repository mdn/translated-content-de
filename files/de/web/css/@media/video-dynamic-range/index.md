---
title: video-dynamic-range
slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die von der Videofläche des {{Glossary("user_agent", "User-Agents")}} und dem Ausgabegerät unterstützt werden.

Einige User-Agents, darunter viele Fernseher, rendern Video und Grafik in zwei separaten Ebenen (Bi-Plane) mit unterschiedlichen Bildschirmmerkmalen. Das `video-dynamic-range`-Feature wird verwendet, um die Merkmale in der Videofläche zu testen.

## Syntax

Das `video-dynamic-range`-Feature wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `standard`
  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch den `standard`-Wert erfüllen.

- `high`
  - : Dieser Wert passt zu User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, ein hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein Licht emittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Im Fall eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System produzieren kann. Derzeit gibt es keine genaue Methode zur Messung von Spitzenhelligkeit und Kontrastverhältnis, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
