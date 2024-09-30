---
title: permissions.onAdded
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onAdded
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Erweiterung neue Berechtigungen gewährt wurden.

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
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}}-Objekt, das die gewährten Berechtigungen enthält.

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
> Diese API basiert auf der Chromium API [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions).
