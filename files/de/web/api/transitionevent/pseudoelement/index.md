---
title: "TransitionEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{ apiref("CSSOM") }}

Die schreibgeschützte Eigenschaft **`TransitionEvent.pseudoElement`** ist ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird. Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element selbst ausgeführt wird, ist der String leer: `""`.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
