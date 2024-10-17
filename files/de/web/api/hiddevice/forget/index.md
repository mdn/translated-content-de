---
title: "HIDDevice: forget() Methode"
short-title: forget()
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`forget()`** Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle schließt die Verbindung zum HID-Gerät und vergisst das Gerät.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung geschlossen ist, das Gerät vergessen wurde und die Berechtigung zurückgesetzt ist.

## Beispiel

Im folgenden Beispiel verbinden wir uns mit einem Nintendo Switch Joy-Con Right HID-Gerät, lassen es einmal blinken und trennen die Verbindung.

```js
async function blink() {
  const devices = await navigator.hid.requestDevice({
    filters: [
      {
        vendorId: 0x057e, // Nintendo Co., Ltd
        productId: 0x2007, // Joy-Con Right
      },
    ],
  });
  const device = devices[0];
  await device.open();
  // Turn off
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Turn on
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Finally, disconnect from it
  await device.forget();
}
blink();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
