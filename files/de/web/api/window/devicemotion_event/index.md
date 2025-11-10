---
title: "Fenster: devicemotion Ereignis"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`devicemotion`** Ereignis wird in regelmäßigen Abständen ausgelöst und gibt die Beschleunigungsrate des Geräts mit oder ohne Berücksichtigung der Schwerkraft zu diesem Zeitpunkt an. Es liefert auch Informationen über die Rotationsrate, falls verfügbar.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("devicemotion", (event) => { })

ondevicemotion = (event) => { }
```

## Ereignistyp

Ein [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceMotionEvent")}}

## Ereigniseigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen x, y und z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) angegeben.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen x, y und z unter Einwirkung der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) angegeben.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen alpha, beta und gamma angibt. Die Rotationsrate wird in Grad pro Sekunde angegeben.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden angibt, in dem Daten vom Gerät erfasst werden.

## Beispiele

```js
function handleMotionEvent(event) {
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;
  const z = event.accelerationIncludingGravity.z;

  // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event)
