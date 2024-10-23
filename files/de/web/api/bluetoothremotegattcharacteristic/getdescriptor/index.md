---
title: "BluetoothRemoteGATTCharacteristic: getDescriptor()-Methode"
short-title: getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.getDescriptor()`**-Methode
gibt ein {{jsxref("Promise")}} zurück, das auf das
erste [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Descriptor-UUID aufgelöst wird.

## Syntax

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf das
erste [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
