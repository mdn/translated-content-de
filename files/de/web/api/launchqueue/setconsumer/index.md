---
title: "LaunchQueue: setConsumer()-Methode"
short-title: setConsumer()
slug: Web/API/LaunchQueue/setConsumer
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`setConsumer()`**-Methode des [`LaunchQueue`](/de/docs/Web/API/LaunchQueue)-Interfaces wird verwendet, um den Callback zu deklarieren, der das benutzerdefinierte Navigationshandling beim Starten in einer [Progressive Web App](/de/docs/Web/Progressive_web_apps) (PWA) verwalten wird. Solch eine benutzerdefinierte Navigation wird über [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue) initiiert, wenn eine PWA mit einem [`launch_handler`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler)-`client_mode`-Wert von `focus-existing`, `navigate-new` oder `navigate-existing` gestartet wurde.

## Syntax

```js-nolint
setConsumer(callback)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die das benutzerdefinierte Navigieren für die PWA behandelt. Der Callback erhält eine [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Objektinstanz als Parameter.

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

- [Launch Handler API: Kontrollieren Sie, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
