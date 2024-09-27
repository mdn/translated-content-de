---
title: BluetoothUUID
slug: Web/API/BluetoothUUID
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("Bluetooth API")}}

Die **`BluetoothUUID`**-Schnittstelle der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) bietet eine Möglichkeit, Universally Unique Identifier (UUID)-Werte nach Namen in dem von der Bluetooth SIG verwalteten [Register](https://www.bluetooth.com/specifications/assigned-numbers/) nachzuschlagen.

## Beschreibung

Ein UUID-String ist ein 128-Bit-UUID, zum Beispiel `00001818-0000-1000-8000-00805f9b34fb`.
Das Bluetooth-Register enthält Listen von Deskriptoren, Diensten und Merkmalen, die durch diese UUIDs identifiziert werden, zusätzlich zu einem 16- oder 32-Bit-Alias und einem Namen.

Die `BluetoothUUID`-Schnittstelle bietet Methoden, um diese 128-Bit-UUIDs abzurufen.

## Statische Methoden

- [`BluetoothUUID.canonicalUUID()`](/de/docs/Web/API/BluetoothUUID/canonicalUUID_static) {{Experimental_Inline}}
  - : Gibt die 128-Bit-UUID zurück, wenn der 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getCharacteristic()`](/de/docs/Web/API/BluetoothUUID/getCharacteristic_static) {{Experimental_Inline}}
  - : Gibt die 128-Bit-UUID zurück, die ein registriertes Merkmal darstellt, wenn ein Name oder der 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getDescriptor()`](/de/docs/Web/API/BluetoothUUID/getDescriptor_static) {{Experimental_Inline}}
  - : Gibt eine UUID zurück, die einen registrierten Deskriptor darstellt, wenn ein Name oder der 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getService()`](/de/docs/Web/API/BluetoothUUID/getService_static) {{Experimental_Inline}}
  - : Gibt eine UUID zurück, die einen registrierten Dienst darstellt, wenn ein Name oder der 16- oder 32-Bit-UUID-Alias übergeben wird.

## Beispiele

Im folgenden Beispiel wird die UUID zurückgegeben und in der Konsole ausgegeben, die den Dienst mit dem Namen `device_information` darstellt.

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
