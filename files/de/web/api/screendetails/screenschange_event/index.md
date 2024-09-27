---
title: "ScreenDetails: screenschange-Ereignis"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`screenschange`**-Ereignis des [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Interfaces wird ausgelöst, wenn sich der Satz der verfügbaren Bildschirme des Systems geändert hat: Das heißt, ein neuer Bildschirm ist verfügbar geworden oder ein bestehender Bildschirm ist nicht mehr verfügbar. Dies wird durch eine Änderung im [`screens`](/de/docs/Web/API/ScreenDetails/screens)-Array widergespiegelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("screenschange", (event) => {});

onscreenschange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben, die Änderung zu melden, alle Fenster zu schließen und sie dann alle erneut zu öffnen, um die neue Konfiguration anzupassen:

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
