---
title: "BluetoothRemoteGATTService: Methode getCharacteristic()"
short-title: getCharacteristic()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristic
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothGATTService.getCharacteristic()`**-Methode
gibt ein {{jsxref("Promise")}} auf eine Instanz von
{{domxref("BluetoothRemoteGATTCharacteristic")}} für eine gegebene universell eindeutige Kennung
(UUID) zurück.

## Syntax

```js-nolint
getCharacteristic(characteristic)
```

### Parameter

- `characteristic`
  - : Die UUID einer Charakteristik, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für die Herzfrequenzmessungs-Charakteristik.

### Rückgabewert

Ein {{jsxref("Promise")}} auf eine Instanz von {{domxref("BluetoothRemoteGATTCharacteristic")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
