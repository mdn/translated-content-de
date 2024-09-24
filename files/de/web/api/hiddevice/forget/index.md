---
title: "HIDDevice: forget()-Methode"
short-title: forget()
slug: Web/API/HIDDevice/forget
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`forget()`**-Methode der {{domxref("HIDDevice")}}-Schnittstelle schließt die Verbindung zum HID-Gerät und "vergisst" das Gerät.

## Syntax

```js-nolint
forget()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird, sobald die Verbindung geschlossen ist, das Gerät vergessen wurde und die Berechtigung zurückgesetzt wurde.

## Beispiel

Im folgenden Beispiel verbinden wir uns mit einem Nintendo Switch Joy-Con Right HID-Gerät, lassen einmal blinken und trennen die Verbindung.

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
  // Ausschalten
  await device.sendFeatureReport(reportId, Uint32Array.from([0, 0]));
  await waitFor(100);
  // Einschalten
  await device.sendFeatureReport(reportId, Uint32Array.from([512, 0]));
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Schließlich die Verbindung trennen
  await device.forget();
}
blink();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
