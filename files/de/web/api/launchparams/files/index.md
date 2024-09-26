---
title: "LaunchParams: files Eigenschaft"
short-title: files
slug: Web/API/LaunchParams/files
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte **`files`**-Eigenschaft der {{domxref("LaunchParams")}}-Schnittstelle gibt ein Array von {{domxref("FileSystemHandle")}}-Objekten zurück, die alle Dateien darstellen, die zusammen mit der Launch-Navigation über die [`POST`](/de/docs/Web/HTTP/Methods/POST)-Methode übergeben wurden.

## Wert

Ein schreibgeschütztes Array von {{domxref("FileSystemHandle")}}-Objekten.

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

- [Launch Handler API: Control how your app is launched](https://developer.chrome.com/docs/web-platform/launch-handler/)
- {{domxref("Window.launchQueue")}}
- [Musicr 2.0](https://launch-handler.glitch.me/) Demo-App