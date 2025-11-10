---
title: "TransitionEvent: pseudoElement-Eigenschaft"
short-title: pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ apiref("CSSOM") }}

Die schreibgeschützte Eigenschaft **`TransitionEvent.pseudoElement`** ist ein String, der mit `'::'` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft. Wenn der Übergang nicht auf einem Pseudo-Element, sondern auf dem Element selbst stattfindet, ist der String leer: `""`.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
