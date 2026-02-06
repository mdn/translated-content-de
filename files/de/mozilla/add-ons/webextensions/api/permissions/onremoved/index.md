---
title: permissions.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onRemoved
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Wird ausgelöst, wenn Berechtigungen von der Erweiterung entfernt werden.

## Syntax

```js-nolint
browser.permissions.onRemoved.addListener(listener)
browser.permissions.onRemoved.removeListener(listener)
browser.permissions.onRemoved.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Event einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Event. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn es zuhört, ansonsten `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Event eintritt. Der Funktion wird folgendes Argument übergeben:
    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}} Objekt, das die entfernten Berechtigungen enthält.

## Beispiele

```js
function handleRemoved(permissions) {
  console.log(`Removed API permissions: ${permissions.permissions}`);
  console.log(`Removed host permissions: ${permissions.origins}`);
  console.log(
    `Removed data collection permissions: ${permissions.data_collection}`,
  );
}

browser.permissions.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
