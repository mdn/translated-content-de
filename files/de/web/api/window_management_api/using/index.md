---
title: Verwendung der Window Management API
slug: Web/API/Window_Management_API/Using
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Diese Anleitung erklärt, wie Sie die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden. Der unten gezeigte Beispielcode stammt aus unserer [Multi-window Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) Beispiel (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Funktionsüberprüfung

Sie können die Window Management API erkennen, indem Sie prüfen, ob `getScreenDetails` in der aktuellen `window`-Instanz vorhanden ist. Beispielsweise möchten Sie möglicherweise einen Button bereitstellen, um eine Multi-Window-Anzeige zu öffnen, wenn die API unterstützt wird, oder eine andere Erfahrung wie das Erstellen von Links zu den verschiedenen Seiten, falls dies nicht der Fall ist:

```js
if ("getScreenDetails" in window) {
  // Die Window Management API wird unterstützt
  createButton();
} else {
  // Die Window Management API wird nicht unterstützt
  createLinks(sites);
}
```

## Grundlegende Nutzung

Der Kern der Windows Management API ist die Methode {{domxref("Window.getScreenDetails()")}}, die ein Objekt zurückgibt, das Details aller Bildschirme enthält, die dem System des Benutzers zur Verfügung stehen:

```js
const screenDetails = await window.getScreenDetails();

// Gibt die Anzahl der Bildschirme zurück
const noOfScreens = screenDetails.screens.length;
```

Wenn `getScreenDetails()` aufgerufen wird, wird der Benutzer um Genehmigung gebeten, Fenster auf all seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit {{domxref("Permissions.query()")}} zur Abfrage von `window-management` überprüft werden). Wenn der Benutzer die Erlaubnis erteilt, wird ein {{domxref("ScreenDetails")}}-Objekt zurückgegeben. Dieses Objekt enthält die folgenden Eigenschaften:

- `screens`: Ein Array von {{domxref("ScreenDetailed")}}-Objekten, von denen jedes detaillierte Informationen über einen separaten Bildschirm bereithält, der dem System zur Verfügung steht (siehe unten). Dieses Array ist auch nützlich, um die Anzahl der verfügbaren Bildschirme über `screens.length` zu bestimmen.
- `currentScreen`: Ein einzelnes {{domxref("ScreenDetailed")}}-Objekt, das detaillierte Informationen über den Bildschirm enthält, auf dem das aktuelle Browserfenster angezeigt wird.

{{domxref("ScreenDetailed")}}-Objekte erben die Eigenschaften der {{domxref("Screen")}}-Schnittstelle und enthalten nützliche Informationen für die Platzierung von Fenstern auf bestimmten Bildschirmen.

> [!NOTE]
> Sie können die Funktionalität basierend darauf steuern, ob der Benutzer mehr als einen Bildschirm verfügbar hat, indem Sie die Eigenschaft {{domxref("Screen.isExtended", "Window.screen.isExtended")}} verwenden. Diese gibt `true` zurück, wenn das Gerät mehrere Bildschirme hat, und `false`, wenn nicht.

### Öffnen von Fenstern

Sie müssen weiterhin {{domxref("Window.open()")}} verwenden, um Fenster zu öffnen und zu verwalten, aber die obigen Informationen bieten Ihnen bessere Informationen, um dies in einer Multi-Screen-Umgebung zu tun. Beispielsweise könnte eine Dienstprogrammfunktion so aussehen:

```js
// Array zum Speichern von Referenzen der aktuell offenen Fenster
let windowRefs = [];

// ...

function openWindow(left, top, width, height, url) {
  const windowFeatures = `left=${left},top=${top},width=${width},height=${height}`;
  const windowRef = window.open(
    url,
    "_blank", // erforderlich, damit es in einem neuen Fenster geöffnet wird
    windowFeatures,
  );

  if (windowRef === null) {
    // Wenn der Browser neue Fenster blockiert, schließen Sie alle Fenster, die
    // geöffnet wurden und zeigen Sie Anweisungen, um dem Benutzer bei der Behebung dieses Problems zu helfen
    closeAllWindows();
    popoverElem.showPopover();
  } else {
    // Speichern Sie eine Referenz des Fensters im windowRefs-Array
    windowRefs.push(windowRef);
  }
}
```

