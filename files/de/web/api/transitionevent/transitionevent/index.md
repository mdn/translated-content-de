---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("CSSOM")}}

Der **`TransitionEvent()`** Konstruktor gibt ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt zurück, das ein Ereignis in Bezug auf eine Transition darstellt.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen ihn auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
        Standardmäßig ist es `""`.
    - `elapsedTime` {{optional_inline}}
      - : Ein Wert, der die Zeit angibt, die die Animation bereits läuft,
        in Sekunden, wenn dieses Ereignis ausgelöst wird, ohne die Zeit einzuschließen, in der die Animation pausiert war.
        Bei einem `"animationstart"`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es wurde ein negativer Wert für [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay) angegeben,
        in welchem Fall das Ereignis mit `elapsedTime`, die `(-1 * delay)` enthält, ausgelöst wird.
        Standardmäßig ist es `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der standardmäßig `"::"` ist und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft.
        Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, ein leerer String: `""`.
        Standardmäßig ist es `""`.

### Rückgabewert

Ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
