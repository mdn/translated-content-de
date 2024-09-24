---
title: "BluetoothRemoteGATTCharacteristic: Methode getDescriptor()"
short-title: getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`BluetoothRemoteGATTCharacteristic.getDescriptor()`**
gibt ein {{jsxref("Promise")}} zurück, das beim Auflösen den
ersten {{domxref("BluetoothRemoteGATTDescriptor")}} für eine gegebene Descriptor-UUID liefert.

## Syntax

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das den ersten {{domxref("BluetoothRemoteGATTDescriptor")}} liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

{{APIRef("Web Bluetooth")}}
