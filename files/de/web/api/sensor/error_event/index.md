---
title: "Sensor: error Ereignis"
short-title: error
slug: Web/API/Sensor/error_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`error`** Ereignis wird ausgelöst, wenn bei einem Sensor eine Ausnahme auftritt.

Das {{domxref('Sensor')}}-Interface ist eine Basisklasse. `onerror` und das `error` Ereignis können nur auf einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

Nach dem Auftreten dieses Ereignisses wird das {{domxref('Sensor')}}-Objekt inaktiv. Wenn der Sensor Werte gelesen hat, wird er stoppen, bis er neu startet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("SensorErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("SensorErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften stehen auch Eigenschaften der Eltern-Schnittstelle, {{domxref("Event")}}, zur Verfügung._

- {{domxref('SensorErrorEvent.error', 'error')}} {{ReadOnlyInline}}
  - : Gibt die {{domxref('DOMException')}} zurück, die ausgelöst wurde.

## Beispiele

### Protokollieren von Beschleunigungsmesser-Ausnahmen

Dieses Beispiel fügt einen Event Listener hinzu, um Fehler zu protokollieren, die bei einem {{domxref("Accelerometer")}} auftreten.

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

- Sensor {{domxref('Sensor.activate_event', 'activate')}} Ereignis
- Sensor {{domxref('Sensor.reading_event', 'reading')}} Ereignis
