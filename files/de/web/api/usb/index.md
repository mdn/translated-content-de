---
title: USB
slug: Web/API/USB
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`USB`**-Schnittstelle der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Attribute und Methoden zum Auffinden und Verbinden von USB-Geräten über eine Webseite.

Verwenden Sie [`navigator.usb`](/de/docs/Web/API/Navigator/usb), um Zugriff auf das `USB`-Objekt zu erhalten.

Die USB-Schnittstelle erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekten für gepaarte angeschlossene Geräte aufgelöst wird.
- [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das spezifizierte Gerät gefunden wird. Der Aufruf dieser Funktion löst den Kopplungsablauf des Benutzeragenten aus.

## Ereignisse

- [`connect`](/de/docs/Web/API/USB/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein zuvor gepaartes Gerät verbunden wird.
- [`disconnect`](/de/docs/Web/API/USB/disconnect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein gepaartes Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
