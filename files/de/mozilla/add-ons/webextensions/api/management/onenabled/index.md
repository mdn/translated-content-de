---
title: management.onEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onEnabled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Ereignis-Listener, der aufgerufen wird, wenn das `enabled`-Ereignis ausgelöst wird, was darauf hinweist, dass ein Add-on jetzt aktiviert ist.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.management.onEnabled.addListener(listener)
browser.management.onEnabled.removeListener(listener)
browser.management.onEnabled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Hören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `info`
      - : [`ExtensionInfo`](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo): Informationen über das Add-on, das aktiviert wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die Namen von Add-ons, wenn sie aktiviert werden:

```js
browser.management.onEnabled.addListener((info) => {
  console.log(`${info.name} was enabled`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#event-onEnabled). Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
