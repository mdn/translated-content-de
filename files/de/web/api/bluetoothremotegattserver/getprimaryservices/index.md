---
title: "BluetoothRemoteGATTServer: getPrimaryServices()-Methode"
short-title: getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **BluetoothRemoteGATTServer.getPrimaryServices()**-Methode gibt ein Promise zurück, das eine Liste von primären {{domxref("BluetoothRemoteGATTService")}}-Objekten bereitstellt, die vom Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten werden.

## Syntax

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### Parameter

- `bluetoothServiceUUID`
  - : Ein universell eindeutiger Bluetooth-Dienstkennung für ein bestimmtes Gerät.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in eine Liste von {{domxref("BluetoothRemoteGATTService")}}
Objekten aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
