---
title: "NotificationEvent: NotificationEvent() Konstruktor"
short-title: NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Der **`NotificationEvent()`** Konstruktor erstellt ein neues [`NotificationEvent`](/de/docs/Web/API/NotificationEvent) Objekt.

## Syntax

```js-nolint
new NotificationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `notificationclick` oder `notificationclose`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`ExtendableEvent()`](/de/docs/Web/API/ExtendableEvent/ExtendableEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `notification`
      - : Ein [`Notification`](/de/docs/Web/API/Notification) Objekt, das als Benachrichtigung verwendet werden soll, auf der das Ereignis ausgelöst wird.
    - `action` {{optional_inline}}
      - : Eine Aktion, die mit der Benachrichtigung verbunden ist. Standardmäßig `""`.

### Rückgabewert

Ein neues [`NotificationEvent()`](/de/docs/Web/API/NotificationEvent) Objekt.

## Beispiele

```js
const n = new Notification("Hello");
const myNotificationEvent = new NotificationEvent(type, { notification: n });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
