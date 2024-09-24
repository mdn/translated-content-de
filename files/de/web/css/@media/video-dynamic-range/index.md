---
title: video-dynamic-range
slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom Videobereich des {{glossary("user agent")}} und dem Ausgabegerät unterstützt werden.

Einige User Agents, einschließlich vieler Fernseher, rendern Video und Grafiken auf zwei separaten Ebenen (Bi-Ebene) mit unterschiedlichen Bildschirmmerkmalen. Die `video-dynamic-range`-Funktion wird verwendet, um die Merkmale in der Videoebene zu testen.

## Syntax

Die `video-dynamic-range`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

- `standard`

  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch mit dem `standard`-Wert übereinstimmen.

- `high`
  - : Dieser Wert passt zu User Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt eines lichtemittierenden Geräts, wie z.B. eines LCD-Bildschirms, darstellen kann. Bei einem lichtreflektierenden Gerät, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Möglichkeit, Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User Agent ab.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
