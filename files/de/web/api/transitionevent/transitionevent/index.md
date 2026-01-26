---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSSOM")}}

Der **`TransitionEvent()`** Konstruktor gibt ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt zurück, das ein Ereignis im Zusammenhang mit einer Transition darstellt.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv, und Browser setzen ihn auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
        Standardmäßig `""`.
    - `elapsedTime` {{optional_inline}}
      - : Eine Zahl, die angibt, wie lange die Animation bereits läuft,
        in Sekunden, wenn dieses Ereignis ausgelöst wird, ohne die Zeit einzuschließen, in der die Animation pausiert war.
        Bei einem `"animationstart"`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst.
        Standardwert ist `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der standardmäßig mit `"::"` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft.
        Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element selbst läuft, ist es ein leerer String: `""`.
        Standardwert ist `""`.

### Rückgabewert

Ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/Guides/Transitions/Using)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
