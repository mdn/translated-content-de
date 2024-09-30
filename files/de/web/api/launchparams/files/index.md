---
title: "LaunchParams: files-Eigenschaft"
short-title: files
slug: Web/API/LaunchParams/files
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die **`files`**-Schreibgeschützte Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Interfaces gibt ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurück, die Dateien darstellen, die zusammen mit der Startnavigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben wurden.

## Wert

Ein schreibgeschütztes Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten.

## Beispiele

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.files) {
      const files = launchParams.files;
      for (file in files) {
        // Do stuff with file handles
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
- Demo-App [Musicr 2.0](https://launch-handler.glitch.me/)
