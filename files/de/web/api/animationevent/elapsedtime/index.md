---
title: "AnimationEvent: elapsedTime-Eigenschaft"
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die nur-lesbare Eigenschaft **`AnimationEvent.elapsedTime`** ist ein `float`, der die Zeit in Sekunden angibt, die die Animation bereits läuft, wenn dieses Ereignis ausgelöst wird, abzüglich der Zeit, in der die Animation pausiert war. Für ein {{domxref("Element/animationstart_event", "animationstart")}}-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}}, in welchem Fall das Ereignis mit `elapsedTime` als `(-1 * delay)` ausgelöst wird.

## Wert

Ein `float`, der die Zeit in Sekunden angibt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animationsbezogene CSS-Eigenschaften und At-Regeln: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
- Das zugehörige {{domxref("AnimationEvent")}} Interface.
