---
title: "BluetoothRemoteGATTServer: Methode getPrimaryService()"
short-title: getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTServer.getPrimaryService()`**-Methode
gibt ein Promise für den primären {{domxref("BluetoothRemoteGATTService")}} zurück, der von dem Bluetooth-Gerät für eine angegebene Bluetooth-Service-UUID angeboten wird.

## Syntax

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Eine universelle eindeutige Kennung (UUID) für einen angegebenen Bluetooth-Service, die entweder eine 128-bit-UUID, ein 16-bit- oder 32-bit-UUID-Alias ist, oder ein String aus der Liste der [GATT-zugewiesenen Dienste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt).

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{domxref("BluetoothRemoteGATTService")}}-Objekt aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
