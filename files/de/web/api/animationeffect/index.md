---
title: AnimationEffect
slug: Web/API/AnimationEffect
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("Web Animations") }}

Das `AnimationEffect`-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) ist ein Interface, das Animationseffekte repräsentiert.

`AnimationEffect` ist ein abstraktes Interface und kann daher nicht direkt instanziiert werden. Dennoch erben konkrete Interfaces wie [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect) von ihm, und Instanzen dieser Interfaces können an [`Animation`](/de/docs/Web/API/Animation)-Objekte zum Abspielen übergeben werden. Sie können auch von [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) und [Transitionen](/de/docs/Web/CSS/Guides/Transitions) verwendet werden.

## Instanzmethoden

- [`AnimationEffect.getTiming()`](/de/docs/Web/API/AnimationEffect/getTiming)
  - : Gibt das mit der Animation verknüpfte Objekt zurück, das alle Zeitwerte der Animation enthält.
- [`AnimationEffect.getComputedTiming()`](/de/docs/Web/API/AnimationEffect/getComputedTiming)
  - : Gibt die berechneten Zeiteigenschaften für dieses `AnimationEffect` zurück.
- [`AnimationEffect.updateTiming()`](/de/docs/Web/API/AnimationEffect/updateTiming)
  - : Aktualisiert die angegebenen Zeiteigenschaften dieses `AnimationEffect`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation.effect`](/de/docs/Web/API/Animation/effect)
