---
title: "HIDDevice: sendReport()-Methode"
short-title: sendReport()
slug: Web/API/HIDDevice/sendReport
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`sendReport()`**-Methode der {{domxref("HIDDevice")}}-Schnittstelle sendet einen Ausgabereport an das HID-Gerät.

Die `reportId` für jedes der Reportformate, die dieses Gerät unterstützt, kann aus {{domxref("HIDDevice.collections")}} abgerufen werden.

## Syntax

```js-nolint
sendReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Report-ID. Falls das HID-Gerät keine Report-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald der Report gesendet wurde.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Senden des Reports aus irgendeinem Grund fehlschlägt.

## Beispiele

Das folgende Beispiel zeigt, wie ein Joy-Con-Gerät mit Ausgabereports zum Vibrieren gebracht wird. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbinden mit ungewöhnlichen HID-Geräten](https://developer.chrome.com/docs/capabilities/hid).

```js
// Zuerst einen Befehl senden, um die Vibration zu aktivieren.
// Magische Bytes stammen von https://github.com/mzyy94/joycon-toolweb
const enableVibrationData = [1, 0, 1, 64, 64, 0, 1, 64, 64, 0x48, 0x01];
await device.sendReport(0x01, new Uint8Array(enableVibrationData));

// Dann einen Befehl senden, um das Joy-Con-Gerät vibrieren zu lassen.
// Tatsächliche Bytes sind im Beispiel verfügbar.
const rumbleData = [
  /* … */
];
await device.sendReport(0x10, new Uint8Array(rumbleData));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
