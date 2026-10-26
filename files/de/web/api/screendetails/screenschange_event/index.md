---
title: "ScreenDetails: screenschange-Ereignis"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`screenschange`**-Ereignis der [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Schnittstelle wird ausgelöst, wenn sich die Menge der für das System verfügbaren Bildschirme ändert: Ein neuer Bildschirm ist verfügbar geworden oder ein bisher verfügbarer Bildschirm ist nicht mehr verfügbar. Diese Änderung zeigt sich im [`screens`](/de/docs/Web/API/ScreenDetails/screens)-Array.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("screenschange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscreenschange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie können das `screenschange`-Ereignis verwenden, um Änderungen an den verfügbaren Bildschirmen zu erkennen, die Änderung zu melden, alle Fenster zu schließen und sie anschließend passend zur neuen Konfiguration wieder zu öffnen:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens, report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );

    // Update noOfScreens value
    noOfScreens = screenDetails.screens.length;
  }

  // Open, close, or rearrange windows as needed, to fit the new screen configuration
  updateWindows();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
