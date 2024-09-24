---
title: downloads.onErased
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onErased
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das **`onErased()`**-Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download aus dem Browserverlauf gelöscht wird.

Der Listener erhält die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}}-Objekts als Parameter.

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein gegebener `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion wird folgendes Argument übergeben:

    - `downloadId`
      - : Eine `integer`, die die `id` des gelöschten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Listener für `onErased`-Ereignisse hinzu und löschen Sie dann den zuletzt heruntergeladenen Eintrag:

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

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onErased) API von Chromium.
