---
title: "SerialPort: getInfo()-Methode"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getInfo()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein Objekt zurück, dessen Eigenschaften die Vendor-ID und die Produkt-ID des Geräts sind.

## Syntax

```js-nolint
getInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die folgenden Werte enthält.

- `usbVendorId`
  - : Wenn der Port Teil eines USB-Geräts ist, ein nicht signierter kurzer Integer, der einen USB-Gerätehersteller identifiziert, andernfalls `undefined`.
- `usbProductId`
  - : Wenn der Port Teil eines USB-Geräts ist, ein nicht signierter kurzer Integer, der ein USB-Gerät identifiziert, andernfalls `undefined`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
