---
title: "USBDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/USBDevice/opened
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}{{SecureContext_Header}}

Die **`opened`** schreibgeschützte Eigenschaft des {{domxref("USBDevice")}}-Interfaces zeigt an, ob eine Sitzung mit einem gekoppelten USB-Gerät gestartet wurde. Ein Gerät muss geöffnet werden, bevor es von einer Webseite gesteuert werden kann.

## Wert

Ein {{jsxref("boolean")}}.

## Beispiele

Dieses Beispiel bezieht sich auf ein hypothetisches USB-Gerät mit einer mehrfarbigen LED. Es zeigt, wie überprüft wird, ob ein Gerät geöffnet ist, bevor {{domxref("USBDevice.controlTransferOut")}} aufgerufen wird, um eine bestimmte LED-Farbe einzustellen.

> [!NOTE]
> Welche Daten an ein USB-Gerät übermittelt werden können und wie sie übermittelt werden, ist spezifisch und einzigartig für jedes Gerät.

```js
async function setDeviceColor(usbDevice, r, g, b) {
  if (device.opened) {
    // Dieses hypothetische USB-Gerät erfordert, dass die an es
    // übergebenen Daten in einer Uint8Array vorliegen.
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