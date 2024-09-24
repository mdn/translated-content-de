---
title: USB
slug: Web/API/USB
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`USB`**-Interface der [WebUSB API](/de/docs/Web/API/WebUSB_API) bietet Attribute und Methoden zum Auffinden und Verbinden von USB-Geräten über eine Webseite.

Verwenden Sie {{domxref("navigator.usb")}}, um auf das `USB`-Objekt zuzugreifen.

Das USB-Interface erbt von {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref("USB.getDevices()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von {{domxref("USBDevice")}}-Objekten für gepaarte angeschlossene Geräte aufgelöst wird.
- {{domxref("USB.requestDevice()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz von {{domxref("USBDevice")}} aufgelöst wird, wenn das angegebene Gerät gefunden wird. Der Aufruf dieser Funktion löst den Koppelvorgang des Benutzeragents aus.

## Ereignisse

- {{domxref("USB.connect_event", "connect")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein zuvor gepaartes Gerät angeschlossen wird.
- {{domxref("USB.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein gepaartes Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
