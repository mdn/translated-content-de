---
title: "AnimationEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die **`AnimationEvent.elapsedTime`** Eigenschaft ist ein schreibgeschütztes `float`, das angibt, wie lange die Animation in Sekunden ausgeführt wurde, als dieses Ereignis ausgelöst wurde, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war. Bei einem [`animationstart`](/de/docs/Web/API/Element/animationstart_event) Ereignis ist `elapsedTime` `0,0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime`, das `(-1 * Verzögerung)` enthält, ausgelöst wird.

## Wert

Ein `float`, der die Zeit in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- Das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Interface, zu dem es gehört.
