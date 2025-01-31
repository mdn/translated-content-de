---
title: "Window: launchQueue Eigenschaft"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte `launchQueue`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle bietet Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es ermöglicht, eine benutzerdefinierte Startnavigationsbehandlung in einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren. Der Behandlungskontext wird durch den Wert des `client_mode`-Feldes im [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler)-Manifest angegeben.

Die benutzerdefinierte Funktionalität zur Startnavigationsbehandlung wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die [`LaunchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer)-Callback-Funktion übergeben wird.

## Wert

Eine Instanz eines [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Objekts.

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
