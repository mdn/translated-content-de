---
title: "LaunchQueue: setConsumer() Methode"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`setConsumer()`** Methode der [`LaunchQueue`](/de/docs/Web/API/LaunchQueue) Schnittstelle wird verwendet, um den Callback zu deklarieren, der die benutzerdefinierte Navigationsbehandlung beim Start einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) behandelt. Solche benutzerdefinierten Navigationsvorgänge werden über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Manifest/Reference/launch_handler) `client_mode` Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

## Syntax

```js-nolint
setConsumer(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die die benutzerdefinierte Navigation für die PWA behandelt. Dem Callback wird ein [`LaunchParams`](/de/docs/Web/API/LaunchParams) Objektinstanz als Parameter übergeben.

### Rückgabewert

`undefined`.

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

- [Launch Handler API: Kontrolle darüber, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
