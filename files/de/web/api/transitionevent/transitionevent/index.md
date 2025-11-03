---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{APIRef("CSSOM")}}

Der **`TransitionEvent()`** Konstruktor gibt ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt zurück, das ein Ereignis im Zusammenhang mit einer Transition darstellt.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
        Standardmäßig ist er `""`.
    - `elapsedTime` {{optional_inline}}
      - : Eine Zahl, die die Menge der Zeit angibt, die die Animation gelaufen ist,
        in Sekunden, als dieses Ereignis ausgelöst wurde, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war.
        Für ein `"animationstart"` Ereignis ist `elapsedTime` `0,0`, es sei denn, es gab einen negativen Wert für [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay),
        in diesem Fall wird das Ereignis mit `elapsedTime`, der `(-1 * delay)` enthält, ausgelöst.
        Standardmäßig ist er `0,0`.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der standardmäßig mit `"::"` beginnt und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft.
        Wenn die Animation nicht auf einem Pseudoelement, sondern auf dem Element läuft, ist es ein leerer String: `""`.
        Standardmäßig ist er `""`.

### Rückgabewert

Ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- CSS-Eigenschaften: {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
