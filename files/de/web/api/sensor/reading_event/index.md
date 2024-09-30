---
title: "Sensor: reading Ereignis"
short-title: reading
slug: Web/API/Sensor/reading_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`reading`** Ereignis wird ausgelöst, wenn eine neue Messung auf einem Sensor verfügbar ist.

Das [`Sensor`](/de/docs/Web/API/Sensor)-Interface ist eine Basisklasse. `onreading` und das `reading`-Ereignis können nur in einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reading", (event) => {});

onreading = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

### Beschleunigung lesen

Dieses Beispiel fügt einen Ereignislistener hinzu, um Beschleunigungswerte eines [`Accelerometer`](/de/docs/Web/API/Accelerometer) zu lesen. Es liest sechzig Mal pro Sekunde.

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

- Sensor [`activate`](/de/docs/Web/API/Sensor/activate_event) Ereignis
- Sensor [`error`](/de/docs/Web/API/Sensor/error_event) Ereignis
