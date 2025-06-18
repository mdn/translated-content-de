---
title: "ScrollTimeline: axis Eigenschaft"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Animations")}}

Die **`axis`** Schreibgeschützte-Eigenschaft des [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Interfaces gibt einen enumerierten Wert zurück, der die Scrollachse repräsentiert, welche den Fortschritt der Timeline steuert.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"block"`
  - : Der Scrollbalken auf der Block-Achse des Scroll-Containers, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Bei horizontalen Schreibrichtungen wie im Englischen entspricht dies `"y"`, während es bei vertikalen Schreibrichtungen `"x"` ist.
- `"inline"`
  - : Der Scrollbalken auf der Inline-Achse des Scroll-Containers, welche die Achse in der Richtung parallel zum Textfluss in einer Zeile ist. Bei horizontalen Schreibrichtungen entspricht dies `"x"`, während es bei vertikalen Schreibrichtungen `"y"` ist.
- `"y"`
  - : Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
- `"x"`
  - : Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

## Beispiele

Sehen Sie die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
