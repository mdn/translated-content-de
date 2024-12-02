---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`** Methode der [`Serial`](/de/docs/Web/API/Serial) Schnittstelle präsentiert dem Benutzer einen Dialog, der ihn auffordert, ein serielles Gerät zur Verbindung auszuwählen. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer ausgewählte Gerät darstellt.

## Beschreibung

Wenn der Benutzer eine Seite erstmals besucht, hat diese keine Berechtigung auf serielle Geräte zuzugreifen. Eine Seite muss zuerst `requestPort()` aufrufen, um den Benutzer aufzufordern, das Gerät auszuwählen, das die Seite steuern dürfen soll.

Diese Methode muss via {{Glossary("Transient_activation", "transiente Aktivierung")}} aufgerufen werden. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion aktiviert wird.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `filters` {{optional_inline}}
      - : Eine Liste von Objekten, die Anbieter-, Produkt- oder Bluetooth-Dienstklassen-IDs enthalten, die verwendet werden, um die spezifischen Gerätetypen zu filtern, die dem Benutzer zur Auswahl einer Verbindung bereitgestellt werden dürfen. Wenn keine Filter angegeben sind, erhält der Benutzer eine Liste aller verfügbaren Geräte zur Auswahl. Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Eine nicht-signierte lange Ganzzahl oder Zeichenkette, die eine Bluetooth-Dienstklassen-ID darstellt. Dies kann ein 16- oder 32-Bit-UUID-Alias, eine gültige UUID oder ein gültiger Name aus einem [GATT zugewiesenen Schlüsseldienst](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein.
        - `usbVendorId` {{optional_inline}}
          - : Eine nicht-signierte kurze Ganzzahl, die einen USB-Geräteanbieter identifiziert. Das [USB Implementors Forum](https://www.usb.org/) weist IDs für spezifische Anbieter zu.
        - `usbProductId` {{optional_inline}}
          - : Eine nicht-signierte kurze Ganzzahl, die ein USB-Gerät identifiziert. Jeder Anbieter weist IDs für seine Produkte zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste von nicht-signierten langen Ganzzahlen und/oder Zeichenketten, die Bluetooth-Dienstklassen-IDs darstellen. Bluetooth-Ports mit benutzerdefinierten Dienstklassen-IDs sind von der Liste der dem Benutzer präsentierten Ports ausgeschlossen, es sei denn, die Dienstklassen-ID ist in dieser Liste enthalten. Dies gilt unabhängig davon, ob die Liste gefiltert wird oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler in einem der folgenden Fälle abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsabfrage wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme abgelehnt, wenn der Benutzer bei der Aufforderung keinen Port auswählt.

## Beispiele

### Ermöglichen Sie dem Benutzer, ein beliebiges Gerät auszuwählen

Dieses Beispiel fordert den Benutzer auf, ein Gerät über `requestPort()` auszuwählen, wenn ein `<button>` gedrückt wird. Es enthält keinen Filter, was bedeutet, dass die Auswahl alle verfügbaren Geräte umfasst:

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

### Ermöglichen Sie dem Benutzer, das Gerät eines bestimmten Anbieters auszuwählen

In diesem Fall wird ein Filter mit einer USB-Anbieter-ID an `requestPort()` übergeben, um die Auswahl der dem Benutzer angezeigten Geräte auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Obwohl die meisten Geräte SPP-basierte Kommunikation durch das standardisierte Bluetooth Classic Serial Port Profile bereitstellen, verwenden einige benutzerdefinierte RFCOMM-basierte Dienste. Diese Geräte haben eine Dienstklassen-ID, die nicht im Standard-Bluetooth-UUID-Bereich liegt.

Sie müssen die Liste `allowedBluetoothServiceClassIds` an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId` Filterkey verwenden, wenn Sie `requestPort()` aufrufen, um dem Benutzer eine Liste gefilterter Bluetooth-Serienports anzuzeigen, die durch Dienstklassen-IDs identifiziert werden:

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
