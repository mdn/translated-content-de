---
title: "Window: orientationchange-Event"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{Deprecated_Header}}

Das `orientationchange`-Event wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

Dieses Event kann nicht abgebrochen werden und wird nicht weitergereicht.

Dieses Event ist veraltet. Lauschen Sie stattdessen auf das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Event der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## Event-Typ

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Sie können das `orientationchange`-Event in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `the orientation of the device is now ${event.target.screen.orientation.angle}`,
  );
});
```

Oder Sie verwenden die `onorientationchange`-Ereignishandler-Eigenschaft:

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
