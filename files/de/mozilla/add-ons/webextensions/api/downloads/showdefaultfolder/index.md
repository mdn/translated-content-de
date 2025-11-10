---
title: downloads.showDefaultFolder()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/showDefaultFolder
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Funktion **`showDefaultFolder()`** der {{WebExtAPIRef("downloads")}} API öffnet den standardmäßigen Download-Ordner im Dateimanager der Plattform.

## Syntax

```js-nolint
browser.downloads.showDefaultFolder();
```

### Parameter

Keine.

## Beispiele

Das folgende Snippet enthält einen Anzeigeknopf, der beim Klicken die Funktion `showDefaultFolder()` aufruft, um den standardmäßigen Download-Ordner im Dateimanager der Plattform zu öffnen:

```js
let showBtn = document.querySelector(".show");

showBtn.onclick = () => {
  browser.downloads.showDefaultFolder();
};
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-showDefaultFolder) API von Chromium.
