---
title: BluetoothRemoteGATTService
slug: Web/API/BluetoothRemoteGATTService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGATTService`-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert einen Dienst, der von einem GATT-Server bereitgestellt wird. Dazu gehören ein Gerät, eine Liste der referenzierten Dienste und eine Liste der Merkmale dieses Dienstes.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("BluetoothRemoteGATTService.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Informationen über ein Bluetooth-Gerät über eine Instanz von {{domxref("BluetoothDevice")}} zurück.
- {{domxref("BluetoothRemoteGATTService.isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dies ein primärer oder sekundärer Dienst ist.
- {{domxref("BluetoothRemoteGATTService.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die UUID dieses Dienstes repräsentiert.

## Instanzmethoden

- {{domxref("BluetoothRemoteGATTService.getCharacteristic()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} auf eine Instanz von {{domxref("BluetoothRemoteGATTCharacteristic")}} für einen gegebenen universell eindeutigen Bezeichner (UUID) zurück.
- {{domxref("BluetoothRemoteGATTService.getCharacteristics()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} auf ein {{jsxref("Array")}} von {{domxref("BluetoothRemoteGATTCharacteristic")}}-Instanzen für einen optionalen universell eindeutigen Bezeichner (UUID) zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
