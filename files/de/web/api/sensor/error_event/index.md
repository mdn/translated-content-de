---
title: "Sensor: error Ereignis"
short-title: error
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`error`**-Ereignis wird ausgelöst, wenn eine Ausnahme bei einem Sensor auftritt.

Das [`Sensor`](/de/docs/Web/API/Sensor)-Interface ist eine Basisklasse, `onerror` und das `error`-Ereignis können nur auf einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

Nachdem dieses Ereignis aufgetreten ist, wird das [`Sensor`](/de/docs/Web/API/Sensor)-Objekt inaktiv. Wenn der Sensor Werte gelesen hat, wird er stoppen, bis er neu gestartet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SensorErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der Eltern-Interface [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`error`](/de/docs/Web/API/SensorErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt die geworfene [`DOMException`](/de/docs/Web/API/DOMException) zurück.

## Beispiele

### Protokollieren von Ausnahmen bei Accelerometer

Dieses Beispiel fügt einen Ereignislistener hinzu, um Fehler zu protokollieren, die bei einem [`Accelerometer`](/de/docs/Web/API/Accelerometer) auftreten.

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
