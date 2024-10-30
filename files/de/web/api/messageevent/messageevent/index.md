---
title: "MessageEvent: MessageEvent() Konstruktor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: ec8d6cfcaae740f7dfad264b797eebe448085a2b
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Der **`MessageEvent()`** Konstruktor erstellt ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekt.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Er ist case-sensitive und Browser setzen ihn immer auf `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `data` {{optional_inline}}
      - : Die Daten, die im `MessageEvent` enthalten sein sollen.
        Dies kann ein beliebiger Datentyp sein und wird standardmäßig auf `null` gesetzt, wenn nicht angegeben.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
        Standardmäßig wird ein leerer String (`''`) verwendet, wenn nichts angegeben ist.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der eine eindeutige ID für das Event darstellt.
        Standardmäßig wird ein leerer String ("") verwendet, wenn nichts angegeben ist.
    - `source` {{optional_inline}}
      - : Eine `MessageEventSource` (die ein [`Window`](/de/docs/Web/API/Window), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann), die den Nachrichtensender darstellt.
        Diese wird standardmäßig auf `null` gesetzt, wenn sie nicht festgelegt ist.
    - `ports` {{optional_inline}}
      - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort) Objekten, das alle [`MessagePort`](/de/docs/Web/API/MessagePort) Objekte enthält, die mit der Nachricht in der Reihenfolge gesendet wurden.
        Dies wird standardmäßig auf ein leeres Array (`[]`) gesetzt, wenn nichts angegeben ist.

### Rückgabewert

Ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent) Objekt.

## Beispiele

```js
const myMessage = new MessageEvent("message", {
  data: "hello",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, aber in Schnittstellen verwendet, die Autoren mehr Flexibilität bieten müssen.
