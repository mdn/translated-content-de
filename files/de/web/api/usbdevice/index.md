---
title: USBDevice
slug: Web/API/USBDevice
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`USBDevice`**-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Zugriff auf Metadaten über ein gekoppeltes USB-Gerät und Methoden zur Steuerung desselben.

## Instanz Eigenschaften

- [`USBDevice.configuration`](/de/docs/Web/API/USBDevice/configuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt für das momentan ausgewählte Interface eines gekoppelten USB-Geräts.
- [`USBDevice.configurations`](/de/docs/Web/API/USBDevice/configurations) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("array")}} von gerätespezifischen Schnittstellen zur Steuerung eines gekoppelten USB-Geräts.
- [`USBDevice.deviceClass`](/de/docs/Web/API/USBDevice/deviceClass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren. Die anderen zwei Eigenschaften sind `USBDevice.deviceSubclass` und `USBDevice.deviceProtocol`.
- [`USBDevice.deviceProtocol`](/de/docs/Web/API/USBDevice/deviceProtocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren. Die anderen zwei Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceSubclass`.
- [`USBDevice.deviceSubclass`](/de/docs/Web/API/USBDevice/deviceSubclass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren. Die anderen zwei Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceProtocol`.
- [`USBDevice.deviceVersionMajor`](/de/docs/Web/API/USBDevice/deviceVersionMajor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Hauptversionsnummer des Geräts in einem semantischen Versionsschema.
- [`USBDevice.deviceVersionMinor`](/de/docs/Web/API/USBDevice/deviceVersionMinor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Nebenversionsnummer des Geräts in einem semantischen Versionsschema.
- [`USBDevice.deviceVersionSubminor`](/de/docs/Web/API/USBDevice/deviceVersionSubminor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Patch-Versionsnummer des Geräts in einem semantischen Versionsschema.
- [`USBDevice.manufacturerName`](/de/docs/Web/API/USBDevice/manufacturerName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Name der Organisation, die das USB-Gerät hergestellt hat.
- [`USBDevice.opened`](/de/docs/Web/API/USBDevice/opened) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob eine Sitzung mit einem gekoppelten USB-Gerät gestartet wurde.
- [`USBDevice.productId`](/de/docs/Web/API/USBDevice/productId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der herstellerspezifische Code, der ein USB-Gerät identifiziert.
- [`USBDevice.productName`](/de/docs/Web/API/USBDevice/productName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der herstellerspezifische Name, der ein USB-Gerät identifiziert.
- [`USBDevice.serialNumber`](/de/docs/Web/API/USBDevice/serialNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die herstellerspezifische Seriennummer für das spezifische USB-Gerät.
- [`USBDevice.usbVersionMajor`](/de/docs/Web/API/USBDevice/usbVersionMajor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion angeben. Die anderen zwei Eigenschaften sind `USBDevice.usbVersionMinor` und `USBDevice.usbVersionSubminor`.
- [`USBDevice.usbVersionMinor`](/de/docs/Web/API/USBDevice/usbVersionMinor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion angeben. Die anderen zwei Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionSubminor`.
- [`USBDevice.usbVersionSubminor`](/de/docs/Web/API/USBDevice/usbVersionSubminor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion angeben. Die anderen zwei Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionMinor`.
- [`USBDevice.vendorId`](/de/docs/Web/API/USBDevice/vendorId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die offiziell von usb.org zugewiesene Lieferanten-ID.

## Instanz Methoden

- [`USBDevice.claimInterface()`](/de/docs/Web/API/USBDevice/claimInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das angeforderte Interface für exklusiven Zugriff beansprucht ist.
- [`USBDevice.clearHalt()`](/de/docs/Web/API/USBDevice/clearHalt) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Abbruchbedingung beseitigt ist.
- [`USBDevice.controlTransferIn()`](/de/docs/Web/API/USBDevice/controlTransferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn ein Befehl oder Status an das USB-Gerät übertragen wurde.
- [`USBDevice.controlTransferOut()`](/de/docs/Web/API/USBDevice/controlTransferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Befehl oder Status vom USB-Gerät übertragen wurde.
- [`USBDevice.close()`](/de/docs/Web/API/USBDevice/close) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle offenen Schnittstellen freigegeben sind und die Gerätesitzung beendet ist.
- [`USBDevice.forget()`](/de/docs/Web/API/USBDevice/forget) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, nachdem alle offenen Schnittstellen freigegeben, die Gerätesitzung beendet und die Berechtigung zurückgesetzt wurde.
- [`USBDevice.isochronousTransferIn()`](/de/docs/Web/API/USBDevice/isochronousTransferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult) aufgelöst wird, wenn zeitkritische Informationen an das USB-Gerät übertragen wurden.
- [`USBDevice.isochronousTransferOut()`](/de/docs/Web/API/USBDevice/isochronousTransferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult) aufgelöst wird, wenn zeitkritische Informationen vom USB-Gerät übertragen wurden.
- [`USBDevice.open()`](/de/docs/Web/API/USBDevice/open) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Gerätesitzung gestartet wurde.
- [`USBDevice.releaseInterface()`](/de/docs/Web/API/USBDevice/releaseInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine beanspruchte Schnittstelle von exklusivem Zugriff freigegeben ist.
- [`USBDevice.reset()`](/de/docs/Web/API/USBDevice/reset) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Gerät zurückgesetzt ist und alle App-Operationen abgebrochen und deren Versprechen abgelehnt wurden.
- [`USBDevice.selectAlternateInterface()`](/de/docs/Web/API/USBDevice/selectAlternateInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt gewählt wurde.
- [`USBDevice.selectConfiguration()`](/de/docs/Web/API/USBDevice/selectConfiguration) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angegebene Konfiguration gewählt wurde.
- [`USBDevice.transferIn()`](/de/docs/Web/API/USBDevice/transferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn Bulk- oder Interrupt-Daten vom USB-Gerät empfangen wurden.
- [`USBDevice.transferOut()`](/de/docs/Web/API/USBDevice/transferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn Bulk- oder Interrupt-Daten an das USB-Gerät gesendet wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
