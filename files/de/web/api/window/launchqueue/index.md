---
title: "Window: launchQueue-Eigenschaft"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte `launchQueue`-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interface bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Startnavigationsverarbeitung in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren. Der Behandlungskontext wird durch den Manifestfeld-Wert `client_mode` in [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) angezeigt.

Die Funktionalität zur benutzerdefinierten Startnavigationsverarbeitung wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die [`LaunchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer)-Rückruffunktion übergeben wird.

## Wert

Eine Instanz des [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Objekts.

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
        title.textContent = new URL(track).pathname.substring(1);
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

- [Launch Handler API](/de/docs/Web/API/Launch_Handler_API)
- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- `Window.launchQueue`
- Demo-App [Musicr 2.0](https://launch-handler.glitch.me/)
