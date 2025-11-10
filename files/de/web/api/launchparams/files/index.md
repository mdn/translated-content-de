---
title: "LaunchParams: files-Eigenschaft"
short-title: files
slug: Web/API/LaunchParams/files
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

Die schreibgeschützte **`files`**-Eigenschaft des [`LaunchParams`](/de/docs/Web/API/LaunchParams)-Interfaces gibt ein Array von [`FileSystemHandle`](/de/docs/Web/API/FileSystemHandle)-Objekten zurück, die alle Dateien repräsentieren, die zusammen mit der Launch-Navigation über die [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Methode übergeben wurden.

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

- [Launch Handler API: Steuern Sie, wie Ihre App gestartet wird](https://developer.chrome.com/docs/web-platform/launch-handler/)
- [`Window.launchQueue`](/de/docs/Web/API/Window/launchQueue)
