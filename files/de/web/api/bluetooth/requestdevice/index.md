---
title: "Bluetooth: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/Bluetooth/requestDevice
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`Bluetooth.requestDevice()`**-Methode der [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice) erfüllt wird, das den angegebenen Optionen entspricht. Wenn keine Auswahl-UI vorhanden ist, gibt diese Methode das erste Gerät zurück, das den Kriterien entspricht.

## Syntax

```js-nolint
requestDevice()
requestDevice(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen für die Auswahl eines geeigneten Geräts festlegt. Die verfügbaren Optionen sind:

    - `filters` {{optional_inline}}

      - : Ein Array von Filterobjekten, das die Eigenschaften von Geräten angibt, die übereinstimmen müssen. Um mit einem Filterobjekt übereinzustimmen, muss ein Gerät alle Werte des Filters erfüllen: alle angegebenen `services`, `name`, `namePrefix` usw.

        Jeder Filter besteht aus einem Array von Objekten mit den folgenden Eigenschaften:

        - `services` {{optional_inline}}

          - : Ein Array von Werten, das die Bluetooth-GATT-Dienste (Generic Attribute Profile) angibt, die ein Bluetooth-Gerät unterstützen muss. Jeder Wert kann ein gültiger Name aus der [GATT-zugewiesene Diensteliste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein, wie `'battery_service'` oder `'blood_pressure'`. Sie können auch eine vollständige Dienst-UUID wie `'0000180F-0000-1000-8000-00805f9b34fb'` oder das kurze 16-Bit (`0x180F`) oder 32-Bit-Alias angeben. Beachten Sie, dass dies dieselben Werte sind, die an [`BluetoothUUID.getService()`](/de/docs/Web/API/BluetoothUUID/getService_static) übergeben werden können.

        - `name` {{optional_inline}}
          - : Ein String, der den genauen Namen des Geräts enthält, mit dem abgeglichen werden soll.
        - `namePrefix` {{optional_inline}}
          - : Ein String, der das Namenspräfix enthält, mit dem abgeglichen werden soll. Alle Geräte, deren Name mit diesem String beginnt, werden abgeglichen.
        - `manufacturerData` {{optional_inline}}

          - : Ein Array von Objekten, das mit Herstellerdaten in den Bluetooth Low Energy (BLE) Werbepaketen übereinstimmt. <!-- BluetoothManufacturerDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:

            - `companyIdentifier`
              - : Eine obligatorische Zahl, die den Hersteller des Geräts identifiziert. Unternehmenskennungen sind in der Bluetooth-Spezifikation [Zugewiesene Nummern](https://www.bluetooth.com/specifications/assigned-numbers/), Abschnitt 7, aufgeführt. Zum Beispiel, um mit Geräten abzugleichen, die von "Digianswer A/S" hergestellt wurden, mit der zugewiesenen Hex-Zahl `0x000C`, würden Sie `12` angeben.
            - `dataPrefix` {{optional_inline}}
              - : Das Datenpräfix. Ein Puffer mit Werten, die mit den Werten am Anfang der Werbe-Herstellerdaten abgeglichen werden sollen.
            - `mask` {{optional_inline}}
              - : Damit können Sie mit Bytes aus den Herstellerdaten abgleichen, indem einige Bytes der Service-Daten `dataPrefix` maskiert werden.

        - `serviceData` {{optional_inline}} <!-- BluetoothServiceDataFilterInit -->

          - : Ein Array von Objekten, das mit Servicedaten in den Bluetooth Low Energy (BLE) Werbepaketen übereinstimmt.<!-- BluetoothServiceDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:

            - `service`
              - : Der GATT-Dienstname, die Dienst-UUID oder die UUID-16-Bit- oder 32-Bit-Form. Dies nimmt dieselben Werte an wie die Elemente des [`services`](#services)-Arrays.
            - `dataPrefix` {{optional_inline}}
              - : Das Datenpräfix. Ein Puffer mit Werten, die mit den Werten am Anfang der Werbe-Servicedaten abgeglichen werden sollen.
            - `mask` {{optional_inline}}
              - : Damit können Sie mit Bytes aus den Servicedaten abgleichen, indem einige Bytes der Service-Daten `dataPrefix` maskiert werden.

    - `exclusionFilters` {{optional_inline}}
      - : Ein Array von Filterobjekten, das die Eigenschaften von Geräten angibt, die vom Abgleich ausgeschlossen werden. Die Eigenschaften der Array-Elemente sind dieselben wie für [`filters`](#filters).
    - `optionalServices` {{optional_inline}}

      - : Ein Array optionaler Dienstkennungen.

        Die Kennungen nehmen dieselben Werte an wie die Elemente des [`services`](#services)-Arrays (ein GATT-Dienstname, Dienst-UUID oder UUID 16-Bit- oder 32-Bit-Form).

    - `optionalManufacturerData` {{optional_inline}}

      - : Ein optionales Array von Herstellercodes als Ganzzahlen. Dies nimmt dieselben Werte an wie [`companyIdentifier`](#companyidentifier).

        Die Daten werden nicht zum Filtern der Geräte verwendet, aber Anzeigen, die mit dem angegebenen Set übereinstimmen, werden dennoch in `advertisementreceived`-Ereignissen geliefert. Dies ist nützlich, da es ermöglicht, ein Interesse an empfangenen Daten von Bluetooth-Geräten ohne Einschränkung des Filters anzugeben, der steuert, welche Geräte dem Benutzer in der Berechtigungsabfrage präsentiert werden.

    - `acceptAllDevices` {{optional_inline}}

      - : Ein boolescher Wert, der angibt, dass das anfordernde Skript alle Bluetooth-Geräte akzeptieren kann. Der Standard ist `false`.

        Diese Option ist geeignet, wenn Geräte nicht genügend Informationen bereitgestellt haben, um das Filtern nützlich zu machen. Wenn `acceptAllDevices` auf `true` gesetzt ist, sollten Sie alle [`filters`](#filters) und [`exclusionFilters`](#exclusionfilters) weglassen und Sie müssen [`optionalServices`](#optionalservices) festlegen, um das zurückgegebene Gerät _nutzen_ zu können.

Nachdem der Benutzer ein Gerät zur Kopplung im aktuellen Ursprung ausgewählt hat, ist der Zugriff nur auf Dienste gestattet, deren UUID in der Dienstliste eines Elements von [`filters.services`](#services) oder in [`optionalServices`](#optionalservices) aufgeführt war. Daher ist es wichtig, die erforderlichen Dienste aufzulisten. Insbesondere, wenn Sie nur mit [`name`](#name) filtern, müssen Sie auch die gewünschten Dienste in [`optionalServices`](#optionalservices) angeben.

> [!NOTE]
> Obwohl das `options`-Argument technisch optional ist, müssen Sie, um Ergebnisse zu erhalten, entweder einen Wert für `filters` festlegen oder `acceptAllDevices` auf `true` setzen.

### Rückgabewert

Ein {{jsxref("Promise")}} zu einem [`BluetoothDevice`](/de/docs/Web/API/BluetoothDevice)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellten `options` keinen Sinn ergeben. Beispielsweise, wenn `options.filters` vorhanden ist und `options.acceptAllDevices` `true` ist, `options.filters` nicht vorhanden ist und `options.acceptAllDevices` `false` ist oder `options.filters` `[]` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es kein Bluetooth-Gerät gibt, das den angegebenen Optionen entspricht.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieser Vorgang in diesem Kontext aufgrund von [Sicherheitsbedenken](/de/docs/Web/API/Web_Bluetooth_API#security_considerations) nicht gestattet ist, z. B. wenn er von einem unsicheren Ursprung aufgerufen wird.

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
