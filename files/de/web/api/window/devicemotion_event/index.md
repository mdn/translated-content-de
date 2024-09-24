---
title: "Fenster: devicemotion-Ereignis"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: 428bba1247b0afcb15f12520fd04a10bbfb50f3b
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`devicemotion`**-Ereignis wird in regelmäßigen Intervallen ausgelöst und zeigt die Beschleunigungsrate des Geräts mit/ohne den Beitrag der Gravitationskraft zu diesem Zeitpunkt an. Es liefert auch Informationen über die Rotationsrate, falls verfügbar.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht über die Ereigniskette weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder definieren Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicemotion", (event) => {});

ondevicemotion = (event) => {};
```

## Ereignistyp

Ein {{domxref("DeviceMotionEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DeviceMotionEvent")}}

## Ereigniseigenschaften

- {{DOMxRef("DeviceMotionEvent.acceleration")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen: x, y und z angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.accelerationIncludingGravity")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Beschleunigung des Geräts auf den drei Achsen: x, y und z mit dem Effekt der Schwerkraft angibt. Die Beschleunigung wird in [m/s²](https://en.wikipedia.org/wiki/Meter_per_second_squared) ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.rotationRate")}} {{ReadOnlyInline}}
  - : Ein Objekt, das die Änderungsrate der Orientierung des Geräts auf den drei Orientierungsachsen: alpha, beta und gamma angibt. Die Rotationsrate wird in Grad pro Sekunde ausgedrückt.
- {{DOMxRef("DeviceMotionEvent.interval")}} {{ReadOnlyInline}}
  - : Eine Zahl, die das Zeitintervall in Millisekunden darstellt, in dem die Daten vom Gerät empfangen werden.

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

- {{domxref("Window.deviceorientation_event", "deviceorientation")}}
- [DeviceOrientation Event](https://www.w3.org/TR/orientation-event/#devicemotion)
