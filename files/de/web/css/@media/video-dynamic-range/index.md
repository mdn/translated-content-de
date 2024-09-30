---
title: video-dynamic-range
slug: Web/CSS/@media/video-dynamic-range
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`video-dynamic-range`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe zu testen, die von der Videoebene des [User Agents](/de/docs/Glossary/user_agent) und dem Ausgabegerät unterstützt werden.

Einige User Agents, einschließlich vieler Fernseher, rendern Video und Grafik in zwei separaten Ebenen (Zweiebenen-Darstellung) mit unterschiedlichen Bildschirmeigenschaften. Die `video-dynamic-range`-Funktion wird verwendet, um die Eigenschaften in der Videoebene zu testen.

## Syntax

Das `video-dynamic-range`-Feature wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `standard`

  - : Dieser Wert passt zu jedem visuellen Gerät und schließt Geräte ohne visuelle Fähigkeiten aus. Ein User Agent oder ein Ausgabegerät, das `high` entspricht, wird auch dem Wert `standard` entsprechen.

- `high`
  - : Dieser Wert entspricht User Agents und Ausgabegeräten, die hohe Spitzenhelligkeit, hohes Kontrastverhältnis und eine Farbtiefe größer als 24 Bit oder 8 Bit pro Farbkomponente von RGB unterstützen. **Spitzenhelligkeit** bezieht sich darauf, wie hell der hellste Punkt ist, den ein lichtemittierendes Gerät, wie ein LCD-Bildschirm, erzeugen kann. Im Falle eines lichtreflektierenden Geräts, wie Papier oder E-Ink, bezieht sich die Spitzenhelligkeit auf den Punkt, der mindestens Licht absorbiert. **Kontrastverhältnis** bezieht sich auf das Verhältnis der Leuchtdichte der hellsten Farbe zu der der dunkelsten Farbe, die das System erzeugen kann. Derzeit gibt es keine präzise Methode zur Messung der Spitzenhelligkeit und des Kontrastverhältnisses, und die Bestimmung dessen, was als hohe Spitzenhelligkeit und hohes Kontrastverhältnis gilt, hängt vom User Agent ab.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
