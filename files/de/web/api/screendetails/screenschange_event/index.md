---
title: "ScreenDetails: screenschange-Ereignis"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`screenschange`**-Ereignis der [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Schnittstelle wird ausgelöst, wenn sich die Menge der dem System zur Verfügung stehenden Bildschirme geändert hat: Das heißt, ein neuer Bildschirm ist verfügbar geworden oder ein bestehender Bildschirm ist nicht mehr verfügbar. Dies wird in einer Änderung des [`screens`](/de/docs/Web/API/ScreenDetails/screens)-Arrays reflektiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("screenschange", (event) => { })

onscreenschange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben, die Änderung zu melden, alle Fenster zu schließen und sie dann alle neu zu öffnen, um der neuen Konfiguration zu entsprechen:

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
