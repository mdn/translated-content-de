---
title: permissions.onAdded
slug: Mozilla/Add-ons/WebExtensions/API/permissions/onAdded
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Wird ausgelöst, wenn der Erweiterung Berechtigungen erteilt werden.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `permissions`
      - : {{WebExtAPIRef("permissions.Permissions")}}-Objekt, das die erteilten Berechtigungen enthält.

## Beispiele

```js
function handleAdded(permissions) {
  console.log(`New API permissions: ${permissions.permissions}`);
  console.log(`New host permissions: ${permissions.origins}`);
  console.log(
    `New data collection permissions: ${permissions.data_collection}`,
  );
}

browser.permissions.onAdded.addListener(handleAdded);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