Sie würden diese Funktion dann aufrufen und Fenster auf bestimmten Bildschirmen wie folgt öffnen:

```js
const screen1 = screenDetails.screens[0];
const screen2 = screenDetails.screens[1];
// Fenster werden ein Drittel der Breite und die volle Höhe des Bildschirms sein
// Die verfügbare Breite von screen1 minus 3-fache der horizontalen Browser-Chrome-Breite, geteilt durch 3
const windowWidth = Math.floor((screen1.availWidth - 3 * WINDOW_CHROME_X) / 3);
// Die verfügbare Höhe von screen1 minus der vertikalen Browser-Chrome-Höhe
const windowHeight = Math.floor(screen1.availHeight - WINDOW_CHROME_Y);

// Öffnen Sie ein Fenster ein Drittel der Breite und die gesamte Höhe des primären Bildschirms
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

Nach dem Öffnen jedes Fensters fügen wir dem `windowRefs`-Array eine Referenz hinzu. Dies ermöglicht es Ihnen beispielsweise, alle zu schließen, wenn ein Fenster geschlossen wird:

```js
function closeAllWindows() {
  // Durchlaufen Sie alle Fensterreferenzen und schließen Sie jedes einzelne
  windowRefs.forEach((windowRef) => {
    windowRef.close();
  });
  windowRefs = [];
}

// Überprüfen Sie, ob eines unserer Popup-Fenster geschlossen wurde
// Wenn ja, schließen Sie alle

closeMonitor = setInterval(checkWindowClose, 250);

function checkWindowClose() {
  if (windowRefs.some((windowRef) => windowRef.closed)) {
    closeAllWindows();
    clearInterval(closeMonitor);
  }
}
```

> [!NOTE]
> In unseren Experimenten schien die gezeigte {{domxref("setInterval()")}}-Polling-Methode am besten geeignet zu sein, um das Schließen von Fenstern im Fall von mehreren Fenstern zu erkennen. Die Verwendung von Ereignissen wie {{domxref("Window.beforeunload_event", "beforeunload")}}, {{domxref("Window.pagehide_event", "pagehide")}} oder {{domxref("Document.visibilitychange_event", "visibilitychange")}} erwies sich als unzuverlässig, da bei gleichzeitiger Öffnung mehrerer Fenster die schnelle Verschiebung des Fokus/die Sichtbarkeit dazu führte, dass die Handler-Funktion vorzeitig ausgelöst wurde.

> [!NOTE]
> Ein Anliegen bei dem obigen Beispiel ist, dass es konstante Werte verwendet, um die Größe der Chrome-Fenster-UI-Abschnitte in den Berechnungen darzustellen — `WINDOW_CHROME_X` und `WINDOW_CHROME_Y` — um die Größenberechnungen der Fenster korrekt zu erhalten. Um im Falle eines anderen zukünftigen API-Implementierungen präzise dimensionierte Fenster zu erstellen, müssten Sie eine kleine Bibliothek von Browser-Chrome-Größen behalten und eine Browser-Erkennung verwenden, um herauszufinden, welcher Browser Ihre App rendert und die richtige Größe für Berechnungen auswählen. Oder Sie können sich auf weniger präzise Fenstergrößen verlassen.

### Umgang mit Browser-Popup-Blockern

In modernen Browsern ist für jeden `Window.open()`-Aufruf ein separates Nutzer-Gesture-Event erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Websites Benutzer mit vielen Fenstern spammen. Dies stellt jedoch ein Problem für Mehrfensteranwendungen dar. Um dieses Problem zu umgehen, können Sie Ihre Anwendungen so gestalten, dass:

- Sie nicht mehr als ein neues Fenster gleichzeitig öffnen.
- Vorhandene Fenster wiederverwenden, um verschiedene Seiten anzuzeigen.
- Den Benutzern Ratschläge geben, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

In unserer Demo-Anwendung haben wir uns für die dritte Option entschieden. Unsere Funktion `openWindow()` enthält den folgenden Abschnitt:

```js
// ...

