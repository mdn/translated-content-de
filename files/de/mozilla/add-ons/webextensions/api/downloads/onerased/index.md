---
title: downloads.onErased
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onErased
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das **`onErased()`** Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download aus dem Browserverlauf gelöscht wird.

Dem Listener wird die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}} Objekts als Parameter übergeben.

## Syntax

```js-nolint
browser.downloads.onErased.addListener(listener)
browser.downloads.onErased.removeListener(listener)
browser.downloads.onErased.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Hören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein gegebener `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn gelauscht wird, ansonsten `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion wird folgendes Argument übergeben:
    - `downloadId`
      - : Ein `integer`, der die `id` des gelöschten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.

## Beispiele

Fügen Sie einen Listener für `onErased` Ereignisse hinzu und löschen Sie dann den neuesten Download:

```js
function handleErased(item) {
  console.log(`Erased: ${item}`);
}

browser.downloads.onErased.addListener(handleErased);

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"],
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onErased) von Chromium.
