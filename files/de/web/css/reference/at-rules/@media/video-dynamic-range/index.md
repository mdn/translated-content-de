---
title: video-dynamic-range
slug: Web/CSS/Reference/At-rules/@media/video-dynamic-range
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die vom Videobereich des {{Glossary("user_agent", "User-Agent")}} und dem Ausgabegerät unterstützt werden.

Einige User-Agents, einschließlich vieler Fernseher, rendieren Video und Grafik in zwei separaten Ebenen (bi-plane) mit unterschiedlichen Bildschirmeigenschaften. Die Funktion `video-dynamic-range` wird verwendet, um die Eigenschaften im Videobereich zu testen.

## Syntax

Die Funktion `video-dynamic-range` wird als Schlüsselwortwert angegeben, der aus der Liste unten ausgewählt wird.

- `standard`
  - : Dieser Wert entspricht jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User-Agent oder ein Ausgabegerät, das mit `high` übereinstimmt, wird auch mit dem Wert `standard` übereinstimmen.

- `high`
  - : Dieser Wert entspricht User-Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe von mehr als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein Licht emittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Im Falle eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der zumindest Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zur dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine genaue Möglichkeit, Spitzenhelligkeit und Kontrastverhältnis zu messen, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis zählt, hängt vom User-Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
