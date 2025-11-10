---
title: "LaunchParams: targetURL-Eigenschaft"
short-title: targetURL
slug: Web/API/LaunchParams/targetURL
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte **`targetURL`**-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Interfaces gibt die Ziel-URL des zugehörigen Web-App-Starts zurück.

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

- [Launch Handler API: Steuern Sie, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
