---
title: BluetoothCharacteristicProperties
slug: Web/API/BluetoothCharacteristicProperties
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Das **`BluetoothCharacteristicProperties`**-Interface der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet die Operationen, die für das gegebene [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) gültig sind.

Dieses Interface wird zurückgegeben, indem [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) aufgerufen wird.

## Instanz-Eigenschaften

- [`authenticatedSignedWrites`](/de/docs/Web/API/BluetoothCharacteristicProperties/authenticatedSignedWrites) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das signierte Schreiben des Characteristic-Werts erlaubt ist.
- [`broadcast`](/de/docs/Web/API/BluetoothCharacteristicProperties/broadcast) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Broadcasten des Characteristic-Werts mittels des Server Characteristic Configuration Descriptors erlaubt ist.
- [`indicate`](/de/docs/Web/API/BluetoothCharacteristicProperties/indicate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn Angabe des Characteristic-Werts mit Bestätigung erlaubt ist.
- [`notify`](/de/docs/Web/API/BluetoothCharacteristicProperties/notify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn Benachrichtigungen des Characteristic-Werts ohne Bestätigung erlaubt sind.
- [`read`](/de/docs/Web/API/BluetoothCharacteristicProperties/read) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Lesen des Characteristic-Werts erlaubt ist.
- [`reliableWrite`](/de/docs/Web/API/BluetoothCharacteristicProperties/reliableWrite) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben zum Characteristic erlaubt ist.
- [`writableAuxiliaries`](/de/docs/Web/API/BluetoothCharacteristicProperties/writableAuxiliaries) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben zum Characteristic-Descriptor erlaubt ist.
- [`write`](/de/docs/Web/API/BluetoothCharacteristicProperties/write) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben zum Characteristic mit Antwort erlaubt ist.
- [`writeWithoutResponse`](/de/docs/Web/API/BluetoothCharacteristicProperties/writeWithoutResponse) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben zum Characteristic ohne Antwort erlaubt ist.

## Beispiele

Das folgende Beispiel zeigt, wie man feststellt, ob ein GATT-Charakteristikum Benachrichtigungen bei Wertänderungen unterstützt.

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
