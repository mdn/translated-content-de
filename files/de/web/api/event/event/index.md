---
title: "Event: Event()-Konstruktor"
short-title: Event()
slug: Web/API/Event/Event
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`Event()`**-Konstruktor erstellt ein neues {{domxref("Event")}}-Objekt. Ein auf diese Weise erstelltes Ereignis wird als _synthetisches Ereignis_ bezeichnet, im Gegensatz zu einem Ereignis, das vom Browser ausgelöst wird, und kann durch ein Skript [ausgelöst](/de/docs/Web/Events/Creating_and_triggering_events) werden.

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
      - : Ein boolescher Wert, der angibt, ob das Ereignis aufsteigt. Der Standardwert ist `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann. Der Standardwert ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Ereignis Listener außerhalb eines Shadow-Root-Bereichs auslöst (siehe {{domxref("Event.composed")}} für mehr Details). Der Standardwert ist `false`.

### Rückgabewert

Ein neues {{domxref("Event")}}-Objekt.

## Beispiel

```js
// Erstellen eines "look"-Ereignisses, das aufsteigt und nicht abgebrochen werden kann

const evt = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// Ereignis kann von jedem Element ausgelöst werden, nicht nur vom Dokument
myDiv.dispatchEvent(evt);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
