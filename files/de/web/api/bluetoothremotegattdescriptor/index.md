---
title: BluetoothRemoteGATTDescriptor
slug: Web/API/BluetoothRemoteGATTDescriptor
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGATTDescriptor` Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) stellt einen GATT Deskriptor bereit,
der weitere Informationen über den Wert einer Charakteristik liefert.

## Instanz-Eigenschaften

- [`BluetoothRemoteGATTDescriptor.characteristic`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/characteristic) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) zurück, zu der dieser Deskriptor gehört.
- [`BluetoothRemoteGATTDescriptor.uuid`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die UUID des Charakteristik-Deskriptors zurück, zum Beispiel `"00002902-0000-1000-8000-00805f9b34fb"` für den
    Client Characteristic Configuration Deskriptor.
- [`BluetoothRemoteGATTDescriptor.value`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den aktuell zwischengespeicherten Wert des Deskriptors zurück. Dieser Wert wird aktualisiert, wenn der Wert des Deskriptors gelesen wird.

## Instanz-Methoden

- [`BluetoothRemoteGATTDescriptor.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das auf ein {{JSxRef("ArrayBuffer")}} aufgelöst wird, das ein Duplikat der `value`-Eigenschaft enthält,
    wenn es verfügbar und unterstützt wird. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTDescriptor.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor/writeValue) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem {{JSxRef("ArrayBuffer")}} enthalten sind und gibt ein {{JSxRef("Promise")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
