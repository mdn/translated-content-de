---
title: ScreenDetails
slug: Web/API/ScreenDetails
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`ScreenDetails`**-Interface der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert die Details aller Bildschirme, die dem Gerät des Benutzers zur Verfügung stehen.

Diese Informationen werden über die Methode {{domxref("Window.getScreenDetails()")}} abgerufen.

> **Note:** `ScreenDetails` ist ein Live-Objekt, was bedeutet, dass es aktualisiert wird, sobald sich die verfügbaren Bildschirme ändern. Sie können daher dasselbe Objekt weiter abfragen, um aktualisierte Werte zu erhalten, anstatt wiederholt `getScreenDetails()` aufzurufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("EventTarget")}}._

- {{domxref("ScreenDetails.currentScreen", "currentScreen")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein einzelnes {{domxref("ScreenDetailed")}}-Objekt, das detaillierte Informationen über den Bildschirm darstellt, auf dem das aktuelle Browserfenster angezeigt wird.

- {{domxref("ScreenDetails.screens", "screens")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Ein Array von {{domxref("ScreenDetailed")}}-Objekten, von denen jedes detaillierte Informationen über einen bestimmten Bildschirm darstellt, der dem Gerät des Benutzers zur Verfügung steht.

    > **Note:** `screens` umfasst nur "erweiterte" Anzeigegeräte, nicht solche, die eine andere Anzeige spiegeln.

## Ereignisse

- {{domxref("ScreenDetails.currentscreenchange_event", "currentscreenchange")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters in irgendeiner Weise ändert – beispielsweise die verfügbare Breite oder Höhe oder die Ausrichtung.
- {{domxref("ScreenDetails.screenschange_event", "screenschange")}} {{experimental_inline}}
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder davon getrennt werden.

## Beispiele

> [!NOTE]
> Für ein vollständiges Beispiel siehe [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

### Zugriff auf grundlegende Bildschirminformationen

Wenn {{domxref("Window.getScreenDetails()")}} aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Displays zu verwalten (der Status dieser Berechtigung kann mit {{domxref("Permissions.query()")}} abgefragt werden, um `window-management` zu überprüfen). Wenn der Benutzer die Erlaubnis erteilt, wird ein `ScreenDetails`-Objekt zurückgegeben. Dieses Objekt enthält Details zu allen Bildschirmen, die dem System des Benutzers zur Verfügung stehen.

Das folgende Beispiel öffnet ein vollformatiges Fenster auf jedem verfügbaren Display.

```js
const screenDetails = await window.getScreenDetails();

// Öffnen Sie ein Fenster auf jedem Bildschirm des Geräts
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

### Reagieren auf Änderungen an verfügbaren Bildschirmen

Sie könnten das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm eingesteckt oder ausgesteckt wird), die Änderung melden und die Anordnung der Fenster an die neue Konfiguration anpassen:

```js
const screenDetails = await window.getScreenDetails();

// Rückgabe der Anzahl der Bildschirme
let noOfScreens = screenDetails.screens.length;

screenDetails.addEventListener("screenschange", () => {
  // Wenn die neue Anzahl an Bildschirmen von der alten Anzahl abweicht,
  // melden Sie den Unterschied
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `Die Anzahl der Bildschirme hat sich von ${noOfScreens} auf ${screenDetails.screens.length} geändert`,
    );

    // Aktualisieren Sie den Wert von noOfScreens
    noOfScreens = screenDetails.screens.length;
  }

  // Öffnen, schließen oder arrangieren Sie Fenster nach Bedarf neu,
  // um die neue Bildschirmkonfiguration anzupassen
  updateWindows();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
