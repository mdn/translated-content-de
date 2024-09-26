---
title: LaunchQueue
slug: Web/API/LaunchQueue
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Das **`LaunchQueue`** Interface der {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}} ist über die Eigenschaft {{domxref("Window.launchQueue")}} verfügbar. Wenn eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wird, bietet `LaunchQueue` Zugriff auf Funktionen, die es ermöglichen, eine benutzerdefinierte Startnavigation in der PWA zu implementieren. Diese Funktionalität wird durch die Eigenschaften des {{domxref("LaunchParams")}} Objekts gesteuert, das in die {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} Callback-Funktion übergeben wird.

{{InheritanceDiagram}}

## Instanzmethoden

- {{domxref("LaunchQueue.setConsumer", "setConsumer()")}} {{Experimental_Inline}}
  - : Enthält eine Callback-Funktion, die die benutzerdefinierte Startnavigation für eine PWA behandelt.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Angenommen es handelt sich um eine Musikplayer-App, die einen Track zum Abspielen erhält
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