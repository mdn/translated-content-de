---
title: LaunchParams
slug: Web/API/LaunchParams
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Das **`LaunchParams`**-Interface der [Launch Handler API](/de/docs/Web/API/Launch_Handler_API) wird verwendet, um benutzerdefinierte Startnavigation in einer PWA zu implementieren. Wenn [`window.launchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) aufgerufen wird, um die Funktionalität der Startnavigation einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine Instanz des `LaunchParams`-Objekts übergeben.

Ein solches benutzerdefiniertes Navigationshandling wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) eingeleitet, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`LaunchParams.files`](/de/docs/Web/API/LaunchParams/files) {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Gibt ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurück, die alle Dateien darstellen, die mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden.
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
        title.textContent = new URL(track).pathname.slice(1);
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

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) Demo-App
