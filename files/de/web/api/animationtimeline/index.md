---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("Web Animations") }}

Das `AnimationTimeline`-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert die Zeitleiste einer Animation. Dieses Interface existiert, um Funktionen von Zeitleisten zu definieren, die von anderen Zeitleistentypen geerbt werden:

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline)
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)

## Instanzeigenschaften

- [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) {{ReadOnlyInline}}
  - : Gibt den Zeitwert in Millisekunden für diese Zeitleiste zurück oder `null`, wenn diese Zeitleiste inaktiv ist.
- [`duration`](/de/docs/Web/API/AnimationTimeline/duration) {{ReadOnlyInline}}
  - : Gibt den Höchstwert für diese Zeitleiste zurück oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline), [`ViewTimeline`](/de/docs/Web/API/ViewTimeline)
- [`Document.timeline`](/de/docs/Web/API/Document/timeline)
- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
