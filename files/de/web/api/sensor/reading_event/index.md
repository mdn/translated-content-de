---
title: "Sensor: reading-Ereignis"
short-title: reading
slug: Web/API/Sensor/reading_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`reading`**-Ereignis wird ausgelöst, wenn ein neuer Messwert eines Sensors verfügbar ist.

Das Interface [`Sensor`](/de/docs/Web/API/Sensor) ist eine Basisklasse. `onreading` und das `reading`-Ereignis können nur bei einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("reading", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onreading = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

### Beschleunigung auslesen

Dieses Beispiel fügt einen Event-Listener hinzu, um Beschleunigungswerte eines [`Accelerometer`](/de/docs/Web/API/Accelerometer) auszulesen. Die Werte werden sechzigmal pro Sekunde ausgelesen.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  console.log(`Acceleration along the Z-axis ${acl.z}`);
});
acl.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Sensor-Ereignis [`activate`](/de/docs/Web/API/Sensor/activate_event)
- Sensor-Ereignis [`error`](/de/docs/Web/API/Sensor/error_event)
