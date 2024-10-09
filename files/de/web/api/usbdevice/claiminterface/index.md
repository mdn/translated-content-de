---
title: "USBDevice: claimInterface()-Methode"
short-title: claimInterface()
slug: Web/API/USBDevice/claimInterface
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`claimInterface()`**-Methode der
[`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn das angeforderte Interface für den exklusiven Zugriff in Anspruch genommen wird.

## Syntax

```js-nolint
claimInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der Index eines der vom Gerät unterstützten Interfaces. Interfaces sind gerätespezifisch.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Beispiele

Das folgende Beispiel zeigt `claimInterface()` im Kontext der Verbindung
mit einem USB-Gerät.

```js
async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null) await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
