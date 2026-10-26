---
title: "ScreenDetails: currentscreenchange-Ereignis"
short-title: currentscreenchange
slug: Web/API/ScreenDetails/currentscreenchange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`currentscreenchange`**-Ereignis der [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Schnittstelle wird ausgelöst, wenn sich [`ScreenDetails.currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) auf eine der folgenden Weisen ändert:

- Der aktuelle Bildschirm wechselt zu einem anderen Bildschirm, d.h. das aktuelle Browserfenster wird auf einen anderen Bildschirm verschoben.
- Eine oder mehrere der folgenden Eigenschaften des aktuellen Bildschirms ändern sich:
  - [`width`](/de/docs/Web/API/Screen/width)
  - [`height`](/de/docs/Web/API/Screen/height)
  - [`availWidth`](/de/docs/Web/API/Screen/availWidth)
  - [`availHeight`](/de/docs/Web/API/Screen/availHeight)
  - [`colorDepth`](/de/docs/Web/API/Screen/colorDepth)
  - [`orientation`](/de/docs/Web/API/Screen/orientation)
- Einer oder mehrere der folgenden Werte ändern sich:
  - Die **Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirmanordnung des Betriebssystems, relativ zum [Ursprung der Mehrbildschirmkonfiguration](/de/docs/Web/API/Window_Management_API/Multi-screen_origin)
  - Die **verfügbare Position** des Bildschirms ((x,y)-Koordinaten der oberen linken Ecke) innerhalb der virtuellen Bildschirmanordnung des Betriebssystems, relativ zum [Ursprung der Mehrbildschirmkonfiguration](/de/docs/Web/API/Window_Management_API/Multi-screen_origin). Sie entspricht der Bildschirmposition zuzüglich der Breite bzw. Höhe aller Benutzeroberflächenelemente des Betriebssystems, die am oberen oder linken Bildschirmrand angezeigt werden. In diesen Bereichen können keine Fenster platziert werden.
  - [`devicePixelRatio`](/de/docs/Web/API/ScreenDetailed/devicePixelRatio)
  - [`label`](/de/docs/Web/API/ScreenDetailed/label)
  - Die Einstufung des Bildschirms als primär oder sekundär (siehe [`isPrimary`](/de/docs/Web/API/ScreenDetailed/isPrimary))
  - Die Einstufung des Bildschirms als intern oder extern (siehe [`isInternal`](/de/docs/Web/API/ScreenDetailed/isInternal))

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("currentscreenchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncurrentscreenchange = (event) => { }
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
