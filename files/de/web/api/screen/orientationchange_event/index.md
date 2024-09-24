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

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("orientationchange", (event) => {});

onorientationchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Spezifikationen

Diese Funktion ist kein Teil einer Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Verwenden Sie stattdessen das `ScreenOrientation`-Ereignis {{domxref("ScreenOrientation.change_event", "change")}}.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
