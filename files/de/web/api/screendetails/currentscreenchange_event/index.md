---
title: "ScreenDetails: currentscreenchange-Ereignis"
short-title: currentscreenchange
slug: Web/API/ScreenDetails/currentscreenchange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`currentscreenchange`**-Ereignis der {{domxref("ScreenDetails")}}-Schnittstelle wird ausgelöst, wenn sich die {{domxref("ScreenDetails.currentScreen")}} auf eine der folgenden Arten ändert:

- Der aktuelle Bildschirm wechselt zu einem anderen Bildschirm, d.h., das aktuelle Browserfenster wird auf einen anderen Bildschirm verschoben.
- Eine oder mehrere der folgenden Eigenschaften auf dem aktuellen Bildschirm ändern sich:
  - {{domxref("Screen.width", "width")}}
  - {{domxref("Screen.height", "height")}}
  - {{domxref("Screen.availWidth", "availWidth")}}
  - {{domxref("Screen.availHeight", "availHeight")}}
  - {{domxref("Screen.colorDepth", "colorDepth")}}
  - {{domxref("Screen.orientation", "orientation")}}
- Eine oder mehrere der folgenden Werte ändern sich:
  - Die **Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirm-Anordnung des Betriebssystems, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin)
  - Die **verfügbare Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirm-Anordnung des Betriebssystems, relativ zum [Multi-Screen-Ursprung](/de/docs/Web/API/Window_Management_API/Multi-screen_origin). Dies entspricht der Bildschirmposition, plus der Breite/Höhe aller Betriebssystem-UI-Elemente, die an der oberen linken Ecke des Bildschirms gezeichnet werden — Fenster können nicht in diesen Bereichen platziert werden
  - {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}}
  - {{domxref("ScreenDetailed.label", "label")}}
  - Die Einstufung des Bildschirms als primär oder sekundär (siehe {{domxref("ScreenDetailed.isPrimary", "isPrimary")}})
  - Die Einstufung des Bildschirms als intern oder extern (siehe {{domxref("ScreenDetailed.isInternal", "isInternal")}})

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("currentscreenchange", (event) => {});

oncurrentscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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
