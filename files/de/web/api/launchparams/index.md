---
title: LaunchParams
slug: Web/API/LaunchParams
l10n:
  sourceCommit: 9723a2e68ec3f6914881c79eab6fbf8c7ef235be
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Das **`LaunchParams`**-Interface der [Launch Handler API](/de/docs/Web/API/Launch_Handler_API) wird verwendet, um benutzerdefinierte Startnavigationsverarbeitung in einer PWA zu implementieren. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Funktion zum Handling der Startnavigation einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine Instanz des `LaunchParams`-Objekts übergeben.

Eine solche benutzerdefinierte Navigationsverarbeitung wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files) {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Gibt ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurück, die alle Dateien repräsentieren, die mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben wurden.
- [`LaunchParams.targetURL`](/de/docs/Web/API/LaunchParams/targetURL) {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Gibt die Ziel-URL des Starts zurück.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Assuming a music player app that gets a track passed to it to be played
      const track = params.get("track");
      if (track) {
        audio.src = track;
        title.textContent = new URL(track).pathname.substr(1);
        audio.play();
      }
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Launch Handler API: Steuern Sie, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
