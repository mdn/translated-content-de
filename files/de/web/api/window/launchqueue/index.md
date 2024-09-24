---
title: "Fenster: launchQueue-Eigenschaft"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft `launchQueue` der {{domxref("Window")}}-Schnittstelle bietet Zugriff auf die {{domxref("LaunchQueue")}}-Klasse, die die Implementierung einer benutzerdefinierten Navigationsverarbeitung beim Start in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) ermöglicht. Der Kontext der Verarbeitung wird durch den `client_mode`-Wert im [`launch_handler`](/de/docs/Web/Manifest/launch_handler)-Manifestfeld angegeben.

Die Funktionalität der benutzerdefinierten Startnavigationsverarbeitung wird durch die Eigenschaften des {{domxref("LaunchParams")}}-Objekts gesteuert, das in die {{domxref("LaunchQueue.setConsumer()")}}-Rückruffunktion übergeben wird.

## Wert

Eine Instanz des {{domxref("LaunchQueue")}}-Objekts.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Angenommen, es handelt sich um eine Musikplayer-App, der ein abzuspielender Track übergeben wird
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

- {{domxref("Launch Handler API", "Launch Handler API", "", "nocode")}}
- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- `Window.launchQueue`
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
