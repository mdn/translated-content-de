---
title: Verwendung der Window Management API
slug: Web/API/Window_Management_API/Using
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Dieser Leitfaden erklärt, wie Sie die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden. Der nachfolgende Beispielcode stammt aus unserer [Multi-Window-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Funktionsüberprüfung

Sie können die Window Management API erkennen, indem Sie die Existenz von `getScreenDetails` in der aktuellen `window`-Instanz prüfen. Beispielsweise möchten Sie möglicherweise eine Schaltfläche bereitstellen, um eine Multi-Window-Anzeige zu öffnen, wenn die API unterstützt wird, oder ein anderes Erlebnis schaffen, wie z.B. das Erstellen von Links zu den verschiedenen Seiten, wenn dies nicht der Fall ist:

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

Der Kern der Windows Management API ist die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails), die ein Objekt zurückgibt, das Details aller auf dem System des Benutzers verfügbaren Bildschirme enthält:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf all seinen Anzeigen zu verwalten (der Status dieser Erlaubnis kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) für `window-management` abgefragt werden). Wenn der Benutzer die Erlaubnis erteilt, wird ein [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt zurückgegeben. Dieses Objekt enthält folgende Eigenschaften:

- `screens`: Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekten, die jeweils detaillierte Informationen über einen separaten, im System verfügbaren Bildschirm enthalten (siehe unten). Dieses Array ist auch nützlich, um die Anzahl der verfügbaren Bildschirme über `screens.length` zu bestimmen.
- `currentScreen`: Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm enthält, auf dem das aktuelle Browserfenster angezeigt wird.

[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte erben die Eigenschaften der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle und enthalten nützliche Informationen, um Fenster auf bestimmten Bildschirmen zu platzieren.

> [!NOTE]
> Sie können Funktionen basierend darauf steuern, ob der Benutzer mehr als einen Bildschirm zur Verfügung hat, indem Sie die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) verwenden. Diese gibt `true` zurück, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

### Fenster öffnen

Sie müssen weiterhin [`Window.open()`](/de/docs/Web/API/Window/open) verwenden, um Fenster zu öffnen und zu verwalten, aber das Obige bietet Ihnen bessere Informationen, um dies in einer Multi-Screen-Umgebung zu tun. Eine Hilfsfunktion könnte beispielsweise folgendermaßen aussehen:

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

Sie würden dann diese Funktion aufrufen und Fenster auf spezifischen Bildschirmen wie folgt öffnen:

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

Nachdem Sie jedes Fenster geöffnet haben, fügen Sie eine Referenz zum `windowRefs`-Array hinzu. Dies ermöglicht es Ihnen beispielsweise, alle zu schließen, wenn ein Fenster geschlossen wird:

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
> In unseren Experimenten schien die oben gezeigte Polling-Methode [`setInterval()`](/de/docs/Web/API/SetInterval) am besten zu funktionieren, um das Schließen von Fenstern im Fall von mehreren Fenstern zu erkennen. Die Verwendung von Ereignissen wie [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`pagehide`](/de/docs/Web/API/Window/pagehide_event) oder [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) erwies sich als unzuverlässig, da bei Öffnen mehrerer Fenster zur gleichen Zeit die schnelle Verschiebung des Fokus/Sichtbarkeit dazu führte, dass die Handler-Funktion vorzeitig ausgelöst wurde.

> [!NOTE]
> Ein Anliegen bei dem obigen Beispiel ist, dass es konstante Werte zur Darstellung der Größe der Chrome-Fenster-UI-Teile in den Berechnungen verwendet - `WINDOW_CHROME_X` und `WINDOW_CHROME_Y` - um die Fenstergroßenberechnungen korrekt zu machen. Um präzise dimensionierte Fenster in anderen zukünftigen Implementierungen der API zu erstellen, müssten Sie eine kleine Bibliothek von Browser-Chrome-Größen führen und Browser-Erkennung einsetzen, um herauszufinden, welcher Browser Ihre App rendert, und die richtige Größe für die Berechnungen auswählen. Oder Sie können sich auf ungenauere Fenstergrößen verlassen.

### Umgang mit Browser-Pop-up-Blockern

In modernen Browsern ist ein separates Benutzer-Gesten-Ereignis für jeden `Window.open()`-Aufruf erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Websites Benutzer mit vielen Fenstern überfluten. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um dieses Problem zu lösen, können Sie Ihre Anwendungen so designen:

- Öffnen Sie nicht mehr als ein neues Fenster auf einmal.
- Nutzen Sie bestehende Fenster, um verschiedene Seiten anzuzeigen.
- Beraten Sie Benutzer darüber, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

In unserer Demo-Anwendung haben wir uns für die dritte Option entschieden. Unsere `openWindow()`-Funktion enthält den folgenden Abschnitt:

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

Wenn der Browser ein neues Fenster blockiert, wird das resultierende `windowRef` `null` sein. In diesem Fall führen wir unsere `closeAllWindows()`-Funktion aus, um alle Fenster zu schließen, die _tatsächlich_ geöffnet werden konnten, bevor die Blockierung begann, und zeigen ein [Popover-Element](/de/docs/Web/API/Popover_API), das erklärt, wie der Pop-up-Blocker deaktiviert werden kann.

## Einfacher Einzelfensterfall pro Anzeige

Wenn Sie auf jedem verfügbaren Display ein einzelnes Fenster öffnen möchten, das die volle Breite und Höhe des Displays hat, könnten Sie ein Muster wie dieses verwenden:

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

## Fensterverwaltungsereignisse

Die Window Management API bietet einige Ereignisse, um auf Änderungen an den verfügbaren Bildschirmen zu reagieren:

- Das `ScreenDetails`-Ereignis [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event)
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder von diesem getrennt werden.
- Das `ScreenDetails`-Ereignis [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event)
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters irgendwie ändert.
- Das `Screen`-Ereignis [`change`](/de/docs/Web/API/Screen/change_event)
  - : Wird auf einem bestimmten Bildschirm ausgelöst, wenn er sich irgendwie ändert.

Sie könnten beispielsweise das Ereignis `screenschange` verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm angeschlossen oder abgetrennt wird), die Änderung zu melden, alle Fenster zu schließen und die Fensteranordnungen an die neue Konfiguration anzupassen:

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

Die Window Management API fügt der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) eine neue `screen`-Option hinzu, die es Ihnen ermöglicht, anzugeben, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Zum Beispiel, wenn Sie es im Vollbildmodus auf dem primären Betriebssystem-Bildschirm anzeigen möchten:

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
