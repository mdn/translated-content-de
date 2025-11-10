---
title: "HID: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/HID/getDevices
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`getDevices()`**-Methode der [`HID`](/de/docs/Web/API/HID)-Schnittstelle ruft eine Liste von verbundenen HID-Geräten ab, auf die der Benutzer zuvor Zugriff in Antwort auf einen Aufruf von [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) gewährt hat.

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Liste von [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekten aufgelöst wird.

## Beispiele

Das folgende Beispiel erhält eine Liste von Geräten und protokolliert die Gerätenamen in die Konsole.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
