---
title: "USBDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/USBDevice/opened
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`opened`** des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt an, ob eine Sitzung mit einem gepaarten USB-Gerät gestartet wurde. Ein Gerät muss geöffnet werden, bevor es von einer Webseite gesteuert werden kann.

## Wert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel bezieht sich auf ein hypothetisches USB-Gerät mit einer mehrfarbigen LED. Es zeigt, wie überprüft wird, ob ein Gerät geöffnet ist, bevor [`USBDevice.controlTransferOut`](/de/docs/Web/API/USBDevice/controlTransferOut) aufgerufen wird, um eine bestimmte LED-Farbe einzustellen.

> [!NOTE]
> Welche Daten an ein USB-Gerät übermittelt werden können und wie sie übermittelt werden, ist spezifisch und einzigartig für jedes Gerät.

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
