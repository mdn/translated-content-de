---
title: "HIDDevice: sendFeatureReport()-Methode"
short-title: sendFeatureReport()
slug: Web/API/HIDDevice/sendFeatureReport
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`sendFeatureReport()`**-Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle sendet einen Feature-Report an das HID-Gerät. Feature-Reports sind eine Möglichkeit für HID-Geräte und Anwendungen, nicht standardisierte HID-Daten auszutauschen.

Die `reportId` für jedes der von diesem Gerät unterstützten Berichtsformate kann von [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
sendFeatureReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Berichts-ID. Wenn das HID-Gerät keine Berichts-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird mit `undefined`, sobald der Report gesendet wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Senden des Berichts aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel sorgt `sendFeatureReport()` dafür, dass ein Gerät blinkt. Weitere Beispiele und Live-Demos finden Sie im Artikel [Verbinden mit ungewöhnlichen HID-Geräten](https://developer.chrome.com/docs/capabilities/hid).

```js
const reportId = 1;
for (let i = 0; i < 10; i++) {
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await waitFor(100);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
