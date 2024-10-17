---
title: HID
slug: Web/API/HID
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`HID`**-Schnittstelle bietet Methoden zum Verbinden mit _HID-Geräten_, zum Auflisten angeschlossener HID-Geräte und Ereignis-Handler für verbundene HID-Geräte.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getDevices()`](/de/docs/Web/API/HID/getDevices) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von verbundenen HID-Geräten aufgelöst wird, auf die der Nutzer zuvor in einer Antwort auf einen [`requestDevice()`](/de/docs/Web/API/HID/requestDevice)-Aufruf Zugriff gewährt hat.
- [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von verbundenen [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Objekten aufgelöst wird. Der Aufruf dieser Funktion wird den Berechtigungsablauf des Benutzeragenten auslösen, um die Berechtigung zum Zugriff auf ein ausgewähltes Gerät aus der zurückgegebenen Geräteliste zu erlangen.

### Ereignisse

- [`connect`](/de/docs/Web/API/HID/connect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät verbunden wird.
- [`disconnect`](/de/docs/Web/API/HID/disconnect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein HID-Gerät getrennt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebHID API](/de/docs/Web/API/WebHID_API)
