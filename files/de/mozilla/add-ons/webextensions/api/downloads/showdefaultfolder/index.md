---
title: downloads.showDefaultFolder()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/showDefaultFolder
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`showDefaultFolder()`** der {{WebExtAPIRef("downloads")}} API öffnet den Standard-Download-Ordner im Dateimanager der Plattform.

## Syntax

```js-nolint
browser.downloads.showDefaultFolder();
```

### Parameter

Keine.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Das folgende Beispiel enthält eine Schaltfläche zum Anzeigen, die beim Klicken `showDefaultFolder()` aufruft, um den Standard-Download-Ordner im Dateimanager der Plattform zu öffnen:

```js
let showBtn = document.querySelector(".show");

showBtn.onclick = () => {
  browser.downloads.showDefaultFolder();
};
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-showDefaultFolder) API von Chromium.
