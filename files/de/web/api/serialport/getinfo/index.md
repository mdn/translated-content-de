---
title: "SerialPort: Methode getInfo()"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
l10n:
  sourceCommit: 2de8605cc697ca93b02f0b7109082b694f8950ec
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getInfo()`**-Methode der {{domxref("SerialPort")}}-Schnittstelle gibt ein Objekt zurück, dessen Eigenschaften die Hersteller-ID und Produkt-ID des Geräts sind.

## Syntax

```js-nolint
getInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Werten.

- `usbVendorId`
  - : Falls der Port Teil eines USB-Geräts ist, eine ganze Zahl ohne Vorzeichen, die einen USB-Gerätehersteller identifiziert, andernfalls `undefined`.
- `usbProductId`
  - : Falls der Port Teil eines USB-Geräts ist, eine ganze Zahl ohne Vorzeichen, die ein USB-Gerät identifiziert, andernfalls `undefined`.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
