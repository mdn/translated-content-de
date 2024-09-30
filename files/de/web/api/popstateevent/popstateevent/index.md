---
title: "PopStateEvent: PopStateEvent() Konstruktor"
short-title: PopStateEvent()
slug: Web/API/PopStateEvent/PopStateEvent
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("History API")}}

Der **`PopStateEvent()`** Konstruktor erstellt ein neues [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Objekt.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor in der Regel nicht aufrufen, da der Browser diese Objekte selbst erzeugt, wenn [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new PopStateEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv, und Browser setzen ihn auf `popstate`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgende Eigenschaft hat:
    - `state` {{optional_inline}}
      - : Ein Objekt, das den Zustand darstellt. Praktisch ist es ein Wert, der durch den Aufruf von [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) bereitgestellt wird. Wenn nicht gesetzt, ist der Standardwert `null`.

### Rückgabewert

Ein neues [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`history.pushState()`](/de/docs/Web/API/History/pushState)
- [`history.replaceState()`](/de/docs/Web/API/History/replaceState)
- [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis
