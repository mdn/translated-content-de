---
title: BluetoothUUID
slug: Web/API/BluetoothUUID
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Bluetooth API")}}

Die Schnittstelle **`BluetoothUUID`** der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) ermöglicht es, Werte von Universally Unique Identifiers (UUIDs) anhand ihres Namens im von der Bluetooth SIG verwalteten [Register](https://www.bluetooth.com/specifications/assigned-numbers/) nachzuschlagen.

## Statische Methoden

- [`BluetoothUUID.canonicalUUID()`](/de/docs/Web/API/BluetoothUUID/canonicalUUID_static) {{Experimental_Inline}}
  - : Gibt die 128-Bit-UUID zurück, wenn ihr ein 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getCharacteristic()`](/de/docs/Web/API/BluetoothUUID/getCharacteristic_static) {{Experimental_Inline}}
  - : Gibt die 128-Bit-UUID zurück, die eine registrierte Characteristic repräsentiert, wenn ihr ein Name oder ein 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getDescriptor()`](/de/docs/Web/API/BluetoothUUID/getDescriptor_static) {{Experimental_Inline}}
  - : Gibt eine UUID zurück, die einen registrierten Descriptor repräsentiert, wenn ihr ein Name oder ein 16- oder 32-Bit-UUID-Alias übergeben wird.
- [`BluetoothUUID.getService()`](/de/docs/Web/API/BluetoothUUID/getService_static) {{Experimental_Inline}}
  - : Gibt eine UUID zurück, die einen registrierten Service repräsentiert, wenn ihr ein Name oder ein 16- oder 32-Bit-UUID-Alias übergeben wird.

## Beschreibung

Eine UUID-Zeichenfolge ist eine 128-Bit-UUID, beispielsweise `00001818-0000-1000-8000-00805f9b34fb`.
Das Bluetooth-Register enthält Listen von Descriptors, Services und Characteristics, die durch diese UUIDs sowie durch ein 16- oder 32-Bit-Alias und einen Namen identifiziert werden.

Die Schnittstelle `BluetoothUUID` stellt Methoden zum Abrufen dieser 128-Bit-UUIDs bereit.

## Beispiele

Im folgenden Beispiel wird die UUID zurückgegeben, die den Service mit dem Namen `device_information` repräsentiert, und in der Konsole ausgegeben.

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
