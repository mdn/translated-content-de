---
title: downloads.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onCreated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Das **`onCreated()`**-Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download beginnt, d.h. wenn {{WebExtAPIRef("downloads.download()")}} erfolgreich aufgerufen wird.

Dem Listener wird das betreffende {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt als Parameter übergeben.

## Syntax

```js-nolint
browser.downloads.onCreated.addListener(listener)
browser.downloads.onCreated.removeListener(listener)
browser.downloads.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion erhält folgendes Argument:
    - `downloadItem`
      - : Das betreffende {{WebExtAPIRef('downloads.DownloadItem')}}-Objekt.

## Beispiele

Protokollieren Sie die URL von Elementen, während sie heruntergeladen werden:

```js
function handleCreated(item) {
  console.log(item.url);
}

browser.downloads.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onCreated) API von Chromium.
