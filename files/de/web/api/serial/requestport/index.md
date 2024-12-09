---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 60b9445fef4448368dbc2cf6333ba22a9a8d092b
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`** Methode der [`Serial`](/de/docs/Web/API/Serial) Schnittstelle zeigt dem Benutzer ein Dialogfenster an, in dem er ein serielles Gerät auswählen kann, mit dem eine Verbindung hergestellt werden soll. Diese Methode gibt ein {{jsxref("Promise")}} zurück, das sich mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) auflöst, die das vom Benutzer ausgewählte Gerät darstellt.

## Beschreibung

Wenn ein Benutzer eine Website zum ersten Mal besucht, hat diese keine Berechtigung, auf serielle Geräte zuzugreifen. Eine Website muss zunächst `requestPort()` aufrufen, um den Benutzer aufzufordern, auszuwählen, welches Gerät die Website steuern darf.

Diese Methode muss über eine {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `filters` {{optional_inline}}
      - : Eine Liste von Objekten, die Vendor-, Produkt- oder Bluetooth-Dienstklassen-IDs enthalten, die verwendet werden, um die spezifischen Gerätetypen zu filtern, für die der Benutzer eine Verbindung anfordern kann. Wenn keine Filter angegeben sind, wird dem Benutzer eine Liste aller verfügbaren Geräte zur Auswahl angezeigt. Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Eine vorzeichenlose lange Ganzzahl oder ein Zeichenfolgenwert, der eine Bluetooth-Dienstklassen-ID darstellt. Dies kann ein 16- oder 32-Bit-UUID-Alias sein, jede gültige UUID oder ein gültiger Name aus einem [GATT Assigned Services Key](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt).
        - `usbVendorId` {{optional_inline}}
          - : Eine vorzeichenlose kurze Ganzzahl, die einen USB-Gerätehersteller identifiziert. Das [USB Implementors Forum](https://www.usb.org/) weist IDs an spezifische Hersteller zu.
        - `usbProductId` {{optional_inline}}
          - : Eine vorzeichenlose kurze Ganzzahl, die ein USB-Gerät identifiziert. Jeder Hersteller weist seinen Produkten IDs zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste von vorzeichenlosen langen Ganzzahlen und/oder Zeichenfolgen, die Bluetooth-Dienstklassen-IDs darstellen. Bluetooth-Ports mit benutzerdefinierten Dienstklassen-IDs sind von der dem Benutzer präsentierten Portliste ausgeschlossen, es sei denn, die Dienstklassen-ID ist in dieser Liste enthalten. Dies gilt unabhängig davon, ob Sie die Liste filtern oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) auflöst.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird in einer der folgenden Situationen mit diesem Fehler zurückgewiesen:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert die Verwendung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme zurückgewiesen, wenn der Benutzer beim Auffordern keinen Port auswählt.

## Beispiele

### Ermöglichen Sie dem Benutzer, ein beliebiges Gerät auszuwählen

Dieses Beispiel fordert den Benutzer auf, ein Gerät über `requestPort()` auszuwählen, wenn ein `<button>` gedrückt wird. Es enthält keinen Filter, was bedeutet, dass die Auswahlliste alle verfügbaren Geräte umfasst:

```html
<button id="connect">Connect</button>
```

```js
const connectBtn = document.getElementById("connect");
connectBtn.addEventListener("click", () => {
  try {
    const port = await navigator.serial.requestPort();
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Ermöglichen Sie dem Benutzer, ein Gerät eines bestimmten Herstellers auszuwählen

In diesem Fall wird ein Filter an `requestPort()` mit einer USB-Hersteller-ID übergeben, um die dem Benutzer angezeigte Gerätemenge auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

```js
connectBtn.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  try {
    const port = await navigator.serial.requestPort({ filters: [{ usbVendorId }] });
    // Connect to port or add it to the list of available ports
  } catch (e) {
    // The user didn't select a device
  }
});
```

### Ermöglichen Sie dem Benutzer, benutzerdefinierte RFCOMM-basierte Dienste auszuwählen

Obwohl die meisten Geräte SPP-basierte Kommunikation über das standardisierte Bluetooth Classic Serial Port Profile bereitstellen, verwenden einige benutzerdefinierte Funkkommunikationsdienste (RFCOMM). Diese Geräte haben eine Dienstklassen-ID, die nicht im Standard-Bluetooth-UUID-Bereich liegt.

Sie müssen die `allowedBluetoothServiceClassIds`-Liste an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId`-Filter-Schlüssel verwenden, wenn Sie `requestPort()` aufrufen, um den Benutzer mit einer Liste von gefilterten Bluetooth-Serienanschlüssen aufzufordern, die durch Dienstklassen-IDs identifiziert werden:

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
