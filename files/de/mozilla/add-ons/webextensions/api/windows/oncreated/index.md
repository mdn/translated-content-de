---
title: windows.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/windows/onCreated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Fenster erstellt wird.

## Syntax

```js-nolint
browser.windows.onCreated.addListener(listener)
browser.windows.onCreated.removeListener(listener)
browser.windows.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er aktiv ist, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `window`
      - : Ein {{WebExtAPIRef('windows.Window')}}-Objekt, das Details des erstellten Fensters enthält.

## Beispiele

Protokollieren Sie die IDs neuer Fenster, während sie erstellt werden:

```js
browser.windows.onCreated.addListener((window) => {
  console.log(`New window: ${window.id}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#event-onCreated)-API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
