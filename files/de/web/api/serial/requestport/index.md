---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}

Die **`requestPort()`** Methode der [`Serial`](/de/docs/Web/API/Serial) Schnittstelle präsentiert dem Benutzer einen Dialog, in dem sie ein serielles Gerät zur Verbindung auswählen können. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, welche das vom Benutzer gewählte Gerät repräsentiert.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `filters` {{optional_inline}}
      - : Eine Liste von Objekten, die Hersteller-, Produkt- oder Bluetooth-Dienstklassen-IDs enthalten, welche die spezifischen Gerätetypen filtern, die dem Benutzer zur Verbindung angeboten werden.
        Wenn keine Filter angegeben sind, wird dem Benutzer eine Liste aller verfügbaren Geräte zur Auswahl angezeigt.
        Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Eine positive Ganzzahl oder ein String, der eine Bluetooth-Dienstklassen-ID darstellt.
            Dies kann ein 16- oder 32-Bit UUID-Alias, eine beliebige gültige UUID oder ein gültiger Name aus einem [GATT-Dienstschlüssel von zugewiesenen Diensten](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein.
        - `usbVendorId` {{optional_inline}}
          - : Eine positive Ganzzahl, die einen USB-Gerätehersteller identifiziert.
            Das [USB Implementors Forum](https://www.usb.org/) weist bestimmten Herstellern IDs zu.
        - `usbProductId` {{optional_inline}}
          - : Eine positive Ganzzahl, die ein USB-Gerät identifiziert.
            Jeder Hersteller weist seinen Produkten IDs zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste von positiven Ganzzahlen und/oder Strings, die Bluetooth-Dienstklassen-IDs darstellen.
        Bluetooth-Ports mit benutzerdefinierten Dienstklassen-IDs sind in der dem Benutzer präsentierten Portliste ausgeschlossen, es sei denn, die Dienstklassen-ID ist in dieser Liste enthalten.
        Dies gilt unabhängig davon, ob Sie die Liste filtern oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler in einer der folgenden Situationen abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme abgelehnt, wenn der Benutzer bei der Aufforderung keinen Port auswählt.

## Beschreibung

Wenn ein Benutzer eine Website das erste Mal besucht, hat diese noch keine Berechtigung, auf serielle Geräte zuzugreifen.
Eine Website muss zuerst `requestPort()` aufrufen, um den Benutzer aufzufordern, auszuwählen, welches Gerät von der Website gesteuert werden darf.

Diese Methode muss über {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

Der Zugriff auf die Website könnte auch durch die {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert werden.
Wenn blockiert, wird dem Benutzer kein Zugriff auf Geräte ermöglicht.

## Beispiele

### Dem Benutzer erlauben, ein beliebiges Gerät auszuwählen

Dieses Beispiel fordert den Benutzer auf, ein Gerät über `requestPort()` auszuwählen, wenn ein `<button>` gedrückt wird.
Es enthält keinen Filter, was bedeutet, dass die Auswahlliste alle verfügbaren Geräte umfasst:

```html
<button id="connect">Connect</button>
```

```js
const connectBtn = document.getElementById("connect");
connectBtn.addEventListener("click", async () => {
  try {
    const port = await navigator.serial.requestPort();
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Dem Benutzer erlauben, ein Gerät eines bestimmten Herstellers auszuwählen

In diesem Fall wird ein Filter an `requestPort()` mit einer USB-Hersteller-ID übergeben, um die dem Benutzer angezeigte Geräteliste auf USB-Geräte eines spezifischen Herstellers zu beschränken.

```js
connectBtn.addEventListener("click", async () => {
  const usbVendorId = 0xabcd;
  try {
    const port = await navigator.serial.requestPort({
      filters: [{ usbVendorId }],
    });
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Dem Benutzer erlauben, benutzerdefinierte RFCOMM-basierte Dienste auszuwählen

Obwohl die meisten Geräte SPP-basierte Kommunikation über das standardisierte Bluetooth Classic Serial Port Profile bereitstellen, verwenden einige benutzerdefinierte funkbasierte Kommunikationsdienste (RFCOMM). Diese Geräte haben eine Dienstklassen-ID, die nicht im Standard-Bluetooth-UUID-Bereich liegt.

Sie müssen die Liste `allowedBluetoothServiceClassIds` an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId` Filter-Schlüssel verwenden, wenn Sie `requestPort()` aufrufen, um den Benutzer mit einer Liste gefilterter Bluetooth-Serienports basierend auf Dienstklassen-IDs aufzufordern:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt the user to select Bluetooth serial ports with
// the custom Bluetooth RFCOMM service above.
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
  filters: [{ bluetoothServiceClassId: myBluetoothServiceUuid }],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
