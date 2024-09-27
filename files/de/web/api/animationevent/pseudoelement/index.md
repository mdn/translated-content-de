---
title: "AnimationEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

Die schreibgeschützte Eigenschaft **`AnimationEvent.pseudoElement`** ist ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element ausgeführt wird, ist der String leer: `''`.

## Wert

Ein String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- CSS-Eigenschaften und At-Regeln, die mit Animationen zu tun haben: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- Die [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)-Schnittstelle, zu der es gehört.
