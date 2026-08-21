---
title: "Window: orientationchange Event"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef}}

Das `orientationchange` Event wird ausgelöst, wenn sich die Orientierung des Geräts geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

Dieses Ereignis ist veraltet. Hören Sie stattdessen auf das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Sie können das `orientationchange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `the orientation of the device is now ${event.target.screen.orientation.angle}`,
  );
});
```

Oder verwenden Sie die `onorientationchange` Ereignishandler-Eigenschaft:

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
