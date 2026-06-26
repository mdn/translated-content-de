---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: abe2e9c88f9962da6a58f7ee4ad16e35a351b03e
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
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `animation` {{optional_inline}}
      - : Ein [`CSSTransition`](/de/docs/Web/API/CSSTransition), das die mit dem Ereignis verbundene Animation darstellt.
        Standardmäßig ist es `null`.
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der mit der Transition assoziierten CSS-Eigenschaft enthält.
        Standardmäßig ist es `""`.
    - `elapsedTime` {{optional_inline}}
      - : Eine Zahl, die die Laufzeit der Animation in Sekunden angibt,
        als dieses Ereignis ausgelöst wurde, ohne die Zeit, in der die Animation pausiert war.
        Für ein `"animationstart"` Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für {{cssxref("animation-delay")}},
        in diesem Fall wird das Ereignis mit `elapsedTime` ausgelöst, das `(-1 * delay)` enthält.
        Standardmäßig ist es `0.0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der mit `"::"` beginnt und den Namen des [Pseudo-Elements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation ausgeführt wird.
        Wenn die Animation nicht auf einem Pseudo-Element, sondern auf dem Element ausgeführt wird, ein leerer String: `""`.
        Standardmäßig ist es `""`.

### Rückgabewert

Ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
