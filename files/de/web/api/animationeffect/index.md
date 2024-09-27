---
title: AnimationEffect
slug: Web/API/AnimationEffect
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ APIRef("Web Animations") }}

Das `AnimationEffect`-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) ist ein Interface, das Animationseffekte darstellt.

`AnimationEffect` ist ein abstraktes Interface und kann daher nicht direkt instanziiert werden. Konkrete Interfaces wie [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) erben jedoch von ihm, und Instanzen dieser Interfaces können an [`Animation`](/de/docs/Web/API/Animation)-Objekte übergeben werden, um abgespielt zu werden. Sie können auch von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden.

## Instanzmethoden

- [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming)
  - : Gibt das Objekt zurück, das mit der Animation verknüpft ist und alle Zeitwerte der Animation enthält.
- [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming)
  - : Gibt die berechneten Timing-Eigenschaften für dieses `AnimationEffect` zurück.
- [`AnimationEffect.updateTiming()`](/de/docs/Web/API/AnimationEffect/updateTiming)
  - : Aktualisiert die angegebenen Timing-Eigenschaften dieses `AnimationEffect`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
