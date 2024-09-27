---
title: "LaunchParams: targetURL-Eigenschaft"
short-title: targetURL
slug: Web/API/LaunchParams/targetURL
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`targetURL`** der [`LaunchParams`](/de/docs/Web/API/LaunchParams) Schnittstelle gibt die Ziel-URL des zugehörigen Web-App-Starts zurück.

## Wert

Ein String.

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

- [Launch Handler API: Steuerung, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App
