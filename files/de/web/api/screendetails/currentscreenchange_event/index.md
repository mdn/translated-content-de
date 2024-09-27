---
title: "ScreenDetails: currentscreenchange-Ereignis"
short-title: currentscreenchange
slug: Web/API/ScreenDetails/currentscreenchange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`currentscreenchange`**-Ereignis des [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Interfaces wird ausgelöst, wenn sich die [`ScreenDetails.currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) in einer der folgenden Weisen ändert:

- Der aktuelle Bildschirm wechselt zu einem anderen Bildschirm, d. h. das aktuelle Browserfenster wird auf einen anderen Bildschirm verschoben.
- Eine oder mehrere der folgenden Eigenschaften ändern sich auf dem aktuellen Bildschirm:
  - [`width`](/de/docs/Web/API/Screen/width)
  - [`height`](/de/docs/Web/API/Screen/height)
  - [`availWidth`](/de/docs/Web/API/Screen/availWidth)
  - [`availHeight`](/de/docs/Web/API/Screen/availHeight)
  - [`colorDepth`](/de/docs/Web/API/Screen/colorDepth)
  - [`orientation`](/de/docs/Web/API/Screen/orientation)
- Eine oder mehrere der folgenden Werte ändern sich:
  - Die **Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirmwiedergabe des Betriebssystems, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin)
  - Die **verfügbare Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirmwiedergabe des Betriebssystems, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin). Dies entspricht der Bildschirmposition plus der Breite/Höhe aller Betriebssystem-UI-Elemente, die oben links auf dem Bildschirm angezeigt werden, in diesen Bereichen können keine Fenster platziert werden
  - [`devicePixelRatio`](/de/docs/Web/API/ScreenDetailed/devicePixelRatio)
  - [`label`](/de/docs/Web/API/ScreenDetailed/label)
  - Die Bestimmung des Bildschirms als primär oder sekundär (siehe [`isPrimary`](/de/docs/Web/API/ScreenDetailed/isPrimary))
  - Die Bestimmung des Bildschirms als intern oder extern (siehe [`isInternal`](/de/docs/Web/API/ScreenDetailed/isInternal))

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("currentscreenchange", (event) => {});

oncurrentscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const screenDetails = await window.getScreenDetails();
screenDetails.addEventListener("currentscreenchange", (event) => {
  const details = screenDetails.currentScreen;
  console.log("The current screen has changed.", event, details);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
