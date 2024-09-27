---
title: "BluetoothRemoteGATTServer: getPrimaryService()-Methode"
short-title: getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTServer.getPrimaryService()`**-Methode
gibt ein Promise für den primären [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, der vom Bluetooth-Gerät für eine spezifizierte Bluetooth-Dienst-UUID angeboten wird.

## Syntax

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Ein universell eindeutiger Identifikator für einen Bluetooth-Dienst eines angegebenen Geräts, der entweder eine 128-Bit-UUID, eine 16-Bit- oder 32-Bit-UUID-Alias oder ein String aus der Liste der [GATT zugeordneten Dienste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) Schlüssel ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) Objekt aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
