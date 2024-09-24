---
title: "ScreenDetails: screenschange-Ereignis"
short-title: screenschange
slug: Web/API/ScreenDetails/screenschange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`screenschange`**-Ereignis der {{domxref("ScreenDetails")}}-Schnittstelle wird ausgelöst, wenn sich die Menge der für das System verfügbaren Bildschirme ändert: das heißt, wenn ein neuer Bildschirm verfügbar wird oder ein bestehender Bildschirm nicht mehr verfügbar ist. Dies wird in einer Änderung des {{domxref("ScreenDetails.screens", "screens")}}-Arrays angezeigt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("screenschange", (event) => {});

onscreenschange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben, die Änderung zu melden, alle Fenster zu schließen und dann alle neu zu öffnen, um sie an die neue Konfiguration anzupassen:

```js
const screenDetails = await window.getScreenDetails();

// Gibt die Anzahl der Bildschirme zurück
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // Wenn sich die neue Anzahl der Bildschirme von der alten Anzahl der Bildschirme unterscheidet, melden Sie den Unterschied
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `Die Anzahl der Bildschirme hat sich von ${noOfScreens} auf ${screenDetails.screens.length} geändert`,
    );

    // Aktualisieren Sie den Wert von noOfScreens
    noOfScreens = screenDetails.screens.length;
  }

  // Öffnen, schließen oder arrangieren Sie Fenster nach Bedarf, um sie an die neue Bildschirmanordnung anzupassen
  updateWindows();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
