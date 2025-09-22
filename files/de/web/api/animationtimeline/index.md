---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
l10n:
  sourceCommit: b7536cd198df32cd28c01d407a1d8b4dbceed7d2
---

{{ APIRef("Web Animations") }}

Das `AnimationTimeline`-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert die Zeitleiste einer Animation. Dieses Interface existiert, um Zeitleistenfunktionen zu definieren, die von anderen Zeitleistentypen geerbt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Instanz-Eigenschaften

- [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) {{ReadOnlyInline}}
  - : Gibt den Zeitwert in Millisekunden für diese Zeitleiste oder `null` zurück, wenn diese Zeitleiste inaktiv ist.
- [`duration`](/de/docs/Web/API/AnimationTimeline/duration) {{ReadOnlyInline}}
  - : Gibt den Maximalwert für diese Zeitleiste oder `null` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`Document.timeline`](/de/docs/Web/API/Document/timeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/CSS_scroll-driven_animations)
