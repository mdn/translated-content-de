---
title: Verwendung der Window Management API
slug: Web/API/Window_Management_API/Using
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{DefaultAPISidebar("Window Management API")}}

Diese Anleitung erklärt, wie Sie die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden. Der unten gezeigte Beispielcode stammt aus unserem [Multi-window Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Feature-Erkennung

Sie können die Window Management API erkennen, indem Sie auf das Vorhandensein von `getScreenDetails` in der aktuellen `window` Instanz überprüfen. Beispielsweise möchten Sie vielleicht einen Button bereitstellen, um eine Multi-Window-Darstellung zu öffnen, wenn die API unterstützt wird, oder ein anderes Erlebnis bieten, wie das Erstellen von Links zu den verschiedenen Seiten, wenn dies nicht der Fall ist:

```js
if ("getScreenDetails" in window) {
  // The Window Management API is supported
  createButton();
} else {
  // The Window Management API is not supported
  createLinks(sites);
}
```

## Grundlegende Verwendung

Kernstück der Windows Management API ist die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails), die ein Objekt mit Details zu allen auf dem System des Nutzers verfügbaren Bildschirmen zurückgibt:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

Wenn `getScreenDetails()` aufgerufen wird, wird der Nutzer um Erlaubnis gefragt, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu erfragen). Wenn der Nutzer die Erlaubnis erteilt, wird ein [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt zurückgegeben. Dieses Objekt enthält die folgenden Eigenschaften:

- `screens`: Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekten, wobei jedes detaillierte Informationen über einen separaten Bildschirm enthält, der dem System zur Verfügung steht (siehe unten). Dieses Array ist auch nützlich, um die Anzahl der verfügbaren Bildschirme über `screens.length` zu bestimmen.
- `currentScreen`: Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt, das detaillierte Informationen über den Bildschirm enthält, auf dem das aktuelle Browserfenster angezeigt wird.

[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekte erben die Eigenschaften der [`Screen`](/de/docs/Web/API/Screen) Schnittstelle und enthalten nützliche Informationen, um Fenster auf spezifischen Bildschirmen zu platzieren.

> [!NOTE]
> Sie können die Funktionalität basierend darauf beschränken, ob dem Nutzer mehr als ein Bildschirm zur Verfügung steht, indem Sie die [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) Eigenschaft verwenden. Diese gibt `true` zurück, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

### Fenster öffnen

Sie müssen weiterhin [`Window.open()`](/de/docs/Web/API/Window/open) verwenden, um Fenster zu öffnen und zu verwalten, aber das Obige bietet Ihnen bessere Informationen, um dies in einer Multi-Screen-Umgebung zu tun. Beispielsweise könnte eine Hilfsfunktion so aussehen:

```js
// Array to hold references to the currently open windows
let windowRefs = [];

// ...

function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  const windowRef = window.open(
    url,
    "_blank", // needed for it to open in a new window
    windowFeatures,
  );

  if (windowRef === null) {
    // If the browser is blocking new windows, close any windows that were
    // able to open and display instructions to help the user fix this problem
    closeAllWindows();
    popoverElem.showPopover();
  } else {
    // Store a reference to the window in the windowRefs array
    windowRefs.push(windowRef);
  }
}
```

Sie würden diese Funktion dann aufrufen und Fenster auf spezifischen Bildschirmen wie folgt öffnen:

```js
const screen1 = screenDetails.screens[0];
const screen2 = screenDetails.screens[1];
// Windows will be a third the width and the full height of the screen
// The available width of screen1, minus 3 times the horizontal browser chrome
// width, divided by 3
const windowWidth = Math.floor((screen1.availWidth - 3 * WINDOW_CHROME_X) / 3);
// The available height of screen1, minus the vertical browser chrome width
const windowHeight = Math.floor(screen1.availHeight - WINDOW_CHROME_Y);

// Open a window a third of the width and the entire height of the primary screen
openWindow(
  screen1.availLeft,
  screen1.availTop,
  windowWidth,
  windowHeight,
  sites[1].url,
);

// ...
```

### Alle Fenster schließen

Nach dem Öffnen jedes Fensters fügen wir eine Referenz auf das `windowRefs` Array hinzu. Dies ermöglicht es Ihnen beispielsweise, sie alle zu schließen, wenn ein Fenster geschlossen wird:

```js
function closeAllWindows() {
  // Loop through all window refs and close each one
  windowRefs.forEach((windowRef) => {
    windowRef.close();
  });
  windowRefs = [];
}

// Check whether one of our popup windows has been closed
// If so, close them all

closeMonitor = setInterval(checkWindowClose, 250);

function checkWindowClose() {
  if (windowRefs.some((windowRef) => windowRef.closed)) {
    closeAllWindows();
    clearInterval(closeMonitor);
  }
}
```

> [!NOTE]
> In unseren Experimenten schien die oben gezeigte [`setInterval()`](/de/docs/Web/API/Window/setInterval) Polling-Methode am besten zum Erkennen des Schließens von Fenstern im Fall von mehreren Fenstern zu funktionieren. Die Verwendung von Ereignissen wie [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`pagehide`](/de/docs/Web/API/Window/pagehide_event) oder [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) erwies sich als unzuverlässig, da beim gleichzeitigen Öffnen mehrerer Fenster der schnelle Wechsel des Fokus/der Sichtbarkeit die Handlerfunktion verfrüht auslöste.

> [!NOTE]
> Ein Problem mit dem obigen Beispiel ist, dass es konstante Werte verwendet, um die Größe der Chrome-Fenster-UI-Teile in den Berechnungen darzustellen — `WINDOW_CHROME_X` und `WINDOW_CHROME_Y` — um die Fenstergrößenberechnungen korrekt zu erhalten. Um präzise dimensionierte Fenster in anderen zukünftigen Implementierungen der API zu erstellen, müssten Sie eine kleine Bibliothek von Browser-Chrome-Größen führen und eine Browser-Erkennung nutzen, um zu entdecken, welcher Browser Ihre App rendert, und die richtige Größe für die Berechnungen wählen. Oder Sie können sich auf weniger präzise Fenstergößen verlassen.

### Umgang mit Browser-Popup-Blockern

In modernen Browsern ist für jeden `Window.open()` Aufruf ein separates Benutzer-Gestenevent erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Seiten die Nutzer mit vielen Fenstern überfluten. Allerdings stellt dies ein Problem für Multi-Window-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- Nicht mehr als ein neues Fenster gleichzeitig geöffnet wird.
- Bestehende Fenster wiederverwendet werden, um verschiedene Seiten anzuzeigen.
- Nutzer darüber informiert werden, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

In unserer Demo-Anwendung haben wir uns für die dritte Option entschieden. Unsere `openWindow()` Funktion enthält den folgenden Abschnitt:

```js
// ...

if (windowRef === null) {
  // If the browser is blocking new windows, close any windows that were
  // able to open and display instructions to help the user fix this problem
  closeAllWindows();
  popoverElem.showPopover();
} else {
  // Store a reference to the window in the windowRefs array
  windowRefs.push(windowRef);
}

// ...
```

Wenn der Browser ein neues Fenster blockiert, wird das resultierende `windowRef` `null` sein. In diesem Fall führen wir unsere `closeAllWindows()` Funktion aus, um alle Fenster zu schließen, die _geöffnet_ wurden, bevor das Blockieren begann, und zeigen ein [Popover-Element](/de/docs/Web/API/Popover_API) an, das erklärt, wie der Popup-Blocker deaktiviert werden kann.

## Einfacher Fall mit einem Fenster pro Anzeigegerät

Wenn Sie ein einzelnes Fenster auf jedem verfügbaren Anzeigegerät öffnen möchten, das die volle Breite und Höhe des Displays hat, könnten Sie ein Muster wie dieses verwenden:

```js
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

## Window-Management-Ereignisse

Die Window Management API bietet einige Ereignisse, um auf Änderungen der verfügbaren Bildschirme zu reagieren:

- Das `ScreenDetails` [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event) Ereignis
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder davon getrennt werden.
- Das `ScreenDetails` [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event) Ereignis
  - : Wird ausgelöst, wenn der aktuelle Bildschirm des Fensters sich in irgendeiner Weise ändert.
- Das `Screen` [`change`](/de/docs/Web/API/Screen/change_event) Ereignis
  - : Wird auf einem spezifischen Bildschirm ausgelöst, wenn sich dieser in irgendeiner Weise ändert.

So könnten Sie beispielsweise das `screenschange` Ereignis verwenden, um zu erkennen, wenn sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm angeschlossen oder abgesteckt wird), die Änderung melden, alle Fenster schließen und die Fensteranordnungen an die neue Konfiguration anpassen:

```js
screenDetails.addEventListener("screenschange", () => {
  // If the new number of screens is different to the old number of screens,
  // report the difference
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `The screen count changed from ${noOfScreens} to ${screenDetails.screens.length}`,
    );
  }

  // If the windows are open, close them and then open them again
  // So that they fit with the new screen configuration
  if (windowRefs.length > 0) {
    closeAllWindows();
    openWindows();
  }
});
```

## requestFullscreen() Bildschirmoption

Die Window Management API fügt eine neue `screen` Option zur [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) Methode hinzu, mit der Sie festlegen können, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Wenn Sie beispielsweise das Vollbild auf dem primären Betriebssystem-Bildschirm anzeigen möchten:

```js
try {
  const primaryScreen = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: primaryScreen });
} catch (err) {
  console.error(err.name, err.message);
}
```
