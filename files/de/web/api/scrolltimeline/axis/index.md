---
title: "ScrollTimeline: axis-Eigenschaft"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die **`axis`**-Eigenschaft der [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Schnittstelle gibt einen enumerierten Wert zurück, der die Scrollachse darstellt, die den Fortschritt der Zeitleiste antreibt.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"block"`
  - : Der Scrollbalken auf der Block-Achse des Scroll-Containers, welche die Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile darstellt. Für horizontale Schreibmodi, wie z.B. Standard-Englisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibmodi dasselbe wie `"x"` ist.
- `"inline"`
  - : Der Scrollbalken auf der Inline-Achse des Scroll-Containers, welche die Achse in Richtung parallel zum Textfluss innerhalb einer Zeile darstellt. Für horizontale Schreibmodi ist dies dasselbe wie `"x"`, während es für vertikale Schreibmodi dasselbe wie `"y"` ist.
- `"y"`
  - : Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
- `"x"`
  - : Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

## Beispiele

Sehen Sie sich die Hauptseite der [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-basierte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
