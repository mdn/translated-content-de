---
title: "Fenster: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Window/orientationchange_event
l10n:
  sourceCommit: 0f1d3cbc434dd6a8f4886826ac142a32a65e0208
---

{{APIRef}}{{Deprecated_Header}}

Das `orientationchange`-Ereignis wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

Dieses Ereignis ist veraltet. Verwenden Sie stattdessen das {{domxref("ScreenOrientation.change_event", "change")}}-Ereignis der {{domxref("ScreenOrientation")}}-Schnittstelle.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("orientationchange", (event) => {});

onorientationchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Sie können das `orientationchange`-Ereignis in einer {{domxref("EventTarget/addEventListener", "addEventListener")}}-Methode verwenden:

```js
window.addEventListener("orientationchange", (event) => {
  console.log(
    `the orientation of the device is now ${event.target.screen.orientation.angle}`,
  );
});
```

Oder verwenden Sie die `onorientationchange`-Event-Handler-Eigenschaft:

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
