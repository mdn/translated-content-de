---
title: management.onEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onEnabled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der Event-Listener, der aufgerufen wird, wenn das `enabled`-Event ausgelöst wird, was darauf hinweist, dass ein Add-on jetzt aktiviert ist.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.management.onEnabled.addListener(listener)
browser.management.onEnabled.removeListener(listener)
browser.management.onEnabled.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Event hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Event. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Event eintritt. Der Funktion wird dieses Argument übergeben:

    - `info`
      - : [`ExtensionInfo`](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo): Informationen über das aktivierte Add-on.

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
> Diese API basiert auf Chromiums [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#event-onEnabled) API. Diese Dokumentation stammt aus [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
