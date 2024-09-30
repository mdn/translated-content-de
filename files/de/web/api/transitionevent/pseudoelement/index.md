---
title: "TransitionEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{ apiref("CSSOM") }}

Die schreibgeschützte Eigenschaft **`TransitionEvent.pseudoElement`** ist ein
String, der mit `'::'` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn die Transition nicht auf einem Pseudoelement, sondern auf dem Element selbst läuft, ist der String leer: `''`.

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
