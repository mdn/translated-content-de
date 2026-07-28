---
title: "Sensor: error event"
short-title: error
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`error`**-Ereignis wird ausgelöst, wenn eine Ausnahme bei einem Sensor auftritt.

Die [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle ist eine Basisklasse, `onerror` und das `error`-Ereignis können nur bei einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

Nachdem dieses Ereignis aufgetreten ist, wird das [`Sensor`](/de/docs/Web/API/Sensor)-Objekt inaktiv. Wenn der Sensor Werte gemessen hat, wird er aufhören, bis er neu startet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SensorErrorEvent")}}

## Beispiele

### Protokollieren von Beschleunigungsmesser-Ausnahmen

Dieses Beispiel fügt einen Ereignis-Listener hinzu, um Fehler zu protokollieren, die bei einem [`Accelerometer`](/de/docs/Web/API/Accelerometer) aufgetreten sind.

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

- Sensor [`activate`](/de/docs/Web/API/Sensor/activate_event) Ereignis
- Sensor [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
