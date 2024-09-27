---
title: ScreenDetails
slug: Web/API/ScreenDetails
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`ScreenDetails`**-Interface der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert die Details aller Bildschirme, die dem Gerät des Benutzers zur Verfügung stehen.

Diese Informationen werden über die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) abgerufen.

> **Note:** `ScreenDetails` ist ein Live-Objekt, was bedeutet, dass es sich aktualisiert, wenn sich die verfügbaren Bildschirme ändern. Sie können daher dasselbe Objekt abfragen, um aktualisierte Werte zu erhalten, anstatt `getScreenDetails()` wiederholt aufzurufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm repräsentiert, auf dem das aktuelle Browserfenster angezeigt wird.

- [`screens`](/de/docs/Web/API/ScreenDetails/screens) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekten, von denen jedes detaillierte Informationen über einen bestimmten Bildschirm darstellt, der dem Gerät des Benutzers zur Verfügung steht.

    > **Note:** `screens` umfasst nur "erweiterte" Anzeigen, nicht solche, die ein anderes Display spiegeln.

## Ereignisse

- [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters in irgendeiner Weise ändert — zum Beispiel verfügbare Breite oder Höhe oder Ausrichtung.
- [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder vom System getrennt werden.

## Beispiele

> [!NOTE]
> Sehen Sie sich das [Lernumgebung mit mehreren Fenstern](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel an (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

### Grundlegender Zugriff auf Bildschirminformationen

Wenn [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) aufgerufen wird, wird der Benutzer um Erlaubnis gefragt, Fenster auf allen seinen Anzeigen zu verwalten (der Status dieser Erlaubnis kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) überprüft werden, um `window-management` abzufragen). Wenn der Benutzer die Erlaubnis erteilt, wird ein `ScreenDetails`-Objekt zurückgegeben. Dieses Objekt enthält Details zu allen Bildschirmen, die dem System des Benutzers zur Verfügung stehen.

Das folgende Beispiel öffnet auf jedem verfügbaren Display ein Fenster in voller Größe.

```js
const screenDetails = await window.getScreenDetails();

// Open a window on each screen of the device
for (const screen of screenDetails.screens) {
  openWindow(
    screen.availLeft,
    screen.availTop,
    screen.availWidth,
    screen.availHeight,
    url,
  );
}
```

### Reagieren auf Änderungen bei verfügbaren Bildschirmen

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wenn sich die verfügbaren Bildschirme geändert haben (vielleicht, wenn ein Bildschirm eingesteckt oder abgestöpselt wird), die Änderung melden und die Anordnung der Fenster an die neue Konfiguration anpassen:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens,
  // report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );

    // Update noOfScreens value
    noOfScreens = screenDetails.screens.length;
  }

  // Open, close, or rearrange windows as needed,
  // to fit the new screen configuration
  updateWindows();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
