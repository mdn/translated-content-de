---
title: "HIDDevice: forget()-Methode"
short-title: forget()
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: e4d6e3444fc0f46a2f12de882c5b12c44fb75e02
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`forget()`**-Methode der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle schließt die Verbindung zum HID-Gerät und vergisst das Gerät.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird, sobald die Verbindung geschlossen, das Gerät vergessen und die Berechtigung zurückgesetzt wurde.

## Beispiel

Im folgenden Beispiel verbinden wir uns mit einem Nintendo Switch Joy-Con Right HID-Gerät, blinken einmal und trennen die Verbindung.

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
  await new Promise((resolve) => setTimeout(resolve, 100));
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
