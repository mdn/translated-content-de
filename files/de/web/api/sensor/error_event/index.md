---
title: "Sensor: error event"
short-title: error
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`error`**-Ereignis wird ausgelöst, wenn bei einem Sensor eine Ausnahme auftritt.

Das [`Sensor`](/de/docs/Web/API/Sensor)-Interface ist eine Basisklasse. `onerror` und das `error`-Ereignis können nur in einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

Nachdem dieses Ereignis aufgetreten ist, wird das [`Sensor`](/de/docs/Web/API/Sensor)-Objekt inaktiv. Wenn der Sensor Werte gelesen hat, wird er damit aufhören, bis er neu startet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`SensorErrorEvent`](/de/docs/Web/API/SensorErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("SensorErrorEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`error`](/de/docs/Web/API/SensorErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt die ausgelöste [`DOMException`](/de/docs/Web/API/DOMException) zurück.

## Beispiele

### Protokollierung von Beschleunigungsmesser-Ausnahmen

Dieses Beispiel fügt einen Ereignis-Listener hinzu, um Fehler zu protokollieren, die bei einem [`Accelerometer`](/de/docs/Web/API/Accelerometer) auftreten.

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
