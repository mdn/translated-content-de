---
title: "Screen: orientationchange-Ereignis"
short-title: orientationchange
slug: Web/API/Screen/orientationchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Screen Orientation API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das `orientationchange`-Ereignis wird ausgelöst, wenn sich die Ausrichtung des Geräts geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("orientationchange", (event) => { })

onorientationchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Spezifikationen

Dieses Feature ist nicht Teil einer Spezifikation und ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen das `ScreenOrientation` [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
