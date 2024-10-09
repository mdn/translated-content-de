---
title: "MessageEvent: MessageEvent() Konstruktor"
short-title: MessageEvent()
slug: Web/API/MessageEvent/MessageEvent
l10n:
  sourceCommit: 6091080d719b4f0ec1cdc119a21d54a1f1cc1c59
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Der **`MessageEvent()`** Konstruktor erstellt ein neues [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Objekt.

## Syntax

```js-nolint
new MessageEvent(type)
new MessageEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive, und Browser setzen ihn immer auf `message`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `data` {{optional_inline}}
      - : Die Daten, die Sie im MessageEvent enthalten möchten.
        Dies kann von jedem Datentyp sein und wird standardmäßig auf `null` gesetzt, wenn nicht angegeben.
    - `origin` {{optional_inline}}
      - : Ein String, der den Ursprung des Nachrichtenabsenders darstellt.
        Dies hat standardmäßig einen leeren String (`''`), wenn nicht angegeben.
    - `lastEventId` {{optional_inline}}
      - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
        Dies hat standardmäßig einen leeren String ("") wenn nicht angegeben.
    - `source` {{optional_inline}}
      - : Ein `MessageEventSource` (welches ein [`Window`](/de/docs/Web/API/Window), ein [`MessagePort`](/de/docs/Web/API/MessagePort),
        oder ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt sein kann) das den Nachrichtenabsender darstellt.
        Dies wird auf `null` gesetzt, wenn nicht angegeben.
    - `ports` {{optional_inline}}
      - : Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten, die
        die Ports darstellen, die mit dem Kanal verbunden sind, über den die Nachricht gesendet wird, wo angebracht
        (z. B. im Kanal-Messaging oder beim Senden einer Nachricht an einen Shared Worker).
        Dies wird standardmäßig auf ein leeres Array (`[]`) gesetzt, wenn nicht angegeben.

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

- [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) — ähnlich zu dieser Schnittstelle, aber verwendet in Schnittstellen, die den Autoren mehr Flexibilität geben müssen.
