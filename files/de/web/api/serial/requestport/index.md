---
title: "Serial: requestPort() Methode"
short-title: requestPort()
slug: Web/API/Serial/requestPort
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}

Die **`Serial.requestPort()`** Methode der [`Serial`](/de/docs/Web/API/Serial)-Schnittstelle zeigt dem Benutzer einen Dialog an, in dem er aufgefordert wird, ein serielles Gerät auszuwählen, mit dem er sich verbinden möchte. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird, die das vom Benutzer gewählte Gerät repräsentiert.

## Beschreibung

Wenn ein Benutzer eine Webseite zum ersten Mal besucht, hat diese keine Berechtigung, auf serielle Geräte zuzugreifen. Eine Webseite muss zuerst `requestPort()` aufrufen, um den Benutzer aufzufordern, auszuwählen, welches Gerät von der Webseite gesteuert werden darf.

Diese Methode muss über eine {{Glossary("Transient_activation", "flüchtige Aktivierung")}} aufgerufen werden. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Syntax

```js-nolint
requestPort()
requestPort(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `filters` {{optional_inline}}
      - : Eine Liste von Objekten, die Vendor-, Produkt- oder Bluetooth-Service-Klassen-IDs enthalten, um die spezifischen Gerätetypen zu filtern, die dem Benutzer zur Auswahl angeboten werden. Wenn keine Filter angegeben sind, wird dem Benutzer eine Liste aller verfügbaren Geräte zur Auswahl präsentiert. Filter können die folgenden Werte enthalten:
        - `bluetoothServiceClassId` {{optional_inline}}
          - : Eine Long-Integer- oder Zeichenfolgen-Darstellung einer Bluetooth-Service-Klassen-ID. Dies kann ein 16- oder 32-Bit-UUID-Alias, eine gültige UUID oder ein gültiger Name aus einem [GATT-assignierten Service-Schlüssel](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt) sein.
        - `usbVendorId` {{optional_inline}}
          - : Eine unsignierte kurze Ganzzahl, die einen USB-Geräteanbieter identifiziert. Das [USB Implementors Forum](https://www.usb.org/) weist IDs spezifischen Anbietern zu.
        - `usbProductId` {{optional_inline}}
          - : Eine unsignierte kurze Ganzzahl, die ein USB-Gerät identifiziert. Jeder Anbieter weist seinen Produkten IDs zu.
    - `allowedBluetoothServiceClassIds` {{optional_inline}}
      - : Eine Liste von unsignierten langen Ganzzahlen und/oder Zeichenfolgen, die Bluetooth-Service-Klassen-IDs darstellen. Bluetooth-Ports mit benutzerdefinierten Service-Klassen-IDs werden aus der Liste der dem Benutzer präsentierten Ports ausgeschlossen, es sei denn, die Service-Klassen-ID ist in dieser Liste enthalten. Dies gilt unabhängig davon, ob Sie die Liste filtern oder nicht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz von [`SerialPort`](/de/docs/Web/API/SerialPort) aufgelöst wird.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird in einer der folgenden Situationen mit diesem Fehler abgelehnt:
    - Eine {{httpheader('Permissions-Policy/serial','serial')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert die Nutzung dieser Funktion.
    - Eine Benutzerberechtigungsaufforderung wurde abgelehnt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene `Promise` wird mit dieser Ausnahme abgelehnt, wenn der Benutzer bei der Aufforderung keinen Port auswählt.

## Beispiele

### Dem Benutzer erlauben, ein beliebiges Gerät auszuwählen

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

### Dem Benutzer erlauben, das Gerät eines bestimmten Anbieters auszuwählen

In diesem Fall wird `requestPort()` mit einer USB Vendor ID aufgerufen, um die Menge der dem Benutzer angezeigten Geräte auf USB-Geräte eines bestimmten Herstellers zu beschränken.

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

### Dem Benutzer erlauben, benutzerdefinierte Dienste basierend auf RFCOMM auszuwählen

Obwohl die meisten Geräte SPP-basierte Kommunikation über das standardisierte Bluetooth Classic Serial Port Profile ermöglichen, verwenden einige benutzerdefinierte Kommunikationsdienste basierend auf Radio Frequency Communication (RFCOMM). Diese Geräte haben eine Service-Klassen-ID, die nicht im standardmäßigen Bluetooth-UUID-Bereich liegt.

Sie müssen die Liste `allowedBluetoothServiceClassIds` an `requestPort()` übergeben, um auf diese benutzerdefinierten RFCOMM-basierten Dienste zuzugreifen:

```js
const myBluetoothServiceUuid = "01234567-89ab-cdef-0123-456789abcdef";

// Prompt user to select any serial port
// Access to the custom Bluetooth RFCOMM service above will be allowed
const port = await navigator.serial.requestPort({
  allowedBluetoothServiceClassIds: [myBluetoothServiceUuid],
});
```

Sie können auch den `bluetoothServiceClassId` Filter-Schlüssel verwenden, wenn Sie `requestPort()` aufrufen, um dem Benutzer eine Liste gefilterter Bluetooth-Seriellports zu präsentieren, die durch Service-Klassen-IDs identifiziert werden:

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
