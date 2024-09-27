---
title: "ScrollTimeline: axis-Eigenschaft"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

Die schreibgeschützte **`axis`**-Eigenschaft der [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)-Schnittstelle gibt einen Aufzählungswert zurück, der die Scroll-Achse darstellt, die den Fortschritt der Timeline bestimmt.

## Wert

Ein Aufzählungswert. Mögliche Werte sind:

- `"block"`
  - : Die Scrollleiste auf der Block-Achse des Scroll-Containers, die die Achse in der Richtung senkrecht zum Fluss des Textes innerhalb einer Zeile ist. Für horizontale Schreibrichtungen, wie Standard-Englisch, ist dies dasselbe wie `"y"`, während es für vertikale Schreibrichtungen dasselbe wie `"x"` ist.
- `"inline"`
  - : Die Scrollleiste auf der Inline-Achse des Scroll-Containers, die die Achse in der Richtung parallel zum Fluss des Textes in einer Zeile ist. Für horizontale Schreibrichtungen ist dies dasselbe wie `"x"`, während es für vertikale Schreibrichtungen dasselbe wie `"y"` ist.
- `"y"`
  - : Die Scrollleiste auf der vertikalen Achse des Scroll-Containers.
- `"x"`
  - : Die Scrollleiste auf der horizontalen Achse des Scroll-Containers.

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
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
