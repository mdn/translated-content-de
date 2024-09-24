---
title: "MessageEvent: MessageEvent() Konstruktor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("HTML DOM")}}

Der **`MessageEvent()`** Konstruktor erstellt ein neues {{domxref("MessageEvent")}} Objekt.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es immer auf `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `data` {{optional_inline}}
      - : Die Daten, die im MessageEvent enthalten sein sollen.
        Dies kann ein beliebiger Datentyp sein und wird standardmäßig auf `null` gesetzt, wenn nicht angegeben.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
        Standardmäßig ist dies ein leerer String (`''`), wenn nicht angegeben.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
        Standardmäßig ist dies ein leerer String ("") wenn nicht angegeben.
    - `source` {{optional_inline}}
      - : Eine `MessageEventSource` (die ein {{domxref("Window")}}, ein {{domxref("MessagePort")}},
        oder ein {{domxref("ServiceWorker")}} Objekt sein kann) die den Nachrichtensender darstellt.
        Standardmäßig ist dies `null`, wenn nicht gesetzt.
    - `ports` {{optional_inline}}
      - : Ein Array von {{domxref("MessagePort")}} Objekten, die
        die mit dem Kanal assoziierten Ports repräsentieren, durch den die Nachricht gegebenenfalls gesendet wird
        (z.B. in der Kanalnachrichtübermittlung oder beim Senden einer Nachricht an einen Shared Worker).
        Standardmäßig ist dies ein leeres Array (`[]`), wenn nicht angegeben.

### Rückgabewert

Ein neues {{domxref("MessageEvent")}} Objekt.

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

- {{domxref("ExtendableMessageEvent")}} — ähnlich zu dieser Schnittstelle, aber in Schnittstellen verwendet, die mehr Flexibilität für Autoren bieten müssen.
