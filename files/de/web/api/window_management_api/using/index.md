---
title: Verwendung der Window Management API
slug: Web/API/Window_Management_API/Using
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("Window Management API")}}

Dieser Leitfaden erklärt, wie Sie die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden. Der unten gezeigte Beispielcode stammt aus unserer [Multi-window Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Feature-Erkennung

Sie können die Window Management API erkennen, indem Sie prüfen, ob `getScreenDetails` in der aktuellen `window`-Instanz existiert. Zum Beispiel könnten Sie einen Button bereitstellen, um eine Multi-Fenster-Anzeige zu öffnen, wenn die API unterstützt wird, oder eine andere Erfahrung bieten, wie das Erstellen von Links zu den verschiedenen Seiten, wenn sie nicht unterstützt wird:

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

Der Kern der Window Management API ist die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails), die ein Objekt zurückgibt, das Details zu allen im System des Benutzers verfügbaren Bildschirmen enthält:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu ermitteln). Wenn der Benutzer die Erlaubnis erteilt, wird ein [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt zurückgegeben. Dieses Objekt enthält die folgenden Eigenschaften:

- `screens`: Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekten, von denen jedes detaillierte Informationen über einen separaten, für das System verfügbaren Bildschirm enthält (siehe unten). Dieses Array ist auch nützlich, um die Anzahl der verfügbaren Bildschirme über `screens.length` zu ermitteln.
- `currentScreen`: Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm enthält, auf dem das aktuelle Browserfenster angezeigt wird.

[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte erben die Eigenschaften der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle und enthalten nützliche Informationen, um Fenster auf bestimmten Bildschirmen zu platzieren.

> [!NOTE]
> Sie können die Funktionalität basierend darauf steuern, ob der Benutzer mehr als einen Bildschirm verfügbar hat, indem Sie die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) verwenden. Dies gibt `true` zurück, wenn das Gerät über mehrere Bildschirme verfügt, und `false`, wenn nicht.

### Fenster öffnen

Sie müssen weiterhin [`Window.open()`](/de/docs/Web/API/Window/open) verwenden, um Fenster zu öffnen und zu verwalten, aber das Obige liefert Ihnen bessere Informationen, um dies in einer Umgebung mit mehreren Bildschirmen zu tun. Beispielsweise könnte eine Dienstprogrammfunktion folgendermaßen aussehen:

```js
// Array to hold references to the currently open windows
const windowRefs = [];

// …

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

// …
```

### Alle Fenster schließen

Nach dem Öffnen jedes Fensters fügen wir der `windowRefs`-Array eine Referenz hinzu. Dies ermöglicht es Ihnen, zum Beispiel alle zu schließen, wenn ein Fenster geschlossen wird:

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
> In unseren Experimenten schien die oben gezeigte Polling-Methode [`setInterval()`](/de/docs/Web/API/Window/setInterval) am besten geeignet zu sein, um das Schließen von Fenstern im Fall mehrerer Fenster zu erkennen. Die Verwendung von Ereignissen wie [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`pagehide`](/de/docs/Web/API/Window/pagehide_event) oder [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) erwies sich als unzuverlässig, da beim gleichzeitigen Öffnen mehrerer Fenster der schnelle Wechsel in der Fokus-/Sichtbarkeit die Handler-Funktion vorzeitig auszulösen schien.

> [!NOTE]
> Ein Anliegen bei dem obigen Beispiel ist, dass es konstante Werte verwendet, um die Größe der Chrome-Fenster-UI-Teile in den Berechnungen darzustellen — `WINDOW_CHROME_X` und `WINDOW_CHROME_Y` — um die Fenstergrößenberechnungen korrekt zu machen. Um präzise dimensionierte Fenster bei anderen zukünftigen Implementierungen der API zu erstellen, müssten Sie eine kleine Bibliothek von Browser-Chrome-Größen führen und eine Browser-Erkennung verwenden, um festzustellen, welcher Browser Ihre App rendert und die richtige Größe für die Berechnungen wählen. Oder Sie verlassen sich auf weniger präzise Fenstergrößen.

### Umgang mit Popup-Blockern des Browsers

In modernen Browsern ist für jeden `Window.open()`-Aufruf aus Sicherheitsgründen ein separates Benutzerereignis erforderlich. Dies verhindert, dass Websites den Benutzer mit vielen Fenstern zuspammen. Dies stellt jedoch ein Problem für Multi-Fenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie:

- Nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Bestehende Fenster wiederverwenden, um unterschiedliche Seiten anzuzeigen.
- Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

In unserer Demo-Anwendung haben wir uns für die dritte Option entschieden. Unsere `openWindow()`-Funktion enthält den folgenden Abschnitt:

```js
// …

if (windowRef === null) {
  // If the browser is blocking new windows, close any windows that were
  // able to open and display instructions to help the user fix this problem
  closeAllWindows();
  popoverElem.showPopover();
} else {
  // Store a reference to the window in the windowRefs array
  windowRefs.push(windowRef);
}

// …
```

Wenn der Browser ein neues Fenster blockiert, wird das resultierende `windowRef` `null` sein. In diesem Fall führen wir unsere `closeAllWindows()`-Funktion aus, um alle Fenster zu schließen, die _tatsächlich_ geöffnet wurden, bevor die Blockierung begann, und ein [Popover-Element](/de/docs/Web/API/Popover_API) anzuzeigen, das erklärt, wie der Popup-Blocker deaktiviert werden kann.

## Einfacher Fall eines einzelnen Fensters pro Anzeige

Wenn Sie ein einzelnes Fenster auf jedem verfügbaren Display öffnen möchten, das die volle Breite und Höhe des Displays hat, könnten Sie ein Muster wie dieses verwenden:

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

Die Window Management API bietet einige Ereignisse, um auf Änderungen der verfügbaren Bildschirme zu reagieren:

- Das `ScreenDetails`-Ereignis [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event)
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder davon getrennt werden.
- Das `ScreenDetails`-Ereignis [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event)
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters auf irgendeine Weise ändert.
- Das `Screen`-Ereignis [`change`](/de/docs/Web/API/Screen/change_event)
  - : Wird bei einem bestimmten Bildschirm ausgelöst, wenn er auf irgendeine Weise geändert wird.

Sie könnten also beispielsweise das `screenschange`-Ereignis verwenden, um zu erkennen, wenn sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm ein- oder ausgesteckt wird), die Änderung zu melden, alle Fenster zu schließen und die Fensteranordnungen an die neue Konfiguration anzupassen:

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

## `requestFullscreen()` Bildschirmoption

Die Window Management API fügt der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) eine neue `screen`-Option hinzu, die es Ihnen erlaubt, anzugeben, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Wenn Sie es beispielsweise auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten:

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
