---
title: "BluetoothRemoteGATTService: getCharacteristics() Methode"
short-title: getCharacteristics()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristics
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothGATTService.getCharacteristics()`**-Methode
gibt ein {{jsxref("Promise")}} für eine Liste von [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)
Instanzen für einen gegebenen universell eindeutigen Bezeichner (UUID) zurück.

## Syntax

```js-nolint
getCharacteristics(characteristics)
```

### Parameter

- `characteristics`
  - : Die UUID einer Eigenschaft, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für die Herzfrequenzmessungseigenschaft.

### Rückgabewert

Ein {{jsxref("Promise")}} auf ein
{{jsxref("Array")}} von [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) Instanzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
