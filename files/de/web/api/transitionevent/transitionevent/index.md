---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSSOM")}}

Der **`TransitionEvent()`** Konstruktor gibt ein neues {{domxref("TransitionEvent")}} Objekt zurück, das ein Ereignis im Zusammenhang mit einer Transition darstellt.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
        Standardmäßig `""`.
    - `elapsedTime` {{optional_inline}}
      - : Eine Zahl, die die Zeit angibt, die die Animation bereits läuft, in Sekunden, wenn dieses Ereignis ausgelöst wird, ohne die Zeit, in der die Animation pausiert war.
        Für ein `"animationstart"` Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für [`animation-delay`](/de/docs/Web/CSS/animation-delay),
        in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, die `(-1 * delay)` enthält.
        Standardmäßig `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der standardmäßig mit `"::"` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Pseudo-elements) enthält, auf dem die Animation läuft.
        Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element läuft, ein leerer String: `""`.
        Standardmäßig `""`.

### Rückgabewert

Ein neues {{domxref("TransitionEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.