if (windowRef === null) {
  // Wenn der Browser neue Fenster blockiert, schließen Sie alle Fenster, die
  // geöffnet wurden, und zeigen Sie Anweisungen, um dem Benutzer bei der Behebung dieses Problems zu helfen
  closeAllWindows();
  popoverElem.showPopover();
} else {
  // Speichern Sie eine Referenz des Fensters im windowRefs-Array
  windowRefs.push(windowRef);
}

// ...
```

Wenn der Browser ein neues Fenster blockiert, wird die resultierende `windowRef` `null` sein. In diesem Fall führen wir unsere Funktion `closeAllWindows()` aus, um alle Fenster zu schließen, die _vor_ dem Blockieren geöffnet werden konnten, und zeigen ein [Popover-Element](/de/docs/Web/API/Popover_API), das erklärt, wie der Popup-Blocker deaktiviert werden kann.

## Einfacher Ein-Fenster-pro-Display-Fall

Wenn Sie auf jedem verfügbaren Bildschirm ein einzelnes Fenster öffnen möchten, das die volle Breite und Höhe des Bildschirms hat, könnten Sie ein Muster wie dieses verwenden:

```js
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

## Ereignisse zur Fensterverwaltung

Die Window Management API bietet einige Ereignisse, um auf Änderungen der verfügbaren Bildschirme zu reagieren:

- Das `ScreenDetails` {{domxref("ScreenDetails.screenschange_event", "screenschange")}}-Ereignis
  - : Wird ausgelöst, wenn Bildschirme mit dem System verbunden oder von diesem getrennt werden.
- Das `ScreenDetails` {{domxref("ScreenDetails.currentscreenchange_event", "currentscreenchange")}}-Ereignis
  - : Wird ausgelöst, wenn sich der aktuelle Bildschirm des Fensters in irgendeiner Weise ändert.
- Das `Screen` {{domxref("Screen.change_event", "change")}}-Ereignis
  - : Wird bei einem bestimmten Bildschirm ausgelöst, wenn sich dieser in irgendeiner Weise ändert.

Zum Beispiel könnten Sie das `screenschange`-Ereignis verwenden, um zu erkennen, wann sich die verfügbaren Bildschirme geändert haben (vielleicht wenn ein Bildschirm eingesteckt oder abgesteckt wird), die Änderung zu melden, alle Fenster zu schließen und Fensteranordnungen zu aktualisieren, um der neuen Konfiguration zu entsprechen:

```js
screenDetails.addEventListener("screenschange", () => {
  // Wenn die neue Anzahl der Bildschirme nicht mit der alten Anzahl der Bildschirme übereinstimmt,
  // melden Sie den Unterschied
  if (screenDetails.screens.length !== noOfScreens) {
    console.log(
      `Die Anzahl der Bildschirme hat sich von ${noOfScreens} auf ${screenDetails.screens.length} geändert`,
    );
  }

  // Wenn die Fenster geöffnet sind, schließen Sie sie und öffnen Sie sie dann erneut
  // Damit sie zur neuen Bildschirmkonfiguration passen
  if (windowRefs.length > 0) {
    closeAllWindows();
    openWindows();
  }
});
```

## requestFullscreen() Bildschirmoption

Die Window Management API fügt eine neue `screen`-Option zur Methode {{domxref("Element.requestFullscreen", "requestFullscreen()")}} hinzu, die es Ihnen ermöglicht, anzugeben, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Zum Beispiel, wenn Sie es auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten:

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
