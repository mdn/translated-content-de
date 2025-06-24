---
title: downloads.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onCreated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Das **`onCreated()`** Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download beginnt, d.h. wenn {{WebExtAPIRef("downloads.download()")}} erfolgreich aufgerufen wird.

Der Listener erhält das betreffende {{WebExtAPIRef('downloads.DownloadItem')}} Objekt als Parameter.

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
  - : Hört auf, auf dieses Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein bestimmter `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn der Listener aktiv ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion erhält dieses Argument:
    - `downloadItem`
      - : Das betreffende {{WebExtAPIRef('downloads.DownloadItem')}} Objekt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die URL von Elementen, sobald sie heruntergeladen werden:

```js
function handleCreated(item) {
  console.log(item.url);
}

browser.downloads.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onCreated) API von Chromium.
