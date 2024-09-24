---
title: BluetoothRemoteGATTServer
slug: Web/API/BluetoothRemoteGATTServer
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTServer`**-Schnittstelle der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert einen GATT-Server auf einem entfernten Gerät.

## Instanz-Eigenschaften

- {{DOMxRef("BluetoothRemoteGATTServer.connected")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der true zurückgibt, solange diese Skriptausführungsumgebung mit `this.device` verbunden ist. Es kann false sein, während der Benutzeragent physisch verbunden ist.
- {{DOMxRef("BluetoothRemoteGATTServer.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Referenz auf das {{DOMxRef("BluetoothDevice")}}, das den Server ausführt.

## Instanz-Methoden

- {{DOMxRef("BluetoothRemoteGATTServer.connect()")}} {{Experimental_Inline}}
  - : Veranlasst die Skriptausführungsumgebung, sich mit `this.device` zu verbinden.
- {{DOMxRef("BluetoothRemoteGATTServer.disconnect()")}} {{Experimental_Inline}}
  - : Veranlasst die Skriptausführungsumgebung, die Verbindung zu `this.device` zu trennen.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryService()")}} {{Experimental_Inline}}
  - : Gibt ein Versprechen auf den primären {{DOMxRef("BluetoothRemoteGATTService")}} zurück, der vom Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten wird.
- {{DOMxRef("BluetoothRemoteGATTServer.getPrimaryServices()")}} {{Experimental_Inline}}
  - : Gibt ein Versprechen auf eine Liste von primären {{DOMxRef("BluetoothRemoteGATTService")}}-Objekten zurück, die vom Bluetooth-Gerät für eine bestimmte `BluetoothServiceUUID` angeboten werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
