---
title: HID
slug: Web/API/HID
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`HID`**-Schnittstelle stellt Methoden zum Verbinden mit _HID-Geräten_, zum Auflisten angeschlossener HID-Geräte und zum Behandeln von Ereignissen für angeschlossene HID-Geräte bereit.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getDevices()`](/de/docs/Web/API/HID/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Array verbundener [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekte auflöst.
- [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Array verbundener [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekte auflöst. Der Aufruf dieser Funktion löst den Berechtigungsfluss des Benutzeragenten aus, um die Erlaubnis zu erhalten, auf ein ausgewähltes Gerät aus der zurückgegebenen Geräteliste zuzugreifen.

### Ereignisse

- [`connect`](/de/docs/Web/API/HID/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät angeschlossen wird.
- [`disconnect`](/de/docs/Web/API/HID/disconnect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
