---
title: "HID: Methode getDevices()"
short-title: getDevices()
slug: Web/API/HID/getDevices
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`getDevices()`** Methode der {{domxref("HID")}}-Schnittstelle ruft eine Liste der verbundenen HID-Geräte ab, auf die der Benutzer zuvor im Rahmen eines {{domxref("HID.requestDevice","requestDevice()")}}-Aufrufs Zugriff gewährt bekommen hat.

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Liste von {{domxref("HIDDevice")}}-Objekten aufgelöst wird.

## Beispiele

Das folgende Beispiel erhält eine Liste von Geräten und protokolliert die Gerätenamen in die Konsole.

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

## Browserkompatibilität

{{Compat}}
