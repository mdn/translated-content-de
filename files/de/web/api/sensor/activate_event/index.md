---
title: "Sensor: activate Ereignis"
short-title: activate
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`activate`** Ereignis wird ausgelöst, wenn ein Sensor aktiviert wird. Das bedeutet, dass er beginnt, Messwerte zu erfassen.

Die [`Sensor`](/de/docs/Web/API/Sensor) Schnittstelle ist eine Basisklasse, `onactivate` und das `activate` Ereignis können nur in einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

### Protokollieren, wenn ein Beschleunigungsmesser bereit ist zu messen

Dieses Beispiel fügt einen Ereignislistener hinzu, um die Aktivierung eines [`Accelerometer`](/de/docs/Web/API/Accelerometer) zu protokollieren.

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

- Sensor [`error`](/de/docs/Web/API/Sensor/error_event) Ereignis
- Sensor [`reading`](/de/docs/Web/API/Sensor/reading_event) Ereignis
