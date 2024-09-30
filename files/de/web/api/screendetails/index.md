---
title: ScreenDetails
slug: Web/API/ScreenDetails
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`ScreenDetails`**-Schnittstelle der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert die Details aller Bildschirme, die dem Gerät des Benutzers zur Verfügung stehen.

Diese Informationen sind über die [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails)-Methode zugänglich.

> **Note:** `ScreenDetails` ist ein Live-Objekt, das sich aktualisiert, wenn sich die verfügbaren Bildschirme ändern. Sie können daher dasselbe Objekt weiterhin abfragen, um aktualisierte Werte zu erhalten, anstatt `getScreenDetails()` wiederholt aufzurufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm repräsentiert, auf dem das aktuelle Browserfenster angezeigt wird.

- [`screens`](/de/docs/Web/API/ScreenDetails/screens) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekten, von denen jedes detaillierte Informationen über einen bestimmten Bildschirm enthält, der dem Gerät des Benutzers zur Verfügung steht.

    > **Note:** `screens` umfasst nur "erweiterte" Anzeigen, nicht die, die eine andere Anzeige spiegeln.

## Ereignisse

- [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der aktuelle Bildschirm des Fensters sich in irgendeiner Weise ändert — beispielsweise die verfügbare Breite oder Höhe oder die Ausrichtung.
- [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder davon getrennt werden.

## Beispiele

> [!NOTE]
> Sehen Sie sich das [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel an (sehen Sie auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

### Grundlegender Zugriff auf Bildschirminformationen

Wenn [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Anzeigen zu verwalten (der Status dieser Erlaubnis kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu prüfen). Wenn der Benutzer die Erlaubnis erteilt, wird ein `ScreenDetails`-Objekt zurückgegeben. Dieses Objekt enthält Details aller Bildschirme, die dem System des Benutzers zur Verfügung stehen.

Das untenstehende Beispiel öffnet ein Fenster in voller Größe auf jedem verfügbaren Display.

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

### Reaktion auf Änderungen verfügbarer Bildschirme

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm angeschlossen oder entfernt wird), die Änderung zu melden und die Fensteranordnung an die neue Konfiguration anzupassen:

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
