---
title: "Event: Event() Konstruktor"
short-title: Event()
slug: Web/API/Event/Event
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Der **`Event()`** Konstruktor erstellt ein neues [`Event`](/de/docs/Web/API/Event)-Objekt. Ein auf diese Weise erstelltes Event wird als _synthetisches Event_ bezeichnet, im Gegensatz zu einem vom Browser ausgelösten Event, und kann von einem Skript [dispatched](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) werden.

## Syntax

```js-nolint
new Event(type)
new Event(type, options)
```

### Werte

- `type`
  - : Ein String mit dem Namen des Events.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `bubbles` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Event "bubbelt". Der Standardwert ist `false`.
    - `cancelable` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Event abgebrochen werden kann. Der Standardwert ist `false`.
    - `composed` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Event Listener außerhalb eines Schattenwurzel auslöst (siehe [`Event.composed`](/de/docs/Web/API/Event/composed) für mehr Details). Der Standardwert ist `false`.

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
- [Erstellen und Auslösen von Events](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
