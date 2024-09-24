---
title: AnimationEffect
slug: Web/API/AnimationEffect
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ APIRef("Web Animations") }}

Das `AnimationEffect`-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) ist ein Interface, das Animationseffekte darstellt.

`AnimationEffect` ist ein abstraktes Interface und kann daher nicht direkt instanziiert werden. Es gibt jedoch konkrete Interfaces wie {{domxref("KeyframeEffect")}}, die davon erben. Instanzen dieser Interfaces können an {{domxref("Animation")}}-Objekte zum Abspielen übergeben werden und können auch von [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergängen](/de/docs/Web/CSS/CSS_transitions) verwendet werden.

## Instanzmethoden

- {{domxref("AnimationEffect.getTiming()")}}
  - : Gibt das Objekt zurück, das mit der Animation verbunden ist und alle Zeitwerte der Animation enthält.
- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : Gibt die berechneten Zeit-Eigenschaften für dieses `AnimationEffect` zurück.
- {{domxref("AnimationEffect.updateTiming()")}}
  - : Aktualisiert die angegebenen Zeit-Eigenschaften dieses `AnimationEffect`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.effect")}}
