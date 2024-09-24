---
title: BluetoothCharacteristicProperties
slug: Web/API/BluetoothCharacteristicProperties
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`BluetoothCharacteristicProperties`** Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) stellt die Operationen bereit, die für das gegebene {{domxref('BluetoothRemoteGATTCharacteristic')}} gültig sind.

Dieses Interface wird zurückgegeben, indem man {{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}} aufruft.

## Instanz-Eigenschaften

- {{DOMxRef("BluetoothCharacteristicProperties.authenticatedSignedWrites","authenticatedSignedWrites")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn signiertes Schreiben des Charakteristikwertes erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.broadcast", "broadcast")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn die Übertragung des Charakteristikwertes unter Verwendung des Server Characteristic Configuration Descriptors erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.indicate","indicate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn Hinweise auf den Charakteristikwert mit Bestätigung erlaubt sind.
- {{DOMxRef("BluetoothCharacteristicProperties.notify","notify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn Benachrichtigungen über den Charakteristikwert ohne Bestätigung erlaubt sind.
- {{DOMxRef("BluetoothCharacteristicProperties.read", "read")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Lesen des Charakteristikwertes erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.reliableWrite","reliableWrite")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben des Charakteristikwertes erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.writableAuxiliaries","writableAuxiliaries")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben zu den Charakteristikbeschreibern erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.write","write")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben an die Charakteristik mit Antwort erlaubt ist.
- {{DOMxRef("BluetoothCharacteristicProperties.writeWithoutResponse","writeWithoutResponse")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben an die Charakteristik ohne Antwort erlaubt ist.

## Beispiele

Das folgende Beispiel zeigt, wie Sie feststellen können, ob eine GATT-Charakteristik Änderungen des Wertes unterstützt.

```js
let device = await navigator.bluetooth.requestDevice({
  filters: [{ services: ["heart_rate"] }],
});
let gatt = await device.gatt.connect();
let service = await gatt.getPrimaryService("heart_rate");
let characteristic = await service.getCharacteristic("heart_rate_measurement");
if (characteristic.properties.notify) {
  characteristic.addEventListener(
    "characteristicvaluechanged",
    async (event) => {
      console.log(`Received heart rate measurement: ${event.target.value}`);
    },
  );
  await characteristic.startNotifications();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
