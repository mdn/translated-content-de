---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGattCharacteristic` Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert ein GATT Characteristic, welches ein grundlegendes Datenelement darstellt, das weitere Informationen über einen Dienst eines Peripheriegeräts liefert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`BluetoothRemoteGATTCharacteristic.service`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/service) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, zu dem dieses Merkmal gehört.
- [`BluetoothRemoteGATTCharacteristic.uuid`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die UUID des Merkmals enthält, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für das Merkmal der Herzfrequenzmessung.
- [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Eigenschaften dieses Merkmals zurück.
- [`BluetoothRemoteGATTCharacteristic.value`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der aktuell zwischengespeicherte Wert des Merkmals. Dieser Wert wird aktualisiert, wenn der Wert des Merkmals gelesen oder über eine Benachrichtigung oder Indikation aktualisiert wird.

## Instanz-Methoden

- [`BluetoothRemoteGATTCharacteristic.getDescriptor()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zum ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.getDescriptors()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, welches zu einem {{JSxRef("Array")}} aller [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) Objekte für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("DataView")}} aufgelöst wird, der eine Kopie der `value`-Eigenschaft enthält, falls verfügbar und unterstützbar. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTCharacteristic.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue) {{Deprecated_Inline}} {{experimental_inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Wert des Merkmals mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Wert des Merkmals mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Wert des Merkmals ohne Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.startNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` zum aktiven Benachrichtigungskontext hinzugefügt wird.
- [`BluetoothRemoteGATTCharacteristic.stopNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` aus dem aktiven Benachrichtigungskontext entfernt wird.

## Ereignisse

- [`characteristicvaluechanged`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/characteristicvaluechanged_event) {{Experimental_Inline}}
  - : Wird bei einem `BluetoothRemoteGATTCharacteristic` ausgelöst, wenn sich dessen Wert ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
