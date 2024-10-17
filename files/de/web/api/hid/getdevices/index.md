---
title: "HID: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/HID/getDevices
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`getDevices()`**-Methode des [`HID`](/de/docs/Web/API/HID)-Interfaces erhält eine Liste von verbundenen HID-Geräten, auf die der Benutzer zuvor im Rahmen eines [`requestDevice()`](/de/docs/Web/API/HID/requestDevice)-Aufrufs Zugriff gewährt hat.

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Liste von [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekten aufgelöst wird.

## Beispiele

Das folgende Beispiel erhält eine Liste von Geräten und protokolliert die Gerätenamen in der Konsole.

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productName}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
