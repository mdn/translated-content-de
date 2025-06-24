---
title: permissions.onAdded
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onAdded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn der Erweiterung neue Berechtigungen gewährt werden.

## Syntax

```js-nolint
browser.permissions.onAdded.addListener(listener)
browser.permissions.onAdded.removeListener(listener)
browser.permissions.onAdded.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn darauf geachtet wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} Objekt, das die gewährten Berechtigungen enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleAdded(permissions) {
  console.log(`New API permissions: ${permissions.permissions}`);
  console.log(`New host permissions: ${permissions.origins}`);
}

browser.permissions.onAdded.addListener(handleAdded);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
