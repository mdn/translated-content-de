---
title: "HIDDevice: sendReport()-Methode"
short-title: sendReport()
slug: Web/API/HIDDevice/sendReport
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`sendReport()`**-Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle sendet einen Ausgabereport an das HID-Gerät.

Die `reportId` für jedes der von diesem Gerät unterstützten Reportformate kann aus [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
sendReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Report-ID. Wenn das HID-Gerät keine Report-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald der Report gesendet wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Senden des Reports aus irgendeinem Grund fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie man ein Joy-Con-Gerät mit Ausgabereports zum Vibrieren bringt. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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
