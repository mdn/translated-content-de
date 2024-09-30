---
title: USBDevice
slug: Web/API/USBDevice
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}{{SecureContext_Header}}

Die **`USBDevice`**-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Zugriff auf Metadaten über ein verbundenes USB-Gerät und Methoden zu dessen Steuerung.

## Instanz-Eigenschaften

- [`USBDevice.configuration`](/de/docs/Web/API/USBDevice/configuration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt für die aktuell ausgewählte Schnittstelle eines verbundenen USB-Geräts.
- [`USBDevice.configurations`](/de/docs/Web/API/USBDevice/configurations) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("array")}} von gerätespezifischen Schnittstellen zur Steuerung eines verbundenen USB-Geräts.
- [`USBDevice.deviceClass`](/de/docs/Web/API/USBDevice/deviceClass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eines von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren, der mit diesem Gerät funktioniert. Die beiden anderen Eigenschaften sind `USBDevice.deviceSubclass` und `USBDevice.deviceProtocol`.
- [`USBDevice.deviceProtocol`](/de/docs/Web/API/USBDevice/deviceProtocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eines von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren, der mit diesem Gerät funktioniert. Die beiden anderen Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceSubclass`.
- [`USBDevice.deviceSubclass`](/de/docs/Web/API/USBDevice/deviceSubclass) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eines von drei Eigenschaften, die USB-Geräte zur Auswahl eines passenden USB-Treibers identifizieren, der mit diesem Gerät funktioniert. Die beiden anderen Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceProtocol`.
- [`USBDevice.deviceVersionMajor`](/de/docs/Web/API/USBDevice/deviceVersionMajor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Hauptversionsnummer des Geräts in einem semantischen Versionsverwaltungsschema.
- [`USBDevice.deviceVersionMinor`](/de/docs/Web/API/USBDevice/deviceVersionMinor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Nebenversionsnummer des Geräts in einem semantischen Versionsverwaltungsschema.
- [`USBDevice.deviceVersionSubminor`](/de/docs/Web/API/USBDevice/deviceVersionSubminor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Patch-Versionsnummer des Geräts in einem semantischen Versionsverwaltungsschema.
- [`USBDevice.manufacturerName`](/de/docs/Web/API/USBDevice/manufacturerName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Name der Organisation, die das USB-Gerät produziert hat.
- [`USBDevice.opened`](/de/docs/Web/API/USBDevice/opened) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Zeigt an, ob eine Sitzung mit einem verbundenen USB-Gerät gestartet wurde.
- [`USBDevice.productId`](/de/docs/Web/API/USBDevice/productId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der vom Hersteller definierte Code, der ein USB-Gerät identifiziert.
- [`USBDevice.productName`](/de/docs/Web/API/USBDevice/productName) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der vom Hersteller definierte Name, der ein USB-Gerät identifiziert.
- [`USBDevice.serialNumber`](/de/docs/Web/API/USBDevice/serialNumber) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die vom Hersteller definierte Seriennummer für das spezifische USB-Gerät.
- [`USBDevice.usbVersionMajor`](/de/docs/Web/API/USBDevice/usbVersionMajor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die von dem Gerät unterstützte USB-Protokollversion deklarieren. Die beiden anderen Eigenschaften sind `USBDevice.usbVersionMinor` und `USBDevice.usbVersionSubminor`.
- [`USBDevice.usbVersionMinor`](/de/docs/Web/API/USBDevice/usbVersionMinor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die von dem Gerät unterstützte USB-Protokollversion deklarieren. Die beiden anderen Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionSubminor`.
- [`USBDevice.usbVersionSubminor`](/de/docs/Web/API/USBDevice/usbVersionSubminor) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die von dem Gerät unterstützte USB-Protokollversion deklarieren. Die beiden anderen Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionMinor`.
- [`USBDevice.vendorId`](/de/docs/Web/API/USBDevice/vendorId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die offiziell von usb.org zugewiesene Vendor-ID.

## Instanz-Methoden

- [`USBDevice.claimInterface()`](/de/docs/Web/API/USBDevice/claimInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angeforderte Schnittstelle für exklusiven Zugriff beansprucht wird.
- [`USBDevice.clearHalt()`](/de/docs/Web/API/USBDevice/clearHalt) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn ein Haltezustand aufgehoben wird.
- [`USBDevice.controlTransferIn()`](/de/docs/Web/API/USBDevice/controlTransferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn ein Befehl oder Statusvorgang an das USB-Gerät gesendet wurde.
- [`USBDevice.controlTransferOut()`](/de/docs/Web/API/USBDevice/controlTransferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Befehl oder Statusvorgang vom USB-Gerät gesendet wurde.
- [`USBDevice.close()`](/de/docs/Web/API/USBDevice/close) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle offenen Schnittstellen freigegeben und die Gerätesitzung beendet ist.
- [`USBDevice.forget()`](/de/docs/Web/API/USBDevice/forget) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das nach Freigabe aller offenen Schnittstellen, Beendigung der Gerätesitzung und Zurücksetzen der Berechtigung aufgelöst wird.
- [`USBDevice.isochronousTransferIn()`](/de/docs/Web/API/USBDevice/isochronousTransferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult) aufgelöst wird, wenn zeitkritische Informationen an das USB-Gerät gesendet wurden.
- [`USBDevice.isochronousTransferOut()`](/de/docs/Web/API/USBDevice/isochronousTransferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult) aufgelöst wird, wenn zeitkritische Informationen vom USB-Gerät gesendet wurden.
- [`USBDevice.open()`](/de/docs/Web/API/USBDevice/open) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Gerätesitzung gestartet wurde.
- [`USBDevice.releaseInterface()`](/de/docs/Web/API/USBDevice/releaseInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine beanspruchte Schnittstelle aus dem exklusiven Zugriff freigegeben wird.
- [`USBDevice.reset()`](/de/docs/Web/API/USBDevice/reset) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Gerät zurückgesetzt und alle App-Operationen abgebrochen und deren Versprechen zurückgewiesen wurden.
- [`USBDevice.selectAlternateInterface()`](/de/docs/Web/API/USBDevice/selectAlternateInterface) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt ausgewählt ist.
- [`USBDevice.selectConfiguration()`](/de/docs/Web/API/USBDevice/selectConfiguration) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angegebene Konfiguration ausgewählt ist.
- [`USBDevice.transferIn()`](/de/docs/Web/API/USBDevice/transferIn) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn Massen- oder Interrupt-Daten vom USB-Gerät empfangen werden.
- [`USBDevice.transferOut()`](/de/docs/Web/API/USBDevice/transferOut) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn Massen- oder Interrupt-Daten an das USB-Gerät gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
