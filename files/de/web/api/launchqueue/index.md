---
title: LaunchQueue
slug: Web/API/LaunchQueue
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Das **`LaunchQueue`** Interface der [Launch Handler API](/de/docs/Web/API/Launch_Handler_API) steht über die [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) Eigenschaft zur Verfügung. Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die es erlauben, benutzerdefinierte Start-Navigationen in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objekts gesteuert, das in die [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) Rückruffunktion übergeben wird.

{{InheritanceDiagram}}

## Instanzmethoden

- [`setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) {{Experimental_Inline}}
  - : Beinhaltet eine Rückruffunktion, die benutzerdefinierte Start-Navigation für eine PWA behandelt.

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
