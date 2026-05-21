---
title: "USBDevice: claimInterface() Methode"
short-title: claimInterface()
slug: Web/API/USBDevice/claimInterface
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`claimInterface()`**-Methode des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das angeforderte Interface für exklusiven Zugriff beansprucht wird.

## Syntax

```js-nolint
claimInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der Index einer der vom Gerät unterstützten Schnittstellen. Schnittstellen sind
    gerätespezifisch.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Beispiele

Das folgende Beispiel zeigt `claimInterface()` im Zusammenhang mit dem Verbinden
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
