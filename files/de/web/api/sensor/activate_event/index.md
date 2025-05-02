---
title: "Sensor: activate-Ereignis"
short-title: activate
slug: Web/API/Sensor/activate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Das **`activate`**-Ereignis wird ausgelöst, wenn ein Sensor aktiviert wird. Das bedeutet, dass er beginnt, Messwerte zu erfassen.

Die [`Sensor`](/de/docs/Web/API/Sensor)-Schnittstelle ist eine Basisklasse, `onactivate` und das `activate`-Ereignis dürfen nur auf einer der [abgeleiteten Klassen](/de/docs/Web/API/Sensor#interfaces_based_on_sensor) verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("activate", (event) => { })

onactivate = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

### Protokollieren, wenn ein Beschleunigungsmesser bereit zum Messen ist

In diesem Beispiel wird ein Ereignislistener hinzugefügt, um die Aktivierung eines [`Accelerometer`](/de/docs/Web/API/Accelerometer) zu protokollieren.

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

- Sensor [`error`](/de/docs/Web/API/Sensor/error_event)-Ereignis
- Sensor [`reading`](/de/docs/Web/API/Sensor/reading_event)-Ereignis
