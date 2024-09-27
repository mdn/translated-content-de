---
title: "USBDevice: claimInterface()-Methode"
short-title: claimInterface()
slug: Web/API/USBDevice/claimInterface
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`claimInterface()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird, wenn das angeforderte Interface für exklusiven Zugriff beansprucht wird.

## Syntax

```js-nolint
claimInterface(interfaceNumber)
```

### Parameter

- `interfaceNumber`
  - : Der Index einer der vom Gerät unterstützten Schnittstellen. Schnittstellen sind gerätespezifisch.

### Rückgabewert

Ein {{jsxref("promise")}}.

## Beispiele

Das folgende Beispiel zeigt `claimInterface()` im Kontext des Verbindens mit einem USB-Gerät.

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
