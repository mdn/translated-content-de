---
title: "Sensor: error-Ereignis"
short-title: error
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`error`**-Ereignis wird ausgelöst, wenn bei einem Sensor eine Ausnahme auftritt.

Die [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle ist eine Basisklasse. `onerror` und das `error`-Ereignis können nur bei einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

Nachdem dieses Ereignis aufgetreten ist, befindet sich das [`Sensor`](/de/docs/Web/API/Sensor)-Objekt im Leerlauf. Wenn der Sensor Werte erfasst hat, stellt er die Erfassung ein, bis er neu gestartet wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SensorErrorEvent")}}

## Beispiele

### Ausnahmen des Beschleunigungssensors protokollieren

Dieses Beispiel fügt einen Event-Listener hinzu, der Fehler protokolliert, die bei einem [`Accelerometer`](/de/docs/Web/API/Accelerometer) aufgetreten sind.

```js
const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("error", (error) => console.log(`Error: ${error.name}`));
acl.start();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Sensor-Ereignis [`activate`](/de/docs/Web/API/Sensor/activate_event)
- Sensor-Ereignis [`reading`](/de/docs/Web/API/Sensor/reading_event)
