---
title: "USBDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/USBDevice/opened
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`opened`** des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt an, ob eine Sitzung mit einem gekoppelten USB-Gerät gestartet wurde. Ein Gerät muss geöffnet werden, bevor es von einer Webseite aus gesteuert werden kann.

## Wert

Ein {{jsxref("Boolean")}}.

## Beispiele

Dieses Beispiel zeigt ein hypothetisches USB-Gerät mit einer mehrfarbigen LED. Es demonstriert, wie geprüft wird, ob ein Gerät geöffnet ist, bevor [`USBDevice.controlTransferOut`](/de/docs/Web/API/USBDevice/controlTransferOut) aufgerufen wird, um eine bestimmte LED-Farbe einzustellen.

> [!NOTE]
> Welche Daten an ein USB-Gerät übermittelt werden können und wie sie übergeben werden, ist spezifisch und einzigartig für jedes Gerät.

```js
async function setDeviceColor(usbDevice, r, g, b) {
  if (device.opened) {
    // This hypothetical USB device requires that the data passed to
    // it be in a Uint8Array.
    const payload = new Uint8Array([r, g, b]);

    await usbDevice.controlTransferOut(
      {
        requestType: "vendor",
        recipient: "device",
        request: 1,
        value: 0,
        index: 0,
      },
      payload,
    );
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
