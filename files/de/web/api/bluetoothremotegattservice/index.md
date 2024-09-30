---
title: BluetoothRemoteGATTService
slug: Web/API/BluetoothRemoteGATTService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGATTService`-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird, einschließlich eines Geräts, einer Liste referenzierter Dienste und einer Liste der Merkmale dieses Dienstes.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BluetoothRemoteGATTService.device`](/de/docs/Web/API/BluetoothRemoteGATTService/device) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Informationen über ein Bluetooth-Gerät durch eine Instanz von [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice) zurück.
- [`BluetoothRemoteGATTService.isPrimary`](/de/docs/Web/API/BluetoothRemoteGATTService/isPrimary) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dies ein primärer oder ein sekundärer Dienst ist.
- [`BluetoothRemoteGATTService.uuid`](/de/docs/Web/API/BluetoothRemoteGATTService/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die UUID dieses Dienstes repräsentiert.

## Instanzmethoden

- [`BluetoothRemoteGATTService.getCharacteristic()`](/de/docs/Web/API/BluetoothRemoteGATTService/getCharacteristic) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zu einer Instanz von [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) für eine gegebene universell eindeutige Kennung (UUID) zurück.
- [`BluetoothRemoteGATTService.getCharacteristics()`](/de/docs/Web/API/BluetoothRemoteGATTService/getCharacteristics) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zu einem {{jsxref("Array")}} von [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Instanzen für eine optionale universell eindeutige Kennung (UUID) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
