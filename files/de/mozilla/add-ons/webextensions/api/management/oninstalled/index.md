---
title: management.onInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onInstalled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Add-on installiert wird.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.management.onInstalled.addListener(listener)
browser.management.onInstalled.removeListener(listener)
browser.management.onInstalled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Hört auf, dieses Ereignis zu überwachen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es abgehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion wird dieses Argument übergeben:
    - `info`
      - : [`ExtensionInfo`](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo): Informationen über das installierte Add-on.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die Namen von Add-ons, wenn sie installiert werden:

```js
browser.management.onInstalled.addListener((info) => {
  console.log(`${info.name} was installed`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#event-onInstalled) API. Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
