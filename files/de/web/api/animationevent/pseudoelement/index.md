---
title: "AnimationEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Web Animations")}}

Die schreibgeschützte Eigenschaft **`AnimationEvent.pseudoElement`** ist ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element ausgeführt wird, ist es ein leerer String: `''`.

## Wert

Ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Animationsbezogene CSS-Eigenschaften und At-Rules: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- Das [`AnimationEvent`](/de/docs/Web/API/AnimationEvent) Interface, zu dem es gehört.
