---
title: "Window: devicemotion Ereignis"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`devicemotion`** Ereignis wird in regelmäßigen Abständen ausgelöst und zeigt die Beschleunigungsrate des Geräts an, mit oder ohne Berücksichtigung der Gravitationskraft zu diesem Zeitpunkt. Es liefert auch Informationen über die Rotationsrate, falls verfügbar.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("devicemotion", (event) => { })

ondevicemotion = (event) => { }
```

## Ereignistyp

Ein [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceMotionEvent")}}

## Ereigniseigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts in den drei Achsen angibt: x, y und z. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts in den drei Achsen angibt: x, y und z, unter Berücksichtigung der Schwerkraft. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen angibt: alpha, beta und gamma. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden angibt, in dem Daten vom Gerät abgerufen werden.

## Beispiele

```js
function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)
