---
title: "BluetoothRemoteGATTServer: getPrimaryServices()-Methode"
short-title: getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **BluetoothRemoteGATTServer.getPrimaryServices()**-Methode gibt ein Versprechen auf eine Liste primärer [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)-Objekte zurück, die von dem Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten werden.

## Syntax

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Ein universell eindeutiger Bezeichner für einen Bluetooth-Dienst für ein bestimmtes Gerät.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in eine Liste von [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)-Objekten aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
