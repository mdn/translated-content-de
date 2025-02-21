---
title: LaunchQueue
slug: Web/API/LaunchQueue
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Das **`LaunchQueue`**-Interface der [Launch Handler API](/de/docs/Web/API/Launch_Handler_API) ist über die [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)-Eigenschaft verfügbar. Wenn eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem `client_mode`-Wert des [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die eine benutzerdefinierte Startnavigation in der PWA ermöglichen. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das an die [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer)-Callback-Funktion übergeben wird.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) {{Experimental_Inline}}
  - : Enthält eine Callback-Funktion, die die benutzerdefinierte Startnavigation für eine PWA behandelt.

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

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
