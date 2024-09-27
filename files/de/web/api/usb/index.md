---
title: USB
slug: Web/API/USB
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`USB`**-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Attribute und Methoden zum Finden und Verbinden von USB-Geräten über eine Webseite.

Verwenden Sie [`navigator.usb`](/de/docs/Web/API/Navigator/usb), um Zugriff auf das `USB`-Objekt zu erhalten.

Das USB-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`USB.getDevices()`](/de/docs/Web/API/USB/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekten für gepaarte angeschlossene Geräte aufgelöst wird.
- [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von [`USBDevice`](/de/docs/Web/API/USBDevice) aufgelöst wird, wenn das angegebene Gerät gefunden wird. Der Aufruf dieser Funktion löst den Kopplungsprozess des Benutzeragenten aus.

## Ereignisse

- [`connect`](/de/docs/Web/API/USB/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein zuvor gekoppeltes Gerät verbunden wird.
- [`disconnect`](/de/docs/Web/API/USB/disconnect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein gekoppeltes Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
