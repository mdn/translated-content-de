---
title: "Screen: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Screen/orientationchange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Screen Orientation API")}}{{Non-standard_Header}}

Das `orientationchange`-Ereignis wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

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

## Spezifikationen

Diese Funktion ist nicht Bestandteil einer Spezifikation. Ihre Standardisierung wird nicht mehr verfolgt.

Verwenden Sie stattdessen das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis von `ScreenOrientation`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bildschirmausrichtung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
