---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
l10n:
  sourceCommit: 167995d99581b23663efd975c8cf68659f901307
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGATTDescriptor`-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) stellt einen GATT-Descriptor bereit, der weitere Informationen über den Wert eines Merkmals liefert.

## Instanzeigenschaften

- {{DOMxRef("BluetoothRemoteGATTDescriptor.characteristic")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die {{DOMxRef("BluetoothRemoteGATTCharacteristic")}} zurück, zu der dieser Descriptor gehört.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die UUID des Merkmalsdescriptors zurück, zum Beispiel '`00002902-0000-1000-8000-00805f9b34fb`' für den „Client Characteristic Configuration“-Descriptor.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuell zwischengespeicherten Descriptorwert zurück. Dieser Wert wird aktualisiert, wenn der Wert des Descriptors gelesen wird.

## Instanzmethoden

- {{DOMxRef("BluetoothRemoteGATTDescriptor.readValue()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das auf ein {{JSxRef("ArrayBuffer")}} aufgelöst wird, das eine Kopie der `value`-Eigenschaft enthält, falls verfügbar und unterstützt. Andernfalls wird ein Fehler ausgelöst.
- {{DOMxRef("BluetoothRemoteGATTDescriptor.writeValue()")}} {{Experimental_Inline}}
  - : Setzt die Eigenschaft `value` auf die in einem {{JSxRef("ArrayBuffer")}} enthaltenen Bytes und gibt ein {{JSxRef("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
