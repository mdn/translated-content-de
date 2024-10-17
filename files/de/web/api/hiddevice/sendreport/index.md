---
title: "HIDDevice: sendReport()-Methode"
short-title: sendReport()
slug: Web/API/HIDDevice/sendReport
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`sendReport()`**-Methode des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces sendet einen Ausgabereport an das HID-Gerät.

Die `reportId` für jedes der von diesem Gerät unterstützten Reportformate kann aus [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
sendReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Report-ID. Falls das HID-Gerät keine Report-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, sobald der Report gesendet wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Senden des Reports aus irgendeinem Grund fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie man ein Joy-Con-Gerät mit Hilfe von Ausgabereports zum Vibrieren bringt. Sie können weitere Beispiele und Live-Demos im Artikel [Verbindung mit ungewöhnlichen HID-Geräten](https://developer.chrome.com/docs/capabilities/hid) sehen.

```js
// First, send a command to enable vibration.
// Magical bytes come from https://github.com/mzyy94/joycon-toolweb
const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
await device.sendReport(0x01, new Uint8Array(enableVibrationData));

// Then, send a command to make the Joy-Con device rumble.
// Actual bytes are available in the sample.
const rumbleData = [
  /* … */
];
await device.sendReport(0x10, new Uint8Array(rumbleData));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
