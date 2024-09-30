---
title: "BluetoothRemoteGATTCharacteristic: Methode getDescriptors()"
short-title: getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.getDescriptors()`**-Methode
gibt ein {{jsxref("Promise")}} zurück, das auf ein {{jsxref("Array")}} von allen
[`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)-Objekten für eine gegebene Descriptor-UUID aufgelöst wird.

## Syntax

```js-nolint
getDescriptors(bluetoothDescriptorUUID)
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein {{jsxref("Array")}}
von [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)-Objekten aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
