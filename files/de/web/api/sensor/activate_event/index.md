---
title: "Sensor: activate-Ereignis"
short-title: activate
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`activate`**-Ereignis wird ausgelöst, wenn ein Sensor aktiviert wird. Das bedeutet, dass er beginnt, Messwerte zu erfassen.

Das [`Sensor`](/de/docs/Web/API/Sensor)-Interface ist eine Basisklasse. `onactivate` und das `activate`-Ereignis können nur bei einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("activate", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onactivate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

### Protokollieren, wenn ein Beschleunigungssensor messbereit ist

Dieses Beispiel fügt einen Event-Listener hinzu, der die Aktivierung eines [`Accelerometer`](/de/docs/Web/API/Accelerometer) protokolliert.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("activate", () => console.log("Ready to measure."));
acl.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Sensor-Ereignis [`error`](/de/docs/Web/API/Sensor/error_event)
- Sensor-Ereignis [`reading`](/de/docs/Web/API/Sensor/reading_event)
