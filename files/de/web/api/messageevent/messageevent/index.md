---
title: "MessageEvent: MessageEvent() Konstruktor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("HTML DOM")}}

Der **`MessageEvent()`** Konstruktor erstellt ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekt.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und wird von Browsern immer auf `message` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften folgende Eigenschaften haben kann:
    - `data` {{optional_inline}}
      - : Die Daten, die im MessageEvent enthalten sein sollen.
        Dies kann jeder Datentyp sein und wird, falls nicht angegeben, standardmäßig auf `null` gesetzt.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des Nachrichtenemitters repräsentiert.
        Wird standardmäßig auf einen leeren String (`''`) gesetzt, wenn nicht angegeben.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der eine eindeutige ID für das Ereignis repräsentiert.
        Wird standardmäßig auf einen leeren String ("") gesetzt, wenn nicht angegeben.
    - `source` {{optional_inline}}
      - : Eine `MessageEventSource` (die ein [`Window`](/de/docs/Web/API/Window), ein [`MessagePort`](/de/docs/Web/API/MessagePort) oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt sein kann), das den Nachrichtenemitter repräsentiert.
        Wird standardmäßig auf `null` gesetzt, wenn nicht festgelegt.
    - `ports` {{optional_inline}}
      - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die die Ports darstellen, die mit dem Kanal verbunden sind, durch den die Nachricht gesendet wird, wo dies angemessen ist (z.B. im Kanal-Messaging oder beim Senden einer Nachricht an einen Shared Worker).
        Wird standardmäßig auf ein leeres Array (`[]`) gesetzt, wenn nicht angegeben.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich dieser Schnittstelle, aber verwendet in Schnittstellen, die den Autoren mehr Flexibilität bieten müssen.
