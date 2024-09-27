---
title: "MessageEvent: MessageEvent() Konstruktor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("HTML DOM")}}

Der **`MessageEvent()`**-Konstruktor erstellt ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekt.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv, und Browser setzen es immer auf `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften enthalten kann:
    - `data` {{optional_inline}}
      - : Die Daten, die im MessageEvent enthalten sein sollen.
        Diese können jeden Datentyp haben und sind standardmäßig `null`, wenn nicht angegeben.
    - `origin` {{optional_inline}}
      - : Ein String, der die Herkunft des Nachrichtensenders repräsentiert.
        Dies ist standardmäßig ein leerer String (`''`), wenn nicht angegeben.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
        Dies ist standardmäßig ein leerer String ("") wenn nicht angegeben.
    - `source` {{optional_inline}}
      - : Eine `MessageEventSource` (die ein [`Window`](/de/docs/Web/API/Window), ein [`MessagePort`](/de/docs/Web/API/MessagePort)
        oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), welches den Nachrichtensender darstellt.
        Dies ist standardmäßig `null`, wenn es nicht gesetzt ist.
    - `ports` {{optional_inline}}
      - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird, wenn dies zutreffend ist
        (z.B. beim Kanalmessaging oder beim Senden einer Nachricht an einen Shared Worker).
        Dies ist standardmäßig ein leeres Array (`[]`), wenn nicht angegeben.

### Rückgabewert

Ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekt.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, jedoch in Schnittstellen verwendet, die Autoren mehr Flexibilität bieten soll.
