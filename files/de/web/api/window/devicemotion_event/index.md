---
title: "Window: devicemotion-Ereignis"
short-title: devicemotion
slug: Web/API/Window/devicemotion_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Das **`devicemotion`**-Ereignis wird in regelmäßigen Abständen ausgelöst und gibt die Beschleunigung des Geräts zu diesem Zeitpunkt mit und ohne Berücksichtigung der Schwerkraft an. Falls verfügbar, liefert es auch Informationen über die Rotationsgeschwindigkeit.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("devicemotion", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ondevicemotion = (event) => { }
```

## Ereignistyp

Ein [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DeviceMotionEvent")}}

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
