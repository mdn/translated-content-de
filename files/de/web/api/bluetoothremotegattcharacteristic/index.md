---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das `BluetoothRemoteGattCharacteristic`-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) repräsentiert eine GATT-Charakteristik, die ein grundlegendes Datenelement ist und weitere Informationen über den Dienst eines Peripheriegeräts bereitstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.service")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den {{DOMxRef("BluetoothRemoteGATTService")}} zurück, zu dem diese Charakteristik gehört.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zeichenkette zurück, die die UUID der Charakteristik enthält, zum Beispiel `'00002a37-0000-1000-8000-00805f9b34fb'` für die Herzfrequenzmessung-Charakteristik.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Eigenschaften dieser Charakteristik zurück.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der aktuell zwischengespeicherte Charakteristik-Wert. Dieser Wert wird aktualisiert, wenn der Wert der Charakteristik durch eine Benachrichtigung oder Anzeige gelesen oder aktualisiert wird.

## Instanzmethoden

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptor()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zum ersten {{DOMxRef("BluetoothRemoteGATTDescriptor")}} für eine gegebene Deskriptor-UUID führt.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptors()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("Array")}} aller {{DOMxRef("BluetoothRemoteGATTDescriptor")}}-Objekte für eine gegebene Deskriptor-UUID führt.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.readValue()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das zu einem {{JSxRef("DataView")}} führt, der eine Kopie der `value`-Eigenschaft enthält, sofern sie verfügbar und unterstützbar ist. Andernfalls wird ein Fehler ausgelöst.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValue()")}} {{Deprecated_Inline}} {{experimental_inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes eines gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristik-Wert mit optionaler Rückmeldung](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()")}} {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes eines gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristik-Wert mit erforderlicher Rückmeldung](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}} {{Experimental_Inline}}
  - : Setzt die `value`-Eigenschaft auf die Bytes eines gegebenen {{JSxRef("ArrayBuffer")}}, [schreibt den Charakteristik-Wert ohne Rückmeldung](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.startNotifications()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das ausgeführt wird, wenn `navigator.bluetooth` dem aktiven Benachrichtigungskontext hinzugefügt wird.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.stopNotifications()")}} {{Experimental_Inline}}
  - : Gibt ein {{JSxRef("Promise")}} zurück, das ausgeführt wird, wenn `navigator.bluetooth` aus dem aktiven Benachrichtigungskontext entfernt wird.

## Ereignisse

- {{DOMxRef("BluetoothRemoteGATTCharacteristic/characteristicvaluechanged_event", "characteristicvaluechanged")}} {{Experimental_Inline}}
  - : Wird bei einer `BluetoothRemoteGATTCharacteristic` ausgelöst, wenn sich ihr Wert ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
