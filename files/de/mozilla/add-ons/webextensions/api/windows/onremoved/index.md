---
title: windows.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/windows/onRemoved
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Fenster geschlossen wird.

## Syntax

```js-nolint
browser.windows.onRemoved.addListener(listener)
browser.windows.onRemoved.removeListener(listener)
browser.windows.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird folgendes Argument übergeben:
    - `windowId`
      - : `integer`. ID des Fensters, das geschlossen wurde.

## Beispiele

Protokollieren Sie die IDs der Fenster, sobald sie entfernt werden.

```js
browser.windows.onRemoved.addListener((windowId) => {
  console.log(`Closed window: ${windowId}`);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#event-onRemoved)-API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.
