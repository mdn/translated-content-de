---
title: "`video-dynamic-range` CSS-Media-Feature"
short-title: video-dynamic-range
slug: Web/CSS/Reference/At-rules/@media/video-dynamic-range
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die von der Videoebene des {{Glossary("user_agent", "User-Agents")}} und dem Ausgabegerät unterstützt werden.

Einige User-Agents, einschließlich vieler Fernseher, rendern Video und Grafiken in zwei separaten Ebenen (Bi-Plane) mit unterschiedlichen Bildschirmmerkmalen. Die `video-dynamic-range`-Funktion wird verwendet, um die Merkmale in der Videoebene zu testen.

## Syntax

Die `video-dynamic-range`-Funktion wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `standard`
  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das `high` entspricht, wird auch dem `standard`-Wert entsprechen.

- `high`
  - : Dieser Wert entspricht User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, ein hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt eines lichtemittierenden Geräts, wie z.B. ein LCD-Bildschirm, sein kann. Im Fall eines lichtreflektierenden Geräts, wie z.B. Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der mindestens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine genaue Möglichkeit, Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zur Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
