---
title: downloads.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onCreated
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das **`onCreated()`** Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download beginnt, d.h. wenn {{WebExtAPIRef("downloads.download()")}} erfolgreich aufgerufen wird.

Dem Listener wird das betreffende {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt als Parameter übergeben.

## Syntax

```js-nolint
browser.downloads.onCreated.addListener(listener)
browser.downloads.onCreated.removeListener(listener)
browser.downloads.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Dieser Funktion wird folgendes Argument übergeben:

    - `downloadItem`
      - : Das betreffende {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URL von Elementen, während sie heruntergeladen werden:

```js
function handleCreated(item) {
  console.log(item.url);
}

browser.downloads.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onCreated) API von Chromium.
