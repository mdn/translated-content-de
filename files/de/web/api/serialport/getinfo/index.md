---
title: "SerialPort: getInfo()-Methode"
short-title: getInfo()
slug: Web/API/SerialPort/getInfo
l10n:
  sourceCommit: dea49333fc281714cf96f43ee73656afc55fb5cf
---

{{SecureContext_Header}}{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getInfo()`**-Methode des [`SerialPort`](/de/docs/Web/API/SerialPort)-Interfaces gibt ein Objekt zurück, das Identifikationsinformationen für das über den Port verfügbare Gerät enthält.

## Syntax

```js-nolint
getInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `usbVendorId`
  - : Wenn der Port Teil eines USB-Geräts ist, ist diese Eigenschaft ein nicht signiertes kurzes Integer, das den Anbieter des Geräts identifiziert. Andernfalls ist es `undefined`.
- `usbProductId`
  - : Wenn der Port Teil eines USB-Geräts ist, ist diese Eigenschaft ein nicht signiertes kurzes Integer, das das USB-Gerät identifiziert. Andernfalls ist es `undefined`.
- `bluetoothServiceClassId` {{experimental_inline}}
  - : Wenn der Port ein Bluetooth-RFCOMM-Dienst ist, ist diese Eigenschaft ein nicht signiertes langes Integer oder eine Zeichenkette, die die Bluetooth-Dienstklassen-ID des Geräts darstellt. Andernfalls ist es `undefined`.

## Beispiel

Dieses Snippet ruft die Methode [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort) auf, wenn ein `<button>` gedrückt wird. Wir übergeben einen Filter an `requestPort()`, um nach Arduino Uno USB-Geräten zu filtern. Sobald ein Port angefordert wird, rufen wir `getInfo()` auf, um die `usbProductId` und `usbVendorId` des Geräts zurückzugeben.

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
