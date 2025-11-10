---
title: "Fenster: launchQueue-Eigenschaft"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft `launchQueue` des [`Window`](/de/docs/Web/API/Window)-Interfaces ermöglicht den Zugriff auf die [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Klasse, die es erlaubt, eine benutzerdefinierte Startnavigation in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) zu implementieren. Der Kontext für die Handhabung wird durch das Manifestfeld `client_mode` im [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) signalisiert.

Die Funktionalität für die benutzerdefinierte Startnavigation wird durch die Eigenschaften des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objekts gesteuert, das in die Rückruffunktion [`LaunchQueue.setConsumer()`](/de/docs/Web/API/LaunchQueue/setConsumer) übergeben wird.

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
- [Musicr 2.0](https://mdn.github.io/dom-examples/launch-handler/) Demo-App
