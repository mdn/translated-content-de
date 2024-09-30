---
title: "Window: orientationchange Ereignis"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: 0f1d3cbc434dd6a8f4886826ac142a32a65e0208
---

{{APIRef}}{{Deprecated_Header}}

Das `orientationchange` Ereignis wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Effekte aus.

Dieses Ereignis ist veraltet. Verwenden Sie stattdessen das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("orientationchange", (event) => {});

onorientationchange = (event) => {};
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

Oder verwenden Sie die `onorientationchange` Ereignis-Handler-Eigenschaft:

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
