---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`Serial.requestPort()`**-Methode des [`Serial`](/de/docs/Web/API/Serial)-Interfaces präsentiert dem Benutzer einen Dialog, in dem er ein serielles Gerät zur Verbindung auswählen kann. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät darstellt.

## Beschreibung

Wenn ein Benutzer eine Website zum ersten Mal besucht, hat sie noch keine Berechtigung, auf serielle Geräte zuzugreifen. Eine Website muss zuerst `requestPort()` aufrufen, um den Benutzer dazu aufzufordern, das Gerät auszuwählen, das die Website steuern darf.

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
      - : Eine Liste von Objekten, die Hersteller-, Produkt- oder Bluetooth-Dienstklassen-IDs enthalten, die verwendet werden, um die spezifischen Gerätetypen zu filtern, die dem Benutzer zur Anforderung einer Verbindung zur Verfügung stehen. Wenn keine Filter angegeben sind, wird dem Benutzer eine Liste aller verfügbaren Geräte zur Auswahl präsentiert. Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Ein nicht unterzeichneter langer Integer oder String, der eine Bluetooth-Dienstklassen-ID darstellt. Dies kann ein 16- oder 32-Bit-UUID-Alias, eine gültige UUID oder ein gültiger Name aus einem [GATT zugewiesenen Dienstschlüssel](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein.
        - `usbVendorId` {{optional_inline}}
          - : Ein nicht unterzeichneter kurzer Integer, der einen USB-Gerätehersteller identifiziert. Das [USB Implementors Forum](https://www.usb.org/) weist Herstellern IDs zu.
        - `usbProductId` {{optional_inline}}
          - : Ein nicht unterzeichneter kurzer Integer, der ein USB-Gerät identifiziert. Jeder Hersteller weist seinen Produkten IDs zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste nicht unterzeichneter langer Integer und/oder Strings, die Bluetooth-Dienstklassen-IDs darstellen. Bluetooth-Ports mit benutzerdefinierten Dienstklassen-IDs sind von der Liste der dem Benutzer präsentierten Ports ausgeschlossen, es sei denn, die Dienstklassen-ID ist in dieser Liste enthalten. Dies gilt unabhängig davon, ob Sie die Liste filtern oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit diesem Fehler in einer der folgenden Situationen abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme abgelehnt, wenn der Benutzer keinen Port auswählt, wenn er aufgefordert wird.

## Beispiele

### Dem Benutzer erlauben, ein beliebiges Gerät auszuwählen

Dieses Beispiel fordert den Benutzer dazu auf, ein Gerät über `requestPort()` auszuwählen, wenn ein `<button>` gedrückt wird. Es enthält keinen Filter, was bedeutet, dass die Auswahlliste alle verfügbaren Geräte umfasst:

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

### Dem Benutzer erlauben, das Gerät eines bestimmten Herstellers auszuwählen

In diesem Fall wird ein Filter mit einer USB-Hersteller-ID an `requestPort()` übergeben, um die dem Benutzer gezeigte Gerätemenge auf nur USB-Geräte eines bestimmten Herstellers zu beschränken.

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

### Dem Benutzer erlauben, benutzerdefinierte RFCOMM-basierte Dienste auszuwählen

Obwohl die meisten Geräte SPP-basierte Kommunikation über das standardisierte Bluetooth Classic Serial Port Profile bereitstellen, verwenden einige benutzerdefinierte Radio Frequency Communication (RFCOMM)-basierte Dienste. Diese Geräte haben eine Dienstklassen-ID, die sich nicht im standardmäßigen Bluetooth-UUID-Bereich befindet.

Sie müssen die `allowedBluetoothServiceClassIds`-Liste an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId`-Filter-Schlüssel verwenden, wenn Sie `requestPort()` aufrufen, um dem Benutzer eine gefilterte Liste von Bluetooth-Serienports zu präsentieren, die durch Dienstklassen-IDs identifiziert werden:

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
