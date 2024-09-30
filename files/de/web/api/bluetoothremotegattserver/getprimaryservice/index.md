---
title: "BluetoothRemoteGATTServer: getPrimaryService() Methode"
short-title: getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTServer.getPrimaryService()`** Methode gibt ein Promise auf den primären [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, der von dem Bluetooth-Gerät für eine spezifizierte Bluetooth-Service-UUID angeboten wird.

## Syntax

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Ein universell eindeutiger Bluetooth-Service-Identifikator für ein spezifiziertes Gerät, das entweder eine 128-Bit-UUID, ein 16-Bit- oder 32-Bit-UUID-Alias oder ein String aus der Liste der [GATT zugewiesenen Dienste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) Schlüssel ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in ein [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) Objekt auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
