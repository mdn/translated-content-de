---
title: "HID: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/HID/getDevices
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`getDevices()`**-Methode der [`HID`](/de/docs/Web/API/HID)-Schnittstelle erhält eine Liste der verbundenen HID-Geräte, auf die der Benutzer zuvor im Rahmen eines Aufrufs von [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) Zugriff gewährt hat.

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
