---
title: extension.onRequestExternal
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequestExternal
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist in Firefox nicht implementiert, da es seit Chrome 33 veraltet ist. Bitte verwenden Sie stattdessen [runtime.onMessageExternal](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal).

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `request`
      - : `any`. Die Anfrage, die vom aufrufenden Skript gesendet wird.
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}.
    - `sendResponse`
      - : `function`. Funktion, die aufgerufen wird, wenn Sie eine Antwort haben. Das Argument sollte ein beliebiges JSON-fähiges Objekt sein, oder undefiniert, wenn es keine Antwort gibt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#event-onRequestExternal) API von Chromium. Diese Dokumentation stammt aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.
