---
title: "BluetoothRemoteGATTService: Methode getCharacteristics()"
short-title: getCharacteristics()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristics
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothGATTService.getCharacteristics()`**-Methode gibt ein {{jsxref("Promise")}} auf eine Liste von {{domxref("BluetoothRemoteGATTCharacteristic")}}-Instanzen für eine gegebene Universally Unique Identifier (UUID) zurück.

## Syntax

```js-nolint
getCharacteristics(characteristics)
```

### Parameter

- `characteristics`
  - : Die UUID eines Merkmals, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für das Merkmal der Herzfrequenzmessung.

### Rückgabewert

Ein {{jsxref("Promise")}} auf ein
{{jsxref("Array")}} von {{domxref("BluetoothRemoteGATTCharacteristic")}}-Instanzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
