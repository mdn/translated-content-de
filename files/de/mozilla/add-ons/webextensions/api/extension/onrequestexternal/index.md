---
title: extension.onRequestExternal
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequestExternal
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist nicht in Firefox implementiert, da es seit Chrome 33 veraltet ist. Bitte verwenden Sie stattdessen [runtime.onMessageExternal](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal).

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
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `request`
      - : `any`. Die Anfrage, die vom aufrufenden Skript gesendet wurde.
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}.
    - `sendResponse`
      - : `function`. Funktion, die aufgerufen wird, wenn Sie eine Antwort haben. Das Argument sollte ein beliebiges JSON-fähiges Objekt sein oder undefiniert, wenn keine Antwort vorliegt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#event-onRequestExternal)-API von Chromium. Diese Dokumentation ist abgeleitet von [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
