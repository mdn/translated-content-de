---
title: "Event: Event()-Konstruktor"
short-title: Event()
slug: Web/API/Event/Event
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`Event()`**-Konstruktor erstellt ein neues [`Event`](/de/docs/Web/API/Event)-Objekt. Ein auf diese Weise erstelltes Ereignis wird als _synthetisches Ereignis_ bezeichnet, im Gegensatz zu einem vom Browser ausgelösten Ereignis, und kann durch ein Skript [ausgelöst](/de/docs/Web/Events/Creating_and_triggering_events) werden.

## Syntax

```js-nolint
new Event(type)
new Event(type, options)
```

### Werte

- `type`
  - : Ein String mit dem Namen des Ereignisses.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis gebubbelt wird. Der Standardwert ist `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der Standardwert ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Listener außerhalb eines Shadow Roots auslösen wird (siehe [`Event.composed`](/de/docs/Web/API/Event/composed) für weitere Details). Der Standardwert ist `false`.

### Rückgabewert

Ein neues [`Event`](/de/docs/Web/API/Event)-Objekt.

## Beispiel

```js
// create a look event that bubbles up and cannot be canceled

const evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Event`](/de/docs/Web/API/Event)
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
