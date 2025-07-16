---
title: permissions.remove()
slug: Mozilla/Add-ons/WebExtensions/API/permissions/remove
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fordert auf, die im angegebenen {{WebExtAPIRef("permissions.Permissions")}}-Objekt aufgeführten Berechtigungen aufzugeben.

Das `Permissions`-Argument kann entweder eine `origins`-Eigenschaft enthalten, die ein Array von [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist, oder eine `permissions`-Eigenschaft, die ein Array von [API-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) ist, oder beides. Berechtigungen müssen aus dem Satz von Berechtigungen stammen, die im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Eintrag in der manifest.json definiert sind.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit `true` erfüllt wird, wenn die im `permissions`-Argument aufgeführten Berechtigungen nun nicht mehr der Erweiterung gewährt sind, oder `false` sonst.

## Beispiele

Dieser Code fügt einen Klick-Handler hinzu, der eine gegebene Berechtigung entfernt.

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
