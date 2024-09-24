---
title: "BluetoothRemoteGATTCharacteristic: getDescriptors() Methode"
short-title: getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.getDescriptors()`** Methode
gibt ein {{jsxref("Promise")}} zurück, das zu einem {{jsxref("Array")}} aller
{{domxref("BluetoothRemoteGATTDescriptor")}} Objekte für eine gegebene Descriptor-UUID aufgelöst wird.

## Syntax

```js-nolint
getDescriptors(bluetoothDescriptorUUID)
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{jsxref("Array")}} von {{domxref("BluetoothRemoteGATTDescriptor")}} Objekten aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
