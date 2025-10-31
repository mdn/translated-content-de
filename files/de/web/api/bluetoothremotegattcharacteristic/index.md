---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGattCharacteristic` Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert ein GATT-Charakteristikum, welches ein grundlegendes Datenelement ist, das weitere Informationen über einen Dienst eines Peripheriegeräts bereitstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`BluetoothRemoteGATTCharacteristic.service`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/service) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, zu dem dieses Charakteristikum gehört.
- [`BluetoothRemoteGATTCharacteristic.uuid`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String mit der UUID des Charakteristikums zurück, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für das Herzfrequenzmessungs-Charakteristikum.
- [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Eigenschaften dieses Charakteristikums zurück.
- [`BluetoothRemoteGATTCharacteristic.value`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der aktuell zwischengespeicherte Wert des Charakteristikums. Dieser Wert wird aktualisiert, wenn der Wert des Charakteristikums durch Lesen oder Aktualisieren über eine Benachrichtigung oder Indikation gelesen oder aktualisiert wird.

## Instanz-Methoden

- [`BluetoothRemoteGATTCharacteristic.getDescriptor()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zum ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.getDescriptors()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("Array")}} aller [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)-Objekte für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("DataView")}} aufgelöst wird, das eine Kopie der `value`-Eigenschaft enthält, wenn sie verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTCharacteristic.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue) {{Deprecated_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes in einem gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristikumwert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes in einem gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristikumwert mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes in einem gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristikumwert ohne Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.startNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` dem aktiven Benachrichtigungskontext hinzugefügt wird.
- [`BluetoothRemoteGATTCharacteristic.stopNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` aus dem aktiven Benachrichtigungskontext entfernt wird.

## Ereignisse

- [`characteristicvaluechanged`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/characteristicvaluechanged_event) {{Experimental_Inline}}
  - : Wird auf einem `BluetoothRemoteGATTCharacteristic` ausgelöst, wenn sich dessen Wert ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
