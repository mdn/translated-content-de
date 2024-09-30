---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fordern Sie auf, die im angegebenen {{WebExtAPIRef("permissions.Permissions")}} Objekt aufgeführten Berechtigungen aufzugeben.

Das `Permissions` Argument kann entweder eine `origins` Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions` Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides. Berechtigungen müssen aus der Menge der im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) manifest.json-Schlüssel definierten Berechtigungen stammen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.permissions.remove(
  permissions                // Permissions object
)
```

### Parameter

- `permissions`
  - : Ein {{WebExtAPIRef("permissions.Permissions")}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit `true` erfüllt wird, wenn die im `permissions` Argument aufgeführten Berechtigungen der Erweiterung jetzt nicht mehr gewährt werden, oder mit `false` andernfalls.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der eine bestimmte Berechtigung entfernt.

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

> [!NOTE]
> Diese API basiert auf der [`chrome.permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) API von Chromium.
