---
title: "LaunchQueue: setConsumer()-Methode"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`setConsumer()`**-Methode der {{domxref("LaunchQueue")}}-Schnittstelle wird verwendet, um den Callback zu deklarieren, der die benutzerdefinierte Startnavigation in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) behandelt. Eine solche benutzerdefinierte Navigation wird über {{domxref("Window.launchQueue")}} initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Manifest/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

## Syntax

```js-nolint
setConsumer(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die die benutzerdefinierte Navigation für die PWA behandelt. Der Callback wird ein {{domxref("LaunchParams")}}-Objektinstanz als Parameter übergeben.

### Rückgabewert

`undefined`.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Angenommen, es handelt sich um eine Musik-Player-App, die einen Track erhält, der abgespielt werden soll
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
