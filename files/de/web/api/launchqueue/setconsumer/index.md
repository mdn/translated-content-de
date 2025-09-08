---
title: "LaunchQueue: setConsumer() Methode"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`setConsumer()`**-Methode der [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Schnittstelle wird verwendet, um den Callback zu deklarieren, der das benutzerdefinierte Startnavigations-Handling in einer [progressiven Web-App](/de/docs/Web/Progressive_web_apps) (PWA) verarbeiten wird. Solch eine benutzerdefinierte Navigation wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler) `client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

## Syntax

```js-nolint
setConsumer(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die die benutzerdefinierte Navigation für die PWA verarbeitet. Dem Callback wird ein [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objektinstanz als Parameter übergeben.

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
        title.textContent = new URL(track).pathname.slice(1);
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
