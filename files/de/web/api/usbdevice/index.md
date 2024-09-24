---
title: USBDevice
slug: Web/API/USBDevice
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{SeeCompatTable}}{{APIRef("WebUSB API")}}{{SecureContext_Header}}

Die **`USBDevice`**-Schnittstelle der [WebUSB-API](/de/docs/Web/API/WebUSB_API) bietet Zugriff auf Metadaten über ein gekoppeltes USB-Gerät und Methoden zu dessen Steuerung.

## Instanz-Eigenschaften

- {{domxref("USBDevice.configuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("USBConfiguration")}}-Objekt für die aktuell ausgewählte Schnittstelle eines gekoppelten USB-Geräts.
- {{domxref("USBDevice.configurations")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref("array")}} gerätespezifischer Schnittstellen zur Steuerung eines gekoppelten USB-Geräts.
- {{domxref("USBDevice.deviceClass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Verwendung eines geeigneten USB-Treibers identifizieren. Die anderen beiden Eigenschaften sind `USBDevice.deviceSubclass` und `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceProtocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Verwendung eines geeigneten USB-Treibers identifizieren. Die anderen beiden Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceSubclass`.
- {{domxref("USBDevice.deviceSubclass")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die USB-Geräte zur Verwendung eines geeigneten USB-Treibers identifizieren. Die anderen beiden Eigenschaften sind `USBDevice.deviceClass` und `USBDevice.deviceProtocol`.
- {{domxref("USBDevice.deviceVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Hauptversionsnummer des Geräts in einem semantischen Versionierungsschema.
- {{domxref("USBDevice.deviceVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Nebenversionsnummer des Geräts in einem semantischen Versionierungsschema.
- {{domxref("USBDevice.deviceVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Patch-Versionsnummer des Geräts in einem semantischen Versionierungsschema.
- {{domxref("USBDevice.manufacturerName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Name der Organisation, die das USB-Gerät hergestellt hat.
- {{domxref("USBDevice.opened")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, ob eine Sitzung mit einem gekoppelten USB-Gerät gestartet wurde.
- {{domxref("USBDevice.productId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der herstellerdefinierte Code, der ein USB-Gerät identifiziert.
- {{domxref("USBDevice.productName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der herstellerdefinierte Name, der ein USB-Gerät identifiziert.
- {{domxref("USBDevice.serialNumber")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die herstellerdefinierte Seriennummer für das spezifische USB-Gerät.
- {{domxref("USBDevice.usbVersionMajor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion deklarieren. Die anderen beiden Eigenschaften sind `USBDevice.usbVersionMinor` und `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionMinor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion deklarieren. Die anderen beiden Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionSubminor`.
- {{domxref("USBDevice.usbVersionSubminor")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine von drei Eigenschaften, die die vom Gerät unterstützte USB-Protokollversion deklarieren. Die anderen beiden Eigenschaften sind `USBDevice.usbVersionMajor` und `USBDevice.usbVersionMinor`.
- {{domxref("USBDevice.vendorId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die offizielle von usb.org zugewiesene Anbieter-ID.

## Instanzmethoden

- {{domxref("USBDevice.claimInterface()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angeforderte Schnittstelle für den exklusiven Zugriff beansprucht wird.
- {{domxref("USBDevice.clearHalt()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Sperrbedingung gelöscht wird.
- {{domxref("USBDevice.controlTransferIn()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBInTransferResult")}} aufgelöst wird, wenn ein Befehl oder eine Statusoperation an das USB-Gerät übertragen wurde.
- {{domxref("USBDevice.controlTransferOut()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBOutTransferResult")}} aufgelöst wird, wenn ein Befehl oder eine Statusoperation vom USB-Gerät übertragen wurde.
- {{domxref("USBDevice.close()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn alle offenen Schnittstellen freigegeben und die Gerätesitzung beendet ist.
- {{domxref("USBDevice.forget()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das nach Freigabe aller offenen Schnittstellen, Beendigung der Gerätesitzung und Zurücksetzen der Berechtigung aufgelöst wird.
- {{domxref("USBDevice.isochronousTransferIn()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBIsochronousInTransferResult")}} aufgelöst wird, wenn zeitkritische Informationen an das USB-Gerät übertragen wurden.
- {{domxref("USBDevice.isochronousTransferOut()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBIsochronousOutTransferResult")}} aufgelöst wird, wenn zeitkritische Informationen vom USB-Gerät übertragen wurden.
- {{domxref("USBDevice.open()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine Gerätesitzung gestartet wurde.
- {{domxref("USBDevice.releaseInterface()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn eine beanspruchte Schnittstelle vom exklusiven Zugriff freigegeben wird.
- {{domxref("USBDevice.reset()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Gerät zurückgesetzt und alle Anwendungsoperationen abgebrochen und deren Versprechen abgelehnt werden.
- {{domxref("USBDevice.selectAlternateInterface()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der angegebene alternative Endpunkt ausgewählt ist.
- {{domxref("USBDevice.selectConfiguration()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die angegebene Konfiguration ausgewählt ist.
- {{domxref("USBDevice.transferIn()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBInTransferResult")}} aufgelöst wird, wenn Bulk- oder Interrupt-Daten vom USB-Gerät empfangen werden.
- {{domxref("USBDevice.transferOut()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBOutTransferResult")}} aufgelöst wird, wenn Bulk- oder Interrupt-Daten an das USB-Gerät gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
