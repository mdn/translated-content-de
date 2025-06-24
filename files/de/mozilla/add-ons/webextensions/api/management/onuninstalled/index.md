---
title: management.onUninstalled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onUninstalled
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Add-on deinstalliert wird.

Diese API erfordert die "management" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.management.onUninstalled.addListener(listener)
browser.management.onUninstalled.removeListener(listener)
browser.management.onUninstalled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `info`
      - : [`ExtensionInfo`](/de/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo): Informationen über das Add-on, das deinstalliert wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die Namen von Add-ons, wenn sie deinstalliert werden:

```js
browser.management.onUninstalled.addListener((info) => {
  console.log(`${info.name} was uninstalled`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management#event-onUninstalled) API von Chromium. Diese Dokumentation ist abgeleitet von [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) im Chromium-Code.
