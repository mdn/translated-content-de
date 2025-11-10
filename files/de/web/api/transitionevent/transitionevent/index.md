---
title: "TransitionEvent: TransitionEvent() Konstruktor"
short-title: TransitionEvent()
slug: Web/API/TransitionEvent/TransitionEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Der **`TransitionEvent()`**-Konstruktor gibt ein neues [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)-Objekt zurück, das ein Ereignis im Zusammenhang mit einer Transition darstellt.

## Syntax

```js-nolint
new TransitionEvent(type)
new TransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn auf `transitionrun`, `transitionstart`, `transitionend` oder `transitioncancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `propertyName` {{optional_inline}}
      - : Ein String, der den Namen der CSS-Eigenschaft enthält, die mit der Transition verbunden ist.
        Standardmäßig ist er auf `""` gesetzt.
    - `elapsedTime` {{optional_inline}}
      - : Eine Zahl, die die Zeit in Sekunden angibt, die die Animation gelaufen ist, als dieses Ereignis aufgetreten ist, ohne die Zeit zu berücksichtigen, in der die Animation pausiert war.
        Bei einem `"animationstart"`-Ereignis ist `elapsedTime` `0.0`, es sei denn, es gab einen negativen Wert für [`animation-delay`](/de/docs/Web/CSS/Reference/Properties/animation-delay),
        in diesem Fall wird das Ereignis mit `elapsedTime`, das `(-1 * delay)` enthält, ausgelöst.
        Standardmäßig auf `0.0` gesetzt.
    - `pseudoElement` {{optional_inline}}
      - : Ein String, der standardmäßig mit `"::"` belegt ist und den Namen des [Pseudoelements](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) enthält, auf dem die Animation läuft.
        Wenn die Animation nicht auf einem Pseudoelement läuft, sondern auf dem Element, ist dies ein leerer String: `""`.
        Standardmäßig auf `""` gesetzt.

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
