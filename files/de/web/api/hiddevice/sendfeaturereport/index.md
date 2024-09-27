---
title: "HIDDevice: sendFeatureReport()-Methode"
short-title: sendFeatureReport()
slug: Web/API/HIDDevice/sendFeatureReport
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`sendFeatureReport()`**-Methode des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces sendet einen Feature-Bericht an das HID-Gerät. Feature-Berichte sind eine Möglichkeit, nicht standardisierte HID-Daten zwischen HID-Geräten und Anwendungen auszutauschen.

Die `reportId` für jedes der vom Gerät unterstützten Berichtformate kann aus [`HIDDevice.collections`](/de/docs/Web/API/HIDDevice/collections) abgerufen werden.

## Syntax

```js-nolint
sendFeatureReport(reportId, data)
```

### Parameter

- `reportId`
  - : Eine 8-Bit-Berichts-ID. Wenn das HID-Gerät keine Berichts-IDs verwendet, senden Sie `0`.
- `data`
  - : Bytes als ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald der Bericht gesendet wurde.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Senden des Berichts aus irgendeinem Grund fehlschlägt.

## Beispiele

Im folgenden Beispiel lässt `sendFeatureReport()` ein Gerät blinken. Weitere Beispiele und Live-Demos finden Sie im Artikel [Connecting to uncommon HID devices](https://developer.chrome.com/docs/capabilities/hid).

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
