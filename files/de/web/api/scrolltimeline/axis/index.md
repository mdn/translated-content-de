---
title: "ScrollTimeline: Eigenschaft axis"
short-title: axis
slug: Web/API/ScrollTimeline/axis
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

Die **`axis`** schreibgeschützte Eigenschaft der
{{domxref("ScrollTimeline")}} Schnittstelle gibt einen enumerierten Wert zurück, der die Scrollachse repräsentiert, die den Fortschritt der Zeitleiste steuert.

## Wert

Ein enumerierter Wert. Mögliche Werte sind:

- `"block"`
  - : Der Scrollbalken auf der Blockachse des Scrollcontainers, die Achse, die senkrecht zur Fließrichtung des Textes innerhalb einer Zeile verläuft. Bei horizontalen Schreibrichtungen, wie im Standardenglisch, entspricht dies `"y"`, während es bei vertikalen Schreibrichtungen `"x"` entspricht.
- `"inline"`
  - : Der Scrollbalken auf der Inlineachse des Scrollcontainers, die Achse, die parallel zur Fließrichtung des Textes in einer Zeile verläuft. Bei horizontalen Schreibrichtungen entspricht dies `"x"`, während es bei vertikalen Schreibrichtungen `"y"` entspricht.
- `"y"`
  - : Der Scrollbalken auf der vertikalen Achse des Scrollcontainers.
- `"x"`
  - : Der Scrollbalken auf der horizontalen Achse des Scrollcontainers.

## Beispiele

Siehe die Hauptseite von {{domxref("ScrollTimeline")}} für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
