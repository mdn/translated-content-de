---
title: "HIDDevice: close()-Methode"
short-title: close()
slug: Web/API/HIDDevice/close
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`close()`**-Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle schließt die Verbindung zum HID-Gerät.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung geschlossen ist.

## Beispiele

Im folgenden Beispiel schließen wir das HID-Gerät, sobald alle Daten gesendet und empfangen wurden.

```js
await device.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
