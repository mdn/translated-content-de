---
title: "HIDDevice: receiveFeatureReport()-Methode"
short-title: receiveFeatureReport()
slug: Web/API/HIDDevice/receiveFeatureReport
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`receiveFeatureReport()`**-Methode des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces empfängt einen Feature-Bericht vom HID-Gerät. Feature-Berichte sind ein Mittel, mit dem HID-Geräte und Anwendungen nicht standardisierte HID-Daten austauschen.

Die `reportId` für jedes der von diesem Gerät unterstützten Berichtsformate kann aus [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
receiveFeatureReport(reportId)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Berichts-ID. Wenn das HID-Gerät keine Berichts-IDs verwendet, senden Sie `0`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("DataView")}}-Objekt aufgelöst wird, das den Feature-Bericht enthält.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Empfangen des Berichts aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel wird ein Bericht von einem Gerät mit einer `reportId` von `1` empfangen.

```js
const dataView = await device.receiveFeatureReport(1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
