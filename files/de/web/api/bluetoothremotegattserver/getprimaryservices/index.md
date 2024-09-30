---
title: "BluetoothRemoteGATTServer: Methode getPrimaryServices()"
short-title: getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **BluetoothRemoteGATTServer.getPrimaryServices()**-Methode gibt ein Versprechen auf eine Liste von primären [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)-Objekten zurück, die vom Bluetooth-Gerät für eine angegebene `BluetoothServiceUUID` angeboten werden.

## Syntax

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Ein universell eindeutiger Bluetooth-Servicename für ein angegebenes Gerät.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf eine Liste von [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)-Objekten auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
