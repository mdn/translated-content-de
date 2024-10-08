---
title: "Window: launchQueue-Eigenschaft"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft `launchQueue` der [`Window`](/de/docs/Web/API/Window)-Schnittstelle bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse. Diese ermöglicht die Implementierung benutzerdefinierter Start-Navigationshandhabung in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA), wobei der Kontext der Handhabung durch den Wert `client_mode` im Manifestfeld [`launch_handler`](/de/docs/Web/Manifest/launch_handler) angezeigt wird.

Die Funktionalität der benutzerdefinierten Start-Navigationshandhabung wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Rückruffunktion [`LaunchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

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
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
