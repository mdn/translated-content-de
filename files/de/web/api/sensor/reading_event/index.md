---
title: "Sensor: Leseereignis"
short-title: Lesevorgang
slug: Web/API/Sensor/reading_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`reading`**-Ereignis wird ausgelöst, wenn eine neue Messung auf einem Sensor verfügbar ist.

Das {{domxref('Sensor')}}-Interface ist eine Basisklasse, `onreading` und das `reading`-Ereignis können nur in einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}} ohne zusätzliche Eigenschaften.

## Beispiele

### Beschleunigung lesen

Dieses Beispiel fügt einen Ereignislistener hinzu, um die Beschleunigungswerte eines {{domxref("Accelerometer")}} zu lesen. Es liest sechzig Mal pro Sekunde.

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

- Sensor {{domxref('Sensor.activate_event', 'activate')}}-Ereignis
- Sensor {{domxref('Sensor.error_event', 'error')}}-Ereignis
