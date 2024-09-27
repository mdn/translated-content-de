---
title: "HIDDevice: close()-Methode"
short-title: close()
slug: Web/API/HIDDevice/close
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

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
