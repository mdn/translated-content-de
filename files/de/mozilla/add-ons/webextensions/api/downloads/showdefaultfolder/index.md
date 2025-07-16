---
title: downloads.showDefaultFolder()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/showDefaultFolder
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Die **`showDefaultFolder()`** Funktion der {{WebExtAPIRef("downloads")}} API öffnet den Standard-Download-Ordner im Dateimanager der Plattform.

## Syntax

```js-nolint
browser.downloads.showDefaultFolder();
```

### Parameter

Keine.

## Beispiele

Das folgende Beispiel enthält eine Schaltfläche zum Anzeigen, die bei Klick `showDefaultFolder()` aufruft, um den Standard-Download-Ordner im Dateimanager der Plattform zu öffnen:

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
