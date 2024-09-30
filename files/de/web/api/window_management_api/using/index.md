---
title: Verwendung der Window Management API
slug: Web/API/Window_Management_API/Using
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Dieser Leitfaden erklärt, wie die [Window Management API](/de/docs/Web/API/Window_Management_API) verwendet wird. Der unten gezeigte Beispielcode stammt aus unserer [Lernumgebung für mehrere Fenster](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Feature-Erkennung

Sie können die Window Management API erkennen, indem Sie das Vorhandensein von `getScreenDetails` in der aktuellen `window`-Instanz überprüfen. Beispielsweise möchten Sie möglicherweise eine Schaltfläche bereitstellen, um eine Anzeige mit mehreren Fenstern zu öffnen, falls die API unterstützt wird, oder eine andere Erfahrung wie das Erstellen von Links zu den verschiedenen Seiten, falls nicht:

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

Der Kern der Windows Management API ist die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails), die ein Objekt mit Details zu allen Bildschirmen zurückgibt, die dem System des Benutzers zur Verfügung stehen:

```js
const screenDetails = await window.getScreenDetails();

// Return the number of screens
const noOfScreens = screenDetails.screens.length;
```

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Erlaubnis gebeten, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Erlaubnis kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` abzufragen). Wenn der Benutzer die Erlaubnis erteilt, wird ein [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt zurückgegeben. Dieses Objekt enthält die folgenden Eigenschaften:

- `screens`: Ein Array von [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekten, von denen jedes detaillierte Informationen über einen separaten Bildschirm enthält, der dem System zur Verfügung steht (siehe unten). Dieses Array ist auch nützlich, um die Anzahl der verfügbaren Bildschirme über `screens.length` zu bestimmen.
- `currentScreen`: Ein einzelnes [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt, das detaillierte Informationen über den Bildschirm enthält, auf dem das aktuelle Browserfenster angezeigt wird.

[`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte erben die Eigenschaften der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle und enthalten nützliche Informationen zum Platzieren von Fenstern auf bestimmten Bildschirmen.

> [!NOTE]
> Sie können die Funktionalität basierend darauf einschränken, ob der Benutzer mehr als einen Bildschirm zur Verfügung hat, indem Sie die Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) verwenden. Diese gibt `true` zurück, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

### Fenster öffnen

Sie müssen weiterhin [`Window.open()`](/de/docs/Web/API/Window/open) verwenden, um Fenster zu öffnen und zu verwalten, aber die obigen Informationen bieten Ihnen bessere Informationen dafür in einer Umgebung mit mehreren Bildschirmen. Ein Dienstprogramm-Funktion könnte beispielsweise so aussehen:

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

Sie würden diese Funktion dann aufrufen und Fenster auf bestimmten Bildschirmen wie folgt öffnen:

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

### Schließen aller Fenster

Nach dem Öffnen jedes Fensters fügen wir eine Referenz zum `windowRefs`-Array hinzu. Dadurch können Sie beispielsweise alle schließen, wenn ein Fenster geschlossen wird:

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
> In unseren Experimenten schien die oben gezeigte [`setInterval()`](/de/docs/Web/API/SetInterval)-Polling-Methode am besten zu funktionieren, um das Schließen von Fenstern im Fall mehrerer Fenster zu erkennen. Die Verwendung von Ereignissen wie [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`pagehide`](/de/docs/Web/API/Window/pagehide_event) oder [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event) erwies sich als unzuverlässig, da beim gleichzeitigen Öffnen mehrerer Fenster der schnelle Wechsel von Fokus/Sichtbarkeit dazu führte, dass die Handler-Funktion vorzeitig ausgelöst wurde.

> [!NOTE]
> Ein Problem mit dem obigen Beispiel ist, dass es feste Werte verwendet, um die Größe des Chrome-Fenster-UIs in den Berechnungen darzustellen — `WINDOW_CHROME_X` und `WINDOW_CHROME_Y` — um die Fenstergrößenberechnungen korrekt zu machen. Um präzise dimensionierte Fenster auf anderen zukünftigen Implementierungen der API zu erstellen, müssten Sie eine kleine Datenbank mit Browser-Chrome-Größen erstellen und eine Browser-Erkennung verwenden, um herauszufinden, welcher Browser Ihre App rendert, und die richtige Größe für die Berechnungen wählen. Oder Sie können sich auf weniger präzise Fenstergrößen verlassen.

### Umgang mit Popup-Blockern im Browser

In modernen Browsern ist ein separates Benutzer-Gestenerereignis für jeden Aufruf von `Window.open()` erforderlich, aus Sicherheitsgründen. Dadurch wird verhindert, dass Sites Benutzer mit vielen Fenstern spammen. Dies stellt jedoch ein Problem für Anwendungen mit mehreren Fenstern dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten:

- Öffnen Sie nicht mehr als ein neues Fenster gleichzeitig.
- Verwenden Sie vorhandene Fenster erneut, um unterschiedliche Seiten anzuzeigen.
- Raten Sie den Benutzern, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

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

Wenn der Browser ein neues Fenster blockiert, ist das resultierende `windowRef` `null`. In diesem Fall führen wir unsere `closeAllWindows()`-Funktion aus, um alle Fenster zu schließen, die _vor_ Beginn der Blockierung geöffnet wurden, und zeigen ein [Popover-Element](/de/docs/Web/API/Popover_API) an, das erklärt, wie der Popup-Blocker deaktiviert werden kann.

## Einfacher Fall eines einzelnen Fensters pro Anzeige

Wenn Sie auf jedem verfügbaren Bildschirm ein einzelnes Fenster öffnen möchten, das die volle Breite und Höhe des Bildschirms einnimmt, könnten Sie ein Muster wie dieses verwenden:

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

## Ereignisse zur Fensterverwaltung

Die Window Management API bietet einige Ereignisse, um auf Änderungen in den verfügbaren Bildschirmen zu reagieren:

- Das `ScreenDetails`-Ereignis [`screenschange`](/de/docs/Web/API/ScreenDetails/screenschange_event)
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder vom System getrennt werden.
- Das `ScreenDetails`-Ereignis [`currentscreenchange`](/de/docs/Web/API/ScreenDetails/currentscreenchange_event)
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters in irgendeiner Weise ändert.
- Das `Screen`-Ereignis [`change`](/de/docs/Web/API/Screen/change_event)
  - : Wird auf einem bestimmten Bildschirm ausgelöst, wenn sich dieser in irgendeiner Weise ändert.

Beispielsweise könnten Sie das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm angeschlossen oder abgetrennt wird), die Änderung zu melden, alle Fenster zu schließen und die Fensteranordnung an die neue Konfiguration anzupassen:

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

Die Window Management API fügt der Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) eine neue `screen`-Option hinzu, die es Ihnen ermöglicht, anzugeben, auf welchem Bildschirm Sie das Element im Vollbildmodus darstellen möchten. Zum Beispiel, wenn Sie es auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten:

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
