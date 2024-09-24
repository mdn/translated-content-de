---
title: "Bluetooth: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/Bluetooth/requestDevice
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`Bluetooth.requestDevice()`**-Methode des {{domxref("Bluetooth")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("BluetoothDevice")}}-Objekt erfüllt wird, das den angegebenen Optionen entspricht.
Wenn es keine Auswahl-UI gibt, gibt diese Methode das erste Gerät zurück, das den Kriterien entspricht.

## Syntax

```js-nolint
requestDevice()
requestDevice(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das Optionen zum Auswählen eines geeigneten Geräts festlegt.
    Die verfügbaren Optionen sind:

    - `filters` {{optional_inline}}

      - : Ein Array von Filterobjekten, das die Eigenschaften von Geräten angibt, die abgeglichen werden sollen.
        Um einem Filterobjekt zu entsprechen, muss ein Gerät alle Werte des Filters erfüllen: alle angegebenen `services`, `name`, `namePrefix` usw.

        Jeder Filter besteht aus einem Array von Objekten mit folgenden Eigenschaften:

        - `services` {{optional_inline}}

          - : Ein Array von Werten, die die Bluetooth GATT (Generic Attribute Profile) Dienste angeben, die ein Bluetooth-Gerät unterstützen muss.
            Jeder Wert kann ein gültiger Name aus der [GATT-zugewiesenen Dienstliste](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein, wie z.B. `'battery_service'` oder `'blood_pressure'`.
            Sie können auch eine vollständige Dienst-UUID wie `'0000180F-0000-1000-8000-00805f9b34fb'` oder den kurzen 16-Bit (`0x180F`) oder 32-Bit-Alias verwenden.
            Beachten Sie, dass dies dieselben Werte sind, die an {{domxref("BluetoothUUID/getService_static","BluetoothUUID.getService()")}} übergeben werden können.

        - `name` {{optional_inline}}
          - : Ein String, der den genauen Namen des Geräts enthält, gegen den abgeglichen werden soll.
        - `namePrefix` {{optional_inline}}
          - : Ein String, der den Namenspräfix enthält, gegen den abgeglichen werden soll.
            Alle Geräte, deren Name mit diesem String beginnt, werden abgeglichen.
        - `manufacturerData` {{optional_inline}}

          - : Ein Array von Objekten, das gegen Herstellerdaten in den Bluetooth Low Energy (BLE) Werbepaketen abgeglichen wird. <!-- BluetoothManufacturerDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:

            - `companyIdentifier`
              - : Eine obligatorische Nummer, die den Hersteller des Geräts identifiziert.
                Unternehmenskennungen sind in der Bluetooth-Spezifikation in den [zugewiesenen Nummern](https://www.bluetooth.com/specifications/assigned-numbers/), Abschnitt 7, aufgeführt.
                Zum Beispiel, um gegen Geräte des Herstellers "Digianswer A/S" mit der zugewiesenen Hexzahl `0x000C` abzugleichen, würden Sie `12` angeben.
            - `dataPrefix` {{optional_inline}}
              - : Der Datenpräfix.
                Ein Puffer, der Werte enthält, gegen die die Werte am Anfang der Werbeherstellerdaten abgeglichen werden.
            - `mask` {{optional_inline}}
              - : Dadurch können Sie gegen Bytes innerhalb der Herstellerdaten abgleichen, indem Sie einige Bytes der Servicedaten `dataPrefix` maskieren.

        - `serviceData` {{optional_inline}} <!-- BluetoothServiceDataFilterInit -->

          - : Ein Array von Objekten, das gegen Servicedaten in den Bluetooth Low Energy (BLE) Werbepaketen abgeglichen wird.<!-- BluetoothServiceDataFilterInit -->
            Jedes Filterobjekt hat die folgenden Eigenschaften:

            - `service`
              - : Der GATT-Dienstname, die Dienst-UUID oder die UUID in 16-Bit- oder 32-Bit-Form.
                Dies nimmt dieselben Werte wie die Elemente des [`services`](#services) Arrays an.
            - `dataPrefix` {{optional_inline}}
              - : Der Datenpräfix.
                Ein Puffer, der Werte enthält, gegen die die Werte am Anfang der Werbeservicedaten abgeglichen werden.
            - `mask` {{optional_inline}}
              - : Dadurch können Sie gegen Bytes innerhalb der Servicedaten abgleichen, indem Sie einige Bytes der Servicedaten `dataPrefix` maskieren.

    - `exclusionFilters` {{optional_inline}}
      - : Ein Array von Filterobjekten, das die Eigenschaften von Geräten angibt, die von der Übereinstimmung ausgeschlossen werden sollen.
        Die Eigenschaften der Array-Elemente sind dieselben wie für [`filters`](#filters).
    - `optionalServices` {{optional_inline}}

      - : Ein Array von optionalen Dienstkennungen.

        Die Kennungen nehmen dieselben Werte wie die Elemente des [`services`](#services) Arrays an (ein GATT-Dienstname, Dienst-UUID oder UUID in kurzer 16-Bit- oder 32-Bit-Form).

    - `optionalManufacturerData` {{optional_inline}}

      - : Ein optionales Array von ganzzahligen Hersteller-Codes.
        Dies nimmt dieselben Werte wie [`companyIdentifier`](#companyidentifier) an.

        Die Daten werden nicht zum Filtern der Geräte verwendet, aber Werbemitteilungen, die mit dem angegebenen Satz übereinstimmen, werden trotzdem in `advertisementreceived`-Ereignissen geliefert.
        Dies ist nützlich, weil es dem Code ermöglicht, ein Interesse an Daten von Bluetooth-Geräten zu spezifizieren, ohne den Filter einzuschränken, der steuert, welche Geräte dem Benutzer in der Berechtigungsaufforderung angezeigt werden.

    - `acceptAllDevices` {{optional_inline}}

      - : Ein Boolean-Wert, der angibt, dass das anfragende Skript alle Bluetooth-Geräte akzeptieren kann.
        Der Standardwert ist `false`.

        Diese Option ist geeignet, wenn Geräte nicht genügend Informationen beworben haben, damit Filtern nützlich ist.
        Wenn `acceptAllDevices` auf `true` gesetzt ist, sollten Sie alle [`filters`](#filters) und [`exclusionFilters`](#exclusionfilters) weglassen und Sie müssen [`optionalServices`](#optionalservices) festlegen, um das zurückgegebene Gerät _nutzen_ zu können.

Nach der Auswahl eines Geräts zur Kopplung in der aktuellen Herkunft darf nur auf Dienste zugegriffen werden, deren UUID in der Dienstliste in einem Element von [`filters.services`](#services) oder in [`optionalServices`](#optionalservices) aufgeführt ist.
Es ist daher wichtig, die erforderlichen Dienste aufzuführen.
Insbesondere, wenn Sie nur mit [`name`](#name) filtern, müssen Sie daran denken, die gewünschten Dienste auch in [`optionalServices`](#optionalservices) anzugeben.

> [!NOTE]
> Obwohl das `options`-Argument technisch optional ist, müssen Sie, um irgendwelche Ergebnisse zu erhalten, entweder einen Wert für `filters` festlegen oder `acceptAllDevices` auf `true` setzen.

### Rückgabewert

Ein {{jsxref("Promise")}} für ein {{domxref("BluetoothDevice")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellten `options` keinen Sinn ergeben.
    Zum Beispiel, wenn `options.filters` vorhanden ist und `options.acceptAllDevices` `true` ist, `options.filters` nicht vorhanden ist und `options.acceptAllDevices` `false` ist, oder `options.filters` `[]` ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn kein Bluetooth-Gerät gefunden wird, das den angegebenen Optionen entspricht.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn diese Operation in diesem Kontext aufgrund von [Sicherheitsbedenken](/de/docs/Web/API/Web_Bluetooth_API#security_considerations) nicht zulässig ist, zum Beispiel wenn sie von einer unsicheren Herkunft aufgerufen wird.

## Beispiele

```js
// Die Optionsauswahl entspricht allen Geräten, die werben:
// - Der Standardherzratendienst.
// - Beide 16-Bit-Dienst-IDs 0x1802 und 0x1803.
// - Ein proprietärer 128-Bit-UUID-Dienst c48e6067-5295-48d3-8d5c-0395f61792b1.
// - Geräte mit dem Namen "ExampleName".
// - Geräte mit einem Namen, der mit "Prefix" beginnt.
//
// Und ermöglicht den Zugriff auf den Batteriedienst, wenn Geräte
// ihn enthalten, auch wenn Geräte diesen Dienst nicht bewerben.
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
    // Machen Sie etwas mit dem Gerät.
  })
  .catch((error) => console.error(`Something went wrong. ${error}`));
```

[Detaillierte Beispiele](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services) finden Sie in der Spezifikation und auch in [Kommunizieren mit Bluetooth-Geräten über JavaScript](https://developer.chrome.com/docs/capabilities/bluetooth) auf _developer.chrome.com_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kommunizieren mit Bluetooth-Geräten über JavaScript](https://developer.chrome.com/docs/capabilities/bluetooth) auf _developer.chrome.com_.
