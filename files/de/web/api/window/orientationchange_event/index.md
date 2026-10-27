---
title: "Window: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef}}

Das Ereignis `orientationchange` wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

Dieses Ereignis ist veraltet. Verwenden Sie stattdessen das Ereignis [`change`](/de/docs/Web/API/ScreenOrientation/change_event) der Schnittstelle [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("orientationchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onorientationchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Sie können das Ereignis `orientationchange` mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `the orientation of the device is now ${event.target.screen.orientation.angle}`,
  );
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onorientationchange`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die über `onorientationchange` hinzugefügt wurden:

```js
window.onorientationchange = (event) => {
  console.log(
    `the orientation of the device is now ${event.target.screen.orientation.angle}`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
