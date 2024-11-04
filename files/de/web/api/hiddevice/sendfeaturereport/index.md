---
title: "HIDDevice: sendFeatureReport()-Methode"
short-title: sendFeatureReport()
slug: Web/API/HIDDevice/sendFeatureReport
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`sendFeatureReport()`**-Methode des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces sendet einen Feature-Report an das HID-Gerät. Feature-Reports sind eine Möglichkeit für HID-Geräte und Anwendungen, nicht standardisierte HID-Daten auszutauschen.

Die `reportId` für jedes der von diesem Gerät unterstützten Berichtformate kann von [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
sendFeatureReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Report-ID. Wenn das HID-Gerät keine Report-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` gelöst wird, sobald der Report gesendet wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Senden des Reports aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel lässt `sendFeatureReport()` ein Gerät blinken. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
