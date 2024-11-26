---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGattCharacteristic`-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert eine GATT-Charakteristik, die ein grundlegendes Datenelement ist und weitere Informationen über den Dienst eines Peripheriegeräts bereitstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`BluetoothRemoteGATTCharacteristic.service`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/service) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`BluetoothRemoteGATTService`](/de/docs/Web/API/BluetoothRemoteGATTService) zurück, zu dem diese Charakteristik gehört.
- [`BluetoothRemoteGATTCharacteristic.uuid`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/uuid) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die UUID der Charakteristik enthält, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für die Herzfrequenzmessungs-Charakteristik.
- [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Eigenschaften dieser Charakteristik zurück.
- [`BluetoothRemoteGATTCharacteristic.value`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/value) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der derzeit zwischengespeicherte Wert der Charakteristik. Dieser Wert wird aktualisiert, wenn der Wert der Charakteristik gelesen oder über eine Benachrichtigung oder eine Indikation aktualisiert wird.

## Instanzmethoden

- [`BluetoothRemoteGATTCharacteristic.getDescriptor()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das beim ersten [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor) für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.getDescriptors()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("Array")}} aller [`BluetoothRemoteGATTDescriptor`](/de/docs/Web/API/BluetoothRemoteGATTDescriptor)-Objekte für eine gegebene Descriptor-UUID aufgelöst wird.
- [`BluetoothRemoteGATTCharacteristic.readValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/readValue) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("DataView")}} aufgelöst wird, das eine Kopie der `value`-Eigenschaft enthält, wenn diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.
- [`BluetoothRemoteGATTCharacteristic.writeValue()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValue) {{Deprecated_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse) {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert ohne Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.
- [`BluetoothRemoteGATTCharacteristic.startNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/startNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` zum aktiven Benachrichtigungskontext hinzugefügt wird.
- [`BluetoothRemoteGATTCharacteristic.stopNotifications()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications) {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das aufgelöst wird, wenn `navigator.bluetooth` aus dem aktiven Benachrichtigungskontext entfernt wird.

## Ereignisse

- [`characteristicvaluechanged`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/characteristicvaluechanged_event) {{Experimental_Inline}}
  - : Wird bei einer `BluetoothRemoteGATTCharacteristic` ausgelöst, wenn sich deren Wert ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
