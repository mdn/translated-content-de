---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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
  - : Stoppt das Zuhören für dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} Objekt, das die entfernten Berechtigungen enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleRemoved(permissions) {
  console.log(`Removed API permissions: ${permissions.permissions}`);
  console.log(`Removed host permissions: ${permissions.origins}`);
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
