---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn einige Berechtigungen aus der Erweiterung entfernt werden.

## Syntax

```js-nolint
browser.permissions.onRemoved.addListener(listener)
browser.permissions.onRemoved.removeListener(listener)
browser.permissions.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, sonst `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} Objekt, das die entfernten Berechtigungen enthält.

## Beispiele

```js
function handleRemoved(permissions) {
  console.log(`Removed API permissions: ${permissions.permissions}`);
  console.log(`Removed host permissions: ${permissions.origins}`);
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
