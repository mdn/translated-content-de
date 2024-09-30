---
title: "Window: devicemotion-Ereignis"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 428bba1247b0afcb15f12520fd04a10bbfb50f3b
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`devicemotion`**-Ereignis wird in regelmäßigen Intervallen ausgelöst und gibt die Beschleunigungsrate des Geräts mit/ohne Berücksichtigung der Gravitation an diesem Zeitpunkt an. Es liefert auch Informationen über die Rotationsrate, falls verfügbar.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicemotion", (event) => {});

ondevicemotion = (event) => {};
```

## Ereignistyp

Ein [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("DeviceMotionEvent")}}

## Ereigniseigenschaften

- [`DeviceMotionEvent.acceleration`](/de/docs/Web/API/DeviceMotionEvent/acceleration) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen x, y und z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.accelerationIncludingGravity`](/de/docs/Web/API/DeviceMotionEvent/accelerationIncludingGravity) {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen x, y und z unter Berücksichtigung der Gravitation angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- [`DeviceMotionEvent.rotationRate`](/de/docs/Web/API/DeviceMotionEvent/rotationRate) {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen alpha, beta und gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- [`DeviceMotionEvent.interval`](/de/docs/Web/API/DeviceMotionEvent/interval) {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden darstellt, in dem Daten vom Gerät bezogen werden.

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
- [DeviceOrientation Event](https://www.w3.org/TR/orientation-event/#devicemotion)
