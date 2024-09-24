---
title: LaunchParams
slug: Web/API/LaunchParams
l10n:
  sourceCommit: 9723a2e68ec3f6914881c79eab6fbf8c7ef235be
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`LaunchParams`** Schnittstelle der {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}} wird verwendet, wenn benutzerdefiniertes Launch-Navigationshandling in einer PWA implementiert wird. Wenn {{domxref("LaunchQueue.setConsumer", "window.launchQueue.setConsumer()")}} aufgerufen wird, um die Launch-Navigationshandhabungsfunktionalität einzurichten, wird der Callback-Funktion innerhalb von `setConsumer()` eine `LaunchParams`-Objektinstanz übergeben.

Ein solches benutzerdefiniertes Navigationshandling wird über {{domxref("Window.launchQueue")}} initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("LaunchParams.files")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Gibt ein schreibgeschütztes Array von {{domxref("FileSystemHandle")}} Objekten zurück, die alle Dateien darstellen, die zusammen mit der Launch-Navigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST) Methode übermittelt wurden.
- {{domxref("LaunchParams.targetURL")}} {{ReadOnlyInline}}{{Experimental_Inline}}
  - : Gibt die Ziel-URL des Launches zurück.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Annahme einer Musikplayer-App, die einen Track erhält, der abgespielt werden soll
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

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
