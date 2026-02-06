---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

Widerruft die in einem {{WebExtAPIRef("permissions.Permissions")}}-Objekt aufgeführten Berechtigungen.

Die Berechtigungen müssen zu denen gehören, die im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Schlüssel der Erweiterung oder der [`gecko.data_collection_permissions.optional`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#optional)-Eigenschaft des `browser_specific_settings`-Schlüssels in der manifest.json-Datei definiert sind.

## Syntax

```js-nolint
let removing = browser.permissions.remove(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}}-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn der Browser die im `permissions`-Argument aufgeführten Berechtigungen nicht mehr der Erweiterung gewährt, oder `false` andernfalls.

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der eine Berechtigung entfernt.

```js
const permissionToRemove = {
  permissions: ["history"],
};

async function remove() {
  console.log("removing");
  const removed = await browser.permissions.remove(permissionToRemove);
  console.log(removed);
}

document.querySelector("#remove").addEventListener("click", remove);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions)-API von Chromium.
