---
title: "Screen: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Screen/orientationchange_event
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das `orientationchange`-Ereignis wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("orientationchange", (event) => {});

onorientationchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen das `ScreenOrientation` [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
