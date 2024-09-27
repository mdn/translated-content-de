---
title: BluetoothCharacteristicProperties
slug: Web/API/BluetoothCharacteristicProperties
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`BluetoothCharacteristicProperties`**-Schnittstelle der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) stellt die Operationen bereit, die für die gegebene [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) zulässig sind.

Diese Schnittstelle wird durch den Aufruf von [`BluetoothRemoteGATTCharacteristic.properties`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/properties) zurückgegeben.

## Instanzeigenschaften

- [`authenticatedSignedWrites`](/de/docs/Web/API/BluetoothCharacteristicProperties/authenticatedSignedWrites) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn signiertes Schreiben des Charakteristikwerts erlaubt ist.
- [`broadcast`](/de/docs/Web/API/BluetoothCharacteristicProperties/broadcast) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn die Übertragung des Charakteristikwerts mit dem Server Characteristic Configuration Descriptor erlaubt ist.
- [`indicate`](/de/docs/Web/API/BluetoothCharacteristicProperties/indicate) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn die Anzeigen des Charakteristikwerts mit Bestätigung erlaubt sind.
- [`notify`](/de/docs/Web/API/BluetoothCharacteristicProperties/notify) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn Benachrichtigungen des Charakteristikwerts ohne Bestätigung erlaubt sind.
- [`read`](/de/docs/Web/API/BluetoothCharacteristicProperties/read) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Lesen des Charakteristikwerts erlaubt ist.
- [`reliableWrite`](/de/docs/Web/API/BluetoothCharacteristicProperties/reliableWrite) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben auf die Charakteristik erlaubt ist.
- [`writableAuxiliaries`](/de/docs/Web/API/BluetoothCharacteristicProperties/writableAuxiliaries) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn zuverlässiges Schreiben auf den Charakteristik-Deskriptor erlaubt ist.
- [`write`](/de/docs/Web/API/BluetoothCharacteristicProperties/write) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben auf die Charakteristik mit Antwort erlaubt ist.
- [`writeWithoutResponse`](/de/docs/Web/API/BluetoothCharacteristicProperties/writeWithoutResponse) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen `boolean` zurück, der `true` ist, wenn das Schreiben auf die Charakteristik ohne Antwort erlaubt ist.

## Beispiele

Das folgende Beispiel zeigt, wie man feststellen kann, ob eine GATT-Charakteristik unterstützte Wertänderungsbenachrichtigungen bietet.

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
