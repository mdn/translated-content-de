---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
  - : Stoppt das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn zugehört wird, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält folgendes Argument:
    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}}-Objekt, das die entfernten Berechtigungen enthält.

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
> Diese API basiert auf Chromiums [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API.
