---
title: "SerialPort: getInfo()-Methode"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
l10n:
  sourceCommit: 0e2c698518ac4aaf54975093a139e764cff62670
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getInfo()`**-Methode der [`SerialPort`](/de/docs/Web/API/SerialPort)-Schnittstelle gibt ein Objekt zurück, das identifizierende Informationen für das über den Port verfügbare Gerät enthält.

## Syntax

```js-nolint
getInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `usbVendorId`
  - : Wenn der Port Teil eines USB-Geräts ist, ist diese Eigenschaft eine unsignierte kurze Ganzzahl, die den Hersteller des Geräts identifiziert. Andernfalls ist sie `undefined`.
- `usbProductId`
  - : Wenn der Port Teil eines USB-Geräts ist, ist diese Eigenschaft eine unsignierte kurze Ganzzahl, die das USB-Gerät identifiziert. Andernfalls ist sie `undefined`.
- `bluetoothServiceClassId`
  - : Wenn der Port ein Bluetooth RFCOMM-Dienst ist, ist diese Eigenschaft eine unsignierte lange Ganzzahl oder ein String, der die Bluetooth-Serviceklassen-ID des Geräts darstellt. Andernfalls ist sie `undefined`.

## Beispiel

Dieses Beispiel ruft die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn ein `<button>` gedrückt wird. Wir übergeben einen Filter an `requestPort()`, um nach Arduino Uno USB-Geräten zu filtern. Sobald ein Port angefordert wird, rufen wir `getInfo()` auf, um die `usbProductId` und `usbVendorId` des Geräts zurückzugeben.

```html
<button id="connect">Connect</button>
```

```js
const connectBtn = document.getElementById("connect");

// Filter for devices with the Arduino Uno USB Vendor/Product IDs
const filters = [
  { usbVendorId: 0x2341, usbProductId: 0x0043 },
  { usbVendorId: 0x2341, usbProductId: 0x0001 }
];

connectBtn.addEventListener("click", () => {
  try {
    // Prompt the user to select an Arduino Uno device
    const port = await navigator.serial.requestPort({ filters });

    // Return the device's identifying info
    const { usbProductId, usbVendorId } = port.getInfo();
  } catch (e) {
    // The user didn't select a device
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
