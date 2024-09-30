---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`BluetoothRemoteGATTServer`**-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert einen GATT-Server auf einem entfernten Gerät.

## Instanzeigenschaften

- [`BluetoothRemoteGATTServer.connected`](/de/docs/Web/API/BluetoothRemoteGATTServer/connected) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der true zurückgibt, während diese Skriptausführungsumgebung mit `this.device` verbunden ist. Es kann false sein, während der Benutzeragent physisch verbunden ist.
- [`BluetoothRemoteGATTServer.device`](/de/docs/Web/API/BluetoothRemoteGATTServer/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Referenz auf das [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice), das den Server betreibt.

## Instanzmethoden

- [`BluetoothRemoteGATTServer.connect()`](/de/docs/Web/API/BluetoothRemoteGATTServer/connect) {{Experimental_Inline}}
  - : Veranlasst die Skriptausführungsumgebung, sich mit `this.device` zu verbinden.
- [`BluetoothRemoteGATTServer.disconnect()`](/de/docs/Web/API/BluetoothRemoteGATTServer/disconnect) {{Experimental_Inline}}
  - : Veranlasst die Skriptausführungsumgebung, die Verbindung zu `this.device` zu trennen.
- [`BluetoothRemoteGATTServer.getPrimaryService()`](/de/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryService) {{Experimental_Inline}}
  - : Gibt ein Promise auf den primären [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, der von dem Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten wird.
- [`BluetoothRemoteGATTServer.getPrimaryServices()`](/de/docs/Web/API/BluetoothRemoteGATTServer/getPrimaryServices) {{Experimental_Inline}}
  - : Gibt ein Promise auf eine Liste von primären [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService)-Objekten zurück, die von dem Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
