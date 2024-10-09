---
title: "USBDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/USBDevice/opened
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`opened`** des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces zeigt an, ob eine Sitzung mit einem
gekoppelten USB-Gerät gestartet wurde. Ein Gerät muss geöffnet werden, bevor es von einer Webseite gesteuert werden kann.

## Wert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel bezieht sich auf ein hypothetisches USB-Gerät mit einer mehrfarbigen LED. Es zeigt, wie überprüft wird, ob ein Gerät geöffnet ist, bevor [`USBDevice.controlTransferOut`](/de/docs/Web/API/USBDevice/controlTransferOut) aufgerufen wird, um eine bestimmte LED-Farbe einzustellen.

> [!NOTE]
> Welche Daten an ein USB-Gerät übergeben werden können und wie dies geschieht, ist für jedes Gerät besonders und einzigartig.

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
