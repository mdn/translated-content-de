---
title: "ScrollTimeline: axis-Eigenschaft"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

Die **`axis`** schreibgeschützte Eigenschaft des [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Interfaces gibt einen enumerierten Wert zurück, der die Scrollachse repräsentiert, die den Fortschritt der Zeitleiste steuert.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"block"`
  - : Der Scrollbalken auf der Block-Achse des Scroll-Containers, welche die Achse in Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie im Standard-Englischen, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
- `"inline"`
  - : Der Scrollbalken auf der Inline-Achse des Scroll-Containers, welche die Achse in Richtung parallel zum Textfluss in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
- `"y"`
  - : Der Scrollbalken auf der vertikalen Achse des Scroll-Containers.
- `"x"`
  - : Der Scrollbalken auf der horizontalen Achse des Scroll-Containers.

## Beispiele

Siehe die Hauptseite von [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
