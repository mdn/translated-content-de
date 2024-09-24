---
title: HID
slug: Web/API/HID
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Das **`HID`**-Interface bietet Methoden zum Verbinden mit _HID-Geräten_, zum Auflisten angeschlossener HID-Geräte sowie Ereignishandler für verbundene HID-Geräte.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, {{domxref("EventTarget")}}._

## Instanz-Methoden

_Dieses Interface erbt auch Methoden seines Elternteils, {{domxref("EventTarget")}}._

- {{domxref("HID.getDevices", "getDevices()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von verbundenen {{domxref("HIDDevice")}}-Objekten aufgelöst wird.
- {{domxref("HID.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von verbundenen {{domxref("HIDDevice")}}-Objekten aufgelöst wird. Das Aufrufen dieser Funktion wird den Berechtigungsablauf des Benutzeragenten auslösen, um die Berechtigung zu erhalten, ein ausgewähltes Gerät aus der zurückgegebenen Liste der Geräte zuzugreifen.

### Ereignisse

- {{domxref("HID.connect_event", "connect")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät angeschlossen wird.
- {{domxref("HID.disconnect_event", "disconnect")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
