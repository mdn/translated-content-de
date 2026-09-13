---
title: "Screen: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Screen/orientationchange_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Screen Orientation API")}}{{Non-standard_Header}}

Das `orientationchange`-Ereignis wird ausgelöst, wenn sich die Orientierung des Geräts geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Dieses Feature ist Teil keiner Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen das `ScreenOrientation` [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
