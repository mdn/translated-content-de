---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGATTCharacteristic` Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert eine GATT-Charakteristik, die ein grundlegendes Datenelement darstellt und weitere Informationen über den Dienst eines Peripheriegeräts bietet.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BluetoothRemoteGATTCharacteristic.service`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/service) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, zu dem diese Charakteristik gehört.
- [`BluetoothRemoteGATTCharacteristic.uuid`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die die UUID der Charakteristik enthält, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für die Herzfrequenzmesscharakteristik.
- [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Eigenschaften dieser Charakteristik zurück.
- [`BluetoothRemoteGATTCharacteristic.value`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der aktuell zwischengespeicherte Charakteristikwert. Dieser Wert wird aktualisiert, wenn der Wert der Charakteristik gelesen oder über eine Benachrichtigung oder Anzeige aktualisiert wird.

## Instanzmethoden

- [`BluetoothRemoteGATTCharacteristic.getDescriptor()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das in der ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Deskriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.getDescriptors()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das in einem {{JSxRef("Array")}} aller [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)-Objekte für eine gegebene Deskriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("DataView")}} führt, das eine Kopie der `value` Eigenschaft enthält, wenn sie verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTCharacteristic.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue) {{Deprecated_Inline}} {{experimental_inline}}
  - : Setzt die `value` Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) {{Experimental_Inline}}
  - : Setzt die `value` Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse) {{Experimental_Inline}}
  - : Setzt die `value` Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert ohne Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.startNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` zum aktiven Benachrichtigungskontext hinzugefügt wird.
- [`BluetoothRemoteGATTCharacteristic.stopNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` aus dem aktiven Benachrichtigungskontext entfernt wird.

## Ereignisse

- [`characteristicvaluechanged`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/characteristicvaluechanged_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich der Wert einer `BluetoothRemoteGATTCharacteristic` ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
