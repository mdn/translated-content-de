---
title: "TransitionEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ apiref("CSSOM") }}

Die **`TransitionEvent.pseudoElement`** schreibgeschützte Eigenschaft ist ein
String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird.
Wenn die Transition nicht auf einem Pseudo-Element, sondern auf dem Element selbst ausgeführt wird, enthält sie einen leeren String: `''`.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
