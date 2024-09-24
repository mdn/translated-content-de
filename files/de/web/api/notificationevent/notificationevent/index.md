---
title: "NotificationEvent: NotificationEvent()-Konstruktor"
short-title: NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

Der **`NotificationEvent()`**-Konstruktor erstellt ein neues {{domxref("NotificationEvent")}}-Objekt.

## Syntax

```js-nolint
new NotificationEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn auf `notificationclick` oder `notificationclose`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `notification`
      - : Ein {{domxref("Notification")}}-Objekt, das als Benachrichtigung verwendet wird, auf der das Ereignis ausgelöst wird.
    - `action` {{optional_inline}}
      - : Eine mit der Benachrichtigung verknüpfte Aktion. Standardmäßig ist es `""`.

### Rückgabewert

Ein neues {{domxref("NotificationEvent()")}}-Objekt.

## Beispiele

```js
const n = new Notification("Hello");
const myNotificationEvent = new NotificationEvent(type, { notification: n });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
