---
title: "AnimationEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die schreibgeschützte Eigenschaft **`AnimationEvent.elapsedTime`** ist ein `float`, der die Zeit in Sekunden angibt, wie lange die Animation gelaufen ist, als dieses Ereignis ausgelöst wurde, abzüglich der Zeit, in der die Animation pausiert war. Bei einem [`animationstart`](/de/docs/Web/API/Element/animationstart_event)-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, das `(-1 * Verzögerung)` enthält.

## Wert

Ein `float`, der die Zeit in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animation-bezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- Die [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Schnittstelle, zu der es gehört.
