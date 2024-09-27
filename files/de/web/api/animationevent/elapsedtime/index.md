---
title: "AnimationEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die schreibgeschützte Eigenschaft **`AnimationEvent.elapsedTime`** ist ein
`float`, der die Zeitdauer in Sekunden angibt, die die Animation gelaufen ist, als dieses Ereignis ausgelöst wurde, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war. Bei einem [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, das `(-1 * delay)` enthält.

## Wert

Ein `float`, der die Zeitdauer in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- Die [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Schnittstelle, zu der es gehört.
