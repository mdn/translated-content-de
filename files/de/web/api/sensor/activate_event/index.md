---
title: "Sensor: activate-Ereignis"
short-title: activate
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`activate`**-Ereignis wird ausgelöst, wenn ein Sensor aktiviert wird. Dies bedeutet, dass er beginnt, Messwerte zu erfassen.

Das {{domxref('Sensor')}}-Interface ist eine Basisklasse, `onactivate` und das `activate`-Ereignis können nur in einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

### Protokollieren, wenn ein Beschleunigungsmesser bereit ist zu messen

Dieses Beispiel fügt einen Ereignislistener hinzu, um die Aktivierung eines {{domxref("Accelerometer")}} zu protokollieren.

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

- Sensor {{domxref('Sensor.error_event', 'Fehler')}}-Ereignis
- Sensor {{domxref('Sensor.reading_event', 'Lese')}}-Ereignis
