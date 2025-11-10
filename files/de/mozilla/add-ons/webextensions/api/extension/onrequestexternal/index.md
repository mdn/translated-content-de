---
title: extension.onRequestExternal
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequestExternal
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist nicht in Firefox implementiert, da es seit Chrome 33 veraltet ist. Bitte nutzen Sie stattdessen [runtime.onMessageExternal](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal).

Wird ausgelöst, wenn eine Anfrage von einer anderen Erweiterung gesendet wird.

## Syntax

```js-nolint
chrome.extension.onRequestExternal.addListener(function(
  request,      // optional any
  sender,       // runtime.MessageSender
  sendResponse, // function
) { })
chrome.extension.onRequestExternal.removeListener(listener)
chrome.extension.onRequestExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `request`
      - : `any`. Die Anfrage, die vom aufrufenden Skript gesendet wurde.
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}.
    - `sendResponse`
      - : `function`. Funktion, die aufgerufen wird, wenn Sie eine Antwort haben. Das Argument sollte ein beliebiges JSON-fähiges Objekt sein oder undefined, falls keine Antwort vorhanden ist.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#event-onRequestExternal)-API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
