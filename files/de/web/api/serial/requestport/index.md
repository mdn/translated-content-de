---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`** Methode des [`Serial`](/de/docs/Web/API/Serial) Interfaces zeigt dem Benutzer einen Dialog an, in dem er ein serielles Gerät auswählen kann, mit dem er sich verbinden möchte. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät darstellt.

## Beschreibung

Wenn der Benutzer eine Website zum ersten Mal besucht, hat die Seite keine Berechtigung, auf serielle Geräte zuzugreifen. Eine Seite muss zuerst `requestPort()` aufrufen, um den Benutzer aufzufordern, das Gerät auszuwählen, das die Seite steuern darf.

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
      - : Eine Liste von Objekten, die Vendor-, Produkt- oder Bluetooth-Dienstklassen-IDs enthalten und verwendet werden, um die spezifischen Gerätetypen zu filtern, die dem Benutzer zur Auswahl für eine Verbindung zur Verfügung gestellt werden. Wenn keine Filter angegeben sind, wird dem Benutzer eine Liste aller verfügbaren Geräte angezeigt. Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Eine nicht signierte lange Ganzzahl oder ein String, der eine Bluetooth-Dienstklassen-ID darstellt. Dies kann eine 16- oder 32-Bit-UUID-Alias, jede gültige UUID oder ein gültiger Name aus einem [GATT zugewiesenen Diensteschlüssel](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein.
        - `usbVendorId` {{optional_inline}}
          - : Eine nicht signierte kurze Ganzzahl, die einen USB-Gerätehersteller identifiziert. Das [USB Implementers Forum](https://www.usb.org/) weist IDs spezifischen Anbietern zu.
        - `usbProductId` {{optional_inline}}
          - : Eine nicht signierte kurze Ganzzahl, die ein USB-Gerät identifiziert. Jeder Hersteller weist IDs seinen Produkten zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste von nicht signierten langen Ganzzahlen und/oder Strings, die Bluetooth-Dienstklassen-IDs darstellen. Bluetooth-Ports mit benutzerdefinierten Dienstklassen-IDs sind von der Liste der dem Benutzer präsentierten Ports ausgeschlossen, es sei denn, die Dienstklassen-ID ist in dieser Liste enthalten. Dies gilt unabhängig davon, ob Sie die Liste filtern oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler in einer der folgenden Situationen abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Verwendung dieser Funktion.
    - Eine Benutzerberechtigungsanfrage wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme abgelehnt, wenn der Benutzer beim Auffordern keinen Port auswählt.

## Beispiele

### Ermöglichen Sie dem Benutzer, jedes Gerät auszuwählen

Dieses Beispiel fordert den Benutzer auf, ein Gerät über `requestPort()` auszuwählen, wenn ein `<button>` gedrückt wird. Es enthält keinen Filter, was bedeutet, dass die Auswahlliste alle verfügbaren Geräte enthält:

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

In diesem Fall wird ein Filter an `requestPort()` übergeben, der eine USB Vendor ID enthält, um die Anzahl der dem Benutzer angezeigten Geräte auf USB-Geräte eines bestimmten Herstellers zu beschränken.

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

Obwohl die meisten Geräte SPP-basierte Kommunikation über das standardisierte Bluetooth Classic Serial Port Profile bereitstellen, verwenden einige benutzerdefinierte radiofrequenzbasierte Kommunikationsdienste (RFCOMM). Diese Geräte haben eine Dienstklassen-ID, die nicht in den Standard-Bluetooth-UUID-Bereich fällt.

Sie müssen die `allowedBluetoothServiceClassIds`-Liste an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId` Filter-Schlüssel verwenden, wenn Sie `requestPort()` aufrufen, um den Benutzer mit einer gefilterten Liste von Bluetooth-Serien-Ports, die durch Dienstklassen-IDs identifiziert werden, aufzufordern:

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
