---
title: "BluetoothRemoteGATTCharacteristic: getDescriptor()-Methode"
short-title: getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.getDescriptor()`**-Methode
gibt ein {{jsxref("Promise")}} zurück, das zum ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Descriptor-UUID aufgelöst wird.

## Syntax

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zum ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

{{APIRef("Web Bluetooth")}}
