---
title: "PopStateEvent: PopStateEvent()-Konstruktor"
short-title: PopStateEvent()
slug: Web/API/PopStateEvent/PopStateEvent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("History API")}}

Der **`PopStateEvent()`**-Konstruktor erstellt ein neues {{domxref("PopStateEvent")}}-Objekt.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn {{domxref("Window/popstate_event", "popstate")}}-Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new PopStateEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `popstate`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgende Eigenschaft hat:
    - `state` {{optional_inline}}
      - : Ein Objekt, das den Zustand repräsentiert. Praktisch ist es ein Wert, der durch den Aufruf von {{domxref("history.pushState()")}} oder {{domxref("history.replaceState()")}} bereitgestellt wird. Wenn nicht gesetzt, ist der Standardwert `null`.

### Rückgabewert

Ein neues {{domxref("PopStateEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("history.pushState()")}}
- {{domxref("history.replaceState()")}}
- {{domxref("Window/popstate_event", "popstate")}}-Ereignis
