---
title: "Bluetooth: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/Bluetooth/requestDevice
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`Bluetooth.requestDevice()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekt erfüllt wird, das den angegebenen Optionen entspricht.
Wenn keine Auswahl-Benutzeroberfläche vorhanden ist, gibt diese Methode das erste Gerät zurück, das die Kriterien erfüllt.

## Syntax

```js-nolint
requestDevice()
requestDevice(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Optionen für die Auswahl eines geeigneten Geräts festlegt.
    Die verfügbaren Optionen sind:
    - `filters` {{optional_inline}}
      - : Ein Array von Filterobjekten, die die Eigenschaften von Geräten angeben, die übereinstimmen sollen.
        Um mit einem Filterobjekt übereinzustimmen, muss ein Gerät mit allen Werten des Filters übereinstimmen: allen angegebenen `services`, `name`, `namePrefix` usw.

        Jeder Filter besteht aus einem Array von Objekten mit den folgenden Eigenschaften:
        - `services` {{optional_inline}}
          - : Ein Array von Werten, die die Bluetooth GATT (Generic Attribute Profile) Dienste angeben, die ein Bluetooth-Gerät unterstützen muss.
            Jeder Wert kann ein gültiger Name aus der [GATT-zugeordneten Diensteliste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein, wie z.B. `'battery_service'` oder `'blood_pressure'`.
            Sie können auch eine vollständige Dienst-UUID wie `'0000180F-0000-1000-8000-00805f9b34fb'` oder den kurzen 16-Bit (`0x180F`) oder den 32-Bit-Alias übergeben.
            Beachten Sie, dass dies die gleichen Werte sind, die an [`BluetoothUUID.getService()`](/de/docs/Web/API/BluetoothUUID/getService_static) übergeben werden können.

        - `name` {{optional_inline}}
          - : Ein String, der den genauen Namen des Geräts enthält, mit dem übereingestimmt werden soll.
        - `namePrefix` {{optional_inline}}
          - : Ein String, der das Namenspräfix enthält, das übereinstimmen soll.
            Alle Geräte, die einen Namen haben, der mit diesem String beginnt, werden übereinstimmen.
        - `manufacturerData` {{optional_inline}}
          - : Ein Array von Objekten, die mit Herstellerdaten in den Bluetooth Low Energy (BLE) Werbepaketen übereinstimmen. <!-- BluetoothManufacturerDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:
            - `companyIdentifier`
              - : Eine zwingende Nummer, die den Hersteller des Geräts identifiziert.
                Unternehmenskennungen sind in den Bluetooth-Spezifikationen [Assigned numbers](https://www.bluetooth.com/specifications/assigned-numbers/), Abschnitt 7, aufgelistet.
                Um beispielsweise gegen Geräte zu filtern, die von "Digianswer A/S" hergestellt wurden, mit der zugewiesenen Hex-Nummer `0x000C`, würden Sie `12` angeben.
            - `dataPrefix` {{optional_inline}}
              - : Das Datenpräfix.
                Ein Buffer, der Werte enthält, die mit den Werten zu Beginn der Herstellerdaten übereinstimmen sollen.
            - `mask` {{optional_inline}}
              - : Damit können Sie mit Bytes innerhalb der Herstellerdaten übereinstimmen, indem einige Bytes der Servicedaten `dataPrefix` maskiert werden.

        - `serviceData` {{optional_inline}} <!-- BluetoothServiceDataFilterInit -->
          - : Ein Array von Objekten, die mit Servicedaten in den Bluetooth Low Energy (BLE) Werbepaketen übereinstimmen.<!-- BluetoothServiceDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:
            - `service`
              - : Der GATT-Dienstname, die Dienst-UUID oder die UUID im 16-Bit- oder 32-Bit-Format.
                Diese nimmt die gleichen Werte an wie die Elemente des [`services`](#services)-Arrays.
            - `dataPrefix` {{optional_inline}}
              - : Das Datenpräfix.
                Ein Buffer, der Werte enthält, die mit den Werten zu Beginn der Servicedaten übereinstimmen sollen.
            - `mask` {{optional_inline}}
              - : Damit können Sie mit Bytes innerhalb der Servicedaten übereinstimmen, indem einige Bytes der Servicedaten `dataPrefix` maskiert werden.

    - `exclusionFilters` {{optional_inline}}
      - : Ein Array von Filterobjekten, die die Eigenschaften von Geräten angeben, die von der Übereinstimmung ausgeschlossen werden.
        Die Eigenschaften der Array-Elemente sind die gleichen wie bei [`filters`](#filters).
    - `optionalServices` {{optional_inline}}
      - : Ein Array von optionalen Dienstkennungen.

        Die Kennungen nehmen die gleichen Werte an wie die Elemente des [`services`](#services)-Arrays (ein GATT-Dienstname, Dienst-UUID oder UUID-kurzer 16-Bit- oder 32-Bit-Form).

    - `optionalManufacturerData` {{optional_inline}}
      - : Ein optionales Array von Hersteller-Codes als ganze Zahlen.
        Dies nimmt die gleichen Werte an wie [`companyIdentifier`](#companyidentifier).

        Die Daten werden nicht zum Filtern der Geräte verwendet, aber Anzeigen, die mit dem angegebenen Set übereinstimmen, werden trotzdem in `advertisementreceived`-Ereignissen geliefert.
        Dies ist nützlich, weil es Code erlaubt, ein Interesse an Daten, die von Bluetooth-Geräten empfangen werden, anzugeben, ohne den Filter einzuschränken, der bestimmt, welche Geräte dem Benutzer im Berechtigungs-Prompt vorgestellt werden.

    - `acceptAllDevices` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass das anfordernde Skript alle Bluetooth-Geräte akzeptieren kann.
        Der Standardwert ist `false`.

        Diese Option ist geeignet, wenn Geräte nicht genug Informationen für ein nützliches Filtern angekündigt haben.
        Wenn `acceptAllDevices` auf `true` gesetzt ist, sollten Sie alle [`filters`](#filters) und [`exclusionFilters`](#exclusionfilters) weglassen und Sie müssen [`optionalServices`](#optionalservices) festlegen, um das zurückgegebene Gerät _verwenden_ zu können.

Nachdem der Benutzer ein Gerät zum Koppeln im aktuellen Ursprung ausgewählt hat, darf es nur auf Dienste zugreifen, deren UUID in der Diensteliste in einem Element von [`filters.services`](#services) oder in [`optionalServices`](#optionalservices) aufgeführt war.
Es ist daher wichtig, die erforderlichen Dienste aufzulisten.
Insbesondere beim Filtern nur mit [`name`](#name) müssen Sie daran denken, auch die gewünschten Dienste in [`optionalServices`](#optionalservices) anzugeben.

> [!NOTE]
> Auch wenn das Argument `options` technisch optional ist, müssen Sie, um Ergebnisse zurückzugeben, entweder einen Wert für `filters` setzen oder `acceptAllDevices` auf `true` setzen.

### Rückgabewert

Ein {{jsxref("Promise")}} zu einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die angegebenen `options` keinen Sinn ergeben.
    Zum Beispiel, wenn `options.filters` vorhanden ist und `options.acceptAllDevices` `true` ist, `options.filters` nicht vorhanden ist und `options.acceptAllDevices` `false` ist, oder `options.filters` `[]` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn es kein Bluetooth-Gerät gibt, das den angegebenen Optionen entspricht.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn diese Operation in diesem Kontext aufgrund von [Sicherheitsbedenken](/de/docs/Web/API/Web_Bluetooth_API#security_considerations) nicht erlaubt ist, wie etwa einem unsicheren Ursprung.

## Beispiele

```js
// Discovery options match any devices advertising:
// - The standard heart rate service.
// - Both 16-bit service IDs 0x1802 and 0x1803.
// - A proprietary 128-bit UUID service c48e6067-5295-48d3-8d5c-0395f61792b1.
// - Devices with name "ExampleName".
// - Devices with name starting with "Prefix".
//
// And enables access to the battery service if devices
// include it, even if devices do not advertise that service.
let options = {
  filters: [
    { services: ["heart_rate"] },
    { services: [0x1802, 0x1803] },
    { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
    { name: "ExampleName" },
    { namePrefix: "Prefix" },
  ],
  optionalServices: ["battery_service"],
};

navigator.bluetooth
  .requestDevice(options)
  .then((device) => {
    console.log(`Name: ${device.name}`);
    // Do something with the device.
  })
  .catch((error) => console.error(`Something went wrong. ${error}`));
```

[Detaillierte Beispiele](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services) finden Sie in der Spezifikation und auch in [Kommunikation mit Bluetooth-Geräten über JavaScript](https://developer.chrome.com/docs/capabilities/bluetooth) auf _developer.chrome.com_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kommunikation mit Bluetooth-Geräten über JavaScript](https://developer.chrome.com/docs/capabilities/bluetooth) auf _developer.chrome.com_.
