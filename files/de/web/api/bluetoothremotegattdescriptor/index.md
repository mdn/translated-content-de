---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Schnittstelle `BluetoothRemoteGATTDescriptor` der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet einen GATT-Descriptor,
der weitere Informationen über den Wert eines Merkmals bereitstellt.

## Instanz-Eigenschaften

- [`BluetoothRemoteGATTDescriptor.characteristic`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) zurück, zu der dieser Descriptor gehört.
- [`BluetoothRemoteGATTDescriptor.uuid`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die UUID des Merkmals-Descriptors zurück, zum Beispiel `"00002902-0000-1000-8000-00805f9b34fb"` für den Client Characteristic Configuration Descriptor.
- [`BluetoothRemoteGATTDescriptor.value`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuell zwischengespeicherten Descriptor-Wert zurück. Dieser Wert wird aktualisiert, wenn der Wert des Descriptors gelesen wird.

## Instanz-Methoden

- [`BluetoothRemoteGATTDescriptor.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird in ein {{JSxRef("ArrayBuffer")}}, welches ein Duplikat der `value` Eigenschaft enthält, sofern diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTDescriptor.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue) {{Experimental_Inline}}
  - : Setzt die Eigenschaft `value` auf die Bytes, die in einem {{JSxRef("ArrayBuffer")}} enthalten sind, und gibt ein {{JSxRef("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
